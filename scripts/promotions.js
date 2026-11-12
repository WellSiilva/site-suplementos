const cents=n=>Math.round(Number(n)*100);
function date(s){if(typeof s!=="string"||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(s))return NaN;const t=Date.parse(s+":00-03:00");return Number.isFinite(t)&&new Date(t-10800000).toISOString().slice(0,16)===s?t:NaN;}
function valid(p){const x=p.promotion;if(!x)return true;if(typeof x!=="object"||typeof x.active!=="boolean")return false;if(!x.active&&!x.price&&!x.start&&!x.end)return true;return Number.isFinite(Number(x.price))&&cents(x.price)>0&&cents(x.price)<cents(p.price)&&Number.isFinite(date(x.start))&&date(x.end)>date(x.start);}
function normalize(p){const x=p.promotion;return x&&x.price?{price:cents(x.price)/100,start:x.start,end:x.end,active:x.active}:null;}
function price(p,now=Date.now()){const x=p.promotion;return x?.active&&valid(p)&&now>=date(x.start)&&now<date(x.end)?x.price:p.price;}
function publicProduct(p,now=Date.now()){const {promotion,...rest}=p;const value=price(p,now);return {...rest,price:value,...(value<p.price?{originalPrice:p.price}:{})};}
function boundaries(p,now=Date.now()){const x=p.promotion;return x?.active?[date(x.start),date(x.end)].filter(t=>t>now):[];}
module.exports={valid,normalize,price,publicProduct,boundaries};
