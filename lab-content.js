/* LAB-CONTENT.JS - Drone Lab ka saara text content. Browser (lab3.js) aur build.js dono isi ko use karte hain,
   isliye "node build.js" chalane par yahi content static HTML me bhi chala jata hai (SEO / AI crawlers ke liye).
   Content badalna ho to sirf is file ke arrays edit karo, phir: node build.js */
(function(root){
const E=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

const QUICK={q:'How does a drone work?',a:'A drone flies on six core parts working together: a frame that holds everything, four brushless motors with propellers that create thrust, ESCs that power the motors, a flight controller that decides how fast each motor spins, a GPS that gives position, and a battery. Sensors such as IMUs and barometers tell the flight controller how the drone is moving, and it corrects the motors many times a second to stay stable.'};

const PT=[
{k:'Airframe',n:'Carbon frame',w:'The rigid skeleton that carries every other part and absorbs motor vibration. How stiff the arms are decides how clean the sensor data is and how easy the drone is to tune.',i:['Centre plate','Arms','Vibration mounts','Landing gear'],u:'Long, stiff arms for sprayers and survey rigs. Compact frames for 5-inch FPV racing.',o:[],y:'We do not make frames. Because Aazmuth keeps its sensors isolated, soft-mounting it on any carbon frame gives the IMUs a clean signal.'},
{k:'Propulsion',n:'Brushless motors and propellers',w:'Four motors turn ESC pulses into thrust. Speeding up one pair and slowing the other gives the drone roll, pitch and yaw.',i:['Stator','Rotor magnets','Bearings','Propeller'],u:'Big motors with large props for lifting payloads efficiently. Small, fast motors for racing.',o:['skydrive-am32-60a','skydrive-am32-40a'],y:'Motor choice stays yours. Skydrive AM32 ESCs drive standard brushless motors on 3-6S, and open firmware lets you tune the motor settings yourself.',ot:'Driven by'},
{k:'Power electronics',n:'Skydrive AM32 ESC',w:'Takes the throttle command from the flight controller and switches battery current into the three phases of each motor. It also measures current to protect the motor.',i:['MCU running AM32','MOSFET bridge','Gate drivers','Current sense'],u:'40A for lighter UAVs. 60A for heavy payloads such as agriculture sprayers. 55A 4-in-1 for compact FPV builds.',o:['skydrive-am32-60a','skydrive-am32-40a','skydrive-55a-am32-4-in-1'],y:'Open AM32 firmware, so there is no locked-in ESC software. 3-6S input covers most builds, and the 4-in-1 keeps wiring short on small drones.'},
{k:'Flight brain',n:'Aazmuth flight controller',w:'Reads every sensor, compares it with what the pilot or mission asks for, and decides how fast each motor should turn. This runs many times a second.',i:['STM32 H7 up to 480 MHz','3 IMUs','2 barometers','Aazmuth Bus'],sp:'2 MB flash, 1 MB RAM | 63 g | 92 x 54 x 14.6 mm',u:'Defence, industry, agriculture, startups and universities. For FPV builds, the Exelr8 F7.',o:['aazmuth-flight-controller','exelr8-fpv-flight-controller-f7'],y:'Every sensor sits on its own isolated bus, and IMU boards are modular on the 20-pin Aazmuth Bus. Pinout and calibration guides are public.',docs:1},
{k:'Navigation',n:'NAVSATE GPS',w:'Tells the drone where it is and how fast it is moving. Without it there is no position hold, return-to-home or waypoint mission.',i:['Antenna','RF front-end','GNSS receiver','Link to FC'],u:'Survey lines, spraying passes, inspection work and long-range FPV with return-to-home.',o:['navsate-gps-for-uavs','navsate-mini-gps'],y:'NAVSATE for UAVs is tuned for UAVs and tested on long flights. The mini version fits compact FPV builds.'},
{k:'Energy',n:'LiPo battery',w:'Stores the energy for flight. Cell count sets the voltage, and capacity sets how long you can stay up.',i:['Cells','Balance lead','Power connector','Power module'],u:'3S to 6S packs. More cells for heavier lift, more capacity for longer endurance.',o:[],y:'Not our product. Skydrive ESCs accept 3-6S, so the same electronics scale from light to heavy builds.'}];
const SN=[
['IMU','Gyroscope + accelerometer','How fast the drone is rotating and accelerating.','Staying level and resisting wind. This is the sense that keeps the drone upright.','Aazmuth carries 3 IMUs, each on its own isolated bus.'],
['Barometer','Air pressure','Pressure, which falls as the drone climbs.','Altitude hold and smooth climbs and descents.','Aazmuth carries 2 barometers for a redundant altitude estimate.'],
['GNSS receiver','Satellite timing','Position and ground speed from satellite signals.','Position hold, return-to-home and waypoint missions.','NAVSATE GPS for UAVs, and a mini version for FPV.'],
['Current sense','Motor current','How much current each ESC is delivering.','Overcurrent protection and telemetry.','Built into the Skydrive AM32 ESC.'],
['Power module','Battery voltage and current','Voltage and current drawn from the pack.','Remaining flight time and low-battery failsafe.','Connect it through the Aazmuth peripheral ports. See the sensor integration guide.'],
['Camera','Optional vision payload','Live video, or images for inspection and mapping.','FPV piloting, inspection and mapping jobs.','An optional payload. Not part of our stack.']];
const UC=[
['FPV racing','Light and punchy. A single 4-in-1 ESC keeps wiring short for 5-inch builds and below.',['exelr8-fpv-flight-controller-f7','skydrive-55a-am32-4-in-1','navsate-mini-gps'],'FPV racing'],
['Survey and mapping','Redundant sensors and a UAV-grade GPS for steady, repeatable flight lines.',['aazmuth-flight-controller','skydrive-am32-40a','navsate-gps-for-uavs'],'Survey and mapping'],
['Agriculture','60A ESCs carry heavy sprayer payloads. Isolated sensors tolerate vibration and field conditions.',['aazmuth-flight-controller','skydrive-am32-60a','navsate-gps-for-uavs'],'Agriculture'],
['Defence and industrial','Triple-redundant flight control, made in India, with custom firmware support for your programme.',['aazmuth-flight-controller','skydrive-am32-60a','navsate-gps-for-uavs'],'Defence and industrial']];
const WY=[
['Triple IMU and dual barometer on isolated buses','One failing or noisy sensor does not have to end the flight, and vibration on one bus does not corrupt the others.'],
['Modular Aazmuth Bus (20-pin)','Swap or upgrade IMU boards instead of replacing the whole flight controller.'],
['Open AM32 firmware on every Skydrive ESC','No locked-in software. You can update and tune the ESC yourself.'],
['Designed in Mumbai and Nashik, made in India','Local supply and short lead times. Simpler procurement for Indian programmes.'],
['Custom firmware support for OEM programmes','Your requirements shape the firmware. Useful for defence and industrial builds.'],
['Docs, pinouts and direct engineer help','Faster bring-up. Overview, pinout, calibration and sensor guides are published.']];

/* FAQ: answer-first, short, factual (Google featured snippets, AI answers, voice search) */
const FAQ=[
['What are the main parts of a drone?','The main parts of a drone are the frame, brushless motors with propellers, electronic speed controllers (ESCs), a flight controller, a GPS module and a battery. Many drones also carry a camera. Together they provide structure, thrust, control, navigation and power.'],
['What does a flight controller do in a drone?','A flight controller is the drone\u2019s brain. It reads sensors such as IMUs and barometers, compares them with the pilot\u2019s or mission\u2019s commands, and sets how fast each motor should spin, many times a second, to keep the drone stable and on course.'],
['What is an ESC in a drone?','An ESC (electronic speed controller) converts battery power into the three-phase current a brushless motor needs. It takes the throttle signal from the flight controller and controls motor speed. Each motor has one ESC, or four share a single 4-in-1 board.'],
['What is AM32 firmware?','AM32 is open-source firmware for drone ESCs. Because it is open, builders can configure and update the ESC themselves instead of being locked into one vendor\u2019s software. All Skydrive ESCs from Space and Tech Engineering run AM32.'],
['What sensors does a drone use?','A drone typically uses an IMU (gyroscope and accelerometer) to sense rotation and acceleration, a barometer for altitude, a GNSS/GPS receiver for position and speed, and current and voltage sensors to monitor the motors and battery. Cameras are optional payloads.'],
['Why does a drone need GPS?','GPS tells the drone where it is and how fast it is moving. It enables position hold, return-to-home and autonomous waypoint missions. Without GPS a drone can still fly manually but cannot hold position by itself.'],
['What is a triple-redundant flight controller?','A triple-redundant flight controller carries three independent IMUs so that one failing or noisy sensor does not have to end the flight. The Aazmuth flight controller has 3 IMUs and 2 barometers, each on its own isolated bus.'],
['Which flight controller, ESC and GPS suit an agriculture drone?','For agriculture, Space and Tech Engineering suggests the Aazmuth flight controller, Skydrive AM32 60A ESCs for heavy sprayer payloads and the NAVSATE GPS for UAVs. Isolated sensors help tolerate vibration and field conditions.'],
['Which electronics suit an FPV racing drone?','For compact FPV builds, use the Exelr8 F7 flight controller with the Skydrive 55A AM32 4-in-1 ESC and the NAVSATE mini GPS. A single 4-in-1 ESC keeps wiring short on 5-inch builds and below.'],
['Are Space and Tech Engineering products made in India?','Yes. Space and Tech Engineering LLP designs flight controllers, AM32 ESCs and GPS modules in Mumbai and Nashik, India, and supports builders with public documentation and direct engineer help.'],
['Can I order in bulk or request a custom OEM stack?','Yes. Send your platform, use case and quantity through the quote form, or call or WhatsApp +91 96657 17903. The team replies with a matched stack, and custom firmware support is available for OEM programmes.']];

function render(S,opt){opt=opt||{};const P=(S&&S.products)||[],by=s=>P.find(p=>p.slug===s),pu=s=>s+'.html';
const pl=s=>{const p=by(s);return p?`<a class="x3l" href="${pu(p.slug)}">${E(p.name)}</a>`:''};
const ad=by('aazmuth-flight-controller'),dk=ad&&ad.docs?ad.docs.slice(0,3):[];
const fe=P.filter(p=>p.featured&&p.status!=='soon').slice(0,4),st3=((S&&S.stats)||[]).slice(0,4);
const quote=n=>`mailto:${(S&&S.email)||''}?subject=${encodeURIComponent('OEM enquiry - '+n)}`;
const H=(id,eb,t,lead)=>`<div class="x3h"><div class="fe">${eb}</div><h2 id="${id}-h"><span>${t}</span></h2><p class="lead">${lead}</p></div>`;
return `
<section class="x3" id="x3q" aria-labelledby="x3q-h"><div class="x3h"><div class="fe">Quick answer</div><h2 id="x3q-h"><span>${QUICK.q}</span></h2></div><p class="x3a2">${QUICK.a}</p></section>

<section class="x3" id="x3p" aria-labelledby="x3p-h">${H('x3p','Part by part','Every part of a drone, explained','The same six parts you just assembled. What each one does, what is inside it, where it is used and where our electronics fit.')}
<div class="x3g2">${PT.map(p=>`<article class="x3c2"><div class="fe">${p.k}</div><h3>${p.n}</h3><p>${p.w}</p>
<ul class="x3t">${p.i.map(i=>`<li>${i}</li>`).join('')}</ul>${p.sp?`<div class="x3s">${p.sp}</div>`:''}
<dl><dt>Where it is used</dt><dd>${p.u}</dd></dl>
<div class="x3y${p.o.length?' us':''}"><b>${p.o.length?(p.ot||'Our products'):'Our take'}</b><p>${p.y}</p>${p.o.length?`<div class="x3ls">${p.o.map(pl).join('')}</div>`:''}${p.docs&&dk.length?`<div class="x3ls">${dk.map(x=>`<a class="x3l d" href="${E(x.url)}" target="_blank" rel="noopener">${E(x.label)} guide</a>`).join('')}</div>`:''}</div></article>`).join('')}</div></section>

<section class="x3" id="x3s" aria-labelledby="x3s-h">${H('x3s','Sensors','What sensors does a drone use?','A drone cannot fly on motors alone. These are the senses the flight controller reads to stay stable and know where it is.')}
<div class="x3g3">${SN.map(s=>`<article class="x3c2"><div class="fe">${s[1]}</div><h3>${s[0]}</h3><dl><dt>Measures</dt><dd>${s[2]}</dd><dt>Used for</dt><dd>${s[3]}</dd></dl><div class="x3y us"><b>In our stack</b><p>${s[4]}</p></div></article>`).join('')}</div></section>

<section class="x3" id="x3u" aria-labelledby="x3u-h">${H('x3u','Use cases','Drone electronics by use case','The same electronics, matched to the job. Pick a platform and see the stack we would put in it.')}
<div class="x3g2">${UC.map(u=>`<article class="x3c2"><div class="fe">Recommended stack</div><h3>${u[0]}</h3><p>${u[1]}</p><div class="x3ls">${u[2].map(pl).join('')}</div><div class="x3b"><a class="btn" href="${quote(u[3]+': '+u[2].map(s=>by(s)?by(s).name:'').join(', '))}">Request OEM quote</a></div></article>`).join('')}</div></section>

<section class="x3" id="x3w" aria-labelledby="x3w-h">${H('x3w','Why Space and Tech','Why our electronics','What you get, and what it means once the drone is in the field.')}
${st3.length?`<div class="x3n">${st3.map(s=>`<div><b>${E(s.n)}${E(s.s||'')}</b><span>${E(s.l)}</span></div>`).join('')}</div>`:''}
<div class="x3tb">${WY.map((r,i)=>`<div class="x3rw"><i>${String(i+1).padStart(2,'0')}</i><b>${r[0]}</b><span>${r[1]}</span></div>`).join('')}</div></section>

<section class="x3" id="x3q2" aria-labelledby="x3q2-h">${H('x3q2','FAQ','Drone electronics: your questions answered','Short, direct answers about drone parts, sensors and how to choose the right stack.')}
<div class="x3g2">${FAQ.map(f=>`<article class="x3c2"><h3>${E(f[0])}</h3><p>${E(f[1])}</p></article>`).join('')}</div></section>

<section class="x3" id="x3f" aria-labelledby="x3f-h">${H('x3f','Our products','Fly it with our stack','Flight controllers, AM32 ESCs and GPS modules, available now.')}
<div class="grid">${fe.map(p=>`<a class="card" href="${pu(p.slug)}"><div class="ph"><img loading="lazy" src="${E(p.image)}" alt="${E(p.name)}"></div><div class="b"><span class="cat">${E(p.category)}</span><h3>${E(p.name)}</h3><p>${E(p.short)}</p></div></a>`).join('')}</div>
<div class="x3cta"><div><h3>Building a drone?</h3><p>Tell us your platform and quantity. An engineer will reply with a matched stack and pricing.</p></div><div class="x3b"><a class="btn" href="contact.html">Get OEM quote</a><a class="btn o" href="products.html">All products</a>${S&&S.whatsapp?`<a class="btn o" href="https://wa.me/${E(S.whatsapp)}?text=${encodeURIComponent('Hi, I want a stack for my drone.')}" target="_blank" rel="noopener">WhatsApp us</a>`:''}</div></div></section>`}

root.LABC={render,FAQ,QUICK,PT,SN,UC};
if(typeof module!=='undefined')module.exports=root.LABC;
})(typeof window!=='undefined'?window:(typeof globalThis!=='undefined'?globalThis:this));
