'use strict';
const promotions=require('./promotions');
const money=n=>Math.round((Number(n)||0)*100);
function day(t){return new Intl.DateTimeFormat('en-CA',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(t));}
function summarize(db,from,to,now=Date.now()){
 const orders=db.orders.filter(o=>['Confirmado','Em separação','Enviado','Concluído'].includes(o.status)&&Number.isFinite(Date.parse(o.createdAt))&&(!from||day(o.createdAt)>=from)&&(!to||day(o.createdAt)<=to));
 let discounts=0,net=0,gross=0,withCoupon=0,withoutCoupon=0,paid=0;const ranking=new Map();
 for(const o of orders){const d=money(o.discount),s=money(o.subtotal),t=money(o.total);discounts+=d;gross+=s;net+=s-d;if(['Pago na entrega','Pago antecipadamente'].includes(o.paymentStatus))paid+=t;if(o.couponCode){withCoupon++;const r=ranking.get(o.couponCode)||{code:o.couponCode,uses:0,discount:0};r.uses++;r.discount+=d;ranking.set(o.couponCode,r);}else withoutCoupon++;}
 return {orders:orders.length,discounts:discounts/100,gross:gross/100,net:net/100,paid:paid/100,withCoupon,withoutCoupon,ticket:orders.length?Math.round(net/orders.length)/100:0,promotions:db.products.filter(p=>p.active&&promotions.price(p,now)<p.price).length,ranking:[...ranking.values()].sort((a,b)=>b.uses-a.uses||a.code.localeCompare(b.code)).map(r=>({...r,discount:r.discount/100}))};
}
module.exports={summarize};
