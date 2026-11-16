/* APP.JS - data.js se saare pages banata hai. Normal editing ke liye is file ko chhune ki zarurat nahi. */
(()=>{
const S=window.SITE,P=S.products,d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)];
const E=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const page=d.body.dataset.page,q=new URLSearchParams(location.search);
const abs=u=>/^https?:/.test(u)?u:S.url+'/'+String(u).replace(/^\//,'');
const pUrl=p=>p.slug+'.html';
const tel='tel:+'+S.whatsapp;
d.documentElement.classList.add('js');

/* ---------- SEO ---------- */
function seo(title,desc,img,ld,path){
  if(d.documentElement.dataset.static)return; /* static pages already carry full SEO tags */
  d.title=title;
  const set=(sel,attr,v)=>{let m=$(sel);if(!m){m=d.createElement(sel.startsWith('link')?'link':'meta');const[k,val]=sel.match(/\[(.+?)="(.+?)"\]/).slice(1);m.setAttribute(k,val);d.head.appendChild(m)}m.setAttribute(attr,v)};
  set('meta[name="description"]','content',desc);
  set('meta[property="og:title"]','content',title);
  set('meta[property="og:description"]','content',desc);
  set('meta[property="og:type"]','content','website');
  set('meta[name="twitter:card"]','content','summary_large_image');
  if(img)set('meta[property="og:image"]','content',abs(img));
  set('link[rel="canonical"]','href',S.url+'/'+path);
  [].concat(ld||[]).forEach(o=>{const s=d.createElement('script');s.type='application/ld+json';s.textContent=JSON.stringify(o);d.head.appendChild(s)});
}
let path='';
const org={"@context":"https://schema.org","@type":"Organization",name:S.name,url:S.url,logo:abs(S.hero.image),email:S.email,telephone:'+'+S.whatsapp,sameAs:S.social.map(s=>s.url)};

/* ---------- shared parts ---------- */
const links=[['Products','products.html','products'],['Docs',S.docsUrl,''],['About','about.html','about'],['Contact','contact.html','contact']];
const cur=l=>(l[2]&&(page===l[2]||(l[2]==='products'&&page==='product')))?' aria-current="page"':'';
const header=`<header><div class="wrap nav"><a class="logo" href="index.html">${E(S.short)}<small>${E(S.tagline)}</small></a>
<nav aria-label="Main">${links.map(l=>`<a href="${E(l[1])}"${cur(l)}>${l[0]}</a>`).join('')}</nav>
<div class="hbar"><a class="btn" href="contact.html">Get a quote</a><button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><i></i><i></i><i></i></button></div></div></header>
<div class="menu" id="menu">${[['Home','index.html']].concat(links.map(l=>[l[0],l[1]])).map(l=>`<a class="m" href="${E(l[1])}">${l[0]}</a>`).join('')}
<div class="mf">Talk to our engineers<a href="${tel}">${E(S.phone)}</a></div></div>`;
const footer=`<footer><div class="wrap fcols"><div class="fc"><b>Company</b><a href="about.html">About</a>${S.careersUrl?`<a href="${E(S.careersUrl)}">Careers</a>`:''}<a href="${E(S.docsUrl)}">Documents</a></div><div class="fc"><b>Legal</b>${S.legal.pages.map(x=>`<a href="${x.slug}.html">${E(x.nav)}</a>`).join('')}</div><div class="fc"><b>Grievance Officer</b><span>${E(S.legal.officer.name)}</span><a href="mailto:${E(S.legal.officer.email)}">${E(S.legal.officer.email)}</a><span>Reply in 24 hours</span></div><div class="fc"><b>Follow</b>${S.social.map(s=>`<a href="${E(s.url)}">${E(s.label)}</a>`).join('')}<a href="sitemap.xml">Sitemap</a></div></div><div class="wrap fbar"><span>&copy; ${S.year} ${E(S.name)}${S.company.llpin?` &middot; LLPIN ${E(S.company.llpin)}`:''}</span><span>Registered office: ${E(S.company.registeredOffice)}</span></div></footer>
<div class="dock" id="dock"><a class="btn o" href="${tel}">Call us</a><a class="btn" href="contact.html">Get a quote</a></div>`;

const card=p=>`<a class="card rv" href="${pUrl(p)}">${p.status==='soon'?'<span class="tag">Coming soon</span>':''}<div class="ph"><img loading="lazy" src="${E(p.image)}" alt="${E(p.name)}"></div><div class="b"><span class="cat">${E(p.category)}</span><h3>${E(p.name)}</h3><p>${E(p.short)}</p></div></a>`;

/* ---------- bench to sky (har product page par) ---------- */
const ytId=u=>{u=String(u||'').trim();const m=u.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/|live\/)([\w-]{11})/)||u.match(/^([\w-]{11})$/);return m?m[1]:''};
const jr=p=>{if(p.status==='soon')return'';const J=p.journey||{},keys=['design','bench','fly','ship'];
  const body=keys.map((k,i)=>{const st=S.process[i]||{t:k,x:''},j=J[k]||{},txt=j.text||st.x,imgs=(j.imgs||[]).filter(Boolean),id=ytId(j.video);
    const media=(imgs.length?`<div class="jimgs n${Math.min(imgs.length,3)}">${imgs.map(u=>`<img loading="lazy" src="${E(u)}" alt="${E(p.name)} ${E(st.t.toLowerCase())}">`).join('')}</div>`:'')
      +(id?`<div class="yt" data-id="${E(id)}"><img loading="lazy" src="https://i.ytimg.com/vi/${E(id)}/hqdefault.jpg" alt="${E(p.name)} ${E(st.t.toLowerCase())} video"><button type="button" aria-label="Play ${E(st.t)} video"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></button></div>`:'')
      +(k==='ship'?`<div class="cta"><a class="btn" href="contact.html?product=${encodeURIComponent(p.slug)}">Get a quote</a><a class="btn o" href="${tel}">Call us</a></div>`:'');
    return `<div class="jst rv"><div class="jt"><b>${i+1}</b><h3>${E(st.t)}</h3><p>${E(txt)}</p></div>${media?`<div class="jm">${media}</div>`:''}</div>`}).join('');
  return `<section class="alt jr"><div class="wrap"><h2>From bench to sky</h2><p class="lead">How the ${E(p.name)} got from our desk to your drone.</p>${body}</div></section>`};


