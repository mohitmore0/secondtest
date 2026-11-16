(()=>{const d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)],S=window.SITE||{};
const run=f=>d.readyState==='loading'?d.addEventListener('DOMContentLoaded',f):f();
/* card spotlight */
d.addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}},{passive:true});
/* flight dividers between sections */
run(()=>{const fd=$('#fd'),dr=fd?fd.innerHTML:'';
const io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('in',e.isIntersecting)));
$$('section').filter(s=>!s.closest('#an')&&s.id!=='aud'&&s.id!=='an').slice(1,7).forEach(s=>{const v=d.createElement('div');v.className='fdv';v.innerHTML='<i>'+dr+'</i>';s.before(v);io.observe(v)})});

})();
/* extra motion: blur-in reveals + 3D card tilt */
(()=>{const d=document,run=f=>d.readyState==='loading'?d.addEventListener('DOMContentLoaded',f):f(),io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
run(()=>d.querySelectorAll('section p,section h3,section li,section img,.card').forEach((e,i)=>{if(e.closest('#an,#lab,.hero,#aud,#tech'))return;e.classList.add('ai');e.style.transitionDelay=(i%4)*.08+'s';io.observe(e)}));
d.addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.transform=`perspective(700px) rotateY(${((e.clientX-r.left)/r.width-.5)*10}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*10}deg) translateY(-4px)`}},{passive:true});
d.addEventListener('pointerout',e=>{const c=e.target.closest&&e.target.closest('.card');if(c&&!c.contains(e.relatedTarget))c.style.transform=''})})();
