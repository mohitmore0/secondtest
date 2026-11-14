(()=>{const d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)],S=window.SITE||{},P=S.products||[];
const by=s=>P.find(p=>p.slug===s),E=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const as=$('#as2');if(!as)return;

/* =============== 1. FLIGHT TEST PANEL (appears after assembly) =============== */
const HOME=[110,330],WP=[[210,120],[440,80],[690,170],[610,340]];
const arm=(x,y,r)=>`<g transform="translate(${x} ${y})"><circle r="7" class="x3m"/><g class="dc"><circle r="31"/></g><g class="pp${r?' rv':''}"><ellipse rx="31" ry="3"/><ellipse rx="31" ry="3" transform="rotate(90)"/></g></g>`;
const fl=d.createElement('div');fl.id='fl';fl.hidden=true;
fl.innerHTML=`<div class="fh"><div><div class="fe">Flight test - live simulation</div><h3>Your drone is flying</h3></div><div class="fb"><button class="bt" data-m="takeoff">Arm and take off</button><button class="bt" data-m="mission">Run mission</button><button class="bt" data-m="hover">Hold position</button><button class="bt" data-m="rth">Return home</button><button class="bt" data-m="land">Land</button></div></div>
<div class="fs"><svg id="fv" viewBox="0 0 800 420" aria-label="Top view of the drone flying a waypoint mission">
<defs><pattern id="fg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#fff" stroke-opacity=".06"/></pattern><filter id="fb"><feGaussianBlur stdDeviation="4"/></filter>
<g id="shp"><path d="M-40-40L40 40M40-40L-40 40" stroke="#000" stroke-width="12" stroke-linecap="round"/><circle cx="-40" cy="-40" r="31"/><circle cx="40" cy="-40" r="31"/><circle cx="-40" cy="40" r="31"/><circle cx="40" cy="40" r="31"/></g></defs>
<rect width="800" height="420" fill="url(#fg)"/>
<polyline id="fpath" points="${[HOME,...WP,HOME].map(p=>p.join(',')).join(' ')}" class="fpath"/>
<g class="fhome"><circle cx="${HOME[0]}" cy="${HOME[1]}" r="26"/><text x="${HOME[0]}" y="${HOME[1]+5}">H</text></g>
${WP.map((p,i)=>`<g class="fwp" data-i="${i}"><circle cx="${p[0]}" cy="${p[1]}" r="14"/><text x="${p[0]}" y="${p[1]+4}">${i+1}</text></g>`).join('')}
<polyline id="ftr" points="" class="ftr"/>
<use id="fsh" href="#shp" opacity=".4" filter="url(#fb)"/>
<g id="fdr"><g id="fds">
<path d="M-40-40L40 40M40-40L-40 40" class="x3a"/>
<rect x="-17" y="-17" width="34" height="34" rx="6" class="x3b"/><rect x="-9" y="-9" width="18" height="18" class="x3c"/>
<path d="M0-30L6-20H-6Z" class="x3f"/><circle cx="0" cy="24" r="6" class="x3g"/><circle cx="0" cy="24" r="6" class="x3gr"/>
${arm(-40,-40,0)}${arm(40,-40,1)}${arm(-40,40,1)}${arm(40,40,0)}</g></g>
<text x="16" y="26" class="fhud" id="fhd"></text><text x="784" y="26" text-anchor="end" class="fhud">TOP VIEW - 1 GRID = 10 m</text>
</svg></div>
<div class="ftl" id="ftl">${[['ALT','alt'],['SPEED','spd'],['HEADING','hdg'],['BATTERY','bat'],['SATELLITES','sat'],['ROLL','rol'],['PITCH','pit'],['MODE','mod']].map(([l,k])=>`<div><small>${l}</small><b id="t-${k}">-</b></div>`).join('')}</div>
<div class="fm" id="fm">${['Front left','Front right','Rear left','Rear right'].map((n,i)=>`<div><small>${n}</small><i><u id="mb${i}"></u></i><b id="mv${i}">0%</b></div>`).join('')}</div>
<div class="fp"><div class="fpt">What each part is doing right now</div><div id="fpl"></div></div>
<p class="fn">Simulation for demonstration. Speeds, altitude and battery values are illustrative, not measured flight data.</p>`;
$('#a-g').after(fl);