/* ---------- SECTIONS (layout.js se order aata hai) ----------
   compose(pageName, {sectionName: ()=>html}, opts) -> layout.js me jo list hai wahi sections, usi order me. */
const LAY=window.LAYOUT||{};
const hasTxt=v=>String(v||'').trim().length>0;
const BLK={ /* custom sections: layout.js me { type:'text', ... } likh kar kisi bhi page me daalo */
  text:o=>`<section${o.id?` id="${E(o.id)}"`:''} class="${o.alt?'alt':''}"><div class="wrap">${hasTxt(o.title)?`<h2>${E(o.title)}</h2>`:''}${hasTxt(o.lead)?`<p class="lead">${E(o.lead)}</p>`:''}${[].concat(o.text||[]).map(t=>`<p>${E(t)}</p>`).join('')}${o.btn?`<p><a class="btn" href="${E(o.btn.href)}">${E(o.btn.label)}</a></p>`:''}</div></section>`,
  banner:o=>`<section${o.id?` id="${E(o.id)}"`:''}${o.alt?' class="alt"':''}><div class="wrap join" style="margin:0 auto"><div><h3>${E(o.title||'')}</h3><p>${E(o.text||'')}</p></div>${o.btn?`<a class="btn" href="${E(o.btn.href)}">${E(o.btn.label)}</a>`:''}</div></section>`,
  tiles:o=>`<section${o.id?` id="${E(o.id)}"`:''} class="${o.alt?'alt':''}"><div class="wrap">${hasTxt(o.title)?`<h2>${E(o.title)}</h2>`:''}${hasTxt(o.lead)?`<p class="lead">${E(o.lead)}</p>`:''}<div class="tiles">${(o.items||[]).map((t,i)=>`<${t.href?`a href="${E(t.href)}" class="tile go rv"`:'div class="tile rv"'}><b>${t.href?'\u2197':'0'+(i+1)}</b><h3>${E(t.title)}</h3><p class="mute">${E(t.text||'')}</p></${t.href?'a':'div'}>`).join('')}</div></div></section>`,
  image:o=>`<section${o.id?` id="${E(o.id)}"`:''} class="${o.alt?'alt':''}"><div class="wrap">${hasTxt(o.title)?`<h2>${E(o.title)}</h2>`:''}${hasTxt(o.lead)?`<p class="lead">${E(o.lead)}</p>`:''}<figure class="gal" style="margin:0"><img loading="lazy" src="${E(o.src)}" alt="${E(o.alt_text||o.caption||o.title||'')}" style="width:100%;height:auto;border-radius:12px">${o.caption?`<figcaption>${E(o.caption)}</figcaption>`:''}</figure></div></section>`,
  html:o=>`<section${o.id?` id="${E(o.id)}"`:''} class="${o.alt?'alt':''}"><div class="wrap">${o.code||''}</div></section>`
};
function compose(pg,defs,opt){
  opt=opt||{};const names=Object.keys(defs);
  const list=Array.isArray(LAY[pg])?LAY[pg]:names;
  const nav=[];
  const body=list.map((it,i)=>{
    if(typeof it==='string'){
      const f=defs[it];
      if(!f){console.warn('[layout.js] "'+it+'" naam ka section "'+pg+'" page me nahi hai. Chalne wale naam: '+names.join(', '));return ''}
      const h=f();if(h&&opt.nav&&opt.nav[it])nav.push([it,opt.nav[it]]);return h;
    }
    if(it&&typeof it==='object'){
      const f=BLK[it.type];
      if(!f){console.warn('[layout.js] "'+pg+'" me #'+(i+1)+' block ka type galat hai: '+it.type+'. Sahi type: '+Object.keys(BLK).join(', '));return ''}
      if(it.nav&&it.id&&opt.nav)nav.push([it.id,it.nav]);
      return f(it);
    }
    return '';
  }).join('\n');
  const sn=nav.length?`<nav class="sn" aria-label="Sections">${nav.map(n=>`<a href="#${E(n[0])}"><i></i><span>${E(n[1])}</span></a>`).join('')}</nav>\n`:'';
  return `<main${opt.cls?` class="${opt.cls}"`:''}>${sn}${body}</main>`;
}

