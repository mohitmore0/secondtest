/* BUILD.JS - SEO / AEO / GEO build.
   data.js padh kar ye banata hai:
     1) Har page ki STATIC HTML (asli text, meta tags, canonical, Open Graph, JSON-LD schema)
        -> Google aur AI crawlers (ChatGPT, Perplexity, Claude, Gemini) jo JavaScript nahi chalate, unhe poora content dikhta hai.
     2) Har product ka apna page:  <slug>.html   (e.g. aazmuth-flight-controller.html)
       4) sitemap.xml, robots.txt (AI bots allowed), llms.txt, llms-full.txt
   Chalane ka tarika (Node.js chahiye):   node build.js
   Kab chalana hai: data.js ya lab-content.js me kuch bhi badalne ke baad, aur upload se pehle. */
const fs = require('fs'), vm = require('vm');
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(__dirname + '/data.js', 'utf8'), ctx);
const S = ctx.window.SITE, U = S.url, today = new Date().toISOString().slice(0, 10);
const GUIDES = require('./guides-data.js');
const guideLinks = GUIDES.map(({ slug, h1, products }) => ({ slug, h1, products }));
/* HIDDEN products: unka purana <slug>.html bhi hata do (taaki seedha link se bhi na khule) */
(S.allProducts || []).filter(p => p.hidden && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)).forEach(p => {
  try { fs.unlinkSync(__dirname + '/' + p.slug + '.html'); console.log('Hidden product, page hata diya: ' + p.slug + '.html'); } catch (_) {} });
