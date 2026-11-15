SPACE AND TECH ENGINEERING - WEBSITE (kaise edit karein)
========================================================

FILES
  index.html      Home          products.html   Saare products (filter ke saath)
  product.html    Har product ka page (data.js se khud banta hai)
  about.html      About         contact.html    Contact + quote form
  data.js         <<< SAARA CONTENT YAHAN. Sirf isi ko edit karna hai >>>
  style.css       Design / colors         app.js   Pages banane ka code (chhuna nahi)
  build.js        sitemap.xml + llms.txt + robots.txt banata hai
  images/         Apni photos yahan rakho

KAAM KAISE KAREIN (sab data.js me)
  Product add      products list me kisi bhi { ... } block ko copy karo, paste karo,
                   slug (unique, chhote akshar, - se) + name + image badlo. Page khud ban jayega.
  Product remove   uska { ... } block delete karo (comma ka dhyan rakho).
  Product page     har product ka page = product.html?p=<slug>. Alag file nahi banani.
  Image add        image: "images/meri-photo.jpg"  ya  https://... link.
                   Extra photos: gallery: ["images/a.jpg","images/b.jpg"]
  Image remove     us line ko delete karo (gallery me se naam hatao).
  Partner logo     partners list me add/remove.
  Team / Workshop  about.team aur about.gallery me add/remove. Khali [] = section hide.
  Phone/Email      top par phone, whatsapp, email badlo.

HAR BAAR CHANGE KE BAAD
  1) data.js me  url: "https://aapka-domain.com"  sahi rakho
  2) Terminal:   node build.js     (sitemap.xml, robots.txt, llms.txt, llms-full.txt update)
  3) Poora folder hosting par upload karo (Netlify / GitHub Pages / cPanel, sab chalega)
  4) Google Search Console me sitemap.xml submit karo

PREVIEW: index.html ko double-click karke browser me kholo.

V2 NOTES
  solutions.html, support.html   naye pages (apps / faq / process / ticker / manifesto bhi data.js me hain)
  fx2.js                         boot intro, cursor, hero drone, scroll-exploded anatomy, flying drone
  fx.js                          saari animations (canvas, tilt, magnetic buttons, scroll effects)

V3 NOTES - SEO / AEO / GEO (IMPORTANT)
  Ab har page ka asli content static HTML me bhi hai (JavaScript ke bina bhi dikhta hai), taaki Google aur
  AI crawlers (ChatGPT, Perplexity, Claude, Gemini) poora content padh saken.
  Product page ab <slug>.html hai (e.g. aazmuth-flight-controller.html). Purana product.html?p=... apne aap redirect hota hai.

  BADLAV KAISE KAREIN
    Products / about / FAQ / apps      data.js edit karo
    Drone Lab ka text, FAQ, sensors    lab-content.js edit karo
    PHIR HAMESHA CHALAO:               node build.js
  build.js ye sab banata hai: saare pages + meta tags + schema (Organization, Product, FAQ, Breadcrumb, TechArticle),
  sitemap.xml, robots.txt (AI bots allowed), llms.txt, llms-full.txt.

  DEPLOY KE BAAD
    1) data.js me url: sahi domain rakho (build se pehle)
    2) Google Search Console + Bing Webmaster Tools me sitemap.xml submit karo
    3) Google Business Profile banao (Nashik + Mumbai), wahi phone/address use karo jo contact page par hai
    4) Rich Results Test (search.google.com/test/rich-results) se schema check karo

V4 NOTES - PRODUCT-FOCUSED REBUILD
  data.js           product copy rewritten (benefit + spec led), per-product faq[] and bestFor[], site FAQ expanded,
                    NEW investors{} block (metrics: [] khali = hide; revenue/funding tabhi daalo jab public karna ho)
  investors.html    NEW page (build.js + app.js dono me)
  build.js          coming-soon products ab noindex + sitemap se bahar, per-product FAQ schema, WhatsApp quote link,
                    real logo.svg + og-default.png, robots.txt cleanup, THIN PRODUCT warning (specs kam ho to batata hai)
  app.js / fx4.js  hero H1 ab data.js (hero.title) se aata hai - static aur visible H1 ek jaisa; careers link khali ho to hide;
                    product page par Best for + FAQ + WhatsApp quote; contact par "Send on WhatsApp"
  TODO (aapko karna hai): 1) Wix images images/ folder me download karke data.js me paths badlo  2) Exelr8 / NAVSATE ke specs daalo
        3) domain check: site = spaceandtechengineerings.com, email = spaceandtech-engineerings.com (hyphen)  4) price daalna ho to Offer schema add karwao

V5: hero drone par Motors on/off switch (fx4.js + fx4.css). Props default me ruke rehte hain, switch dabane par hi ghoomte hain.
