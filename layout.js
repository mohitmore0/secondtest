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

    // --- SEO content blocks (visible to visitors and present in the static HTML). Facts come from data.js only. ---
    { type: 'text', id: 'about-company', title: 'Indian drone electronics, designed in India',
      text: [
        'Space and Tech Engineering LLP is a small team of hardware and firmware engineers building flight electronics for drones. Our first flight controller, built by two engineers in 2022, finally held a hover. Since then we have added Skydrive AM32 ESCs, NAVSATE GPS modules and the Aazmuth flagship flight controller.',
        'Our mission is to make dependable flight electronics in India, with open documentation and support that builders can actually reach. We design our boards and firmware at our offices in India, so a question or a fix is a phone call away. We work with drone manufacturers, UAV companies, FPV builders, research teams and OEM buyers.'
      ] },
    { type: 'tiles', id: 'drone-electronics', alt: true, title: 'Flight controllers, ESCs and GPS for UAV and FPV drones',
      lead: 'Four product families that are designed to work together, each with its own documentation.',
      items: [
        { title: 'Aazmuth UAV flight controller', href: 'aazmuth-flight-controller.html', text: 'Our flagship flight controller for professional UAVs runs an STM32 H7 (Cortex-M7, up to 480 MHz) with 3 IMUs and 2 barometers, each on an isolated bus. IMU boards plug into the 20-pin Aazmuth Bus, so sensors can be swapped or upgraded without replacing the controller.' },
        { title: 'Exelr8 F7 FPV flight controller', href: 'exelr8-fpv-flight-controller-f7.html', text: 'An F7 flight controller for FPV racing and freestyle builds. It pairs with the Skydrive 55A AM32 4-in-1 ESC and the NAVSATE mini GPS to make a complete Indian-designed FPV stack.' },
        { title: 'Skydrive AM32 ESCs', href: 'products.html', text: 'Electronic speed controllers that run open AM32 firmware, so you can configure and update them with the usual AM32 tools. Choose the 60A for heavy payloads such as sprayer drones, the 40A for survey and mapping builds, or the 55A 4-in-1 for 5-inch FPV builds and smaller.' },
        { title: 'NAVSATE GPS modules', href: 'navsate-gps-for-uavs.html', text: 'A UAV GPS module tuned for UAVs and tested on long flights. It gives your flight controller the position data it needs for position hold, return-to-home and waypoint missions. The compact NAVSATE mini is made for FPV drones.' }
      ] },
    'cfg',         // "Configure your drone stack" (platform chuno, parts dekho)
    { type: 'tiles', id: 'applications', title: 'Industries and applications',
      lead: 'Where builders use our drone electronics today.',
      items: [
        { title: 'Agriculture', text: 'Spraying and crop-mapping drones need a steady hover and long, GPS-locked runs.' },
        { title: 'Survey and mapping', text: 'Redundant sensors and a reliable GPS keep survey lines straight.' },
        { title: 'Defence and security', text: 'Triple-redundant sensing for missions where a failure is not an option.' },
        { title: 'FPV racing and freestyle', text: 'Light, fast F7 control and 4-in-1 ESCs for tight, punchy builds.' },
        { title: 'Education and research', text: 'Modular boards and open docs that students can open up and learn from.' },
        { title: 'Startups and prototypes', text: 'Small batches, direct support and parts that match your build.' }
      ] },
    'process',     // "From bench to sky" 4 steps
    { type: 'tiles', id: 'why-us', alt: true, title: 'Why choose Space and Tech Engineering',
      items: [
        { title: 'Designed and supported in India', text: 'Our hardware and firmware engineers sit in India. When something needs fixing, you speak to the people who built it.' },
        { title: 'Tested before it ships', text: 'Every batch gets bench time and flight time before it ships.' },
        { title: 'Documentation you can read', text: 'We publish pinouts, calibration guides and changelogs, so you are never guessing.' },
        { title: 'Redundancy where it matters', text: 'Aazmuth carries three IMUs and two barometers on isolated buses, so one noisy sensor does not take down the flight.' }
      ] },
    { type: 'text', id: 'oem-quotes', title: 'OEM and bulk orders',
      text: [
        'Buying for a company, an OEM project or a batch of drones? Send us your quantity and use case through the quote form, or call or WhatsApp us, and we will reply with the right parts. Share your motor, prop and battery setup and we will confirm the fit before you order.',
        'To check shipping across India, give us your pincode and quantity. Pinouts, calibration and sensor-integration guides are in our public documentation.'
      ],
      btn: { label: 'Read the documentation', href: 'https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs' } },
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
