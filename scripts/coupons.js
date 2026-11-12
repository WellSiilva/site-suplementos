'use strict';
const codeOf=v=>String(v||'').trim().toUpperCase();
function normalize(b){const code=codeOf(b.code),type=b.type,value=Number(b.value),minimum=Number(b.minimum||0);if(!/^[A-Z0-9_-]{3,30}$/.test(code)||!['percent','fixed'].includes(type)||!Number.isFinite(value)||value<=0||value>(type==='percent'?100:100000)||!Number.isFinite(minimum)||minimum<0||minimum>1000000||typeof b.active!=='boolean')throw Error('Confira código, tipo, valor e compra mínima.');return {code,type,value,minimum,active:b.active};}
function discount(coupons,code,subtotal){code=codeOf(code);if(!code)return 0;const c=(coupons||[]).find(x=>x.code===code&&x.active);if(!c)throw Error('Cupom inválido ou inativo.');if(subtotal<Math.round(c.minimum*100))throw Error('Compra mínima não atingida para este cupom.');return Math.min(subtotal,c.type==='percent'?Math.round(subtotal*c.value/100):Math.round(c.value*100));}
module.exports={normalize,discount,codeOf};
