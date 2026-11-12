/* Well Suplementos — notificações centralizadas */
(()=>{'use strict';
const titles={success:'Tudo certo!',info:'Informação',warning:'Atenção!',error:'Não foi possível continuar'};
let container;
function notify(message,kind='info',options={}){
 kind=['success','info','warning','error'].includes(kind)?kind:'info';
 const msg=String(message||'').trim();if(!msg)return;
 if(!container){container=document.createElement('div');container.id='well-toast-container';container.setAttribute('data-test-id','well-notifications-container');container.setAttribute('aria-label','Notificações');document.body.append(container)}
 const duplicate=[...container.children].find(el=>el.dataset.message===msg&&el.dataset.kind===kind);
 if(duplicate){duplicate.querySelector('button')?.focus();return duplicate}
 const el=document.createElement('div');el.className='well-toast well-toast-'+kind;el.setAttribute('data-test-id','well-notifications-message');el.dataset.message=msg;el.dataset.kind=kind;el.setAttribute('role',kind==='error'?'alert':'status');
 const mark=document.createElement('span');mark.className='well-toast-symbol';mark.setAttribute('aria-hidden','true');mark.textContent={success:'✓',info:'i',warning:'!',error:'×'}[kind];
 const content=document.createElement('div');content.className='well-toast-content';const title=document.createElement('strong');title.textContent=titles[kind];const body=document.createElement('span');body.textContent=msg;body.setAttribute('data-test-id','well-notifications-message-text');content.append(title,body);
 const close=document.createElement('button');close.type='button';close.className='well-toast-close';close.setAttribute('data-test-id','well-notifications-close-button');close.textContent='×';close.setAttribute('aria-label','Fechar notificação');close.addEventListener('click',()=>el.remove());el.append(mark,content);if(options.actionLabel&&typeof options.onAction==='function'){const action=document.createElement('button');action.type='button';action.className='well-toast-action';action.setAttribute('data-test-id','well-notifications-action-button');action.textContent=String(options.actionLabel);action.addEventListener('click',()=>{el.remove();options.onAction()});el.append(action)}el.append(close);container.append(el);
 const duration=options.duration===0?0:(Number.isFinite(options.duration)?options.duration:{success:3000,info:4000,warning:6000,error:0}[kind]);
 if(duration>0){let timeout=setTimeout(()=>el.remove(),duration);el.addEventListener('mouseenter',()=>clearTimeout(timeout));el.addEventListener('mouseleave',()=>{timeout=setTimeout(()=>el.remove(),2000)},{once:true})}
 while(container.childElementCount>4)container.firstElementChild.remove();return el;
}
window.wellNotify=notify;window.wellToast=notify;
})();
