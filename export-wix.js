/* EXPORT-WIX.JS - data.js se Wix ke liye taiyaar files banata hai (koi package nahi chahiye).
   Chalane ka tarika:   node export-wix.js
   Agar images images/ folder me hain aur site Netlify par live hai:   node export-wix.js --base https://aapki-site.netlify.app
   (--base ke bina SITE.url use hota hai; images/ wali photos ka link wahi se banta hai. Wixstatic links jaise the waise rehte hain.)

   Banta hai  wix-export/ folder me:
     products.csv       Wix CMS me import karne ke liye (CMS -> Create Collection -> Import from CSV). UTF-8, comma separated.
     site-content.md    Poori site ka text ek jagah (Wix me paste karne / check karne ke liye)
     aria-prompt.txt    Wix Harmony "Create from URL" ke extra instructions me paste karne ka prompt
*/
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = __dirname, OUT = path.join(ROOT, 'wix-export');
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8'), ctx);
const S = ctx.window.SITE;
const bi = process.argv.indexOf('--base');
const BASE = (bi > -1 && process.argv[bi + 1] ? process.argv[bi + 1] : S.url).replace(/\/+$/, '');
const abs = u => !u ? '' : /^https?:/i.test(u) ? u : BASE + '/' + String(u).replace(/^\//, '');
const list = a => (a || []).join('\n');

/* ---------- products.csv ---------- */
const cell = v => { v = v == null ? '' : String(v); return /[",\r\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
const cols = ['title', 'slug', 'category', 'also_in_categories', 'status', 'featured', 'main_image', 'gallery_images', 'short_description',
  'description', 'features', 'specifications', 'best_for', 'faq', 'documents', 'buy_link', 'video_design', 'video_bench', 'video_fly', 'page_url', 'hidden_from_search'];
const rows = S.products.map(p => {
  const j = p.journey || {}, v = k => (j[k] && j[k].video) || '';
  return [p.name, p.slug, p.category, list(p.also), p.status === 'soon' ? 'Coming soon' : 'Available', p.featured ? 'TRUE' : 'FALSE',
    abs(p.image), list((p.gallery || []).map(abs)), p.short, p.description, list(p.features),
    (p.specs || []).map(s => s[0] + ': ' + s[1]).join('\n'), list(p.bestFor),
    (p.faq || []).map(f => 'Q: ' + f.q + '\nA: ' + f.a).join('\n\n'), (p.docs || []).map(d => d.label + ': ' + d.url).join('\n'),
    p.buyUrl || '', v('design'), v('bench'), v('fly'), BASE + '/' + p.slug + '.html', p.noindex ? 'TRUE' : 'FALSE'];
});
const csv = [cols].concat(rows).map(r => r.map(cell).join(',')).join('\r\n') + '\r\n';

/* ---------- site-content.md ---------- */
const md = [];
const H = (n, t) => md.push('\n' + '#'.repeat(n) + ' ' + t + '\n');
const P = t => t && md.push(String(t) + '\n');
const UL = a => (a || []).length && md.push(a.map(x => '- ' + x).join('\n') + '\n');
md.push('# ' + S.name + ' : website content\n\nIs file me site ka saara text hai (data.js se). Wix me paste karne ya check karne ke liye.\n');
H(2, 'Contact and company');
UL(['Tagline: ' + S.tagline, 'Phone: ' + S.phone, 'WhatsApp: https://wa.me/' + S.whatsapp, 'Email: ' + S.email,
  'Registered office: ' + (S.company && S.company.registeredOffice || ''), 'Documentation: ' + S.docsUrl].concat((S.social || []).map(s => s.label + ': ' + s.url)));
H(2, 'Home page');
P(S.hero && S.hero.title); P(S.hero && S.hero.text);
H(3, 'Numbers'); UL((S.stats || []).map(s => s.n + (s.s || '') + ' ' + s.l));
H(3, 'Ticker'); UL(S.ticker);
if (S.manifesto) { H(3, 'Manifesto'); P(typeof S.manifesto === 'string' ? S.manifesto : JSON.stringify(S.manifesto)); }
H(3, 'From bench to sky (process)'); UL((S.process || []).map(s => '**' + s.t + '**: ' + s.x));
H(3, 'Applications'); UL((S.apps || []).map(a => '**' + a.t + '**: ' + a.x + ' (products: ' + (a.p || []).join(', ') + ')'));
H(2, 'Product categories'); UL(S.categories);
H(2, 'Products');
S.products.forEach(p => {
  H(3, p.name + (p.status === 'soon' ? ' (coming soon)' : ''));
  UL(['Category: ' + p.category + ((p.also || []).length ? ' (also: ' + p.also.join(', ') + ')' : ''), 'Page: ' + BASE + '/' + p.slug + '.html', 'Image: ' + abs(p.image)]);
  P(p.short); P(p.description);
  if ((p.features || []).length) { md.push('**Highlights**\n'); UL(p.features); }
  if ((p.specs || []).length) { md.push('**Specifications**\n'); UL(p.specs.map(s => s[0] + ': ' + s[1])); }
  if ((p.bestFor || []).length) { md.push('**Best for**\n'); UL(p.bestFor); }
  if ((p.faq || []).length) { md.push('**FAQ**\n'); UL(p.faq.map(f => '**' + f.q + '** ' + f.a)); }
  if ((p.docs || []).length) { md.push('**Documents**\n'); UL(p.docs.map(d => d.label + ': ' + d.url)); }
});
H(2, 'About');
const A = S.about || {};
Object.keys(A).forEach(k => {
  const v = A[k]; H(3, k);
  if (typeof v === 'string') P(v);
  else if (Array.isArray(v)) UL(v.map(x => typeof x === 'string' ? x : Object.values(x).filter(y => typeof y === 'string' || typeof y === 'number').join(' : ')));
  else P('```json\n' + JSON.stringify(v, null, 1) + '\n```');
});
H(2, 'Site FAQ'); UL((S.faq || []).map(f => '**' + f.q + '** ' + f.a));
const content = md.join('\n');

/* ---------- aria-prompt.txt ---------- */
const cats = S.categories.join(', ');
const prompt = `Rebuild this site faithfully. Do not invent content, prices, certifications or approvals. Use only the text already on the source site.

Brand: Indian drone electronics company (${S.name}). Look: black background, white text, saffron/orange glow accents (#FF9A2E, gold #FFD36B). Use the logo from the source site.

Pages: Home, Products, one page per product (use a CMS "Products" collection with a dynamic item page), About, Contact, Terms, Privacy, Disclaimer, Grievance, Product regulatory.
Home order: full-width image slider (no text on it), "Technology solutions" product grid, "Configure your drone stack", "From bench to sky" process steps, then a "Talk to our engineers" call-to-action.
Products page: filter buttons for ${cats}. Product page: photo gallery, short description, highlights, specifications table, best-for list, FAQ, documents links, "Get a quote" button and "Get a quote on WhatsApp" button (https://wa.me/${S.whatsapp}). Coming-soon products show "Ask about launch" instead.
Contact: phone ${S.phone}, email ${S.email}, address ${(S.company && S.company.registeredOffice) || ''}, plus a quote request form.
Keep the existing "we do not claim DGCA/WPC approval" regulatory wording exactly as on the source.`;

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'products.csv'), csv);
fs.writeFileSync(path.join(OUT, 'site-content.md'), content);
fs.writeFileSync(path.join(OUT, 'aria-prompt.txt'), prompt + '\n');
console.log('wix-export/ taiyaar:\n  products.csv (' + rows.length + ' products)\n  site-content.md\n  aria-prompt.txt (' + prompt.length + ' akshar)\n  image/page base: ' + BASE);
const local = S.products.flatMap(p => [p.image].concat(p.gallery || [])).filter(u => u && !/^https?:/i.test(u));
if (local.length) console.log('\nDhyan: ' + local.length + ' photo(s) images/ folder me hain, unka link ' + BASE + '/... banega. Site live hone ke baad hi Wix me dikhengi.');