/* NOIMAGE: jis local image file disk par nahi hai uski jagah images/noimage.webp (data.js khali image pehle se handle karta hai) */
{ const okImg = u => !u || /^https?:/i.test(u) || fs.existsSync(__dirname + '/' + String(u).replace(/^\//, ''));
  S.products.forEach(p => {
    if (!okImg(p.image)) { console.log('Image nahi mili (' + p.image + ') -> noimage: ' + p.slug); p.image = 'images/noimage.webp'; p.noimg = true; }
    p.gallery = (p.gallery || []).filter(okImg); }); }
const realImg = p => p.noimg ? '' : p.image;   /* sitemap / schema / og me noimage nahi jaata */
/* layout.js: har page ke sections ka order. Static (crawlable) HTML bhi isi order me banta hai. */
const LAYV = (() => { const c = { window: {} }; vm.createContext(c); try { vm.runInContext(fs.readFileSync(__dirname + '/layout.js', 'utf8'), c); } catch (e) { console.log('layout.js nahi mila ya galat hai, default order use ho raha hai'); } return c.window.LAYOUT || {}; })();
const customBlock = o => { const t = o.title ? `<h2>${E(o.title)}</h2>` : '', l = o.lead ? `<p>${E(o.lead)}</p>` : '';
  if (o.type === 'text') return t + l + [].concat(o.text || []).map(x => `<p>${E(x)}</p>`).join('') + (o.btn ? `<p><a href="${E(o.btn.href)}">${E(o.btn.label)}</a></p>` : '');
  if (o.type === 'banner') return `<h3>${E(o.title || '')}</h3><p>${E(o.text || '')}</p>` + (o.btn ? `<p><a href="${E(o.btn.href)}">${E(o.btn.label)}</a></p>` : '');
  if (o.type === 'tiles') return t + l + `<ul>${(o.items || []).map(i => `<li><b>${i.href ? `<a href="${E(i.href)}">${E(i.title)}</a>` : E(i.title)}</b>: ${E(i.text || '')}</li>`).join('')}</ul>`;
  if (o.type === 'image') return t + `<img src="${E(o.src)}" alt="${E(o.alt_text || o.caption || o.title || '')}">`;
  return ''; };
const lay = (pg, blocks) => (Array.isArray(LAYV[pg]) ? LAYV[pg] : Object.keys(blocks)).map(k => typeof k === 'string' ? (blocks[k] || '') : (k && typeof k === 'object' ? customBlock(k) : '')).join('');
const w = (f, t) => fs.writeFileSync(__dirname + '/' + f, t);
/* CACHE-BUST: data.js/layout.js/app.js/css badalte hi ye hash badal jata hai, isliye browser/CDN hamesha naya file uthata hai (purana data nahi dikhta). */
const VER = (() => { const h = require('crypto').createHash('md5'); ['data.js', 'layout.js', 'app.js', 'guides-data.js', 'fx.js', 'fx2.js', 'fx3.js', 'fx4.js', 'style.css', 'guides.css', 'fx2.css', 'fx3.css', 'fx4.css', 'saffron.css'].forEach(f => { try { h.update(fs.readFileSync(__dirname + '/' + f)); } catch (e) {} }); return h.digest('hex').slice(0, 8); })();
/* BUNDLE: 6 CSS + 7 JS files -> bundle.css + bundle.js (sirf 2 request). Source files (data.js, style.css...) waise hi edit karo.
   Minify ke liye ek baar: npm install   (esbuild). Na ho to bina minify sirf jod diya jata hai. */
const CSS_SRC = ['style.css', 'fx2.css', 'fx3.css', 'fx4.css', 'saffron.css'];
const JS_SRC = ['data.js', 'layout.js', 'app.js', 'fx.js', 'fx2.js', 'fx3.js', 'fx4.js'];
(() => {
  const rd = f => { try { return fs.readFileSync(__dirname + '/' + f, 'utf8'); } catch (e) { return ''; } };
  let es = null; try { es = require('esbuild'); } catch (e) { console.log('NOTE: esbuild nahi mila, bundle minify nahi hua (npm install chalao).'); }
  let css = CSS_SRC.map(rd).join('\n');
  const guideData = 'window.PRODUCT_GUIDES = ' + JSON.stringify(guideLinks);
  let js = [guideData, ...JS_SRC.map(rd)].join(';\n');
  if (es) { try { css = es.transformSync(css, { loader: 'css', minify: true }).code; js = es.transformSync(js, { loader: 'js', minify: true }).code; } catch (e) { console.log('Minify error (bina minify bundle bana):', e.message); } }
  fs.writeFileSync(__dirname + '/bundle.css', css); fs.writeFileSync(__dirname + '/bundle.js', js);
})();
const E = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const CATSING = { 'ESCs': 'ESC (electronic speed controller)', 'Flight controllers': 'flight controller', 'GPS': 'GPS module', 'Receivers': 'receiver', 'Transmitters': 'transmitter', 'Video transmitters': 'video transmitter', 'Radar': 'radar module', 'FPV': 'FPV electronics' };
const altFor = p => { const c = CATSING[p.category] || String(p.category || '').toLowerCase(), key = c.split(' ')[0].toLowerCase(); return (String(p.name).toLowerCase().includes(key) ? p.name : p.name + ' ' + c) + ' for drones'; };
const abs = u => /^https?:/.test(u) ? u : U + '/' + String(u).replace(/^\//, '');
const pFile = p => p.slug + '.html', pUrl = p => `${U}/${pFile(p)}`;
const clip = (t, n) => { t = String(t).replace(/\s+/g, ' ').trim(); return t.length <= n ? t : t.slice(0, n - 1).replace(/\s+\S*$/, '') + '\u2026'; };
const warn = [];
{ const C = S.company, O = S.legal.officer;
  [['company.llpin', C.llpin], ['legal.officer.name', O.name], ['legal.officer.designation', O.designation], ['legal.officer.hours', O.hours]].forEach(([k, v]) => { if (!String(v || '').trim()) warn.push('MISSING (data.js): ' + k + ' - verified detail daalo'); }); }
const regNote = p => `<aside class="reg"><h3>Regulatory note</h3><p>${E(S.legal.uasNotice)}</p>${p.category === 'Transmitters' ? `<p>${E(S.legal.rfNotice)}</p>` : ''}<p><a href="product-regulatory.html">Product Regulatory Disclaimer</a></p></aside>`;
const offTxt = () => { const o = S.legal.officer; return `<h2>Grievance Officer</h2><ul>${[['Name', o.name], ['Designation', o.designation], ['Email', o.email], ['Phone', o.phone], ['Address', o.address], ['Hours', o.hours]].filter(r => r[1]).map(r => `<li>${r[0]}: ${E(r[1])}</li>`).join('')}</ul>`; };
const waLink = p => `https://wa.me/${S.whatsapp}?text=${encodeURIComponent('Hi, I want a quote for ' + p.name + '. Quantity: ')}`;
const avail = S.products.filter(p => p.status !== 'soon'), soon = S.products.filter(p => p.status === 'soon');
const collections = Object.entries(S.productCollections || {}).flatMap(([category, info]) => {
  const products = S.products.filter(p => S.inCat(p, category) && !p.noindex);
  return products.length ? [{ ...info, category, products }] : [];
});
const collectionFor = category => collections.find(c => c.category === category);
const collectionLinks = () => `<ul>${collections.map(c => `<li><a href="${E(c.slug)}.html">${E(c.title)}</a></li>`).join('')}</ul>`;
const productHeading = p => p.heading || p.name;

/* ---------------- page meta ---------------- */
const META = {
  home: { file: 'index.html', path: '', title: 'Indian Drone Flight Controllers, ESCs & GPS | Space and Tech',
    desc: 'Indian drone flight controllers, AM32 ESCs and UAV GPS modules by Aazmuth, Skydrive and NAVSATE. Designed in India. Get an OEM quote.', preload: true },
  products: { file: 'products.html', path: 'products.html', title: 'Drone Electronics Catalog | Compare UAV and FPV Parts',
    desc: 'Compare drone flight controllers, AM32 ESCs, GPS modules, ELRS receivers and FPV video transmitters. Check compatibility or request a quote.' },
  about: { file: 'about.html', path: 'about.html', title: 'About Space and Tech Engineering | Drone Electronics, India',
    desc: 'A small team of hardware and firmware engineers in India building flight controllers, ESCs and GPS for Indian drone builders.' },
  contact: { file: 'contact.html', path: 'contact.html', title: 'Contact Space and Tech Engineering | Get an OEM Quote',
    desc: `Call or WhatsApp ${S.phone} or email us for OEM and bulk quotes on drone flight controllers, AM32 ESCs and GPS modules made in India.` }
};

/* ---------------- JSON-LD ---------------- */
const ORG_ID = U + '/#organization', WEB_ID = U + '/#website';
const org = {
  '@type': 'Organization', '@id': ORG_ID, name: S.name, alternateName: S.short, url: U + '/',
  logo: { '@type': 'ImageObject', url: abs(S.logo || S.hero.image) }, image: abs(S.ogImage || S.hero.image), foundingDate: (S.about.timeline[0] || {}).year,
  description: S.about.text, slogan: S.tagline, email: S.email, telephone: S.phone, areaServed: 'IN',
  address: S.about.offices.map(o => ({ '@type': 'PostalAddress', name: o.role, streetAddress: o.address, addressLocality: o.city, addressRegion: 'Maharashtra', postalCode: (o.address.match(/\b\d{6}\b/) || [''])[0], addressCountry: 'IN' })),
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', telephone: S.phone, email: S.email, areaServed: 'IN', availableLanguage: ['en', 'hi'] },
  sameAs: (S.social || []).map(s => s.url).concat(S.docsUrl ? [S.docsUrl] : []),
  knowsAbout: ['Drone flight controllers', 'Electronic speed controllers (ESC)', 'AM32 ESC firmware', 'GPS and GNSS modules for UAVs', 'UAV electronics', 'FPV drones', 'Agriculture drones', 'Survey and mapping drones']
};
const website = { '@type': 'WebSite', '@id': WEB_ID, url: U + '/', name: S.name, publisher: { '@id': ORG_ID }, inLanguage: 'en-IN' };
const crumbs = (url, items) => ({ '@type': 'BreadcrumbList', '@id': url + '#breadcrumb', itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x[0], item: x[1] })) });
const webpage = (m, url, type, extra) => Object.assign({ '@type': type || 'WebPage', '@id': url + '#webpage', url, name: m.title, description: m.desc, isPartOf: { '@id': WEB_ID }, about: { '@id': ORG_ID }, inLanguage: 'en-IN', dateModified: today, breadcrumb: { '@id': url + '#breadcrumb' } }, extra || {});
const faqLd = (url, list) => ({ '@type': 'FAQPage', '@id': url + '#faq', mainEntity: list.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const graph = items => items.filter(Boolean).map(it => `<script type="application/ld+json">${JSON.stringify(Object.assign({ '@context': 'https://schema.org' }, it))}</script>`).join('\n');

/* ---------------- head ---------------- */
function seoTags(m, url, ld, og) {
  if (m.desc.length > 140) warn.push(`description too long for pixel limit (${m.desc.length}): ${m.file}`);
  const img = abs(m.image || S.ogImage || S.hero.image);
  return `<title>${E(m.title)}</title>
<meta name="description" content="${E(m.desc)}">
<meta name="robots" content="${m.robots || 'index,follow,max-image-preview:large'}">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en-IN" href="${url}">
<link rel="alternate" hreflang="x-default" href="${url}">
<meta property="og:site_name" content="${E(S.name)}">
<meta property="og:locale" content="en_IN">
<meta property="og:type" content="${og || 'website'}">
<meta property="og:title" content="${E(m.title)}">
<meta property="og:description" content="${E(m.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${img}">
<meta property="og:image:alt" content="${E(m.imgAlt || S.name)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${E(m.title)}">
<meta name="twitter:description" content="${E(m.desc)}">
<meta name="twitter:image" content="${img}">
<meta name="geo.region" content="IN-MH"><meta name="geo.placename" content="India">
<meta name="author" content="${E(S.name)}">
<link rel="alternate" type="text/plain" href="${U}/llms.txt" title="llms.txt">
${graph(ld)}`;
}
const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">`;
const ICON = (S.favicon ? `<link rel="icon" type="image/png" href="${S.favicon}"><link rel="shortcut icon" href="${S.favicon}">` : '') + ((S.appleIcon || S.logo) ? `<link rel="apple-touch-icon" href="${S.appleIcon || S.logo}">` : '');

/* ---------------- static body blocks (real, crawlable content) ---------------- */

S.legal.pages.forEach(L => { META[L.slug] = { file: L.slug + '.html', path: L.slug + '.html', title: L.nav + ' | Space and Tech', desc: L.desc }; });
const nav = `<header><nav aria-label="Main"><a href="/">Home</a> <a href="products.html">Products</a> <a href="about.html">About</a> <a href="contact.html">Contact</a></nav></header>`;
const foot = `<footer><p><a href="guides.html">Guides</a></p><p>&copy; ${S.year} ${E(S.name)}. ${E(S.tagline)}. ${E(S.phone)} | <a href="mailto:${E(S.email)}">${E(S.email)}</a></p><address>${E(S.company.llpName)}${S.company.llpin ? ', LLPIN ' + E(S.company.llpin) : ''}. Registered office: ${E(S.company.registeredOffice)}</address><p>Last updated: <time datetime="${today}">${today}</time></p><p>${S.legal.pages.map(L => `<a href="${L.slug}.html">${E(L.nav)}</a>`).join(' | ')} | Grievance Officer: ${S.legal.officer.name ? E(S.legal.officer.name) + ', ' : ''}<a href="mailto:${E(S.legal.officer.email)}">${E(S.legal.officer.email)}</a></p><p>Follow us: ${(S.social || []).map(s => `<a href="${E(s.url)}" rel="noopener">${E(s.label)}</a>`).join(' | ')}${S.docsUrl ? ` | <a href="${E(S.docsUrl)}" rel="noopener">Documentation</a>` : ''}</p></footer>`;
const prodList = list => `<ul>${list.map(p => `<li><a href="${pFile(p)}">${E(p.name)}</a>: ${E(p.short)}${p.status === 'soon' ? ' (coming soon)' : ''}</li>`).join('')}</ul>`;
const prodCards = list => list.map((p, i) => `<article><a href="${pFile(p)}"><img src="${E(p.image)}" alt="${E(altFor(p))}" width="320" height="240"${i < 3 ? (i ? '' : ' fetchpriority="high"') : ' loading="lazy"'}></a><h3><a href="${pFile(p)}">${E(productHeading(p))}</a></h3>${p.status === 'soon' ? '<p>Coming soon</p>' : ''}<p>${E(p.buyerSummary || p.short)}</p></article>`).join('');
const faqHtml = list => list.map(f => `<h3>${E(f.q || f[0])}</h3><p>${E(f.a || f[1])}</p>`).join('');
const officesHtml = () => S.about.offices.map(o => `<address><b>${E(o.role)}, ${E(o.city)}</b><br>${E(o.address)}</address>`).join('');
const intro = `${S.name} is an Indian drone electronics company with offices in India. It designs and sells the Aazmuth and Exelr8 flight controllers, Skydrive AM32 ESCs and NAVSATE GPS modules for UAV and FPV builders.`;

const BODY = {
  home: () => `<main><h1>${E(S.hero.title)}</h1><p>${E(S.hero.text)}</p><p>${E(intro)}</p>` + lay('home', {
    tech: `<h2>Drone flight controllers, ESCs and GPS modules</h2>${collectionLinks()}${prodList(avail)}${soon.length ? `<h2>Coming soon</h2>${prodList(soon)}` : ''}`,
    process: `<h2>How we build</h2><ul>${S.process.map(p => `<li><b>${E(p.t)}</b>: ${E(p.x)}</li>`).join('')}</ul>`
  }) + `<h2>Where we are</h2>${officesHtml()}\n<p><a href="contact.html">Request an OEM quote</a>.</p></main>`,
  products: () => `<main><h1>Drone electronics catalog</h1><p>${E(S.catalogIntro)}</p><p>${E(S.catalogBuying)} <a href="contact.html">Request a quote</a></p>${collectionLinks()}
${S.categories.filter(c => S.products.some(p => S.inCat(p, c))).map(c => `<h2>${E(c)}</h2><div>${prodCards(S.products.filter(p => S.inCat(p, c)))}</div>`).join('')}</main>`,
  about: () => `<main><h1>${E(S.about.title)}</h1><p>${E(S.about.text)}</p>` + lay('about', {
    who: `<h2>Mission</h2><p>${E(S.about.mission)}</p><h2>Vision</h2><p>${E(S.about.vision)}</p>`,
    story: `<h2>Our story</h2><ol>${S.about.timeline.map(t => `<li><b>${E(t.year)}: ${E(t.title)}.</b> ${E(t.text)}</li>`).join('')}</ol>`,
    values: `<h2>How we work</h2><ul>${S.about.values.map(v => `<li><b>${E(v.title)}.</b> ${E(v.text)}</li>`).join('')}</ul>`,
    find: `<h2>Offices</h2>${officesHtml()}`
  }) + `</main>`,
  contact: () => `<main><h1>Contact ${E(S.name)}</h1><p>Request an OEM quote or ask about any flight controller, ESC or GPS module.</p>
<ul><li>Phone: <a href="tel:+${E(S.whatsapp)}">${E(S.phone)}</a></li><li>WhatsApp: <a href="https://wa.me/${E(S.whatsapp)}">${E(S.phone)}</a></li><li>Email: <a href="mailto:${E(S.email)}">${E(S.email)}</a></li></ul>${officesHtml()}</main>`,
  ...Object.fromEntries(S.legal.pages.map(L => [L.slug, () => `<main><h1>${E(L.title)}</h1><p>${E(L.intro)}</p><p>Effective: ${E(S.legal.effective)}. Last updated: ${E(S.legal.updated)}.</p>${L.officerBlock ? offTxt() : ''}${L.sections.map((s, i) => `<h2>${i + 1}. ${E(s.h)}</h2>${(s.p || []).map(t => `<p>${E(t)}</p>`).join('')}${s.ul ? `<ul>${s.ul.map(t => `<li>${E(t)}</li>`).join('')}</ul>` : ''}`).join('')}</main>`])),
  product: p => {
    const rel = S.products.filter(x => x.slug !== p.slug && x.category === p.category).concat(S.products.filter(x => x.slug !== p.slug && x.category !== p.category)).slice(0, 4);
    const collection = collectionFor(p.category);
    return `<main><nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="products.html">Products</a> / ${collection ? `<a href="${E(collection.slug)}.html">${E(collection.category)}</a> / ` : ''}${E(p.name)}</nav>
<h1>${E(productHeading(p))}</h1><p>${E(p.category)}${p.status === 'soon' ? ' - coming soon' : ''}</p><img src="${E(p.image)}" alt="${E(altFor(p))}" width="640" height="480">
${p.buyerSummary ? `<p>${E(p.buyerSummary)}</p>` : ''}<p>${E(p.description)}</p>${p.features && p.features.length ? `<h2>Highlights</h2><ul>${p.features.map(f => `<li>${E(f)}</li>`).join('')}</ul>` : ''}
${p.buyerCheck ? `<h2>${p.status === 'soon' ? 'What to confirm before launch' : 'What to check before ordering'}</h2><p>${E(p.buyerCheck)}</p>` : ''}
${p.specs && p.specs.length ? `<h2>${E(p.name)} specifications</h2><table>${p.specs.map(s => `<tr><th scope="row">${E(s[0])}</th><td>${E(s[1])}</td></tr>`).join('')}</table>` : ''}
${p.docs && p.docs.length ? `<h2>Documentation</h2><ul>${p.docs.map(d => `<li><a href="${E(d.url)}">${E(d.label)}</a></li>`).join('')}</ul>` : ''}
<p><a href="contact.html?product=${encodeURIComponent(p.slug)}">${p.status === 'soon' ? 'Ask about launch' : 'Get a quote'}</a>${p.buyUrl && p.status !== 'soon' ? ` | <a href="${E(p.buyUrl)}">View in store</a>` : ''}</p>
${p.bestFor && p.bestFor.length ? `<h2>Best for</h2><ul>${p.bestFor.map(a => `<li>${E(a)}</li>`).join('')}</ul>` : ''}
${guideLinks.some(g => g.products.includes(p.slug)) ? `<h2>Related guides</h2><ul>${guideLinks.filter(g => g.products.includes(p.slug)).map(g => `<li><a href="${E(g.slug)}.html">${E(g.h1)}</a></li>`).join('')}</ul>` : ''}
${p.status !== 'soon' ? `<h2>From bench to sky</h2><ol>${['design', 'bench', 'fly', 'ship'].map((k, i) => { const st = S.process[i] || {}, j = (p.journey || {})[k] || {}, id = ((String(j.video || '').match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/|live\/)([\w-]{11})/) || [])[1]); return `<li><b>${E(st.t)}.</b> ${E(j.text || st.x)}${id ? ` <a href="https://www.youtube.com/watch?v=${id}">Watch the ${E(st.t.toLowerCase())} video</a>` : ''}</li>`; }).join('')}</ol>` : ''}
${p.faq && p.faq.length ? `<h2>${E(p.name)} FAQ</h2>${faqHtml(p.faq)}` : ''}
${p.status !== 'soon' ? `<p><a href="${E(waLink(p))}">Get a quote on WhatsApp</a></p>` : ''}
<h2>More products</h2>${prodList(rel)}${regNote(p)}</main>`;
  }
};
const READY = '';
const SCRIPTS = `<script src="bundle.js?v=${VER}"></script>\n${READY}`;
function shell(m, url, ld, bodyAttr, body, og) {
  return `<!DOCTYPE html>
<html lang="en-IN" data-static="1">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0a0a0b">
<style>html{background:#0a0a0b}</style>
${seoTags(m, url, ld, og)}
${ICON}
<link rel="manifest" href="manifest.webmanifest">
${m.preload ? '<link rel="preload" as="image" href="' + S.hero.slides[0].src + '" fetchpriority="high">' : ''}
${FONTS}
<link rel="stylesheet" href="bundle.css?v=${VER}">
</head>
<body ${bodyAttr}>
<a class="skip-link" href="#main">Skip to main content</a>
${nav}
${body.replace('<main>', '<main id="main">')}
${foot}
<noscript><p style="padding:24px">JavaScript is off. All content above is available as text. Product list: <a href="llms.txt">llms.txt</a></p></noscript>
${SCRIPTS}
</body>
</html>
`;
}