const NMP=[['fc','Aazmuth flight controller'],['imu','3 IMUs'],['baro','2 barometers'],['gps','NAVSATE GPS'],['esc','Skydrive AM32 ESC'],['bat','Battery']];
const TX={
ground:()=>({fc:'Standby. Self-check passed, waiting for the arm command.',imu:'All three calibrated. Reading level.',baro:'Both set the ground reference height.',gps:'Satellites locked. Home point stored.',esc:'Armed-ready. Motors at zero throttle.',bat:'Pack connected. Voltage normal.'}),
takeoff:()=>({fc:'Raising throttle on all four motors together.',imu:'Catching any tilt and correcting it at once.',baro:'Measuring climb rate from air pressure.',gps:'Holding position over the pad while climbing.',esc:'Ramping three-phase power to every motor.',bat:'Delivering peak current for the climb.'}),
hover:()=>({fc:'Position hold. Tiny corrections, many times a second.',imu:'Sensing every small gust and drift.',baro:'Holding altitude steady.',gps:'Fixing position so the drone stays put.',esc:'Trimming each motor speed in real time.',bat:'Lower current draw while hovering.'}),
mission:()=>({fc:`Flying to waypoint ${Math.min(st.wp+1,WP.length)} of ${WP.length}. Tilting and turning to steer.`,imu:'Measuring the lean angle on every turn.',baro:'Keeping altitude constant along the route.',gps:'Tracking position against the planned route.',esc:'Front and rear motors run at different speeds to lean forward.',bat:'Steady draw in forward flight.'}),
rth:()=>({fc:'Return-to-home. Flying straight back to the pad.',imu:'Keeping the drone level on the way home.',baro:'Holding altitude until above the pad.',gps:'Steering by the stored home position.',esc:'Delivering steady power to all motors.',bat:'Steady draw in forward flight.'}),
land:()=>({fc:'Landing. Reducing throttle in a controlled descent.',imu:'Keeping the drone flat as it comes down.',baro:'Measuring descent rate.',gps:'Holding position over the pad.',esc:'Easing motor speed down smoothly.',bat:'Current falling as thrust drops.'})};
const MN={ground:'ON GROUND',takeoff:'TAKE-OFF',hover:'POSITION HOLD',mission:'MISSION',rth:'RETURN HOME',land:'LANDING'};
const BASE={ground:0,takeoff:82,hover:60,mission:66,rth:66,land:44};
let st,raf=0,last=0,tacc=0,live=0;
const fv=$('#fv'),clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function reset(){st={m:'ground',next:'',x:HOME[0],y:HOME[1],z:0,h:0,vx:0,vy:0,wp:0,t:0,fly:0,roll:0,pitch:0,run:0,tr:[]};$('#ftr').setAttribute('points','');fv.classList.remove('run');paint(0)}
function setM(m,n){st.m=m;if(m==='takeoff'){st.run=1;st.next=n||''}if(m==='mission'&&st.wp>=WP.length)st.wp=0;if(m==='land'||m==='ground')st.next='';if(m==='ground')st.run=0;
fv.classList.toggle('run',!!st.run);$$('.fb .bt',fl).forEach(b=>b.classList.toggle('on',b.dataset.m===m));ui()}
function ui(){const g=st.m==='ground',a=!g;$$('.fb .bt',fl).forEach(b=>{const k=b.dataset.m;b.disabled=k==='takeoff'?(a):k==='mission'?(st.m==='mission'):k==='hover'?(g||st.m==='hover'||st.m==='takeoff'):k==='rth'?(g||st.m==='rth'||st.m==='land'):(g||st.m==='land')});
$$('.fwp',fl).forEach((e,i)=>e.classList.toggle('dn',i<st.wp))}
function step(dt){st.t+=dt;if(st.run)st.fly+=dt;let tx=0,ty=0;
if(st.m==='takeoff'){st.z=Math.min(30,st.z+9*dt);if(st.z>=30)setM(st.next||'hover')}
else if(st.m==='land'){st.z=Math.max(0,st.z-5*dt);if(st.z<=0&&Math.hypot(st.vx,st.vy)<6){st.z=0;setM('ground')}}
else if(st.m==='mission'||st.m==='rth'){const T=st.m==='rth'?HOME:WP[st.wp],dx=T[0]-st.x,dy=T[1]-st.y,ds=Math.hypot(dx,dy);
if(ds<9){if(st.m==='rth')setM('land');else{st.wp++;ui();if(st.wp>=WP.length)setM('rth')}}else{const v=Math.min(105,ds*2.2+25);tx=dx/ds*v;ty=dy/ds*v}}
const k=Math.min(1,dt*1.8);st.vx+=(tx-st.vx)*k;st.vy+=(ty-st.vy)*k;st.x+=st.vx*dt;st.y+=st.vy*dt;
if(st.m==='hover'){st.x+=Math.sin(st.t*1.3)*5*dt;st.y+=Math.cos(st.t*1.1)*5*dt}
const sp=Math.hypot(st.vx,st.vy);
if(sp>10){const th=Math.atan2(st.vx,-st.vy)*57.2958;st.h+=(((th-st.h+540)%360)-180)*Math.min(1,dt*2.6)}
const hr=st.h/57.2958,fw=st.vx*Math.sin(hr)-st.vy*Math.cos(hr),lt=st.vx*Math.cos(hr)+st.vy*Math.sin(hr);
st.pitch=-fw*.14+Math.sin(st.t*2)*.3*(st.z>0);st.roll=lt*.14+Math.cos(st.t*2.3)*.3*(st.z>0)}
function paint(dt){const s=.8+st.z/90,hd=((st.h%360)+360)%360,sp=Math.hypot(st.vx,st.vy);
$('#fds').setAttribute('transform',`scale(${s.toFixed(3)})`);$('#fdr').setAttribute('transform',`translate(${st.x.toFixed(1)} ${st.y.toFixed(1)}) rotate(${st.h.toFixed(1)})`);
$('#fsh').setAttribute('transform',`translate(${(st.x+st.z*.55).toFixed(1)} ${(st.y+st.z*.8).toFixed(1)}) rotate(${st.h.toFixed(1)}) scale(${(s*.92).toFixed(3)})`);
$('#fsh').setAttribute('opacity',(.42-st.z*.006).toFixed(2));
if(st.z>0.5||sp>3){tacc+=dt;if(tacc>.07){tacc=0;st.tr.push(st.x.toFixed(0)+','+st.y.toFixed(0));if(st.tr.length>90)st.tr.shift();$('#ftr').setAttribute('points',st.tr.join(' '))}}
const V=25.2-st.fly*.012,pc=clamp((V-21)/4.2*100,0,100);
$('#t-alt').textContent=st.z.toFixed(1)+' m';$('#t-spd').textContent=(sp/10).toFixed(1)+' m/s';$('#t-hdg').textContent=hd.toFixed(0)+'\u00b0';
$('#t-bat').textContent=V.toFixed(1)+' V ('+pc.toFixed(0)+'%)';$('#t-sat').textContent=st.run||st.z>0?String(14+Math.round(Math.sin(st.t/3)*2)):'14';
$('#t-rol').textContent=st.roll.toFixed(1)+'\u00b0';$('#t-pit').textContent=st.pitch.toFixed(1)+'\u00b0';$('#t-mod').textContent=MN[st.m];
$('#fhd').textContent='ALT '+st.z.toFixed(0)+' m | SPD '+(sp/10).toFixed(1)+' m/s | '+MN[st.m];
const b=BASE[st.m];[[-1,-1],[1,-1],[-1,1],[1,1]].forEach(([x,y],i)=>{let v=b?b+(y*(-st.pitch)*1.6)+(x*(-st.roll)*1.6)+Math.sin(st.t*5+i)*1.5:0;v=clamp(v,0,100);$('#mb'+i).style.width=v+'%';$('#mv'+i).textContent=v.toFixed(0)+'%'})}
function parts(){const t=TX[st.m]();$('#fpl').innerHTML=NMP.map(([k,n])=>`<div class="${st.m==='ground'?'':'act'}"><i></i><b>${n}</b><span>${E(t[k])}</span></div>`).join('')}
let lm='',lw=-1;
function loop(ts){if(!live)return;const dt=Math.min(.05,(ts-last)/1000||0);last=ts;step(dt);paint(dt);if(st.m!==lm||st.wp!==lw){lm=st.m;lw=st.wp;parts()}raf=requestAnimationFrame(loop)}
function start(){if(live)return;live=1;last=performance.now();raf=requestAnimationFrame(loop)}
function stop(){live=0;cancelAnimationFrame(raf)}
fl.addEventListener('click',e=>{const b=e.target.closest('.bt[data-m]');if(!b||b.disabled)return;const m=b.dataset.m;
if(m==='takeoff')setM('takeoff');else if(m==='mission'){if(st.m==='ground')setM('takeoff','mission');else setM('mission')}else setM(m)});
d.addEventListener('drone-built',()=>{reset();fl.hidden=false;lm='';ui();start();setTimeout(()=>{fl.scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>setM('takeoff','mission'),900)},250)});
d.addEventListener('drone-reset',()=>{stop();fl.hidden=true;if(st)reset()});
d.addEventListener('visibilitychange',()=>{if(d.hidden)stop();else if(!fl.hidden)start()});
reset();
setTimeout(()=>$$('.fdv').forEach(e=>e.remove()),700);

/* =============== 2. CONTENT (static HTML is built by build.js; this is only the fallback) =============== */
const host=$('#labc');if(host&&!host.children.length&&window.LABC)host.innerHTML=window.LABC.render(S);
})();
