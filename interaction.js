document.addEventListener('DOMContentLoaded',()=>{
const toggle=document.getElementById('navtoggle'),nav=document.getElementById('nav');
if(toggle&&nav)toggle.addEventListener('click',()=>{const state=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(state));});
const form=document.getElementById('inquiry');if(form)form.addEventListener('submit',async event=>{event.preventDefault();const d=new FormData(form);const msg='Kia Belle Beauty Inquiry\nName: '+d.get('name')+'\nEmail: '+d.get('email')+'\nType: '+d.get('subject')+'\n\n'+d.get('message');const out=document.getElementById('formstatus');try{await navigator.clipboard.writeText(msg);out.textContent='Inquiry copied. Open your email app and paste it; it has NOT been sent.';}catch(e){const field=document.createElement('textarea');field.value=msg;field.style.width='100%';field.rows=8;out.replaceChildren(field);field.select();}});
});