/* ---------------- generate pages ---------------- */
const pageType = { home: 'WebPage', products: 'CollectionPage', about: 'AboutPage', contact: 'ContactPage' };
S.legal.pages.forEach(L => { pageType[L.slug] = 'WebPage'; });
Object.keys(pageType).forEach(k => {
  const m = META[k], url = U + '/' + m.path;
  const items = [org, website];
  const crumbName = { products: 'Products', about: 'About', contact: 'Contact' }[k] || (S.legal.pages.find(L => L.slug === k) || {}).nav || k;
  const bc = k === 'home' ? [['Home', U + '/']] : [['Home', U + '/'], [crumbName, url]];
  items.push(crumbs(url, bc));
  const extra = {};
  if (k === 'products') {
    items.push({ '@type': 'ItemList', '@id': url + '#list', name: 'Space and Tech Engineering products', itemListElement: avail.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: pUrl(p), name: p.name })) });
    extra.mainEntity = { '@id': url + '#list' };
  }
  items.push(webpage(m, url, pageType[k], extra));
  w(m.file, shell(m, url, items, `data-page="${k}"`, BODY[k]()));
});

/* legacy product.html (old ?p= links): noindex + redirect to the new static page */
{
  const m = { file: 'product.html', title: 'Products | ' + S.name, desc: META.products.desc, robots: 'noindex,follow' };
  const html = shell(m, U + '/products.html', [org], 'data-page="product"', `<main><h1>Products</h1>${prodList(S.products)}</main>`)
    .replace('<head>', `<head>\n<script>(function(){var p=new URLSearchParams(location.search).get('p');if(p)location.replace(encodeURIComponent(p)+'.html')})()</script>`);
  w('product.html', html);
}

