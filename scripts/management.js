const {summarize}=require('./commercial');
const day=t=>new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(t));
const cents=n=>Math.round((Number(n)||0)*100);
function report(db,from,to,now=Date.now()){
const eligible=['Confirmado','Em separação','Enviado','Concluído'];
const orders=db.orders.filter(o=>Number.isFinite(Date.parse(o.createdAt))&&(!from||day(o.createdAt)>=from)&&(!to||day(o.createdAt)<=to));
const sales=orders.filter(o=>eligible.includes(o.status));const paid=o=>['Pago na entrega','Pago antecipadamente'].includes(o.paymentStatus);const sum=(a,f)=>a.reduce((n,o)=>n+cents(f(o)),0)/100;
const monthly=new Map(),top=new Map();for(const o of sales){const k=day(o.createdAt).slice(0,7);monthly.set(k,(monthly.get(k)||0)+cents(o.total));for(const i of o.items||[]){const t=top.get(i.id)||{name:i.name,quantity:0};t.quantity+=Number(i.quantity)||0;top.set(i.id,t);}}
const products=db.products.filter(p=>p.active),today=day(now),lots=(db.productLots||[]).filter(l=>Number(l.quantity)>0).map(l=>({...l,productName:db.products.find(p=>p.id===l.productId)?.name||'Produto excluído',days:Math.round((Date.parse(l.expiry+'T00:00:00Z')-Date.parse(today+'T00:00:00Z'))/86400000)}));
return {commercial:summarize(db,from,to,now),sales:sum(sales,o=>o.total),received:sum(sales.filter(paid),o=>o.total),pending:sum(sales.filter(o=>!paid(o)),o=>o.total),awaiting:orders.filter(o=>o.status==='Aguardando confirmação').length,monthly:[...monthly].sort().map(([month,value])=>({month,value:value/100})),top:[...top.values()].sort((a,b)=>b.quantity-a.quantity).slice(0,10),stock:{products:products.length,units:products.reduce((n,p)=>n+(Number(p.stock)||0),0),low:products.filter(p=>p.stock<=5).map(p=>({name:p.name,stock:p.stock})),lots:lots.filter(l=>l.days<=30).sort((a,b)=>a.days-b.days).map(({productName,lot,expiry,quantity,days})=>({productName,lot,expiry,quantity,days}))}};
}module.exports={report};