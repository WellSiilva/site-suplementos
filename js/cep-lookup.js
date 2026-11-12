/* Consulta ViaCEP padronizada para formulários de endereço. */
window.wellLookupCep=async function(input,fields,feedback){
 const digits=String(input.value||'').replace(/\D/g,'');
 const setMessage=(msg,err=false)=>{if(feedback){feedback.textContent=msg;feedback.style.color=err?'#d64545':'';}else if(err){window.wellNotify?.(msg);}};
 const clear=()=>{for(const id of Object.values(fields)){const el=document.getElementById(id);if(el){el.value='';el.dataset.cepFilled='';}}};
 const previous=input.dataset.lastCep||'';
 if(previous!==digits){clear();input.dataset.lastCep=digits;}
 if(!digits){setMessage('');return false;}
 if(digits.length!==8){setMessage('Digite um CEP válido com 8 números.',true);return false;}
 const requestId=String(Number(input.dataset.cepRequest||0)+1);input.dataset.cepRequest=requestId;
 setMessage('Consultando CEP...');
 try{
  const response=await fetch('https://viacep.com.br/ws/'+digits+'/json/',{headers:{Accept:'application/json'}});
  if(!response.ok)throw Error('service');
  const result=await response.json();
  if(input.dataset.cepRequest!==requestId||input.value.replace(/\D/g,'')!==digits)return false;
  if(result.erro){setMessage('CEP não encontrado. Confira o número ou preencha o endereço manualmente.',true);return false;}
  const values={rua:result.logradouro,endereco:result.logradouro,bairro:result.bairro,cidade:result.localidade,uf:result.uf};
  for(const [key,id] of Object.entries(fields)){const el=document.getElementById(id);if(el&&values[key]){el.value=values[key];el.dataset.cepFilled='1';}}
  setMessage('CEP localizado. Confira o endereço e informe o número.');return true;
 }catch{
  if(input.dataset.cepRequest===requestId)setMessage('Não foi possível consultar o CEP. Preencha o endereço manualmente.',true);
  return false;
 }
};