/* one static page per product */
S.products.forEach(p => {
  const url = pUrl(p);
  const desc = p.seoDescription || (p.status === 'soon'
    ? clip((p.short || p.description || p.name).replace(/\s*Coming soon\.?$/i, '').trim(), 126) + ' Coming soon.'
    : clip(p.short || p.description || p.name, 140));
  const title = p.seoTitle || productHeading(p);
  const m = { file: pFile(p), title, desc, image: realImg(p), imgAlt: altFor(p) };
  if (p.noindex) m.robots = 'noindex,follow';
  if (p.status !== 'soon' && (p.specs || []).length < 3) warn.push(`THIN PRODUCT (add specs): ${p.slug}`);
  const collection = collectionFor(p.category);
  const trail = [['Home', U + '/'], ['Products', U + '/products.html']];
  if (collection) trail.push([collection.category, U + '/' + collection.slug + '.html']);
  trail.push([p.name, url]);
  // Quote-only listings use ItemPage and breadcrumbs without a Product snippet.
  const items = [org, website, crumbs(url, trail), webpage(m, url, 'ItemPage')];
  if (p.faq && p.faq.length) items.push(faqLd(url, p.faq.map(f => [f.q, f.a])));
  w(pFile(p), shell(m, url, items, `data-page="product" data-slug="${E(p.slug)}"`, BODY.product(p), 'product'));
});


