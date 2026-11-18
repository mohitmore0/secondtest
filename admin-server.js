/* ADMIN-SERVER.JS - "Add product" backend (local, sirf aapke computer par).
   Chalane ka tarika:   node admin-server.js     (ya start-admin.bat double-click)
   Phir browser me:     http://localhost:3000/product-admin.html

   Ye kya karta hai:
     1) Form se product leta hai aur validate karta hai (slug unique, URL sahi, etc.)
     2) Upload ki hui photos images/ folder me save karta hai
     3) data.js ke products: [ ... ] me naya { ... } block jodta hai (purana data.js .admin-backups/ me backup hota hai)
     4) node build.js khud chalata hai (naya <slug>.html, sitemap, llms.txt sab ban jata hai)
   EDIT: maujooda product chun kar uska block data.js me badalta hai. Form me jo fields nahi hain (journey text/images,
         aur koi extra field) wo jaise the waise hi rehte hain. Slug edit me lock rehta hai (URL na tute).
   HIDE: product hide karo to wo site par kahin nahi dikhta (data.js me hidden:true, uska <slug>.html bhi hat jata hai); Unhide se wapas.
   REMOVE: product data.js se aur uska <slug>.html delete (photos images/ me rehti hain). Dono se pehle data.js ka backup banta hai.
   NOIMAGE: main photo na ho to site par images/noimage.png lagti hai.
   Koi npm package nahi chahiye. Server sirf 127.0.0.1 par sunta hai (bahar se koi access nahi kar sakta). */
const http = require('http'), fs = require('fs'), path = require('path'), vm = require('vm');
const { spawn, execFile } = require('child_process');

const ROOT = __dirname;
const DATA = path.join(ROOT, 'data.js');
const IMG_DIR = path.join(ROOT, 'images');
const BAK_DIR = path.join(ROOT, '.admin-backups');
const MAX_BODY = 60 * 1024 * 1024;       // total request
const MAX_IMG = 8 * 1024 * 1024;         // per image
const EXT = { 'image/png': 'png', 'image/jpeg': 'jpg', 'image/webp': 'webp', 'image/avif': 'avif', 'image/gif': 'gif' };
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.gif': 'image/gif',
  '.svg': 'image/svg+xml', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml' };

/* ---------------- data.js helpers ---------------- */
function loadSite(file = DATA) {
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { timeout: 2000 });
  const site = ctx.window.SITE;
  if (site && site.allProducts) site.products = site.allProducts;   // hidden products bhi (admin ko sab dikhna chahiye)
  return site;
}

/* src[open] == '[' ya '{' : uska matching band karne wala index. Strings aur comments ko skip karta hai. */
function matchBracket(src, open) {
  let depth = 0;
  for (let i = open; i < src.length; i++) {
    const c = src[i], n = src[i + 1];
    if (c === '/' && n === '/') { while (i < src.length && src[i] !== '\n') i++; continue; }
    if (c === '/' && n === '*') { i = src.indexOf('*/', i + 2); if (i < 0) return -1; i++; continue; }
    if (c === '"' || c === "'" || c === '`') {
      const q = c; i++;
      while (i < src.length && src[i] !== q) { if (src[i] === '\\') i++; i++; }
      continue;
    }
    if (c === '[' || c === '{' || c === '(') depth++;
    else if (c === ']' || c === '}' || c === ')') { depth--; if (depth === 0) return i; }
  }
  return -1;
}

