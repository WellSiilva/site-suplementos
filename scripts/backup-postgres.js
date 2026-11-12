const fs=require('node:fs'),path=require('node:path'),{spawnSync}=require('node:child_process');
require('dotenv').config({path:path.join(__dirname,'../.env')});
const e={...process.env};if(e.DATABASE_URL){const u=new URL(e.DATABASE_URL);e.DB_HOST=u.hostname;e.DB_PORT=u.port||5432;e.DB_NAME=decodeURIComponent(u.pathname.slice(1));e.DB_USER=decodeURIComponent(u.username);e.DB_PASSWORD=decodeURIComponent(u.password);e.PGSSLMODE=u.searchParams.get("sslmode")||"verify-full";if(e.NODE_ENV==="production"&&e.PGSSLMODE!=="verify-full")throw Error("TLS verify-full obrigatório");}for(const k of ['DB_HOST','DB_NAME','DB_USER','DB_PASSWORD'])if(!e[k])throw Error('Variável ausente: '+k);
const dir=path.join(__dirname,'../data/pg-backups');fs.mkdirSync(dir,{recursive:true});
const file=path.join(dir,'well-'+new Date().toISOString().replace(/[:.]/g,'-')+'.dump');
const exe=e.PG_DUMP_PATH|| (process.platform==='win32'?'C:\\Program Files\\PostgreSQL\\16\\bin\\pg_dump.exe':'pg_dump');
const r=spawnSync(exe,['-h',e.DB_HOST,'-p',e.DB_PORT||'5432','-U',e.DB_USER,'-d',e.DB_NAME,'-Fc','-f',file,'-w'],{env:{...e,PGPASSWORD:e.DB_PASSWORD},stdio:'inherit'});
if(r.status!==0){fs.rmSync(file,{force:true});throw Error('Backup falhou: '+(r.error?.message||r.status));}console.log('Backup criado: '+file);