/* ---------- pages ---------- */
const pages={
home(){
  path='';
  seo(`${S.name} | ${S.tagline}`,S.hero.text,S.hero.image,org,'');
  const feat=P.filter(p=>p.featured);const list=(feat.length?feat:P).slice(0,8);
  const cats=S.categories.filter(c=>P.some(p=>S.inCat(p,c)));
  const tk=S.ticker.concat(S.ticker).map(t=>`<span>${E(t)}</span>`).join('');
  const words=S.manifesto.split(' ').map(w=>`<span>${E(w)}</span>`).join(' ');
  const mts=[[640,210,0],[960,210,1],[640,490,1],[960,490,0]].map(([x,y,r])=>`<g transform="translate(${x} ${y})"><circle r="98" class="dsh"/><circle r="66" class="thn"/><g class="pr${r?' b':''}"><ellipse rx="94" ry="8"/><ellipse rx="94" ry="8" transform="rotate(90)"/></g><circle r="22" class="fl"/><circle r="7" class="wh"/></g>`).join('');
  const hbg=`<div class="hbg" aria-hidden="true"><svg viewBox="0 0 1200 700" preserveAspectRatio="xMaxYMid slice"><defs><pattern id="gp" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" class="gl"/></pattern><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
<rect width="1200" height="700" fill="url(#gp)"/>
<circle cx="800" cy="350" r="320" class="dsh rot"/><circle cx="800" cy="350" r="250" class="thn"/><path d="M480 350H1120M800 30V670" class="thn" stroke-dasharray="2 8"/>
<g class="dr"><path d="M800 350L640 210M800 350L960 210M800 350L640 490M800 350L960 490" class="arm"/><path d="M800 350L640 210M800 350L960 210M800 350L640 490M800 350L960 490" class="arm2"/>${mts}
<rect x="736" y="296" width="128" height="108" rx="16" class="fl"/><rect x="758" y="316" width="84" height="68" rx="6" class="thn"/><path d="M770 334h20M770 350h44M770 366h30" class="thn"/><circle cx="830" cy="334" r="7" class="wh"/><circle cx="745" cy="305" r="3" class="led"/><circle cx="855" cy="395" r="3" class="led" style="animation-delay:.5s"/></g>
<path d="M862 332H1030M862 368H1030M985 196L1030 168" class="thn"/><text x="1038" y="336">FC / AAZMUTH</text><text x="1038" y="372">GPS / NAVSATE</text><text x="1038" y="170">ESC / AM32</text>
<path d="M640 610H960M640 602v16M960 602v16" class="thn"/><text x="800" y="598" text-anchor="middle">WHEELBASE 320 mm</text>
<path d="M560 80h-30v30M1150 80h30v30M560 640h-30v-30M1150 640h30v-30" class="thn"/><text id="tel" x="560" y="668">ALT 120.0 m | SPD 12.0 m/s | BAT 22.4 V</text><text x="560" y="72">R&amp;D TEST RIG / REV 04</text>
<rect class="scn" width="1200" height="140" fill="url(#sg)"/></svg></div>`;
  const hs=(c,x,y,r)=>`<g class="pt" data-c="${c}">${r}</g>`;
  const mot=[[90,90],[310,90],[90,310],[310,310]].map(([x,y])=>`<g class="pt" data-c="ESCs"><circle cx="${x}" cy="${y}" r="12"/><g class="rot" style="transform-origin:${x}px ${y}px"><path d="M${x-48} ${y}h96M${x} ${y-48}v96"/></g></g>`).join('');
  return compose('home',{
hero:()=>`<div class="hs" id="hs" data-ms="${+S.hero.interval||3000}" role="region" aria-roledescription="carousel" aria-label="Featured products"><h1 class="sr">${E(S.hero.title)}</h1><div class="hsw">${(S.hero.slides||[]).map((x,i)=>{const im=`<img src="${E(x.src)}" alt="${E(x.alt||'')}"${i?' loading="lazy"':' fetchpriority="high"'} draggable="false">`;return `<div class="hsl${i?'':' on'}" data-ms="${+x.ms||+S.hero.interval||3000}"${i?' aria-hidden="true"':''}>${x.href?`<a href="${E(x.href)}" tabindex="${i?-1:0}" aria-label="${E(x.alt||'Product')}">${im}</a>`:im}</div>`}).join('')}</div><button type="button" class="hnav p" aria-label="Previous slide"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><button type="button" class="hnav n" aria-label="Next slide"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button><div class="hdots">${(S.hero.slides||[]).map((x,i)=>`<button type="button" class="hdot${i?'':' on'}" aria-label="Slide ${i+1}"></button>`).join('')}</div></div>`,
tech:()=>`<section id="tech"><div class="wrap"><h2>Technology solutions</h2><p class="lead">Every part of the flight stack, from one team.</p>
<div class="grid">${list.map(card).join('')}</div><div class="more"><a class="btn o" href="products.html">See all ${P.length} products</a></div></div></section>`,
cfg:()=>`<div id="cfg-slot"></div>`,
process:()=>`<section class="alt"><div class="wrap"><h2>From bench to sky</h2><p class="lead">How a board gets from our desk to your drone.</p><div class="proc">${S.process.map((s,i)=>`<div class="st"><b>${i+1}</b><h3>${E(s.t)}</h3><p class="mute">${E(s.x)}</p></div>`).join('')}</div></div></section>`,
manifesto:()=>`<section class="mfs"><div class="wrap"><p class="mf2">${words}</p></div></section>`,
cta:()=>`<section><div class="wrap join" style="margin:0 auto"><div><h3>Talk to our engineers</h3><p>Share your build and we will suggest the right parts.</p></div><a class="btn" href="contact.html">Get a quote</a></div></section>`
});
},
products(){
  path='products.html';
  seo(`Products | ${S.name}`,`Flight controllers, ESCs, GPS modules and more from ${S.name}.`,P[0]&&P[0].image,[org,{"@context":"https://schema.org","@type":"ItemList",itemListElement:P.map((p,i)=>({"@type":"ListItem",position:i+1,url:S.url+'/'+pUrl(p),name:p.name}))}],path);
  const cats=S.categories.filter(c=>P.some(p=>S.inCat(p,c)));
  return compose('products',{
catalog:()=>`<section><div class="wrap"><h1 class="cn" style="font-size:clamp(40px,7vw,72px)">Products</h1><p class="lead">Flight controllers, ESCs, GPS and more. Tap a product for details.</p>
<div class="filters" role="group" aria-label="Filter by category">${['All'].concat(cats).map(c=>`<button type="button" aria-pressed="${c==='All'}" data-c="${E(c)}">${E(c)}</button>`).join('')}</div>
<div class="grid" id="pg"></div></div></section>`
});
},
product(){
  const p=P.find(x=>x.slug===(q.get('p')||d.body.dataset.slug));
  if(!p){path='products.html';seo(`Product not found | ${S.name}`,'This product does not exist.',null,null,path);
    return `<main><section><div class="wrap"><h1 class="cn" style="font-size:clamp(40px,7vw,72px)">Product not found</h1><p class="lead">Check the link or browse all products.</p><a class="btn" href="products.html">All products</a></div></section>${regBox(p0)}</main>`}
  path=pUrl(p);const imgs=[p.image].concat(p.gallery||[]).filter(Boolean);const soon=p.status==='soon';
  seo(`${p.name} | ${S.name}`,p.short||p.description,p.image,[org,{"@context":"https://schema.org","@type":"Product",name:p.name,image:imgs.map(abs),description:p.description,category:p.category,brand:{"@type":"Brand",name:S.short}}],path);
  const rel=P.filter(x=>x.slug!==p.slug&&x.category===p.category).concat(P.filter(x=>x.slug!==p.slug&&x.category!==p.category)).slice(0,4);
  return compose('product',{
main:()=>`<section><div class="wrap"><p class="crumb"><a href="index.html">Home</a> / <a href="products.html">Products</a> / ${E(p.name)}</p>
<div class="pd"><div><div class="main-img"><img id="mi" src="${E(imgs[0])}" alt="${E(p.name)}" fetchpriority="high"></div>
${imgs.length>1?`<div class="thumbs">${imgs.map((u,i)=>`<button type="button" data-i="${i}" aria-label="Photo ${i+1}"${i?'':' aria-current="true"'}><img src="${E(u)}" alt=""></button>`).join('')}</div>`:''}</div>
<div><span class="cat">${E(p.category)}${soon?' &middot; Coming soon':''}</span><h1>${E(p.name)}</h1><p class="d">${E(p.description)}</p>
${p.features&&p.features.length?`<h3>Highlights</h3><ul>${p.features.map(f=>`<li>${E(f)}</li>`).join('')}</ul>`:''}
${p.specs&&p.specs.length?`<h3>Specifications</h3><table>${p.specs.map(s=>`<tr><td>${E(s[0])}</td><td>${E(s[1])}</td></tr>`).join('')}</table>`:''}
${p.docs&&p.docs.length?`<h3>Documentation</h3><div class="docs">${p.docs.map(x=>`<a href="${E(x.url)}">${E(x.label)}</a>`).join('')}</div>`:''}
${p.bestFor&&p.bestFor.length?`<h3>Best for</h3><div class="docs">${p.bestFor.map(x=>`<span>${E(x)}</span>`).join('')}</div>`:''}
<div class="cta"><a class="btn" href="contact.html?product=${encodeURIComponent(p.slug)}">${soon?'Ask about launch':'Get a quote'}</a>${soon?'':`<a class="btn o" href="https://wa.me/${E(S.whatsapp)}?text=${encodeURIComponent('Hi, I want a quote for '+p.name+'. Quantity: ')}">WhatsApp quote</a>`}${p.buyUrl&&!soon?`<a class="btn o" href="${E(p.buyUrl)}">View in store</a>`:''}</div></div></div></div></section>`,
journey:()=>jr(p),
faq:()=>`${p.faq&&p.faq.length?`<section><div class="wrap"><h2>${E(p.name)} FAQ</h2><p class="lead"></p>${p.faq.map(f=>`<details><summary>${E(f.q)}</summary><p>${E(f.a)}</p></details>`).join('')}</div></section>`:''}`,
related:()=>`${rel.length?`<section class="alt"><div class="wrap"><h2>More products</h2><p class="lead"></p><div class="grid">${rel.map(card).join('')}</div></div></section>`:''}`,
regulatory:()=>regBox(p)
});
},
about(){
  const A=S.about;path='about.html';
  seo(`About | ${S.name}`,A.text,S.hero.image,org,path);
  const tk=S.ticker.concat(S.ticker).map(t=>`<span>${E(t)}</span>`).join('');
  const cats=S.categories.filter(c=>P.some(p=>S.inCat(p,c)));
  const co=['19.25\u00b0 N, 72.86\u00b0 E','20.00\u00b0 N, 73.79\u00b0 E'];
  const words=S.manifesto.split(' ').map(w=>`<span>${E(w)}</span>`).join(' ');
  const nav=[['who','Who'],['build','Build'],['story','Story'],['process','Process'],['find','Find us']];
  return compose('about',{
intro:()=>`
<section class="abh"><canvas id="wp" aria-hidden="true"></canvas><div class="radar" aria-hidden="true"><i class="bl" style="top:28%;left:62%"></i><i class="bl" style="top:64%;left:30%;animation-delay:.9s"></i><i class="bl" style="top:46%;left:78%;animation-delay:1.7s"></i></div>
<div class="wrap"><span class="eye">About us \u00b7 Since ${E(A.timeline[0]?A.timeline[0].year:S.year)}</span><h1 class="scr" data-t="${E(A.title)}">${E(A.title)}</h1><p>${E(A.text)}</p><div class="cta"><a class="btn" href="products.html">See what we build</a><a class="btn o" href="#who">Who we are</a></div></div><a class="scue" href="#who" aria-label="Scroll down"><i></i></a></section>`,
ticker:()=>`<div class="tick" aria-hidden="true"><div>${tk}</div></div>`,
stats:()=>`<div class="stats"><div class="wrap">${S.stats.map(s=>`<div><b data-n="${s.n}" data-s="${E(s.s)}">${s.n}${E(s.s)}</b><span>${E(s.l)}</span></div>`).join('')}</div></div>`,
who:()=>`<section id="who"><div class="wrap"><h2>Who we are</h2><div class="mv"><p class="mf2">${words}</p><div class="mvc"><div class="mc rv"><span>Mission</span><p>${E(A.mission||A.text)}</p></div><div class="mc rv"><span>Vision</span><p>${E(A.vision||S.tagline)}</p></div></div></div></div></section>`,
values:()=>`${A.values.length?`<section class="alt"><div class="wrap"><h2>How we work</h2><p class="lead">Habits we refuse to give up.</p><div class="tiles">${A.values.map((v,i)=>`<div class="tile rv"><b>0${i+1}</b><h3>${E(v.title)}</h3><p class="mute">${E(v.text)}</p></div>`).join('')}</div></div></section>`:''}`,
build:()=>`<section id="build"><div class="wrap"><h2>What we engineer</h2><p class="lead">The full flight stack, designed and supported by one team.</p><div class="caps">${cats.map((c,i)=>{const ps=P.filter(p=>S.inCat(p,c));return `<a class="cap rv" href="products.html"><span class="n">0${i+1}</span><h3>${E(c)}</h3><p>${ps.map(p=>E(p.name)).join(' \u00b7 ')}</p><em>${ps.length}</em><i class="bar"></i></a>`}).join('')}</div></div></section>`,
story:()=>`${A.timeline.length?`<section id="story" class="alt"><div class="wrap"><h2>Our story</h2><p class="lead">From a garage bench to a production line, one board at a time.</p><div class="fl"><div class="spine"><i></i><em></em></div>${A.timeline.map((t,i)=>`<div class="ti2 rv${i%2?' r':''}"><span class="yr2">${E(t.year)}</span><h3>${E(t.title)}</h3><p>${E(t.text)}</p></div>`).join('')}</div></div></section>`:''}`,
process:()=>`<section id="process" class="alt"><div class="wrap"><h2>From bench to sky</h2><p class="lead">How a board gets from our desk to your drone.</p><div class="proc">${S.process.map((x,i)=>`<div class="st"><b>${i+1}</b><h3>${E(x.t)}</h3><p class="mute">${E(x.x)}</p></div>`).join('')}</div></div></section>`,
team:()=>`${A.team.length?`<section class="alt"><div class="wrap"><h2>The people</h2><p class="lead"></p><div class="cols4">${A.team.map(t=>`<div class="person"><div class="pic">${t.photo?`<img loading="lazy" src="${E(t.photo)}" alt="${E(t.name)}">`:`<b>${E(t.name.split(' ').map(w=>w[0]).slice(0,2).join(''))}</b>`}</div><h3>${E(t.name)}</h3><p class="mute" style="margin:0;font-size:14px">${E(t.role)}</p><p class="q">${E(t.note)}</p></div>`).join('')}</div></div></section>`:''}`,
gallery:()=>`${A.gallery.length?`<section><div class="wrap"><h2>Inside the workshop</h2><p class="lead"></p><div class="gal">${A.gallery.map(g=>`<figure><img loading="lazy" src="${E(g.src)}" alt="${E(g.caption)}"><figcaption>${E(g.caption)}</figcaption></figure>`).join('')}</div></div></section>`:''}`,
find:()=>`<section id="find" class="alt"><div class="wrap"><h2>Find us</h2><p class="lead">Two cities, one team.</p><div class="offs">${A.offices.map((o,i)=>`<div class="of rv"><h3>${E(o.city)}</h3><p class="mute" style="margin:0">${E(o.role)}</p><p>${E(o.address)}</p><p class="mute" style="font-size:13px;letter-spacing:.08em;margin:0 0 6px">${co[i%2]}</p><span class="clk live"></span></div>`).join('')}</div></div></section>`,
workwith:()=>`<section><div class="wrap"><h2>Work with us</h2><p class="lead">Partners, distributors, builders and engineers: start here.</p><div class="tiles">
<a class="tile go rv" href="contact.html"><b>\u2197</b><h3>Partner with us</h3><p class="mute">OEM, distribution and integration enquiries.</p></a>
${S.careersUrl?`<a class="tile go rv" href="${E(S.careersUrl)}"><b>\u2197</b><h3>Join the team</h3><p class="mute">Hardware, firmware and flight-test roles.</p></a>`:''}
<a class="tile go rv" href="${E(S.docsUrl)}"><b>\u2197</b><h3>Read the docs</h3><p class="mute">Pinouts, calibration and setup guides.</p></a></div></div></section>`,
closing:()=>`<section class="fin alt"><div class="wrap"><h2>Hardware that flies</h2><p class="lead" style="margin-inline:auto">Designed in India. Tested in the air.</p><a class="btn o" href="#">Back to top</a></div></section>`
},{nav:{who:'Who',build:'Build',story:'Story',process:'Process',find:'Find us'},cls:'ax'});
},
contact(){
  path='contact.html';
  seo(`Contact | ${S.name}`,`Call, email or message ${S.name} to get a quote for your build.`,S.hero.image,[org,{"@context":"https://schema.org","@type":"ContactPage",url:S.url+'/'+path}],path);
  const sel=q.get('product')||'';
  return compose('contact',{
form:()=>`<section><div class="wrap contact"><div><h1 class="cn" style="font-size:clamp(40px,7vw,72px)">Talk to our engineers</h1><p class="lead">Share your build and we will suggest the right parts.</p>
<a class="big" href="${tel}">${E(S.phone)}</a><a class="big" href="mailto:${E(S.email)}">${E(S.email)}</a><a class="big" href="https://wa.me/${E(S.whatsapp)}">WhatsApp</a>
<div style="margin-top:26px">${S.about.offices.map(o=>`<div class="off" style="margin-bottom:12px"><h3 style="font-size:26px">${E(o.role)}</h3><p>${E(o.address)}</p></div>`).join('')}</div></div>
<form id="f"><label>Your name<input name="n" required autocomplete="name" maxlength="80"></label><label>Phone<input name="p" type="tel" required autocomplete="tel" inputmode="tel" pattern="[0-9+ ()\-]{8,18}" maxlength="18" title="Enter a valid phone number"></label>
<label>Product<select name="s"><option value="">Not sure yet</option>${P.map(p=>`<option value="${E(p.name)}"${p.slug===sel?' selected':''}>${E(p.name)}</option>`).join('')}</select></label>
<label>Message<textarea name="m" maxlength="1500" placeholder="Tell us about your build and quantity"></textarea></label><div style="position:absolute;left:-9999px" aria-hidden="true"><label>Leave empty<input name="hp" tabindex="-1" autocomplete="off"></label></div><label class="chk"><input type="checkbox" name="ok" required> <span>I have read the <a href="privacy.html">Privacy Policy</a> and agree that Space and Tech Engineering LLP may use these details to reply to my enquiry.</span></label><button class="btn" type="submit">Send by email</button><button class="btn o" type="button" id="wa">Send on WhatsApp</button><p id="fs" role="status" aria-live="polite" class="mute" style="font-size:14px;margin:0"></p><p class="mute" style="font-size:13px;margin:0">Nothing is stored on our website. This opens your email app with the message ready to send. By contacting us you agree to our <a href=\"terms.html\">Terms</a> and <a href=\"privacy.html\">Privacy Policy</a>.</p></form></div></section>`
});
}};