function insertProduct(src, block) {
  const m = /^[ \t]*products:\s*\[/m.exec(src);
  if (!m) throw new Error('data.js me "products: [" nahi mila.');
  const open = m.index + m[0].length - 1, close = matchBracket(src, open);
  if (close < 0) throw new Error('data.js me products list ka end nahi mila (bracket match nahi hua).');
  // pichla asli (non-comment, non-space) character dhundho, taaki comma comment ke andar na lage
  let j = open;
  for (let i = open + 1; i < close; i++) {
    const c = src[i], n = src[i + 1];
    if (c === '/' && n === '/') { while (i < close && src[i] !== '\n') i++; continue; }
    if (c === '/' && n === '*') { i = src.indexOf('*/', i + 2) + 1; continue; }
    if (c === '"' || c === "'" || c === '`') { const q = c; j = i; i++; while (i < close && src[i] !== q) { if (src[i] === '\\') i++; i++; } j = i; continue; }
    if (!/\s/.test(c)) j = i;
  }
  const head = src.slice(0, j + 1), tail = src.slice(j + 1);
  const needComma = src[j] !== ',' && src[j] !== '[';
  return head + (needComma ? ',' : '') + '\n' + block + tail;
}

/* products list me slug wale { ... } block ki jagah: {start, end} (end = closing } ka index) */
function findProductBlock(src, slug) {
  const m = /^[ \t]*products:\s*\[/m.exec(src);
  if (!m) return null;
  const open = m.index + m[0].length - 1, close = matchBracket(src, open);
  if (close < 0) return null;
  for (let i = open + 1; i < close; i++) {
    const c = src[i], n = src[i + 1];
    if (c === '/' && n === '/') { while (i < close && src[i] !== '\n') i++; continue; }
    if (c === '/' && n === '*') { i = src.indexOf('*/', i + 2) + 1; continue; }
    if (c === '{') {
      const end = matchBracket(src, i);
      if (end < 0 || end > close) return null;
      const body = src.slice(i, end + 1);
      if (new RegExp('(^|[{,\\s])slug\\s*:\\s*"' + slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"').test(body)) {
        let st = i; while (st > 0 && (src[st - 1] === ' ' || src[st - 1] === '\t')) st--;
        return { start: st, end };
      }
      i = end;
    }
  }
  return null;
}
function replaceProduct(src, slug, block) {
  const b = findProductBlock(src, slug);
  if (!b) throw new Error('data.js me "' + slug + '" wala product block nahi mila.');
  return src.slice(0, b.start) + block + src.slice(b.end + 1);
}

/* ---------------- validation + product object ---------------- */
const S_ = v => String(v == null ? '' : v).trim();
const lines = v => (Array.isArray(v) ? v : S_(v).split(/\r?\n/)).map(S_).filter(Boolean);
const isUrl = u => /^https?:\/\/[^\s"'<>]+$/i.test(u);
const isLocalImg = u => /^images\/[A-Za-z0-9._\-\/]+$/.test(u) && !u.includes('..');
const slugify = s => S_(s).toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

function planImage(img, slug, label, taken, errors) {
  // returns { path, write? }  (write = {abs, buf})
  if (!img) return null;
  if (img.type === 'url' || img.value) {
    const v = S_(img.value);
    if (!v) return null;
    if (!isUrl(v) && !isLocalImg(v)) { errors.push(`${label}: link https://... se shuru hona chahiye (ya images/naam.jpg).`); return null; }
    return { path: v };
  }
  if (img.type === 'file') {
    const mm = /^data:([a-z\/+\-]+);base64,([A-Za-z0-9+\/=]+)$/.exec(S_(img.data));
    if (!mm || !EXT[mm[1]]) { errors.push(`${label}: sirf PNG, JPG, WEBP, AVIF ya GIF photo chalegi.`); return null; }
    const buf = Buffer.from(mm[2], 'base64');
    if (buf.length > MAX_IMG) { errors.push(`${label}: photo 8 MB se badi hai. Chhoti karke dobara daalo.`); return null; }
    const base = label === 'Main image' ? `${slug}-main` : `${slug}-gallery-${++taken.gal}`;
    let name = `${base}.${EXT[mm[1]]}`, k = 1;
    while ((fs.existsSync(path.join(IMG_DIR, name)) || taken.names.has(name)) && k < 50) name = `${base}-${++k}.${EXT[mm[1]]}`;
    taken.names.add(name);
    return { path: 'images/' + name, write: { abs: path.join(IMG_DIR, name), buf } };
  }
  return null;
}

const MANAGED = ['slug', 'name', 'category', 'also', 'status', 'featured', 'noindex', 'image', 'gallery', 'journey', 'short', 'description', 'features', 'specs', 'bestFor', 'faq', 'docs', 'buyUrl', 'hidden'];

function buildProduct(inp, site, editSlug) {
  const errors = [], writes = [];
  const old = editSlug ? (site.products || []).find(p => p.slug === editSlug) : null;
  if (editSlug && !old) errors.push('Ye product data.js me nahi mila: ' + editSlug);
  const name = S_(inp.name), slug = editSlug || S_(inp.slug) || slugify(name);
  const cats = site.categories || [];
  if (name.length < 3) errors.push('Product ka naam likho (kam se kam 3 akshar).');
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) errors.push('Slug sirf chhote akshar, number aur "-" ho sakta hai (e.g. skydrive-am32-80a).');
  if (editSlug) { /* edit me slug lock hai */ }
  else if ((site.products || []).some(p => p.slug === slug)) errors.push(`Slug "${slug}" pehle se kisi product ka hai. Doosra slug rakho.`);
  else if (slug && fs.existsSync(path.join(ROOT, slug + '.html'))) errors.push(`"${slug}.html" naam ki file pehle se hai (koi page). Doosra slug rakho.`);
  const category = S_(inp.category);
  if (!cats.includes(category)) errors.push('Category list me se chuno.');
  const also = lines(inp.also).filter(c => cats.includes(c) && c !== category);
  const status = inp.status === 'soon' ? 'soon' : 'available';
  const short = S_(inp.short).replace(/\s+/g, ' '), description = S_(inp.description).replace(/\s+/g, ' ');
  if (short.length < 10) errors.push('Short line likho (ek line ka summary).');
  if (description.length < 30) errors.push('Description thodi badi likho (kam se kam 2 sentence).');

  const taken = { names: new Set(), gal: 0 };
  const main = planImage(inp.image, slug, 'Main image', taken, errors);
  const gallery = (Array.isArray(inp.gallery) ? inp.gallery : []).map(g => planImage(g, slug, 'Gallery image', taken, errors)).filter(Boolean);
  [main].concat(gallery).forEach(x => x && x.write && writes.push(x.write));

  const features = lines(inp.features), bestFor = lines(inp.bestFor);
  const specs = (Array.isArray(inp.specs) ? inp.specs : []).map(r => [S_(r[0]), S_(r[1])]).filter(r => r[0] && r[1]);
  const faq = (Array.isArray(inp.faq) ? inp.faq : []).map(r => ({ q: S_(r.q), a: S_(r.a) })).filter(r => r.q && r.a);
  const docs = (Array.isArray(inp.docs) ? inp.docs : []).map(r => ({ label: S_(r.label), url: S_(r.url) })).filter(r => r.label || r.url);
  docs.forEach(d => { if (!d.label || !isUrl(d.url)) errors.push(`Document link adhura hai: "${d.label || d.url}" (label + https://... dono chahiye).`); });
  const buyUrl = S_(inp.buyUrl);
  if (buyUrl && !isUrl(buyUrl)) errors.push('Buy link https://... se shuru hona chahiye.');
  const J = inp.journey || {}, yt = k => S_(J[k]);
  ['design', 'bench', 'fly'].forEach(k => { if (yt(k) && !isUrl(yt(k))) errors.push(`Video link (${k}) https://... hona chahiye.`); });

  const p = { slug, name, category };
  if (also.length) p.also = also;
  p.status = status; p.featured = !!inp.featured;
  if (inp.noindex) p.noindex = true;
  if (inp.hidden) p.hidden = true;
  p.image = main ? main.path : '';   // khali = site par images/noimage.png lagta hai
  p.gallery = gallery.map(g => g.path);
  const oj = (old && old.journey) || null, vids = { design: yt('design'), bench: yt('bench'), fly: yt('fly') };
  if (!old || oj || vids.design || vids.bench || vids.fly) {
    p.journey = {};
    ['design', 'bench', 'fly'].forEach(k => { const o = (oj && oj[k]) || {}; p.journey[k] = { text: o.text || '', imgs: o.imgs || [], video: vids[k] }; });
  }
  p.short = short; p.description = description; p.features = features; p.specs = specs; p.bestFor = bestFor; p.faq = faq; p.docs = docs;
  if (buyUrl) p.buyUrl = buyUrl;
  // form me na dikhne wali purani extra fields jaisi thi waisi rakho
  if (old) Object.keys(old).filter(k => !MANAGED.includes(k)).forEach(k => { p[k] = old[k]; });

  const warnings = [];
  if (!main) warnings.push('Main photo nahi di: site par images/noimage.png dikhegi. Photo baad me edit karke daal sakte ho.');
  if (inp.hidden) warnings.push('Product HIDDEN hai: site par kahin nahi dikhega (admin me dikhta rahega).');
  if (status !== 'soon' && specs.length < 3) warnings.push('Specs 3 se kam hain: Google ke liye product "thin" maana jayega. Ho sake to aur specs daalo.');
  if (!features.length) warnings.push('Features khali hain. 3-5 benefit lines daalna better rehta hai.');
  if (status !== 'soon' && !faq.length) warnings.push('FAQ khali hai. 2-3 sawal-jawab daalne se search me madad milti hai.');
  return { errors, warnings, product: p, writes };
}

/* data.js ke style me product ka code */
function productCode(p) {
  const J = JSON.stringify, ind = '      ';
  const arr = (a, pad) => a.length ? '[\n' + a.map(x => pad + '  ' + x).join(',\n') + '\n' + pad + ']' : '[]';
  const L = [];   // har entry ek line/block; end me ",\n" se judti hain
  L.push(`slug: ${J(p.slug)}, name: ${J(p.name)}, category: ${J(p.category)}`);
  L.push((p.also ? `also: ${J(p.also)}, ` : '') + `status: ${J(p.status)}, featured: ${!!p.featured}` + (p.noindex ? ', noindex: true' : '') + (p.hidden ? ', hidden: true' : ''));
  L.push(`image: ${J(p.image)}, gallery: ${J(p.gallery || [])}`);
  if (p.journey) {
    const jl = ['design', 'bench', 'fly'].map(k => { const o = p.journey[k] || {}; return `${ind}  ${k.padEnd(6)}: { text: ${J(o.text || '')}, imgs: ${J(o.imgs || [])}, video: ${J(o.video || '')} }`; });
    L.push(`journey: {\n${jl.join(',\n')}\n${ind}}`);
  }
  L.push(`short: ${J(p.short)}`);
  L.push(`description: ${J(p.description)}`);
  L.push(`features: ${J(p.features || [])}`);
  L.push(`specs: [${(p.specs || []).map(x => J(x)).join(',')}]`);
  if (p.bestFor && p.bestFor.length) L.push(`bestFor: ${J(p.bestFor)}`);
  L.push(`faq: ${arr((p.faq || []).map(f => `{ q: ${J(f.q)}, a: ${J(f.a)} }`), ind)}`);
  L.push(`docs: ${arr((p.docs || []).map(d => `{ label: ${J(d.label)}, url: ${J(d.url)} }`), ind)}`);
  if (p.buyUrl) L.push(`buyUrl: ${J(p.buyUrl)}`);
  Object.keys(p).filter(k => !MANAGED.includes(k)).forEach(k => L.push(`${/^[A-Za-z_$][\w$]*$/.test(k) ? k : J(k)}: ${J(p[k])}`));
  return `    {\n${L.map(x => ind + x).join(',\n')}\n    }`;
}

/* ---------------- add flow ---------------- */
function runBuild() {
  return new Promise(resolve => {
    const ch = spawn(process.execPath, ['build.js'], { cwd: ROOT });
    let out = '';
    ch.stdout.on('data', d => out += d); ch.stderr.on('data', d => out += d);
    ch.on('close', code => resolve({ ok: code === 0, out: out.trim() }));
    ch.on('error', e => resolve({ ok: false, out: String(e) }));
  });
}

function backup(orig) {
  fs.mkdirSync(BAK_DIR, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  fs.writeFileSync(path.join(BAK_DIR, `data.${stamp}.js`), orig);
  const old = fs.readdirSync(BAK_DIR).filter(f => /^data\..*\.js$/.test(f)).sort();
  old.slice(0, Math.max(0, old.length - 30)).forEach(f => fs.unlinkSync(path.join(BAK_DIR, f)));
}

async function addProduct(inp) {
  const site = loadSite();
  const r = buildProduct(inp, site);
  if (r.errors.length) return { ok: false, errors: r.errors };

  const orig = fs.readFileSync(DATA, 'utf8');
  const next = insertProduct(orig, productCode(r.product));

  // naye data.js ko pehle temp file me parse karke check karo: galat hua to kuch bhi save nahi hoga
  const tmp = path.join(ROOT, '.data.check.js');
  fs.writeFileSync(tmp, next);
  try {
    const chk = loadSite(tmp);
    const added = chk.products[chk.products.length - 1];
    if (chk.products.length !== site.products.length + 1 || !added || added.slug !== r.product.slug) throw new Error('product sahi jagah add nahi hua');
  } catch (e) {
    return { ok: false, errors: ['data.js update safe nahi tha, isliye kuch change nahi kiya. (' + e.message + ')'] };
  } finally { try { fs.unlinkSync(tmp); } catch (_) {} }

  backup(orig);
  fs.mkdirSync(IMG_DIR, { recursive: true });
  r.writes.forEach(w => fs.writeFileSync(w.abs, w.buf));
  fs.writeFileSync(DATA + '.new', next);
  fs.renameSync(DATA + '.new', DATA);

  const b = await runBuild();
  return { ok: true, slug: r.product.slug, page: r.product.slug + '.html', warnings: r.warnings, build: b, images: r.writes.map(w => 'images/' + path.basename(w.abs)) };
}

async function updateProduct(inp) {
  const editSlug = S_(inp.editSlug);
  const site = loadSite();
  const r = buildProduct(inp, site, editSlug);
  if (r.errors.length) return { ok: false, errors: r.errors };

  const orig = fs.readFileSync(DATA, 'utf8');
  let next;
  try { next = replaceProduct(orig, editSlug, productCode(r.product)); }
  catch (e) { return { ok: false, errors: [e.message] }; }

  const tmp = path.join(ROOT, '.data.check.js');
  fs.writeFileSync(tmp, next);
  try {
    const chk = loadSite(tmp), idx = site.products.findIndex(p => p.slug === editSlug);
    const same = chk.products.length === site.products.length && chk.products.every((p, i) => p.slug === site.products[i].slug);
    if (!same || chk.products[idx].name !== r.product.name) throw new Error('product sahi jagah update nahi hua');
    // baaki products bilkul same hone chahiye
    chk.products.forEach((p, i) => { if (i !== idx && JSON.stringify(p) !== JSON.stringify(site.products[i])) throw new Error('doosra product badal raha tha'); });
  } catch (e) {
    return { ok: false, errors: ['data.js update safe nahi tha, isliye kuch change nahi kiya. (' + e.message + ')'] };
  } finally { try { fs.unlinkSync(tmp); } catch (_) {} }

  backup(orig);
  fs.mkdirSync(IMG_DIR, { recursive: true });
  r.writes.forEach(w => fs.writeFileSync(w.abs, w.buf));
  fs.writeFileSync(DATA + '.new', next);
  fs.renameSync(DATA + '.new', DATA);

  const b = await runBuild();
  return { ok: true, edited: true, slug: editSlug, page: editSlug + '.html', warnings: r.warnings, build: b, images: r.writes.map(w => 'images/' + path.basename(w.abs)) };
}


/* ---------------- hide / unhide / remove ---------------- */
function checkAndCommit(orig, next, verify) {
  const tmp = path.join(ROOT, '.data.check.js');
  fs.writeFileSync(tmp, next);
  try { verify(loadSite(tmp)); }
  catch (e) { return 'data.js update safe nahi tha, isliye kuch change nahi kiya. (' + e.message + ')'; }
  finally { try { fs.unlinkSync(tmp); } catch (_) {} }
  backup(orig);
  fs.writeFileSync(DATA + '.new', next);
  fs.renameSync(DATA + '.new', DATA);
  return null;
}

async function hideProduct(inp) {
  const slug = S_(inp.slug), hide = !!inp.hidden;
  const site = loadSite(), old = site.products.find(p => p.slug === slug);
  if (!old) return { ok: false, errors: ['Ye product data.js me nahi mila: ' + slug] };
  const p = Object.assign({}, old); if (hide) p.hidden = true; else delete p.hidden;
  const orig = fs.readFileSync(DATA, 'utf8');
  let next; try { next = replaceProduct(orig, slug, productCode(p)); } catch (e) { return { ok: false, errors: [e.message] }; }
  const idx = site.products.findIndex(x => x.slug === slug);
  const err = checkAndCommit(orig, next, chk => {
    const same = chk.products.length === site.products.length && chk.products.every((x, i) => x.slug === site.products[i].slug);
    if (!same || !!chk.products[idx].hidden !== hide) throw new Error('hide/unhide sahi nahi hua');
    chk.products.forEach((x, i) => { if (i !== idx && JSON.stringify(x) !== JSON.stringify(site.products[i])) throw new Error('doosra product badal raha tha'); });
  });
  if (err) return { ok: false, errors: [err] };
  const b = await runBuild();   // build.js hidden product ka <slug>.html khud hata deta hai
  return { ok: true, slug, hidden: hide, build: b };
}

async function removeProduct(inp) {
  const slug = S_(inp.slug);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) return { ok: false, errors: ['Slug galat hai.'] };
  const site = loadSite();
  if (!site.products.some(p => p.slug === slug)) return { ok: false, errors: ['Ye product data.js me nahi mila: ' + slug] };
  const orig = fs.readFileSync(DATA, 'utf8'), b0 = findProductBlock(orig, slug);
  if (!b0) return { ok: false, errors: ['data.js me "' + slug + '" ka block nahi mila.'] };
  // block ke aage/peeche ka comma bhi hatao (block se pehle wali blank/space line saaf)
  let st = b0.start, en = b0.end + 1;
  while (st > 0 && /\s/.test(orig[st - 1])) st--;            // pehle ka whitespace
  let k = en; while (k < orig.length && /[ \t]/.test(orig[k])) k++;
  let next;
  if (orig[k] === ',') next = orig.slice(0, st) + orig.slice(k + 1);          // block ke baad comma tha: wo bhi gaya
  else { let q = st; while (q > 0 && /\s/.test(orig[q - 1])) q--; next = (orig[q - 1] === ',' ? orig.slice(0, q - 1) : orig.slice(0, st)) + orig.slice(en); } // aakhri block: pichla comma hatao
  const idx = site.products.findIndex(p => p.slug === slug);
  const err = checkAndCommit(orig, next, chk => {
    if (chk.products.length !== site.products.length - 1 || chk.products.some(p => p.slug === slug)) throw new Error('remove sahi nahi hua');
    const rest = site.products.filter((_, i) => i !== idx);
    chk.products.forEach((p, i) => { if (JSON.stringify(p) !== JSON.stringify(rest[i])) throw new Error('doosra product badal raha tha'); });
  });
  if (err) return { ok: false, errors: [err] };
  let pageGone = false;
  try { fs.unlinkSync(path.join(ROOT, slug + '.html')); pageGone = true; } catch (_) {}
  const b = await runBuild();
  return { ok: true, removed: slug, pageGone, build: b };
}

/* ---------------- http ---------------- */
function readBody(req) {
  return new Promise((res, rej) => {
    let n = 0; const ch = [];
    req.on('data', d => { n += d.length; if (n > MAX_BODY) { rej(new Error('Request bahut badi hai (photos chhoti karo).')); req.destroy(); } else ch.push(d); });
    req.on('end', () => res(Buffer.concat(ch).toString('utf8')));
    req.on('error', rej);
  });
}
const send = (res, code, obj) => { const b = JSON.stringify(obj); res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' }); res.end(b); };

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    // DNS-rebinding / bahar ki website se request roko: sirf localhost host + same origin
    const host = (req.headers.host || '').split(':')[0];
    if (host !== 'localhost' && host !== '127.0.0.1') { res.writeHead(403); return res.end('Forbidden'); }

    if (url.pathname.startsWith('/api/')) {
      const origin = req.headers.origin;
      if (origin && new URL(origin).host !== req.headers.host) return send(res, 403, { ok: false, errors: ['Origin allowed nahi.'] });
      if (url.pathname === '/api/meta' && req.method === 'GET') {
        const s = loadSite();
        return send(res, 200, { ok: true, site: s.short || s.name, categories: s.categories, products: s.products.map(p => ({ slug: p.slug, name: p.name, category: p.category, status: p.status, hidden: !!p.hidden })) });
      }
      if (url.pathname === '/api/product' && req.method === 'GET') {
        const p = loadSite().products.find(x => x.slug === url.searchParams.get('slug'));
        return p ? send(res, 200, { ok: true, product: p }) : send(res, 404, { ok: false, errors: ['Product nahi mila.'] });
      }
      if (['/api/preview', '/api/add-product', '/api/update-product', '/api/hide-product', '/api/remove-product'].includes(url.pathname) && req.method === 'POST') {
        if (!/application\/json/.test(req.headers['content-type'] || '')) return send(res, 415, { ok: false, errors: ['JSON chahiye.'] });
        const inp = JSON.parse(await readBody(req) || '{}');
        if (url.pathname === '/api/preview') {
          const r = buildProduct(inp, loadSite(), S_(inp.editSlug));
          return send(res, 200, { ok: true, errors: r.errors, warnings: r.warnings, code: productCode(r.product) });
        }
        if (url.pathname === '/api/hide-product') return send(res, 200, await hideProduct(inp));
        if (url.pathname === '/api/remove-product') return send(res, 200, await removeProduct(inp));
        return send(res, 200, url.pathname === '/api/update-product' ? await updateProduct(inp) : await addProduct(inp));
      }
      return send(res, 404, { ok: false, errors: ['Not found'] });
    }

    // static files (preview ke liye): dot-files aur admin-backups block
    let rel = decodeURIComponent(url.pathname); if (rel === '/') rel = '/product-admin.html';
    const abs = path.normalize(path.join(ROOT, rel));
    if (!abs.startsWith(ROOT + path.sep) || /(^|[\\\/])\./.test(path.relative(ROOT, abs)) || abs === __filename) { res.writeHead(404); return res.end('Not found'); }
    fs.readFile(abs, (e, buf) => {
      if (e) { res.writeHead(404); return res.end('Not found'); }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(abs).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      res.end(buf);
    });
  } catch (e) {
    send(res, 500, { ok: false, errors: ['Server error: ' + e.message] });
  }
});

function listen(port, tries) {
  server.once('error', e => { if (e.code === 'EADDRINUSE' && tries > 0) listen(port + 1, tries - 1); else { console.error(e.message); process.exit(1); } });
  server.listen(port, '127.0.0.1', () => {
    const u = `http://localhost:${port}/product-admin.html`;
    console.log('\n  Product admin chal raha hai:  ' + u + '\n  Band karne ke liye: Ctrl + C\n');
    if (!process.argv.includes('--no-open')) {
      const cmd = process.platform === 'win32' ? ['cmd', ['/c', 'start', '', u]] : process.platform === 'darwin' ? ['open', [u]] : ['xdg-open', [u]];
      execFile(cmd[0], cmd[1], () => {});
    }
  });
}
if (require.main === module) listen(Number(process.env.PORT) || 3000, 10);
module.exports = { buildProduct, productCode, insertProduct, replaceProduct, findProductBlock, matchBracket };
