(()=>{const d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)],S=window.SITE||{};
const l=d.createElement('link');l.rel='stylesheet';l.href='fx3.css';d.head.appendChild(l);
/* page wipe transitions */
const pt=d.createElement('div');pt.id='pt';pt.className='ld';d.body.appendChild(pt);setTimeout(()=>pt.className='',1000);
d.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(!a||e.ctrlKey||e.metaKey||a.target||/^(https?:|mailto:|tel:|#)/.test(a.getAttribute('href')))return;e.preventDefault();pt.className='cv';setTimeout(()=>location.href=a.href,550)});
addEventListener('pageshow',e=>{if(e.persisted)pt.className=''});
/* card spotlight */
d.addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}},{passive:true});
/* flight dividers between sections */
setTimeout(()=>{const fd=$('#fd'),dr=fd?fd.innerHTML:'';
const io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('in',e.isIntersecting)));
$$('section').filter(s=>!s.closest('#an')&&s.id!=='aud'&&s.id!=='an').slice(1,7).forEach(s=>{const v=d.createElement('div');v.className='fdv';v.innerHTML='<i>'+dr+'</i>';s.before(v);io.observe(v)})},400);

})();
/* extra motion: blur-in reveals + 3D card tilt */
(()=>{const d=document,io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
setTimeout(()=>d.querySelectorAll('section p,section h3,section li,section img,.card').forEach((e,i)=>{if(e.closest('#an,#lab,.hero,#aud'))return;e.classList.add('ai');e.style.transitionDelay=(i%4)*.08+'s';io.observe(e)}),500);
d.addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.transform=`perspective(700px) rotateY(${((e.clientX-r.left)/r.width-.5)*10}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*10}deg) translateY(-4px)`}},{passive:true});
d.addEventListener('pointerout',e=>{const c=e.target.closest&&e.target.closest('.card');if(c&&!c.contains(e.relatedTarget))c.style.transform=''})})();
