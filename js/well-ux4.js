/* WELL_UX4 */
window.wellBusy=async function(form,button,work){
 if(form.dataset.wellBusy==='true')return;
 form.dataset.wellBusy='true'; const old=button.textContent, disabled=button.disabled;
 button.disabled=true; button.setAttribute('aria-busy','true'); button.textContent='Aguarde…';
 try{return await work()}finally{delete form.dataset.wellBusy;button.disabled=disabled;button.removeAttribute('aria-busy');if(button.textContent==='Aguarde…')button.textContent=old;}
};
window.wellSkeleton=function(el,count=4){if(!el||el.children.length)return;el.setAttribute('aria-busy','true');for(let i=0;i<count;i++){const card=document.createElement('div');card.className='well-skeleton';card.setAttribute('aria-hidden','true');card.setAttribute('data-test-id','well-catalog-skeleton');card.innerHTML='<div></div><span></span><span></span><span></span>';el.append(card)}};
window.wellLoading=function(el,text='Carregando informações…'){if(!el)return()=>{};const n=document.createElement('p');n.className='well-loading';n.setAttribute('role','status');n.setAttribute('data-test-id','well-loading-status');n.textContent=text;el.prepend(n);return()=>n.remove()};