/* ---------- legal pages (IT Rules 2021, amended 2026) ---------- */
const LG=S.legal;
const secHtml=L=>L.sections.map((s,i)=>`<section class="lg-s" id="s${i+1}"><h2>${i+1}. ${E(s.h)}</h2>${(s.p||[]).map(t=>`<p>${E(t)}</p>`).join('')}${s.ul?`<ul>${s.ul.map(t=>`<li>${E(t)}</li>`).join('')}</ul>`:''}</section>`).join('');
const offHtml=()=>{const o=LG.officer,r=(k,v,h)=>v?`<dt>${k}</dt><dd>${h||E(v)}</dd>`:'';return `<div class="lg-card"><h3>Grievance Officer</h3>${o.name?'':`<p class="mute" style="margin:0 0 12px">Officer details are being finalised. Meanwhile, write to us at the email below.</p>`}<dl>${r('Name',o.name)}${r('Designation',o.designation)}${r('Email',o.email,`<a href="mailto:${E(o.email)}">${E(o.email)}</a>`)}${r('Phone',o.phone,`<a href="${tel}">${E(o.phone)}</a>`)}${r('Address',o.address)}${r('Hours',o.hours)}</dl></div>`};
const regBox=p=>`<section class="reg-s"><div class="wrap"><aside class="reg" role="note"><h3>Regulatory note</h3><p>${E(LG.uasNotice)}</p>${p.category==='Transmitters'?`<p>${E(LG.rfNotice)}</p>`:''}<p><a href="product-regulatory.html">Product Regulatory Disclaimer</a></p></aside></div></section>`;
LG.pages.forEach(L=>{pages[L.slug]=()=>{path=L.slug+'.html';
  seo(`${L.nav} | ${S.name}`,L.desc,S.hero.image,org,path);
  return `<main><section style="border-bottom:1px solid var(--line)"><div class="wrap"><span class="eye">Legal</span><h1 class="cn" style="font-size:clamp(36px,7vw,84px);max-width:12em">${E(L.title)}</h1><p class="lead" style="color:var(--hi);font-size:19px;margin-bottom:8px">${E(L.intro)}</p><p class="mute" style="font-size:14px;margin:0">Effective: ${E(LG.effective)} &middot; Last updated: ${E(LG.updated)}</p></div></section>
<section><div class="wrap lg"><aside class="lg-toc" aria-label="On this page"><b>On this page</b>${L.sections.map((s,i)=>`<a href="#s${i+1}">${i+1}. ${E(s.h)}</a>`).join('')}<hr>${LG.pages.filter(x=>x!==L).map(x=>`<a href="${x.slug}.html">${E(x.nav)}</a>`).join('')}</aside><article class="lg-body">${L.officerBlock?offHtml():''}${secHtml(L)}</article></div></section></main>`}});

