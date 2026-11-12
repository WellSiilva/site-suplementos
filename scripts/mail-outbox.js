const crypto=require('node:crypto');
async function enqueue(client,payload){await client.query('INSERT INTO well_mail_outbox(id,payload) VALUES($1,$2)',[crypto.randomUUID(),JSON.stringify(payload)]);}
function start(pool){let busy=false;async function tick(){if(busy||!process.env.RESEND_API_KEY)return;busy=true;try{
 const {rows}=await pool.query(`WITH candidate AS (SELECT id FROM well_mail_outbox WHERE (state='pending' AND next_attempt<=now()) OR (state='sending' AND lease_until<now()) ORDER BY created_at FOR UPDATE SKIP LOCKED LIMIT 1) UPDATE well_mail_outbox q SET state='sending',lease_until=now()+interval '2 minutes',attempts=attempts+1 FROM candidate WHERE q.id=candidate.id RETURNING q.*`);
 const job=rows[0];if(!job)return;
 try{const r=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:'Bearer '+process.env.RESEND_API_KEY,'Content-Type':'application/json','Idempotency-Key':job.id},body:JSON.stringify(job.payload),signal:AbortSignal.timeout(10000)});if(!r.ok)throw Error('HTTP '+r.status);await pool.query("UPDATE well_mail_outbox SET state='sent',sent_at=now(),lease_until=NULL,last_error=NULL,payload='{}'::jsonb WHERE id=$1",[job.id]);}
 catch(e){await pool.query("UPDATE well_mail_outbox SET state=$2,next_attempt=now()+($3::integer * interval '1 second'),lease_until=NULL,last_error=$4 WHERE id=$1",[job.id,job.attempts>=8?'failed':'pending',Math.min(3600,30*2**Math.min(job.attempts,7)),String(e.message).slice(0,150)]);}
 }catch(e){console.error('Fila de e-mails:',e.message);}finally{busy=false;}}
 const timer=setInterval(tick,5000);timer.unref();void tick();return timer;}
module.exports={enqueue,start};
