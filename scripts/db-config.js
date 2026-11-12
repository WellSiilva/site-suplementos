// Neon: use a TLS connection string; local PostgreSQL keeps its existing settings.
function dbConfig(env=process.env){
 if(env.DATABASE_URL){const u=new URL(env.DATABASE_URL);if(!['postgres:','postgresql:'].includes(u.protocol))throw Error('DATABASE_URL inválida');if(env.NODE_ENV==='production' && u.searchParams.get('sslmode')!=='verify-full')throw Error('DATABASE_URL deve usar sslmode=verify-full');return {connectionString:env.DATABASE_URL,connectionTimeoutMillis:15000};}
 return {host:env.DB_HOST,port:Number(env.DB_PORT||5432),database:env.DB_NAME,user:env.DB_USER,password:env.DB_PASSWORD,connectionTimeoutMillis:5000};
}
module.exports=dbConfig;