/* ---------- render ---------- */
d.body.innerHTML=header+(pages[page]||pages.home)()+footer;

/* hero slider: har 3 sec (data.js: hero.interval) me auto slide. Dots, arrows, swipe, tab hidden hone par ruk jata hai */
(()=>{const hs=$('#hs');if(!hs)return;
const sl=$$('.hsl',hs),dots=$$('.hdot',hs),dflt=Math.max(1500,+hs.dataset.ms||3000);let i=0,t=0,x0=null;
const dur=k=>Math.max(1500,+sl[k].dataset.ms||dflt);
const go=n=>{i=(n+sl.length)%sl.length;sl.forEach((s,k)=>{s.classList.toggle('on',k===i);s.setAttribute('aria-hidden',k===i?'false':'true');const a=$('a',s);if(a)a.tabIndex=k===i?0:-1});dots.forEach((b,k)=>b.classList.toggle('on',k===i));
  const im=$('img',sl[(i+1)%sl.length]);if(im)im.loading='eager'};
const stop=()=>{clearTimeout(t);t=0},play=()=>{stop();if(sl.length>1&&!d.hidden)t=setTimeout(()=>{go(i+1);play()},dur(i))};
const to=n=>{go(n);play()};
$('.hnav.p',hs).onclick=()=>to(i-1);$('.hnav.n',hs).onclick=()=>to(i+1);
dots.forEach((b,k)=>b.onclick=()=>to(k));
hs.addEventListener('pointerdown',e=>{x0=e.clientX});
addEventListener('pointerup',e=>{if(x0==null)return;const dx=e.clientX-x0;x0=null;if(Math.abs(dx)>50)to(i+(dx<0?1:-1))});
hs.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')to(i-1);if(e.key==='ArrowRight')to(i+1)});
d.addEventListener('visibilitychange',()=>d.hidden?stop():play());
if(sl.length<2){$$('.hnav,.hdots',hs).forEach(e=>e.style.display='none')}
play()})();