/* ---------------- GUIDES ---------------- */
const gUrl = g => `${U}/${g.slug}.html`;
const gShell = (m, url, ld, body, og, page = 'guides') => `<!DOCTYPE html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#0a0a0b">
<style>html{background:#0a0a0b}</style>
${seoTags(m, url, ld, og)}
${ICON}
<link rel="manifest" href="manifest.webmanifest">
${FONTS}
<link rel="stylesheet" href="bundle.css?v=${VER}">
<link rel="stylesheet" href="guides.css?v=${VER}">
</head>
<body data-page="${page}">
<a class="skip-link" href="#main">Skip to main content</a>
${nav}
${body}
${foot}
${SCRIPTS}
</body>
</html>
`;
const gCard = p => `<article><a href="${pFile(p)}"><img src="${E(p.image)}" alt="${E(altFor(p))}" width="320" height="150" loading="lazy"></a><h3><a href="${pFile(p)}">${E(productHeading(p))}</a></h3>${p.status === 'soon' ? '<p class="cat">Coming soon</p>' : ''}<p>${E(p.buyerSummary || (p.short || '').replace(/\s*Coming soon\.?$/i, ''))}</p></article>`;
GUIDES.forEach(g => {
  const url = gUrl(g), prods = g.products.map(sl => S.products.find(p => p.slug === sl)).filter(Boolean);
  const m = { file: g.slug + '.html', title: g.title, desc: g.desc, image: prods[0] && realImg(prods[0]) };
  const ids = g.sections.map((s, i) => 's' + (i + 1));
  const body = `<main id="main" class="guide-main"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="guides.html">Guides</a> / ${E(g.h1)}</nav>
<article><h1>${E(g.h1)}</h1><p class="meta">By ${E(S.name)} | Updated <time datetime="${today}">${today}</time></p>
<p class="take"><b>Quick answer:</b> ${E(g.take)}</p>
<nav class="toc" aria-label="Table of contents"><b>In this guide</b><ol>${g.sections.map((s, i) => `<li><a href="#${ids[i]}">${E(s.h)}</a></li>`).join('')}<li><a href="#faq">FAQ</a></li></ol></nav>
${g.sections.map((s, i) => `<section id="${ids[i]}"><h2>${E(s.h)}</h2>${(s.p || []).map(t => `<p>${E(t)}</p>`).join('')}${s.ul ? `<ul>${s.ul.map(t => `<li>${E(t)}</li>`).join('')}</ul>` : ''}</section>`).join('')}
<section id="products"><h2>Related products from ${E(S.short)}</h2><div class="cards">${prods.map(gCard).join('')}</div></section>
<section id="faq"><h2>Frequently asked questions</h2>${g.faq.map(f => `<details><summary>${E(f[0])}</summary><p>${E(f[1])}</p></details>`).join('')}</section>
<div class="cta"><a class="btn" href="https://wa.me/${E(S.whatsapp)}?text=${encodeURIComponent('Hi, I read your guide: ' + g.h1 + '. I need a quote.')}">Get a quote on WhatsApp</a><a class="btn o" href="contact.html">Contact us</a></div>
<p class="meta">More: ${GUIDES.filter(x => x !== g).map(x => `<a href="${x.slug}.html">${E(x.h1)}</a>`).join(' | ')}</p></article></main>`;
  const ld = [org, website, crumbs(url, [['Home', U + '/'], ['Guides', U + '/guides.html'], [g.h1, url]]),
    webpage(m, url, 'WebPage', { mainEntity: { '@id': url + '#article' }, speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.take'] } }),
    { '@type': 'TechArticle', '@id': url + '#article', headline: g.h1, description: g.desc, inLanguage: 'en-IN', datePublished: today, dateModified: today, mainEntityOfPage: { '@id': url + '#webpage' }, author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, image: m.image ? [abs(m.image)] : [abs(S.ogImage || S.hero.image)], mentions: prods.map(p => ({ '@id': pUrl(p) + '#webpage' })) },
    faqLd(url, g.faq)];
  w(m.file, gShell(m, url, ld, body, 'article'));
});
if (GUIDES.length) {
  const url = U + '/guides.html', m = { file: 'guides.html', title: 'Drone Electronics Guides | Flight Controllers, ESC, GPS', desc: 'Practical guides on drone flight controllers, AM32 ESCs, GPS modules, ELRS receivers and FPV stacks by Space and Tech.' };
  const body = `<main id="main" class="guide-main"><nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / Guides</nav><h1>Drone electronics guides</h1><p>Straight answers for builders in India: how to choose, size and wire flight controllers, ESCs, GPS modules and receivers.</p><ul class="glist">${GUIDES.map(g => `<li><a href="${g.slug}.html">${E(g.h1)}</a><p>${E(g.desc)}</p></li>`).join('')}</ul></main>`;
  w('guides.html', gShell(m, url, [org, website, crumbs(url, [['Home', U + '/'], ['Guides', url]]),
    webpage(m, url, 'CollectionPage', { mainEntity: { '@id': url + '#list' } }),
    { '@type': 'ItemList', '@id': url + '#list', itemListElement: GUIDES.map((g, i) => ({ '@type': 'ListItem', position: i + 1, url: gUrl(g), name: g.h1 })) }], body));
}
collections.forEach(c => {
  const file = c.slug + '.html', url = U + '/' + file;
  const m = { file, title: c.title, desc: c.description, image: c.products.map(realImg).find(Boolean) };
  const guide = GUIDES.find(g => g.slug === c.guide);
  const body = `<main id="main" class="guide-main">
<nav class="crumb" aria-label="Breadcrumb"><a href="/">Home</a> / <a href="products.html">Products</a> / ${E(c.category)}</nav>
<h1>${E(c.title)}</h1><p class="lead">${E(c.description)}</p>
<section><h2>Compare products</h2><div class="cards">${c.products.map(gCard).join('')}</div></section>
<section><h2>What to check before you choose</h2><p>${E(c.advice)}</p>${guide ? `<p><a href="${guide.slug}.html">${E(guide.h1)}</a></p>` : ''}</section>
<div class="cta"><a class="btn" href="contact.html">Ask about compatibility or pricing</a><a class="btn o" href="products.html">View all products</a></div>
</main>`;
  const listId = url + '#list';
  const ld = [org, website, crumbs(url, [['Home', U + '/'], ['Products', U + '/products.html'], [c.category, url]]),
    webpage(m, url, 'CollectionPage', { mainEntity: { '@id': listId } }),
    { '@type': 'ItemList', '@id': listId, itemListElement: c.products.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: pUrl(p), name: p.name })) }];
  w(file, gShell(m, url, ld, body, undefined, 'collection'));
});
/* PWA manifest + IndexNow key file */
w('manifest.webmanifest', JSON.stringify({ name: S.name, short_name: S.short, start_url: '/', display: 'standalone', background_color: '#0a0a0b', theme_color: '#0a0a0b', icons: [{ src: S.appleIcon || S.logo, sizes: '180x180', type: 'image/png' }, { src: S.favicon, sizes: '192x192', type: 'image/png' }] }));
const INDEXNOW_KEY = require('crypto').createHash('md5').update(U).digest('hex');
w(INDEXNOW_KEY + '.txt', INDEXNOW_KEY);

