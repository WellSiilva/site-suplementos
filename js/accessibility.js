/* Etapa 5 — foco, teclado e feedback de processamento */
(()=>{'use strict';
function ready(){
 const main=document.querySelector('main')||document.querySelector('[role="main"]');
 if(main){if(!main.id)main.id='well-main-content';if(!main.hasAttribute('tabindex'))main.setAttribute('tabindex','-1');
 const skip=document.createElement('a');skip.className='well-skip-link';skip.href='#'+main.id;skip.textContent='Pular para o conteúdo principal';document.body.prepend(skip)}
 document.querySelectorAll('button:not([type])').forEach(b=>{if(!b.closest('form'))b.type='button'});
 document.addEventListener('submit',e=>{
  const form=e.target;if(!(form instanceof HTMLFormElement)||e.defaultPrevented||!form.checkValidity())return;
  const btn=e.submitter||form.querySelector('button[type="submit"],input[type="submit"]');
  if(!btn||btn.dataset.wellSubmitting==='1')return;
  btn.dataset.wellSubmitting='1';btn.classList.add('well-loading');btn.setAttribute('aria-busy','true');
  // Restaura controles em envios AJAX, falhas de rede e navegação cancelada.
  setTimeout(()=>{btn.dataset.wellSubmitting='0';btn.classList.remove('well-loading');btn.removeAttribute('aria-busy')},4000);
 },false);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();
