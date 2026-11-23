/* INDEXNOW: Bing, Yandex, Naver, Seznam ko naye/badle pages turant batata hai (Yahoo/DuckDuckGo Bing index use karte hain).
   Google IndexNow support nahi karta -> Google ke liye Search Console me sitemap submit + "Request indexing" karo.
   Use (site live hone ke BAAD, build ke baad):  node indexnow.js
   Key file <key>.txt build.js banata hai, use bhi upload karna zaroori hai. */
const fs = require('fs'), https = require('https');
const sm = fs.readFileSync(__dirname + '/sitemap.xml', 'utf8');
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const host = new URL(urls[0]).host, key = require('crypto').createHash('md5').update('https://' + host).digest('hex');
const body = JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: urls });
const req = https.request({ hostname: 'api.indexnow.org', path: '/indexnow', method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body) } }, r => {
  console.log('IndexNow status:', r.statusCode, '(200/202 = accepted)'); r.resume(); });
req.on('error', e => console.log('Error:', e.message)); req.end(body);
console.log(`Submitting ${urls.length} URLs for ${host} ...`);