/* 404.html: noindex, not in sitemap */
{
  const m = { file: '404.html', title: 'Page not found | ' + S.short, desc: 'This page does not exist. Browse our drone flight controllers, ESCs and GPS modules.', robots: 'noindex,follow' };
  const body = `<main><h1>Page not found</h1><p>The page you are looking for does not exist or has moved.</p><p><a href="/">Go to the home page</a> or see all <a href="products.html">drone flight controllers, ESCs and GPS modules</a>.</p></main>`;
  w('404.html', shell(m, U + '/404.html', [org], 'data-page="notfound"', body).replace('<link rel="canonical" href="' + U + '/404.html">\n', '').replace(/<link rel="alternate" hreflang[^>]*>\n/g, '').replace(SCRIPTS, '').replace('<head>', '<head>\n<base href="/">'));
}

/* ---------------- sitemap.xml ---------------- */
const pages = Object.keys(pageType).map(key => META[key].path);
pages.push(...collections.map(c => c.slug + '.html'));
if (GUIDES.length) pages.push('guides.html', ...GUIDES.map(g => g.slug + '.html'));
const indexedProducts = S.products.filter(p => !p.noindex);
const sitemapEntry = (url, image) => `  <url><loc>${E(url)}</loc>${image ? `<image:image><image:loc>${E(abs(image))}</image:loc></image:image>` : ''}</url>`;
w('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
  pages.map(p => sitemapEntry(U + '/' + p)).concat(indexedProducts.map(p => sitemapEntry(pUrl(p), realImg(p)))).join('\n') + `\n</urlset>\n`);

