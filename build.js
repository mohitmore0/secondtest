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
/* HIDDEN products: unka purana <slug>.html bhi hata do (taaki seedha link se bhi na khule) */
(S.allProducts || []).filter(p => p.hidden && /^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)).forEach(p => {
  try { fs.unlinkSync(__dirname + '/' + p.slug + '.html'); console.log('Hidden product, page hata diya: ' + p.slug + '.html'); } catch (_) {} });
/* NOIMAGE: jis local image file disk par nahi hai uski jagah images/noimage.png (data.js khali image pehle se handle karta hai) */
{ const okImg = u => !u || /^https?:/i.test(u) || fs.existsSync(__dirname + '/' + String(u).replace(/^\//, ''));
  S.products.forEach(p => {
    if (!okImg(p.image)) { console.log('Image nahi mili (' + p.image + ') -> noimage: ' + p.slug); p.image = 'images/noimage.png'; p.noimg = true; }
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
const VER = (() => { const h = require('crypto').createHash('md5'); ['data.js', 'layout.js', 'app.js', 'fx.js', 'fx2.js', 'fx3.js', 'fx4.js', 'style.css', 'fx2.css', 'fx3.css', 'fx4.css', 'saffron.css'].forEach(f => { try { h.update(fs.readFileSync(__dirname + '/' + f)); } catch (e) {} }); return h.digest('hex').slice(0, 8); })();
const E = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
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

/* ---------------- page meta ---------------- */
const META = {
  home: { file: 'index.html', path: '', title: 'Indian Drone Flight Controllers, ESCs & GPS | Space and Tech',
    desc: 'Indian drone flight controllers, AM32 ESCs and UAV GPS modules by Aazmuth, Skydrive and NAVSATE. Designed in India.' },
  products: { file: 'products.html', path: 'products.html', title: 'Drone Flight Controllers, ESCs & GPS Modules | Products',
    desc: 'Aazmuth and Exelr8 flight controllers, Skydrive AM32 ESCs (40A, 60A, 55A 4-in-1) and NAVSATE GPS modules for UAV and FPV drones.' },
  about: { file: 'about.html', path: 'about.html', title: 'About Space and Tech Engineering | Drone Electronics, India',
    desc: 'A small team of hardware and firmware engineers in India building flight controllers, ESCs and GPS for Indian drone builders.' },
  contact: { file: 'contact.html', path: 'contact.html', title: 'Contact Space and Tech Engineering | Get an OEM Quote',
    desc: `Call or WhatsApp ${S.phone} or email us for OEM quotes on flight controllers, AM32 ESCs and GPS modules. India.` }
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
const webpage = (m, url, type, extra) => Object.assign({ '@type': type || 'WebPage', '@id': url + '#webpage', url, name: m.title, description: m.desc, isPartOf: { '@id': WEB_ID }, about: { '@id': ORG_ID }, inLanguage: 'en-IN', breadcrumb: { '@id': url + '#breadcrumb' } }, extra || {});
const faqLd = (url, list) => ({ '@type': 'FAQPage', '@id': url + '#faq', mainEntity: list.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const graph = items => `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': items })}</script>`;
const productLd = p => {
  const imgs = [realImg(p)].concat(p.gallery || []).filter(Boolean).map(abs), url = pUrl(p);
  return { '@type': 'Product', '@id': url + '#product', name: p.name, description: p.description, image: imgs, sku: p.slug, category: p.category, url,
    brand: { '@type': 'Brand', name: S.short }, manufacturer: { '@id': ORG_ID },
    additionalProperty: (p.specs || []).map(s => ({ '@type': 'PropertyValue', name: s[0], value: s[1] })) };
};

/* ---------------- head ---------------- */
function seoTags(m, url, ld, og) {
  if (m.desc.length > 140) warn.push(`description too long for pixel limit (${m.desc.length}): ${m.file}`);
  const img = abs(m.image || S.ogImage || S.hero.image);
  return `<title>${E(m.title)}</title>
<meta name="description" content="${E(m.desc)}">
<meta name="robots" content="${m.robots || 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'}">
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
const foot = `<footer><p>&copy; ${S.year} ${E(S.name)}. ${E(S.tagline)}. ${E(S.phone)} | <a href="mailto:${E(S.email)}">${E(S.email)}</a></p><p>${E(S.company.llpName)}${S.company.llpin ? ', LLPIN ' + E(S.company.llpin) : ''}. Registered office: ${E(S.company.registeredOffice)}</p><p>${S.legal.pages.map(L => `<a href="${L.slug}.html">${E(L.nav)}</a>`).join(' | ')} | Grievance Officer: ${S.legal.officer.name ? E(S.legal.officer.name) + ', ' : ''}<a href="mailto:${E(S.legal.officer.email)}">${E(S.legal.officer.email)}</a></p><p>Follow us: ${(S.social || []).map(s => `<a href="${E(s.url)}" rel="noopener">${E(s.label)}</a>`).join(' | ')}${S.docsUrl ? ` | <a href="${E(S.docsUrl)}" rel="noopener">Documentation</a>` : ''}</p></footer>`;
const prodList = list => `<ul>${list.map(p => `<li><a href="${pFile(p)}">${E(p.name)}</a>: ${E(p.short)}${p.status === 'soon' ? ' (coming soon)' : ''}</li>`).join('')}</ul>`;
const prodCards = list => list.map(p => `<article><a href="${pFile(p)}"><img src="${E(p.image)}" alt="${E(p.name)} ${E(p.category.replace(/s$/, ''))}" width="320" height="240" loading="lazy"></a><h3><a href="${pFile(p)}">${E(p.name)}</a></h3><p>${E(p.short)}</p></article>`).join('');
const faqHtml = list => list.map(f => `<h3>${E(f.q || f[0])}</h3><p>${E(f.a || f[1])}</p>`).join('');
const officesHtml = () => S.about.offices.map(o => `<address><b>${E(o.role)}, ${E(o.city)}</b><br>${E(o.address)}</address>`).join('');
const intro = `${S.name} is an Indian drone electronics company with offices in India. It designs and sells the Aazmuth and Exelr8 flight controllers, Skydrive AM32 ESCs and NAVSATE GPS modules for UAV and FPV builders.`;

const BODY = {
  home: () => `<main><h1>${E(S.hero.title)}</h1><p>${E(S.hero.text)}</p><p>${E(intro)}</p>` + lay('home', {
    tech: `<h2>Drone flight controllers, ESCs and GPS modules</h2>${prodList(avail)}${soon.length ? `<h2>Coming soon</h2>${prodList(soon)}` : ''}`,
    process: `<h2>How we build</h2><ul>${S.process.map(p => `<li><b>${E(p.t)}</b>: ${E(p.x)}</li>`).join('')}</ul>`
  }) + `<h2>Where we are</h2>${officesHtml()}\n<p><a href="contact.html">Request an OEM quote</a>.</p></main>`,
  products: () => `<main><h1>Drone flight controllers, ESCs and GPS modules</h1><p>${E(intro)}</p>
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
    return `<main><nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="products.html">Products</a> / ${E(p.name)}</nav>
<h1>${E(p.name)}</h1><p>${E(p.category)}${p.status === 'soon' ? ' - coming soon' : ''}</p><img src="${E(p.image)}" alt="${E(p.name)}" width="640" height="480">
<p>${E(p.description)}</p>${p.features && p.features.length ? `<h2>Highlights</h2><ul>${p.features.map(f => `<li>${E(f)}</li>`).join('')}</ul>` : ''}
${p.specs && p.specs.length ? `<h2>${E(p.name)} specifications</h2><table>${p.specs.map(s => `<tr><th scope="row">${E(s[0])}</th><td>${E(s[1])}</td></tr>`).join('')}</table>` : ''}
${p.docs && p.docs.length ? `<h2>Documentation</h2><ul>${p.docs.map(d => `<li><a href="${E(d.url)}">${E(d.label)}</a></li>`).join('')}</ul>` : ''}
<p><a href="contact.html?product=${encodeURIComponent(p.slug)}">${p.status === 'soon' ? 'Ask about launch' : 'Get a quote'}</a>${p.buyUrl && p.status !== 'soon' ? ` | <a href="${E(p.buyUrl)}">View in store</a>` : ''}</p>
${p.bestFor && p.bestFor.length ? `<h2>Best for</h2><ul>${p.bestFor.map(a => `<li>${E(a)}</li>`).join('')}</ul>` : ''}
${p.status !== 'soon' ? `<h2>From bench to sky</h2><ol>${['design', 'bench', 'fly', 'ship'].map((k, i) => { const st = S.process[i] || {}, j = (p.journey || {})[k] || {}, id = ((String(j.video || '').match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/|live\/)([\w-]{11})/) || [])[1]); return `<li><b>${E(st.t)}.</b> ${E(j.text || st.x)}${id ? ` <a href="https://www.youtube.com/watch?v=${id}">Watch the ${E(st.t.toLowerCase())} video</a>` : ''}</li>`; }).join('')}</ol>` : ''}
${p.faq && p.faq.length ? `<h2>${E(p.name)} FAQ</h2>${faqHtml(p.faq)}` : ''}
${p.status !== 'soon' ? `<p><a href="${E(waLink(p))}">Get a quote on WhatsApp</a></p>` : ''}
<h2>More products</h2>${prodList(rel)}${regNote(p)}</main>`;
  }
};
const READY = '';
const SCRIPTS = `<script src="data.js?v=${VER}"></script><script src="layout.js?v=${VER}"></script>\n<script src="app.js?v=${VER}"></script><script src="fx.js?v=${VER}"></script><script src="fx2.js?v=${VER}"></script><script src="fx3.js?v=${VER}"></script><script src="fx4.js?v=${VER}"></script>\n${READY}`;
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
${FONTS}
<link rel="stylesheet" href="style.css?v=${VER}">
<link rel="stylesheet" href="fx2.css?v=${VER}"><link rel="stylesheet" href="fx3.css?v=${VER}"><link rel="stylesheet" href="fx4.css?v=${VER}"><link rel="stylesheet" href="saffron.css?v=${VER}">
</head>
<body ${bodyAttr}>
${nav}
${body}
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
  const bits = [p.short].concat(String(p.description).split(/(?<=\.)\s+/)).concat(p.status === 'soon' ? [] : ['Made in India.', 'Get a quote from ' + S.short + '.']);
  let desc = ''; bits.forEach(t => { if (t && !desc.includes(t) && (desc + ' ' + t).trim().length <= 135) desc = (desc + ' ' + t).trim(); });
  let title = `${p.name} | ${p.category} | ${S.short}`; if (title.length > 62) title = `${p.name} | ${S.short}`;
  const m = { file: pFile(p), title, desc, image: realImg(p), imgAlt: p.name };
  if (p.noindex) m.robots = 'noindex,follow';
  if (p.status !== 'soon' && (p.specs || []).length < 3) warn.push(`THIN PRODUCT (add specs): ${p.slug}`);
  const items = [org, website, crumbs(url, [['Home', U + '/'], ['Products', U + '/products.html'], [p.name, url]]),
    webpage(m, url, 'ItemPage', { mainEntity: { '@id': url + '#product' } }), productLd(p)];
  if (p.faq && p.faq.length) items.push(faqLd(url, p.faq.map(f => [f.q, f.a])));
  w(pFile(p), shell(m, url, items, `data-page="product" data-slug="${E(p.slug)}"`, BODY.product(p), 'product'));
});

/* 404.html: noindex, not in sitemap */
{
  const m = { file: '404.html', title: 'Page not found | ' + S.short, desc: 'This page does not exist. Browse our drone flight controllers, ESCs and GPS modules.', robots: 'noindex,follow' };
  const body = `<main><h1>Page not found</h1><p>The page you are looking for does not exist or has moved.</p><p><a href="/">Go to the home page</a> or see all <a href="products.html">drone flight controllers, ESCs and GPS modules</a>.</p></main>`;
  w('404.html', shell(m, U + '/404.html', [org], 'data-page="notfound"', body).replace('<link rel="canonical" href="' + U + '/404.html">\n', '').replace(/<link rel="alternate" hreflang[^>]*>\n/g, '').replace(SCRIPTS, '').replace('<head>', '<head>\n<base href="/">'));
}

/* ---------------- sitemap.xml ---------------- */
const pages = [['', 1.0, 'weekly'], ['products.html', 0.9, 'weekly'], ['about.html', 0.6, 'monthly'], ['contact.html', 0.6, 'yearly']].concat(S.legal.pages.map(L => [L.slug + '.html', 0.3, 'yearly']));
const x = t => t.replace(/&/g, '&amp;');
w('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n` +
  pages.map(([p, pr, cf]) => `  <url><loc>${U}/${p}</loc><lastmod>${today}</lastmod><changefreq>${cf}</changefreq><priority>${pr}</priority></url>`).join('\n') + '\n' +
  S.products.filter(p => !p.noindex).map(p => `  <url><loc>${pUrl(p)}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${p.status === 'soon' ? 0.5 : 0.8}</priority>${realImg(p) ? `<image:image><image:loc>${x(abs(realImg(p)))}</image:loc><image:title>${x(E(p.name))}</image:title></image:image>` : ''}</url>`).join('\n') + `\n</urlset>\n`);

/* ---------------- robots.txt (search + AI crawlers allowed) ---------------- */
const bots = ['Googlebot', 'Bingbot', 'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Perplexity-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'Amazonbot', 'CCBot', 'meta-externalagent', 'DuckAssistBot', 'MistralAI-User', 'cohere-ai'];
const PRIVATE = ['/editor.html', '/product-admin.html', '/admin-server.js', '/start-admin.bat', '/build.js', '/export-wix.js', '/wix-export/', '/README.txt', '/product.html'];
const rules = PRIVATE.map(p => `Disallow: ${p}`).join('\n');
w('robots.txt', `# Search engines and AI answer engines are welcome. To opt out of AI training only, change that bot to "Disallow: /".\nUser-agent: *\nAllow: /\n${rules}\n\n` +
  bots.map(b => `User-agent: ${b}\nAllow: /\n${rules}\n`).join('\n') + `\nSitemap: ${U}/sitemap.xml\n`);

/* ---------------- llms.txt + llms-full.txt (for AI assistants) ---------------- */
const allFaq = S.faq.map(f => [f.q, f.a]);
w('llms.txt', `# ${S.name}\n\n> ${S.tagline}. ${intro}\n\nKey facts:\n- Products: Aazmuth and Exelr8 flight controllers, Skydrive AM32 ESCs (40A, 60A, 55A 4-in-1), NAVSATE GPS modules.\n- Offices: India (registered office and product development centre).\n- Use cases: agriculture, survey and mapping, defence and industrial, FPV racing, education, startups.\n- OEM and bulk orders: ${S.email}, ${S.phone}.\n\n## Products\n` +
  avail.map(p => `- [${p.name}](${pUrl(p)}): ${p.short}`).join('\n') + (soon.length ? `\n\n## Coming soon\n` + soon.map(p => `- ${p.name}`).join('\n') : '') +
  `\n\n## Guides\n- [Documentation, pinouts and calibration](${S.docsUrl})\n\n## Company\n- [Home](${U}/)\n- [All products](${U}/products.html)\n- [About](${U}/about.html)\n- [Contact](${U}/contact.html)\n${S.legal.pages.map(L => `- [${L.nav}](${U}/${L.slug}.html)\n`).join('')}\n## Contact\n- Phone / WhatsApp: ${S.phone}\n- Email: ${S.email}\n` + S.about.offices.map(o => `- ${o.role}: ${o.address}`).join('\n') + '\n');
w('llms-full.txt', `# ${S.name}\n\n> ${S.tagline}\n\n${intro}\n\n${S.about.text}\n\n` +
  S.products.map(p => `## ${p.name}\nCategory: ${p.category}\nStatus: ${p.status === 'soon' ? 'Coming soon' : 'Available'}\nURL: ${pUrl(p)}\n\n${p.description}\n` +
    (p.features.length ? `\nHighlights:\n${p.features.map(f => '- ' + f).join('\n')}\n` : '') + (p.specs.length ? `\nSpecifications:\n${p.specs.map(s => `- ${s[0]}: ${s[1]}`).join('\n')}\n` : '') + (p.docs.length ? `\nDocs:\n${p.docs.map(d => `- ${d.label}: ${d.url}`).join('\n')}\n` : '')).join('\n') +
  `\n\n## Frequently asked questions\n` + allFaq.map(f => `Q: ${f[0]}\nA: ${f[1]}\n`).join('\n') + `\n## Contact\nPhone: ${S.phone}\nEmail: ${S.email}\n` + S.about.offices.map(o => `${o.role}: ${o.address}`).join('\n') + '\n');

if (warn.length) console.log('WARNINGS:\n' + warn.join('\n'));
console.log(`Done: ${6 + 1 + S.products.length} HTML pages (6 site pages + legacy product.html + ${S.products.length} products), sitemap.xml (${pages.length + S.products.length} URLs), robots.txt, llms.txt, llms-full.txt`);