/* youtube: click par isi jagah play (privacy-enhanced embed) */
d.addEventListener('click',e=>{const y=e.target.closest('.yt');if(!y||y.querySelector('iframe'))return;const id=y.dataset.id;y.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${E(id)}?autoplay=1&rel=0&modestbranding=1" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`});

/* menu */
const burger=$('.burger'),menu=$('#menu');
const setMenu=o=>{menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');d.body.classList.toggle('lock',o)};
burger.onclick=()=>setMenu(!menu.classList.contains('open'));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
matchMedia('(min-width:901px)').addEventListener('change',e=>e.matches&&setMenu(false));

/* products filter */
const pg=$('#pg');
if(pg){const show=c=>{const l=P.filter(p=>c==='All'||S.inCat(p,c));pg.innerHTML=l.length?l.map(card).join(''):'<div class="empty">No products in this category yet.</div>';reveal()};
$$('.filters button').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.setAttribute('aria-pressed',x===b));show(b.dataset.c)});show('All')}

/* product gallery */
$$('.thumbs button').forEach(b=>b.onclick=()=>{const pp=P.find(x=>x.slug===(q.get('p')||d.body.dataset.slug)),i=+b.dataset.i,u=[pp.image].concat(pp.gallery||[]);$('#mi').src=u[i];$$('.thumbs button').forEach(x=>x.toggleAttribute('aria-current',x===b))});

