/* ===========================================================================
   LAYOUT.JS  -  HAR PAGE KE SECTIONS YAHAN SE CONTROL HOTE HAIN
   ===========================================================================
   Har page ek list hai. List me jo naam hai wahi section site par dikhta hai, usi order me.

   UPAR / NICHE KARNA   Line ko upar ya niche le jao.
                        VS Code: line par cursor rakho, Alt + Up / Alt + Down.
   COPY / DUPLICATE     Line copy karke kahin bhi paste karo (VS Code: Shift + Alt + Down).
   REMOVE               Line delete kar do.
   COMMENT (hide)       Line ke aage // laga do (VS Code: Ctrl + /). Wapas laane ke liye // hata do.
   ADD (naya section)   Neeche "CUSTOM BLOCKS" ka example copy karke list me kahin bhi paste karo.

   DRAG & DROP          editor.html browser me kholo. Wahan mouse se drag karke order badlo,
                        phir "Copy" dabao aur is poori file me paste kar do.

   HAR BAAR CHANGE KE BAAD:  node build.js   (SEO pages bhi isi order me update ho jate hain)

   Galat naam likha to browser console (F12) me warning aayegi aur valid naam dikhenge.
   =========================================================================== */

window.LAYOUT = {

  /* ---------------- HOME (index.html) ---------------- */
  home: [
    'hero',        // full screen image slider
    'tech',        // "Technology solutions" product cards
    'cfg',         // "Configure your drone stack" (platform chuno, parts dekho)
    'process',     // "From bench to sky" 4 steps
    'manifesto',   // bada text line
    'cta',         // "Talk to our engineers" strip

    // --- naya section daalna ho to ye copy karke upar list me paste karo ---
    // { type: 'text',   title: 'Why choose us', lead: 'Short line', text: ['Paragraph 1', 'Paragraph 2'], alt: true },
    // { type: 'banner', title: 'Bulk order?', text: 'Get OEM pricing.', btn: { label: 'Get a quote', href: 'contact.html' } },
  ],

  /* ---------------- PRODUCTS (products.html) ---------------- */
  products: [
    'catalog',     // title + filter buttons + product grid
  ],

  /* ---------------- PRODUCT DETAIL (har product ka page) ---------------- */
  product: [
    'main',        // photo, highlights, specs, docs, buttons
    'journey',     // "From bench to sky" (coming-soon products par apne aap hide)
    'faq',         // product FAQ
    'related',     // "More products"
    'regulatory',  // regulatory note
  ],

  /* ---------------- ABOUT (about.html) ---------------- */
  about: [
    'intro',       // top hero "About us"
    'ticker',      // chalti hui patti
    'stats',       // numbers
    'who',         // Who we are + Mission + Vision
    'values',      // How we work
    'build',       // What we engineer
    'story',       // Our story (timeline)
    'process',     // From bench to sky
    'team',        // The people  (data.js: about.team khali ho to hide)
    'gallery',     // Inside the workshop (data.js: about.gallery khali ho to hide)
    'find',        // Find us (offices)
    'workwith',    // Work with us
    'closing',     // "Hardware that flies" last strip
  ],

  /* ---------------- CONTACT (contact.html) ---------------- */
  contact: [
    'form',        // phone, email, offices + quote form
  ],
};


/* ===========================================================================
   CUSTOM BLOCKS  (kisi bhi page ki list me paste karo, sirf text badlo)
   ===========================================================================

   Text section:
   { type: 'text', id: 'why', nav: 'Why', title: 'Heading', lead: 'Chhoti line', text: ['Para 1', 'Para 2'], alt: true,
     btn: { label: 'Button', href: 'contact.html' } }

   Banner (strip + button):
   { type: 'banner', title: 'Heading', text: 'Line', btn: { label: 'Get a quote', href: 'contact.html' } }

   Tiles (cards, href dene par clickable):
   { type: 'tiles', title: 'Heading', lead: 'Line', alt: true,
     items: [ { title: 'One', text: 'Details' }, { title: 'Two', text: 'Details', href: 'contact.html' } ] }

   Image:
   { type: 'image', title: 'Heading', src: 'images/hero.avif', caption: 'Caption' }

   Raw HTML (advanced):
   { type: 'html', code: '<p>Kuch bhi HTML</p>' }

   Options:  alt: true   = dusra background colour
             id: 'xyz'   = anchor (#xyz) ke liye
             nav: 'Name' = about page ke side menu me dikhane ke liye (id bhi chahiye)
   =========================================================================== */
