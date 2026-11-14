(()=>{const d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)],S=window.SITE||{};
const l=d.createElement('link');l.rel='stylesheet';l.href='fx4.css';d.head.appendChild(l);
const hero=$('.hero');if(!hero||d.body.dataset.page!=='home')return;
const dr=($('#fd')||{}).innerHTML||'';
['.tick','.stats','#an','#pb'].forEach(q=>$$(q).forEach(e=>e.remove()));
/* ---- clean hero ---- */
hero.classList.add('n4');
const W=['Flight','electronics','for','drone','makers'].map((w,i)=>`<span class="w"><i style="animation-delay:${.2+i*.13}s">${w}</i></span>`).join(' ');
const st=(S.stats||[]).slice(0,3);
hero.innerHTML=`<div class="g4"></div><div class="wrap in4"><div><div class="eb">Made in India - Designed in Mumbai and Nashik</div><h1>${W}</h1><p>${S.hero?S.hero.text:''}</p><div class="bs"><a class="btn" href="#cfg">Configure your stack</a><a class="btn o" href="contact.html">Get OEM quote</a></div></div>
<div class="sg4" id="sg4"><svg class="or" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><circle class="o1" cx="50" cy="50" r="48"/><circle class="o2" cx="50" cy="50" r="38"/><circle class="o3" cx="50" cy="50" r="20"/></svg><div class="dw" id="dw">${dr}</div>


</div></div><div class="sc"></div>`;
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),a=(e.clientX-r.left)/r.width-.5,b=(e.clientY-r.top)/r.height-.5;$('#dw').style.transform=`rotateY(${a*24}deg) rotateX(${-b*18}deg)`});
hero.addEventListener('pointerleave',()=>$('#dw').style.transform='');
/* ---- OEM stack configurator ---- */
const P=S.products||[],by=s=>P.find(p=>p.slug===s);
const PL={'FPV racing':{s:[['exelr8-fpv-flight-controller-f7','Flight controller'],['skydrive-55a-am32-4-in-1','4-in-1 ESC'],['navsate-mini-gps','GPS']],w:'Light and punchy. A single 4-in-1 ESC keeps wiring short for 5-inch builds and below.'},
'Survey and mapping':{s:[['aazmuth-flight-controller','Flight controller'],['skydrive-am32-40a','ESC x4'],['navsate-gps-for-uavs','GPS']],w:'Redundant sensors and a UAV-grade GPS for steady, repeatable flight lines.'},
'Agriculture':{s:[['aazmuth-flight-controller','Flight controller'],['skydrive-am32-60a','ESC x4'],['navsate-gps-for-uavs','GPS']],w:'60A ESCs carry heavy sprayer payloads. Isolated sensors tolerate vibration and field conditions.'},
'Defence and industrial':{s:[['aazmuth-flight-controller','Flight controller'],['skydrive-am32-60a','ESC x4'],['navsate-gps-for-uavs','GPS']],w:'Triple-redundant flight control, made in India, with custom firmware support for your programme.'}};
const sec=d.createElement('section');sec.id='cfg';sec.innerHTML=`<div class="wrap"><h2>Configure your drone stack</h2><p class="lead">Pick your platform. We show the electronics we would put in it and how they connect.</p><div class="tb">${Object.keys(PL).map(k=>`<button>${k}</button>`).join('')}</div><div class="gr"><div class="dg" id="dg4"></div><div class="ls" id="ls4"></div></div><div class="bd"><div>Made in India<span>Local supply, short lead times</span></div><div>Open AM32 firmware<span>No locked-in ESC software</span></div><div>Triple redundancy<span>Isolated IMUs and barometers</span></div><div>Engineer support<span>Docs, pinouts and direct help</span></div></div></div>`;
hero.after(sec);
const N=(x,y,w,t,i)=>`<g class="nd" style="animation-delay:${i*.1}s"><rect x="${x}" y="${y}" width="${w}" height="34" rx="3"/><text x="${x+w/2}" y="${y+21}">${t}</text></g>`;
function show(k){const c=PL[k],it=c.s.map(([s,r])=>[by(s),r]).filter(x=>x[0]);$$('#cfg .tb button').forEach(b=>b.classList.toggle('on',b.textContent===k));
const ys=[40,110,180,250];
$('#dg4').innerHTML=`<svg viewBox="0 0 520 300"><path class="ln" d="M90 150H150"/><path class="ln" d="M215 56V116"/><path class="ln" d="M215 150H330"/><path class="ln" d="M290 56H250"/>${ys.map(y=>`<path class="ln" d="M330 150L400 ${y+17}" style="animation-delay:-${y/100}s"/>${N(400,y,86,'Motor',3)}`).join('')}${N(20,133,70,'Battery',0)}${N(150,133,100,'ESC',1)}${N(150,40,130,'Flight ctrl',2)}${N(290,40,0,'',4).replace(/<g.*/,'')}${N(300,40,70,'GPS',4)}${[0,1,2,3].map(i=>`<circle r="3" fill="#fff"><animateMotion dur="1.4s" begin="${i*.3}s" repeatCount="indefinite" path="M330 150L400 ${ys[i]+17}"/></circle>`).join('')}<circle r="3" fill="#fff"><animateMotion dur="1.2s" repeatCount="indefinite" path="M90 150H150"/></circle><circle r="3" fill="#fff"><animateMotion dur="1s" repeatCount="indefinite" path="M215 56V116"/></circle></svg>`;
const names=it.map(x=>x[0].name),msg=`OEM enquiry - ${k}: ${names.join(', ')}`;
$('#ls4').innerHTML=`<div class="why">${c.w}</div>`+it.map(([p,r],i)=>`<a class="it" style="animation-delay:${.1*i+.1}s" href="${p.slug}.html"><img src="${p.image}" alt=""><div><small>${r}</small><b>${p.name}</b><span>${p.short}</span></div></a>`).join('')+`<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px"><a class="btn" href="mailto:${S.email}?subject=${encodeURIComponent(msg)}&body=${encodeURIComponent(msg+'\n\nQuantity:\nCompany:\nPhone:')}">Request OEM quote</a><a class="btn o" href="https://wa.me/${S.whatsapp}?text=${encodeURIComponent(msg)}">WhatsApp us</a></div>`}
sec.addEventListener('click',e=>{const b=e.target.closest('.tb button');if(b)show(b.textContent)});show('Agriculture');
})();