/* ---------------- robots.txt (search + AI crawlers allowed) ---------------- */
const bots = ['Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Perplexity-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'Amazonbot', 'CCBot', 'meta-externalagent', 'DuckAssistBot', 'MistralAI-User', 'cohere-ai'];
const PRIVATE = ['/editor.html', '/product-admin.html', '/admin-server.js', '/start-admin.bat', '/build.js', '/export-wix.js', '/indexnow.js', '/wix-export/', '/README.txt', '/product.html'];
const rules = PRIVATE.map(p => `Disallow: ${p}`).join('\n');
w('robots.txt', `# Search engines and AI answer engines are welcome. To opt out of AI training only, change that bot to "Disallow: /".\nUser-agent: *\nAllow: /\n${rules}\n\n` +
  bots.map(b => `User-agent: ${b}\nAllow: /\n${rules}\n`).join('\n') + `\nSitemap: ${U}/sitemap.xml\n`);

/* ---------------- llms.txt + llms-full.txt (for AI assistants) ---------------- */
const allFaq = S.faq.map(f => [f.q, f.a]);
w('llms.txt', `# ${S.name}\n\n> ${S.tagline}. ${intro}\n\nKey facts:\n- Offices: India (registered office and product development centre).\n- Use cases: agriculture, survey and mapping, defence and industrial, FPV racing, education, startups.\n- OEM and bulk orders: ${S.email}, ${S.phone}.\n\n## Product collections\n` +
  collections.map(c => `- [${c.title}](${U}/${c.slug}.html): ${c.description}`).join('\n') + '\n\n## Products\n' +
  avail.map(p => `- [${p.name}](${pUrl(p)}): ${p.short}`).join('\n') + (soon.length ? `\n\n## Coming soon\n` + soon.map(p => `- ${p.name}`).join('\n') : '') +
  `\n\n## Guides\n` + GUIDES.map(g => `- [${g.h1}](${gUrl(g)}): ${g.desc}`).join('\n') + `\n- [Documentation, pinouts and calibration](${S.docsUrl})\n\n## Company\n- [Home](${U}/)\n- [All products](${U}/products.html)\n- [About](${U}/about.html)\n- [Contact](${U}/contact.html)\n${S.legal.pages.map(L => `- [${L.nav}](${U}/${L.slug}.html)\n`).join('')}\n## Contact\n- Phone / WhatsApp: ${S.phone}\n- Email: ${S.email}\n` + S.about.offices.map(o => `- ${o.role}: ${o.address}`).join('\n') + '\n');
w('llms-full.txt', `# ${S.name}\n\n> ${S.tagline}\n\n${intro}\n\n${S.about.text}\n\n` +
  S.products.map(p => `## ${p.name}\nCategory: ${p.category}\nStatus: ${p.status === 'soon' ? 'Coming soon' : 'Available'}\nURL: ${pUrl(p)}\n\n${p.description}\n` +
    (p.features.length ? `\nHighlights:\n${p.features.map(f => '- ' + f).join('\n')}\n` : '') + (p.specs.length ? `\nSpecifications:\n${p.specs.map(s => `- ${s[0]}: ${s[1]}`).join('\n')}\n` : '') + (p.docs.length ? `\nDocs:\n${p.docs.map(d => `- ${d.label}: ${d.url}`).join('\n')}\n` : '')).join('\n') +
  `\n\n## Frequently asked questions\n` + allFaq.map(f => `Q: ${f[0]}\nA: ${f[1]}\n`).join('\n') + `\n## Contact\nPhone: ${S.phone}\nEmail: ${S.email}\n` + S.about.offices.map(o => `${o.role}: ${o.address}`).join('\n') + '\n');

if (warn.length) console.log('WARNINGS:\n' + warn.join('\n'));
console.log(`Done: sitemap.xml (${pages.length + indexedProducts.length} URLs), robots.txt, llms.txt, llms-full.txt`);