/* contact form -> mailto */
const f=$('#f');
if(f)f.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));if(v.hp)return;if(!f.checkValidity()){f.reportValidity();return}$('#fs').textContent='Thank you. Your email app should open with your message. Press send there to reach us. If it did not open, email '+S.email+'.';
location.href='mailto:'+S.email+'?subject='+encodeURIComponent('Quote request'+(v.s?': '+v.s:''))+'&body='+encodeURIComponent(`Name: ${v.n}\nPhone: ${v.p}\nProduct: ${v.s||'-'}\n\n${v.m||''}`)};

const wa=$('#wa');if(wa)wa.onclick=()=>{if(!f.checkValidity()){f.reportValidity();return}const v=Object.fromEntries(new FormData(f));open('https://wa.me/'+S.whatsapp+'?text='+encodeURIComponent(`Hi, I am ${v.n||''}. Product: ${v.s||'not sure yet'}. ${v.m||''} Phone: ${v.p||''}`),'_blank')};

/* reveal, counters, marquee */
const rm=false;
function reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});$$('.rv:not(.in)').forEach(el=>io.observe(el))}
$$('section h2,.val,.person,.off,.ti,.gal figure,.stats div').forEach(el=>el.classList.add('rv'));reveal();
if(!rm)$$('[data-n]').forEach(el=>{const n=+el.dataset.n,s=el.dataset.s||'';el.textContent='0'+s;
new IntersectionObserver((es,o)=>es.forEach(e=>{if(!e.isIntersecting)return;o.disconnect();const t0=performance.now();const f=t=>{const p=Math.min((t-t0)/1500,1);el.textContent=Math.round(n*(1-Math.pow(1-p,4)))+s;if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6}).observe(el)});
const lg=$('.logos');if(lg&&!rm)[...lg.children].forEach(n=>{const c=n.cloneNode(true);c.setAttribute('aria-hidden','true');lg.appendChild(c)});else if(lg)lg.style.animation='none';

/* hide dock on contact page */
if(page==='contact')$('#dock').style.display='none';
})();
