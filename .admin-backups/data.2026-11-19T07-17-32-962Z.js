/* =====================================================================
   DATA.JS  -  Poori website ka content yahin se aata hai.
   Is file ko edit karo, save karo, browser refresh karo. Bas.

   IMAGE ADD KARNA:  "images/photo.jpg" (apni file images/ folder me rakho)
                     ya koi bhi https://... link likho.
   PRODUCT ADD KARNA: products list me ek { ... } block copy-paste karo
                     aur slug unique rakho. Uska page khud ban jayega.
   PRODUCT REMOVE:   uska { ... } block delete karo.
   Last me terminal me:  node build.js   (sitemap.xml + llms.txt update)
   ===================================================================== */
window.SITE = {
  name: "Space and Tech Engineering LLP",
  short: "Space and Tech Engineering",
  tagline: "Made in India drone components",
  url: "https://www.spaceandtechengineerings.com",   // <-- apna final domain (end me / nahi)
  phone: "+91 96657 17903",
  whatsapp: "919665717903",                          // country code ke saath, + ke bina
  email: "arup@spaceandtech-engineerings.com",
  year: 2026,
  social: [
    { label: "LinkedIn",  url: "https://in.linkedin.com/company/space-and-tech-engineering" },
    { label: "Instagram", url: "https://www.instagram.com/spaceandtechengg" }
  ],
  docsUrl: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs",
  careersUrl: "",   // jab careers page ready ho tab link daalo; khali = link hide
  logo: "images/logo.png",            // header + Google logo (PNG, images/ folder). Badalna ho to nayi PNG rakho aur yahan naam likho
  favicon: "images/favicon.png",      // browser tab icon (PNG, square, 192x192 best)
  appleIcon: "images/apple-touch-icon.png", // phone home-screen icon (180x180)
  ogImage: "og-default.png",

  /* ---------- HOME PAGE ---------- */
  hero: {
    /* title + text sirf SEO / Google ke liye hain (screen par nahi dikhte). Hero par sirf slider dikhta hai. */
    title: "Indian flight controllers, ESCs and GPS for drones",
    text: "Triple-redundant Aazmuth flight controllers, Skydrive AM32 ESCs and NAVSATE GPS modules. Designed in India, tested in flight, supported by the engineers who built them.",
    image: "https://static.wixstatic.com/media/e688f6_10c2110744d94fc980962c8b7d6fc872~mv2.png",
    /* HERO SLIDER (full screen, koi text nahi). Order yahi rahega: pehli image = main hero.
       ms = us image ko kitni der dikhana hai (milliseconds): main hero 6000 (6 sec), baki 3000 (3 sec).
       zoom = sirf MOBILE par image kitni zoom ho (1 = normal). Jitna bada utna image bada, par bahut bada karoge to side ka text katega. Default 1.4.
       Image badalni ho to images/ folder me file rakho aur src badlo. alt sirf screen reader / SEO ke liye. */
    interval: 3000,
    slides: [
      { src: "images/hero.avif",    ms: 6000, zoom: 1.38, alt: "Building India's indigenous avionics future: NAVSATE, Exelr8 and Azmuth", href: "products.html" },
      { src: "images/azmuth.avif",  ms: 3000, zoom: 1.6, alt: "Azmuth flight controller", href: "aazmuth-flight-controller.html" },
      { src: "images/exclr8.avif",  ms: 3000, zoom: 1.6, alt: "Exelr8 flight controller for FPV drones", href: "exelr8-fpv-flight-controller-f7.html" },
      { src: "images/4in1.avif",    ms: 3000, zoom: 1.45, alt: "4-in-1 ESC for FPV drones", href: "skydrive-55a-am32-4-in-1.html" },
      { src: "images/sateesc.avif", ms: 3000, zoom: 1.6, alt: "SATE-ESC single electronic speed controller", href: "skydrive-am32-60a.html" },
      { src: "images/navsate.avif", ms: 3000, zoom: 1.6, alt: "NAVSATE GPS", href: "navsate-gps-for-uavs.html" }
    ]
  },
  stats: [   // n = number, s = suffix
    { n: 2000, s: "+", l: "Drone components manufactured" },
    { n: 5,    s: "+", l: "Product categories" },
    { n: 3,    s: "+", l: "Years of innovation" },
    { n: 20,   s: "+", l: "Industry partnerships" }
  ],

  /* ---------- PRODUCTS ----------
     status: "available" ya "soon"   |  featured:true => home page par dikhega
     image  : main photo             |  gallery: extra photos (optional)
     specs  : [["Naam","Value"], ...] (khali chhodo to table hide ho jayegi)
     docs   : [{label,url}]          |  buyUrl: store link (optional)        */
  categories: ["Flight controllers", "ESCs", "GPS", "FPV", "Transmitters", "Receivers", "Video transmitters", "Radar"],
  /* FPV category: product ki main category (category:) wahi rehti hai; FPV me dikhane ke liye also: ["FPV"] lagao.
     Naya FPV product: category: "FPV" bhi likh sakte ho. */
  products: [
    {
      slug: "aazmuth-flight-controller", name: "Aazmuth flight controller", category: "Flight controllers",
      status: "available", featured: true,
      image: "https://static.wixstatic.com/media/e688f6_4ef9d2c2ab6a43a5ab35ac564c0604cc~mv2.jpg", gallery: [],
      /* BENCH TO SKY (product page ke neeche). Har step me: text (optional, khali = default), imgs: ["images/x.jpg"], video: YouTube link.
         Khali imgs/video = wo hissa dikhega hi nahi. Video: https://www.youtube.com/watch?v=XXXX ya https://youtu.be/XXXX */
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench:  { text: "", imgs: [], video: "" },
        fly:    { text: "", imgs: [], video: "" }
      },
      short: "Modular, triple-redundant STM32 H7 flight controller with 3 IMUs and 2 barometers on isolated buses.",
      description: "Aazmuth is our flagship flight controller for professional UAVs. It runs on an STM32 H7 (Cortex-M7, up to 480 MHz) and carries 3 IMUs and 2 barometers, each on its own isolated bus, so one noisy or failed sensor does not take down the flight. IMU boards plug in over 20-pin Aazmuth Bus connectors, which means you can swap or upgrade sensors without replacing the controller. Built for defence, industry, agriculture, survey, startups and universities.",
      features: ["Triple IMU and dual barometer redundancy", "Isolated sensor buses, so vibration on one does not corrupt the others", "Modular IMU boards on the 20-pin Aazmuth Bus", "Public pinout, calibration and sensor-integration docs"],
      specs: [["Microcontroller","STM32 H7, Cortex-M7"],["Clock speed","Up to 480 MHz"],["Memory","2 MB flash, 1 MB RAM"],["Redundancy","3 IMUs, 2 barometers"],["Size","92 x 54 x 14.6 mm"],["Weight","63 g"]],
      bestFor: ["Agriculture", "Survey and mapping", "Defense and security", "Education and research"],
      faq: [
        { q: "What redundancy does the Aazmuth flight controller have?", a: "Aazmuth carries 3 IMUs and 2 barometers, each on its own isolated bus, so a fault or vibration on one sensor does not corrupt the others." },
        { q: "What processor does Aazmuth use?", a: "An STM32 H7 (Cortex-M7) running at up to 480 MHz, with 2 MB of flash and 1 MB of RAM." },
        { q: "How big and heavy is it?", a: "92 x 54 x 14.6 mm and 63 g." },
        { q: "Where are the pinout and calibration guides?", a: "In our public documentation. Overview, pinout, calibration, sensor integration and dimensions are all linked on this page." }
      ],
      docs: [
        { label: "Overview",    url: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs/flight-controller/aazmuth/overview" },
        { label: "Pinout",      url: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs/flight-controller/aazmuth/pinout-diagram" },
        { label: "Calibration", url: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs/flight-controller/aazmuth/basic-configuration-and-calibration" },
        { label: "Sensors",     url: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs/flight-controller/aazmuth/sensor-integration-and-peripheral-hardware-connection" },
        { label: "Dimensions",  url: "https://spaceandtech-engineerings.gitbook.io/space-and-tech-engineerings-docs/flight-controller/aazmuth/dimensions" }
      ]
    },
    {
      slug: "exelr8-fpv-flight-controller-f7", name: "Exelr8 FPV flight controller F7", category: "Flight controllers",
      also: ["FPV"], status: "available", featured: true,
      image: "https://static.wixstatic.com/media/e688f6_7ed082c4ce4c4d01baea626a1683544f~mv2.jpg", gallery: [],
      /* BENCH TO SKY (product page ke neeche). Har step me: text (optional, khali = default), imgs: ["images/x.jpg"], video: YouTube link.
         Khali imgs/video = wo hissa dikhega hi nahi. Video: https://www.youtube.com/watch?v=XXXX ya https://youtu.be/XXXX */
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench:  { text: "", imgs: [], video: "" },
        fly:    { text: "", imgs: [], video: "" }
      },
      short: "F7 flight controller for light, fast FPV racing and freestyle builds.",
      description: "Exelr8 is our F7 flight controller for FPV drones, made for tight, punchy racing and freestyle builds. It pairs with the Skydrive 55A AM32 4-in-1 ESC and the NAVSATE mini GPS to give you a complete Indian-designed FPV stack with local support.",
      features: ["F7 processor", "Pairs with Skydrive 4-in-1 ESC and NAVSATE mini GPS", "Designed and supported in India"],
      specs: [["Processor","F7"],["Built for","FPV racing and freestyle"]],
      bestFor: ["FPV racing and freestyle", "Startups and prototypes"],
      faq: [
        { q: "What is the Exelr8 flight controller for?", a: "Exelr8 is an F7 flight controller for FPV drone builds, including racing and freestyle quads." },
        { q: "Which ESC and GPS go with Exelr8?", a: "The Skydrive 55A AM32 4-in-1 ESC and the NAVSATE mini GPS are the matching parts in our FPV stack." },
        { q: "Exelr8 or Aazmuth?", a: "Choose Exelr8 for FPV builds and Aazmuth when you need triple-redundant sensing for professional or mission work." }
      ], docs: []
    },
    {
      slug: "skydrive-am32-60a", name: "Skydrive AM32 60A 3-6S", category: "ESCs",
      status: "available", featured: true,
      image: "https://static.wixstatic.com/media/e688f6_f41fedc59ef8475a8a40bf6cc0885654~mv2.jpg", gallery: [],
      /* BENCH TO SKY (product page ke neeche). Har step me: text (optional, khali = default), imgs: ["images/x.jpg"], video: YouTube link.
         Khali imgs/video = wo hissa dikhega hi nahi. Video: https://www.youtube.com/watch?v=XXXX ya https://youtu.be/XXXX */
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench:  { text: "", imgs: [], video: "" },
        fly:    { text: "", imgs: [], video: "" }
      },
      short: "60A AM32 ESC for 3-6S LiPo builds. Handles heavy payloads such as sprayer drones.",
      description: "The Skydrive AM32 60A is a 3-6S electronic speed controller running open AM32 firmware, so you can configure and update it with the usual AM32 tools. Its 60 A rating suits heavy-lift and agriculture drones carrying sprayer payloads.",
      features: ["60 A rating for heavy payloads", "AM32 firmware, configurable with standard AM32 tools", "3-6S LiPo input"],
      specs: [["Current","60 A"],["Battery","3-6S"],["Firmware","AM32"]],
      bestFor: ["Agriculture", "Startups and prototypes"],
      faq: [
        { q: "Which firmware does the Skydrive 60A run?", a: "AM32, so you can configure and update it with standard AM32 tools." },
        { q: "What battery does the Skydrive 60A support?", a: "3-6S LiPo." },
        { q: "Is the 60A ESC good for agriculture drones?", a: "Yes. The 60 A rating is meant for heavier payloads such as sprayer drones. Tell us your motor and prop setup and we will confirm the fit." }
      ], docs: []
    },
    {
      slug: "skydrive-am32-40a", name: "Skydrive AM32 40A 3-6S", category: "ESCs",
      status: "available", featured: false, hidden: true,
      image: "https://static.wixstatic.com/media/e688f6_f41fedc59ef8475a8a40bf6cc0885654~mv2.jpg", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "40A AM32 ESC for 3-6S LiPo builds. A light choice for survey and mapping drones.",
      description: "The Skydrive AM32 40A is a 3-6S electronic speed controller running AM32 firmware. It is a light, efficient choice for survey, mapping and general UAV builds that do not need the 60 A headroom.",
      features: ["40 A rating","AM32 firmware","3-6S LiPo input"],
      specs: [["Current","40 A"],["Battery","3-6S"],["Firmware","AM32"]],
      bestFor: ["Survey and mapping","Startups and prototypes"],
      faq: [
        { q: "Which firmware does the Skydrive 40A run?", a: "AM32, configurable with standard AM32 tools." },
        { q: "40A or 60A Skydrive ESC?", a: "Pick 40 A for lighter survey and general UAV builds, and 60 A for heavy payloads such as sprayer drones." }
      ],
      docs: []
    },
    {
      slug: "skydrive-55a-am32-4-in-1", name: "Skydrive 55A AM32 4-in-1", category: "ESCs",
      also: ["FPV"], status: "available", featured: false, hidden: true,
      image: "https://static.wixstatic.com/media/e688f6_f41fedc59ef8475a8a40bf6cc0885654~mv2.jpg", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "Four 55A AM32 ESCs on one board. Short wiring for 5-inch FPV builds and below.",
      description: "The Skydrive 55A 4-in-1 puts four AM32 ESCs on a single board, which keeps wiring short and the stack tidy on 5-inch FPV builds and smaller. It is the matching ESC for the Exelr8 F7 flight controller.",
      features: ["4 ESCs on one board","55 A rating","AM32 firmware"],
      specs: [["Current","55 A"],["Type","4-in-1"],["Firmware","AM32"]],
      bestFor: ["FPV racing and freestyle"],
      faq: [
        { q: "What is a 4-in-1 ESC?", a: "A single board that carries four speed controllers, one for each motor of a quadcopter, which keeps wiring short and weight low." },
        { q: "Which firmware does the 55A 4-in-1 run?", a: "AM32." }
      ],
      docs: []
    },
    {
      slug: "navsate-gps-for-uavs", name: "NAVSATE GPS for UAVs", category: "GPS",
      status: "available", featured: true,
      image: "https://static.wixstatic.com/media/e688f6_64ebb40d939447eb83457bcc81170048~mv2.jpg", gallery: [],
      /* BENCH TO SKY (product page ke neeche). Har step me: text (optional, khali = default), imgs: ["images/x.jpg"], video: YouTube link.
         Khali imgs/video = wo hissa dikhega hi nahi. Video: https://www.youtube.com/watch?v=XXXX ya https://youtu.be/XXXX */
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench:  { text: "", imgs: [], video: "" },
        fly:    { text: "", imgs: [], video: "" }
      },
      short: "UAV-tuned GPS module, tested on long flights, for position hold and waypoint missions.",
      description: "NAVSATE is our GPS module tuned for UAVs and tested on long flights. It gives your flight controller the position and ground-speed data it needs for position hold, return-to-home and waypoint missions, and pairs with Aazmuth for survey, agriculture and defence work.",
      features: ["Tuned for UAVs", "Tested on long flights", "Enables position hold, return-to-home and waypoint missions"],
      specs: [["Built for","UAVs"],["Use","Position hold, return-to-home, waypoints"]],
      bestFor: ["Agriculture", "Survey and mapping", "Defense and security"],
      faq: [
        { q: "What does the NAVSATE GPS do?", a: "It tells the flight controller where the drone is and how fast it is moving, which enables position hold, return-to-home and waypoint missions." },
        { q: "Which flight controller works with NAVSATE?", a: "It is designed as part of our stack with the Aazmuth flight controller. Share your build and we will confirm wiring and settings." }
      ], docs: []
    },
    {
      slug: "navsate-mini-gps", name: "NAVSATE mini for FPV drones", category: "GPS",
      also: ["FPV"], status: "available", featured: false,
      image: "https://static.wixstatic.com/media/e688f6_64ebb40d939447eb83457bcc81170048~mv2.jpg", gallery: [],
      /* BENCH TO SKY (product page ke neeche). Har step me: text (optional, khali = default), imgs: ["images/x.jpg"], video: YouTube link.
         Khali imgs/video = wo hissa dikhega hi nahi. Video: https://www.youtube.com/watch?v=XXXX ya https://youtu.be/XXXX */
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench:  { text: "", imgs: [], video: "" },
        fly:    { text: "", imgs: [], video: "" }
      },
      short: "Compact NAVSATE GPS for FPV drones. Adds position data to small builds.",
      description: "NAVSATE mini is the compact version of our UAV GPS, made for FPV builds where weight and space matter. It adds position data for features like return-to-home to racing and long-range quads.",
      features: ["Compact size for FPV builds", "Matches the Exelr8 FPV stack"],
      specs: [["Built for","FPV drones"]],
      bestFor: ["FPV racing and freestyle"],
      faq: [
        { q: "What is the NAVSATE mini?", a: "A compact GPS module for FPV drones, from the same team that makes the NAVSATE UAV GPS." }
      ], docs: []
    },
    {
      slug: "trx-5km", name: "TRX 5 km", category: "Transmitters",
      status: "soon", featured: false,
      image: "images/noimage.png", gallery: [],
      short: "5 km range radio transmitter. Coming soon.",
      description: "TRX 5 km is a radio transmitter on our roadmap, aimed at 5 km control range. Ask us and we will tell you as soon as there is a launch date.",
      features: [],
      specs: [],
      faq: [],
      docs: []
    },
    {
      slug: "trx-10km", name: "TRX 10 km", category: "Transmitters",
      status: "soon", featured: false,
      image: "", gallery: ["images/noimage.png"],
      short: "10 km range radio transmitter. Coming soon.",
      description: "TRX 10 km is a radio transmitter on our roadmap, aimed at 10 km control range. Ask us and we will tell you as soon as there is a launch date.",
      features: [],
      specs: [],
      faq: [],
      docs: []
    },
    {
      slug: "elrs-fpv-receiver", name: "ELRS FPV radio receiver", category: "Receivers",
      also: ["ESCs","FPV"], status: "available", featured: false,
      image: "images/elrs-fpv-receiver-main.png", gallery: ["images/elrs-fpv-receiver-gallery-1.png"],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "ExpressLRS 2.4 GHz receiver with ESP32, CRSF output and built-in TCXO for FPV aircraft.",
      description: "The ELRS receiver is an ExpressLRS-approved 2.4 GHz receiver for FPV aircraft. It uses an ESP32 microcontroller with a Semtech RF chip and a built-in TCXO, and connects to the flight controller over the CRSF bus. It gives a fast, smooth link with telemetry back to the radio.",
      features: ["ESP32 microcontroller","ExpressLRS-approved design","Fast and smooth connection","Built-in TCXO","CRSF bus interface"],
      specs: [["Microcontroller","ESP32"],["RF chip","Semtech"],["Frequency","2.4 GHz"],["Interface","CRSF bus"],["Antenna","65 mm 2.4 GHz T-antenna"],["Telemetry RF power","10 mW"],["Input voltage","5 V"]],
      bestFor: ["FPV racing and freestyle","Startups and prototypes"],
      faq: [
        { q: "Which radio protocol does the ELRS receiver use?", a: "It is an ExpressLRS design with a CRSF bus interface, so it works with CRSF-compatible radio systems." },
        { q: "What input voltage does it need?", a: "5 V." }
      ],
      docs: []
    },
    {
      slug: "sate-4-in-1-esc-80a", name: "4-in-1 ESC 80A 3-6S", category: "ESCs",
      also: ["FPV"], status: "available", featured: false,
      image: "images/sate-4-in-1-esc-80a-main.png", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "Four-channel FPV ESC on one board with AM32 support, DShot and 3-6S input.",
      description: "The 4-in-1 ESC puts four motor-drive channels on a single board for FPV quadcopters and multirotors. It runs AM32 firmware, supports DShot with bidirectional control, and includes crash protection plus reverse-voltage and short-circuit protection. Catalogue rating is 80 A continuous.",
      features: ["DShot protocol support","Bidirectional control","Crash-protection feature","Reverse-voltage and short-circuit protection","AM32 firmware supported","Wide compatibility and customization"],
      specs: [["Current","80 A continuous (as stated in catalogue)"],["Battery","3-6S"],["Type","4-in-1"],["Firmware","AM32"],["Microcontroller","STM"],["MOSFETs","High-capacity"]],
      bestFor: ["FPV racing and freestyle","Startups and prototypes"],
      faq: [
        { q: "Is the 80A rating per motor or total?", a: "The catalogue does not say. Ask us to confirm before you design your power system." },
        { q: "Which firmware does it run?", a: "AM32." }
      ],
      docs: []
    },
    {
      slug: "analog-vtx", name: "Analog VTX", category: "Video transmitters",
      also: ["FPV"], status: "soon", featured: false,
      image: "images/analog-vtx-main.png", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "5.8 GHz analog FPV video transmitter in a compact, lightweight body with efficient heat dissipation.",
      description: "The Analog VTX is a 5.8 GHz video transmitter for analog FPV links. It has a compact, lightweight body, high-power output and a design that dissipates heat efficiently for stable signal transmission.",
      features: ["High-power output","5.8 GHz frequency band","Stable signal transmission","Compact and lightweight design","Efficient heat dissipation"],
      specs: [["Frequency","5.8 GHz"],["Type","Analog"]],
      bestFor: ["FPV racing and freestyle","Startups and prototypes"],
      faq: [
        { q: "Which band does the Analog VTX use?", a: "5.8 GHz." },
        { q: "What are the output power levels and input voltage?", a: "Contact us for the full electrical ratings for your build." }
      ],
      docs: []
    },
    {
      slug: "digital-vtx", name: "Digital VTX", category: "Video transmitters",
      also: ["FPV"], status: "soon", featured: false,
      image: "images/digital-vtx-main.png", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "5.8 GHz digital FPV video transmitter, compact and lightweight with efficient heat dissipation.",
      description: "The Digital VTX is a 5.8 GHz video transmitter option for digital FPV video systems. It shares the compact, lightweight, heat-efficient platform of our Analog VTX.",
      features: ["High-power output","5.8 GHz frequency band","Stable signal transmission","Compact and lightweight design","Efficient heat dissipation"],
      specs: [["Frequency","5.8 GHz"],["Type","Digital"]],
      bestFor: ["FPV racing and freestyle","Startups and prototypes"],
      faq: [
        { q: "Which digital HD systems does it support?", a: "Contact us and we will confirm compatibility with your goggles and air unit." }
      ],
      docs: []
    },
    {
      slug: "sate-h7-fpv-flight-controller", name: "SATE-H7 FPV flight controller", category: "Flight controllers",
      also: ["FPV"], status: "soon", featured: false,
      image: "images/sate-h7-fpv-flight-controller-main.png", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "STM32H7 flight controller for FPV with 4th-generation IMU, barometer, OSD and dual BEC.",
      description: "SATE-H7 is an H7-based flight controller for FPV drones. It pairs an STM32H7 microcontroller with a fourth-generation InvenSense gyroscope and accelerometer, an Infineon barometer and a high-performance OSD. Separate 10 V and 5 V BEC outputs and a solder-less plug-and-play design keep builds clean, and it works with digital HD systems.",
      features: ["Powerful H7-based STM32 microcontroller","Separate BEC outputs","Solder-less plug-and-play design","Multi-firmware support","Reverse-voltage and short-circuit protection","Compatible with digital HD systems"],
      specs: [["Microcontroller","STM32H7"],["IMU","InvenSense 4th-generation gyroscope and accelerometer"],["Barometer","Infineon high-precision"],["OSD","High-performance"],["BEC","10 V / 2 A and 5 V / 2 A"],["Battery input","3-6S"]],
      bestFor: ["FPV racing and freestyle","Startups and prototypes"],
      faq: [
        { q: "SATE-H7 or Exelr8?", a: "SATE-H7 uses an STM32H7 for more processing headroom. Exelr8 uses an STM32F7." },
        { q: "What battery can it run on?", a: "3-6S." }
      ],
      docs: []
    },
    {
      slug: "sate-esc", name: "SATE-ESC single ESC", category: "ESCs",
      status: "available", featured: false, hidden: true,
      image: "images/sate-esc.jpg", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "Single-channel AM32 ESC family in 20A, 40A, 60A, 80A and 120A options for 3-6S.",
      description: "SATE-ESC is a family of single-channel ESCs for multirotors and other UAVs, offered in 20 A, 40 A, 60 A, 80 A and 120 A versions. All run AM32 firmware on an STM microcontroller with high-capacity MOSFETs, crash protection, and reverse-voltage and short-circuit protection.",
      features: ["Current options: 20A, 40A, 60A, 80A and 120A","Crash-protection feature","Reverse-voltage and short-circuit protection","AM32 firmware supported","Wide compatibility and customization"],
      specs: [["Current options","20 A / 40 A / 60 A / 80 A / 120 A"],["Battery","3-6S"],["Firmware","AM32"],["Microcontroller","STM"],["MOSFETs","High-capacity"]],
      bestFor: ["Agriculture","Survey and mapping","Startups and prototypes"],
      faq: [
        { q: "Which current ratings are available?", a: "20 A, 40 A, 60 A, 80 A and 120 A." },
        { q: "Which firmware does it run?", a: "AM32." }
      ],
      docs: []
    },
    {
      slug: "sate-high-amp-esc", name: "SATE-HIGH AMP ESC 200A 6-12S", category: "ESCs",
      also: ["FPV"], status: "available", featured: false,
      image: "images/sate-high-amp-esc-main.png", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "High-current single ESC with 200A continuous rating, 6S-12S input and AM32 support.",
      description: "SATE-HIGH AMP ESC is a high-current single ESC for UAV propulsion, with a stated 200 A continuous drain and a 6S-12S input range. It runs AM32 firmware on an STM microcontroller and includes crash protection plus reverse-voltage and short-circuit protection.",
      features: ["200A continuous drain (as stated in catalogue)","Crash-protection feature","Reverse-voltage and short-circuit protection","AM32 firmware supported","Wide compatibility and customization"],
      specs: [["Current","200 A continuous drain (as stated in catalogue)"],["Battery","6S-12S"],["Firmware","AM32"],["Microcontroller","STM"],["MOSFETs","High-capacity"]],
      bestFor: ["Agriculture","Defense and security","Startups and prototypes"],
      faq: [
        { q: "What voltage range does it support?", a: "6S-12S." },
        { q: "What cooling does the 200A rating need?", a: "Contact us with your motor and airflow setup and we will confirm." }
      ],
      docs: []
    },
    {
      slug: "aazmuth-mini", name: "Aazmuth Mini", category: "Flight controllers",
      also: ["FPV"], status: "soon", featured: false,
      image: "images/aazmuth-mini-main.png", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "Compact, low-cost STM32H7 flight controller for training drones, with a low-profile case.",
      description: "Aazmuth Mini is a compact, budget-friendly flight controller for training drones. It uses an STM32H7 with fourth-generation InvenSense inertial sensing, a MEAS barometer and an industry-grade magnetometer, inside a low-profile case designed to minimise airflow disturbance in flight.",
      features: ["Cost-effective design with low-profile form factor","Budget-friendly solution","External casing designed to minimize airflow disturbance"],
      specs: [["Microcontroller","STM32H7"],["IMU","InvenSense 4th-generation gyroscope and accelerometer"],["Barometer","MEAS high-precision"],["Magnetometer","Industry-grade"],["Power","High-efficiency power IC"]],
      bestFor: ["Education and research","Startups and prototypes"],
      faq: [
        { q: "What is Aazmuth Mini for?", a: "Training drones and compact UAV platforms where a low-profile case helps." },
        { q: "Aazmuth or Aazmuth Mini?", a: "Aazmuth is the triple-redundant flagship. Aazmuth Mini is the compact, lower-cost option for training." }
      ],
      docs: []
    },
    {
      slug: "sate-aio-board", name: "SATE-AIO Board", category: "Flight controllers",
      also: ["ESCs","FPV"], status: "available", featured: false,
      image: "images/sate-aio-board-main.png", gallery: ["images/sate-aio-board-gallery-1.png"],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "All-in-one flight controller and 4-in-1 ESC board, up to 25A continuous, AM32 and DShot.",
      description: "SATE-AIO is an all-in-one board that combines an STM32 flight controller, a 4th-generation IMU, an industrial-grade barometer and an integrated 4-in-1 ESC rated up to 25 A continuous. It is AM32 compatible with DShot support, for compact FPV and multirotor builds.",
      features: ["STM32 microcontroller for fast, low-latency flight control","Single 4th-generation IMU for stability and noise rejection","Industrial-grade barometer for altitude sensing","Integrated 4-in-1 ESC and power system","AM32 compatible with DShot protocol support"],
      specs: [["Microcontroller","STM32"],["IMU","4th-generation, single"],["Barometer","Industrial-grade"],["ESC","Integrated 4-in-1, up to 25 A continuous"],["Firmware","AM32 compatible"],["Protocol","DShot"]],
      bestFor: ["FPV racing and freestyle","Startups and prototypes"],
      faq: [
        { q: "What is an AIO board?", a: "One board that holds both the flight controller and the 4-in-1 ESC, so there is less wiring and a smaller stack." },
        { q: "What current can it handle?", a: "The integrated ESC is rated up to 25 A continuous." }
      ],
      docs: []
    },
    {
      slug: "sate-falconeye-plfm", name: "SATE FalconEye PLFM radar", category: "Radar",
      status: "soon", featured: false, noindex: true,
      image: "images/sate-falconeye-plfm.jpg", gallery: [],
      short: "Electronic beam-steering radar platform in 3 km and 20 km versions. Under development.",
      description: "SATE FalconEye PLFM is a modular electronic beam-steering radar platform, currently under development. It comes in two versions: AERIS-10N (Nexus) with a 3 km range and an 8 x 16 patch antenna array, and AERIS-10E (Extended) with a 20 km range and a 32 x 16 dielectric-filled slotted waveguide array. Beam steering covers plus or minus 45 degrees in elevation and azimuth. An onboard FPGA handles pulse compression, Doppler FFT, MTI and CFAR, and a Python GUI with map integration and GPS/IMU position and attitude correction ties it together.",
      features: ["Two versions: AERIS-10N (Nexus) and AERIS-10E (Extended)", "Full electronic beam steering, plus or minus 45 degrees in elevation and azimuth", "Onboard FPGA for pulse compression, Doppler FFT, MTI and CFAR", "Python GUI with map integration", "GPS/IMU integration for real-time position and attitude correction", "Modular power-management, frequency-synthesis and RF boards"],
      specs: [["AERIS-10N (Nexus)", "3 km range, 8 x 16 patch antenna array"], ["AERIS-10E (Extended)", "20 km range, 32 x 16 dielectric-filled slotted waveguide array"], ["Beam steering", "Plus or minus 45 degrees, elevation and azimuth"], ["Signal processing", "Pulse compression, Doppler FFT, MTI, CFAR"]],
      bestFor: ["Defense and security", "Education and research"],
      faq: [
        { q: "Is FalconEye available now?", a: "Not yet. It is under development. Contact us for status." },
        { q: "What is the difference between AERIS-10N and AERIS-10E?", a: "Nexus is the 3 km version with a patch array. Extended is the 20 km version with a slotted waveguide array." }
      ], docs: []
    },
    {
      slug: "kinetik-flight-controller", name: "Kinetik Flight Controller", category: "Flight controllers",
      also: ["FPV"], status: "available", featured: false,
      image: "images/kinetik-flight-controller-main.png", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "Compact 5×5 cm FPV flight controller with dual Betaflight and ArduPilot support for versatile drone applications.",
      description: "Kinetik FC is a compact, FPV-based flight controller designed for drone enthusiasts, developers, and UAV builders. Measuring just 5 × 5 cm, it supports both Betaflight and ArduPilot, offering the flexibility to power everything from FPV freestyle and racing drones to autonomous UAVs. Its standout feature is dual firmware compatibility, giving users the freedom to choose between high-performance FPV flying and advanced autonomous flight on a single platform.",
      features: ["ArduPilot and Betaflight supported"],
      specs: [["Voltage","3S to 6S"],["Microcontroller","STM32 H7"],["Redundancy","2 IMUs, 2 barometers"]],
      bestFor: ["FPV"],
      faq: [],
      docs: []
    }
  ],

  /* ---------- ABOUT PAGE ---------- */
  about: {
    title: "Built in INDIA. Flown everywhere.",
    mission: "Make dependable flight electronics in India, with open docs and support that builders can actually reach.",   // <-- apna mission likho
    vision: "An Indian drone industry that flies on locally designed, locally supported hardware.",                         // <-- apna vision likho
    text: "We are a small team of hardware and firmware engineers making flight controllers, ESCs and GPS modules that Indian builders can actually get support for.",
    image: "",   // optional: about page ki badi photo
    timeline: [
      { year: "2022", title: "The first board", text: "Two engineers, one soldering station and a flight controller that finally held a hover." },
      { year: "2023", title: "Skydrive ESCs", text: "AM32 speed controllers go into small batches and onto builders' benches." },
      { year: "2024", title: "NAVSATE GPS", text: "A GPS module tuned for UAVs, tested on long, boring, wonderful flights." },
      { year: "2025", title: "Aazmuth", text: "Our modular, triple-redundant flagship controller leaves the lab." }
    ],
    values: [
      { title: "Test everything", text: "Every batch gets bench time and flight time before it ships." },
      { title: "Write it down", text: "Public docs, pinouts and changelogs, so you are never guessing." },
      { title: "Make it here", text: "Designed in India, so a fix is a phone call away." }
    ],
    /* photo khali ho to initials wala avatar dikhega. Team hatani ho to list khali [] kar do. */
    team: [
        // { name: "Rohan Deshmukh", role: "Founder and CEO", photo: "", note: "Leads product direction and partnerships. (mock)" }
       ],
    /* workshop photos: image add/remove yahin. Khali [] = section hide. */
    gallery: [
      // { src: "images/NIC.png", caption: "PCB layout review" },
    ],
    offices: [
      { city: "Mumbai", role: "Registered office", address: "Unit 37A, Patel Industrial Estate, Vivekananda Rd, Yadav Nagar, Dahisar East, Mumbai 400068" },
      { city: "Nashik", role: "Product development centre", address: "Vinayak Bungalow, Shradha Nagar, Suyog Colony, Parijat Nagar, Nashik 422005" }
    ]
  },

  /* ---------- EXTRA CONTENT (home, solutions, support) ---------- */
  ticker: ["Flight controllers", "AM32 ESCs", "GPS modules", "Transmitters", "Made in India"],
  manifesto: "We design the electronics, write the firmware and fly every batch ourselves. When something needs fixing, you call the people who built it.",
  apps: [
    { t: "Agriculture", x: "Spraying and crop-mapping drones need a steady hover and long, GPS-locked runs.", p: ["aazmuth-flight-controller", "navsate-gps-for-uavs", "skydrive-am32-60a"] },
    { t: "Survey and mapping", x: "Redundant sensors and a reliable GPS keep survey lines straight.", p: ["aazmuth-flight-controller", "navsate-gps-for-uavs"] },
    { t: "Defense and security", x: "Triple-redundant sensing for missions where a failure is not an option.", p: ["aazmuth-flight-controller", "navsate-gps-for-uavs"] },
    { t: "FPV racing and freestyle", x: "Light, fast F7 control and 4-in-1 ESCs for tight, punchy builds.", p: ["exelr8-fpv-flight-controller-f7", "skydrive-55a-am32-4-in-1", "navsate-mini-gps"] },
    { t: "Education and research", x: "Modular boards and open docs that students can open up and learn from.", p: ["aazmuth-flight-controller", "exelr8-fpv-flight-controller-f7"] },
    { t: "Startups and prototypes", x: "Small batches, direct support and parts that match your build.", p: ["skydrive-am32-40a", "skydrive-am32-60a", "exelr8-fpv-flight-controller-f7"] }
  ],
  process: [
    { t: "Design", x: "Schematics, PCBs and firmware drawn in India." },
    { t: "Bench test", x: "Every board is powered, loaded and measured before it leaves the bench." },
    { t: "Fly test", x: "Real flights, real logs, real fixes." },
    { t: "Ship and support", x: "Public docs, and a phone number that gets answered." }
  ],
  faq: [
    { q: "What is AM32 firmware?", a: "AM32 is open-source firmware for 32-bit brushless ESCs. Skydrive ESCs run it, so you can configure and update them with the usual AM32 tools." },
    { q: "Which ESC should I buy for an agriculture or sprayer drone?", a: "Start with the Skydrive AM32 60A 3-6S, which is meant for heavier payloads. Share your motor, prop and battery setup and we will confirm the fit." },
    { q: "Which flight controller should I pick?", a: "Aazmuth for redundancy and professional work, Exelr8 F7 for FPV builds. Tell us your build and we will confirm." },
    { q: "Are your drone electronics made in India?", a: "They are designed in India by our own hardware and firmware engineers, so support and fixes are a phone call away." },
    { q: "Can I buy in bulk or for a company or OEM project?", a: "Yes. Send quantity and use case through the quote form, or call or WhatsApp us, and we will reply with the right parts." },
    { q: "Where are the pinouts and setup guides?", a: "In our public documentation. Each product page links to its own docs, where they exist." },
    { q: "Do you ship across India?", a: "Call or WhatsApp us with your pincode and quantity and we will confirm shipping." },
    { q: "When will the coming-soon products launch?", a: "The TRX transmitters are on our roadmap. Message us and we will tell you as soon as there is a date." }
  ]
};

/* =====================================================================
   LEGAL / COMPLIANCE  -  sirf neeche ke khali fields apni VERIFIED details se bharo,
   phir:  node build.js     (khali field site par dikhta hi nahi; build warning deta hai)
   ===================================================================== */
(function(){
const S=window.SITE;
/* HIDE + NOIMAGE: p.hidden:true wale products site par kahin nahi dikhte (admin form me dikhte hain: S.allProducts).
   Jis product ki image khali ho, uski jagah images/noimage.png lagti hai. */
S.allProducts=S.products.slice();
S.products=S.allProducts.filter(p=>!p.hidden).map(p=>p.image?p:Object.assign({},p,{image:"images/noimage.png",noimg:true}));
S.inCat=(p,c)=>p.category===c||(p.also||[]).indexOf(c)>-1;   /* product kisi category me hai ya nahi (main + also) */
const reg=(S.about.offices||[]).find(o=>/regist/i.test(o.role))||(S.about.offices||[])[0]||{};
S.company={
  llpName:S.name,
  llpin:"",                       // <-- LLPIN (MCA records se verify karke daalo, jaise AAA-1234)
  registeredOffice:reg.address||"",
  gstin:""                        // <-- optional, GSTIN verify karke
};
S.legal={
  effective:"16 November 2026", updated:"16 November 2026",
  officer:{
    name:"",                      // <-- Grievance Officer ka poora naam
    designation:"",               // <-- jaise "Director" / "Compliance Manager"
    email:S.email,                // existing verified email (badalna ho to yahin)
    phone:S.phone,                // existing verified number
    address:S.company.registeredOffice,
    hours:""                      // <-- jaise "Mon-Sat, 10:00 to 18:00 IST"
  },
  /* Sab drone products UAS ke components hain, isliye ye text har product page par aata hai.
     Transmitters ke liye RF wali extra line judti hai. */
  uasNotice:"Space and Tech Engineering LLP supplies electronic components and accessories for unmanned aircraft systems. The supply of an individual component does not constitute certification or approval of a complete drone or unmanned aircraft system. Customers and system integrators are responsible for verifying applicable regulatory, safety and operational requirements before deployment.",
  rfNotice:"Radio equipment may need Wireless Planning and Coordination (WPC) approval and must follow Indian frequency and power rules. This product is not yet released, and no approval or legal-operation claim is made for it.",
  pages:[
  {slug:"terms",nav:"Terms and Conditions",title:"Terms and Conditions",
   desc:"Terms for using the Space and Tech Engineering LLP website and for enquiries, quotations and supply of drone electronics.",
   intro:"These terms apply when you use this website or ask us for a quotation. By using the site you agree to them.",
   sections:[
   {h:"About us",p:[`This website is operated by ${S.company.llpName}, a limited liability partnership. Registered office: ${S.company.registeredOffice}.`+(S.company.llpin?` LLPIN: ${S.company.llpin}.`:'')+" The partners' liability is limited as provided in the Limited Liability Partnership Act, 2008."]},
   {h:"Using the website",p:["You agree to use the site and its forms lawfully. You must not send us anything that infringes another person's rights, is unlawful, defamatory, obscene or harassing, or contains malicious code, and you must not attempt to disrupt or gain unauthorised access to the site. We may block access or decline to respond if these terms are broken, and we may report unlawful activity to the authorities."]},
   {h:"Information on this site",p:["Product details are for general information. Specifications, availability and prices can change without notice and are confirmed only in a written quotation or invoice. See our Disclaimer and Product Regulatory Disclaimer."]},
   {h:"Quotations, orders, delivery and returns",p:["The website does not take online payments. Supply is by written quotation, purchase order and invoice. Price, taxes, delivery schedule, shipping, cancellation, returns, refunds and warranty are set out in the quotation or invoice agreed with you, which prevails over any general statement on this site."]},
   {h:"Lawful use of products",p:["Our products are electronic components. You are responsible for lawful use, including drone registration, certification, airspace, radio and operational rules applicable to your final system."]},
   {h:"Intellectual property",p:["Content, designs, logos and product images on this site belong to us or our licensors unless stated. You may link to the site. Other use needs our written permission."]},
   {h:"Limitation of liability",p:["To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of the site or from reliance on general information on it. Nothing here limits liability that cannot be limited by law, or any right you have under consumer law."]},
   {h:"Governing law and complaints",p:["These terms are governed by the laws of India. Subject to applicable law, the courts at Mumbai, Maharashtra have jurisdiction. For complaints, use the Grievance Redressal page."]},
   {h:"Changes",p:["We may update these terms. The latest version, with its effective date, is always on this page."]}
   ]},
  {slug:"privacy",nav:"Privacy Policy",title:"Privacy Policy",
   desc:"How Space and Tech Engineering LLP collects, uses, shares and protects personal data, and how to exercise your rights or withdraw consent.",
   intro:"We collect only what we need to answer your enquiry and supply our products. This policy explains what, why, and how you stay in control.",
   sections:[
   {h:"Who is responsible",p:[`${S.company.llpName} (registered office: ${S.company.registeredOffice}) decides why and how your personal data is used. Privacy contact: the Grievance Officer listed on the Grievance Redressal page.`]},
   {h:"Which law applies today",p:["The Information Technology Act, 2000 and the SPDI Rules, 2011 apply now. The Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025 are being brought into force in phases; as published, the main duties on businesses (notice, consent, rights and breach reporting) apply from May 2027. We are shaping this policy and our forms to match them, but we do not claim compliance with provisions that are not yet in force."]},
   {h:"What we collect",ul:["Contact form or message: name, phone number, product of interest and the message you write (build details, quantity).","Email or WhatsApp: the details your account shows us and what you send.","Orders and invoices: company name, billing and shipping address, GSTIN and similar details needed to supply and bill.","We do not ask for sensitive data such as health or financial account details through this site."]},
   {h:"Why we use it, and on what basis",ul:["To reply to your enquiry and prepare a quotation: you ask us to, and you consent by sending the message.","To supply, invoice, deliver and support products: to perform the contract with you.","To meet legal, tax, accounting and security obligations.","We do not send marketing messages unless you separately ask us to. We never pre-tick consent boxes."]},
   {h:"How the contact form works",p:["The form does not store your details on our servers. When you submit it, it opens your own email app or WhatsApp with the message ready, and nothing is sent until you press send there. Details are then handled in those services under their own policies."]},
   {h:"Cookies, analytics and third-party resources",p:["As of the effective date this site sets no advertising or analytics cookies. To display the page, your browser loads fonts from Google and some product images from servers hosted by Wix, so those providers receive your IP address and browser details. If we add analytics or advertising cookies later, we will update this policy and ask for your consent first where required."]},
   {h:"Who we share data with",p:["We do not sell personal data. We share it only with service providers who help us (email, messaging, courier, accounting, hosting) and with authorities when the law or a lawful order requires it."]},
   {h:"Retention and security",p:["We keep enquiry and order records only as long as needed for the purpose, and for as long as tax, accounting or other law requires. We use reasonable security safeguards suited to the data we handle. If a personal data breach affects you, we will inform you and the authorities as the law requires."]},
   {h:"Your rights and withdrawing consent",p:["You can ask us to give you a summary of your data, correct or complete it, erase it, or stop using it, and you can withdraw consent at any time. Withdrawal is as easy as giving it: write to the Grievance Officer and we will act, except where we must keep data by law. Withdrawing does not affect what was done before. You may also nominate someone to exercise these rights for you if you cannot."]},
   {h:"Children",p:["This site is meant for business and adult users. Please do not send us personal data of anyone under 18."]},
   {h:"Complaints",p:["Write to the Grievance Officer first. If you are not satisfied, you may approach the Data Protection Board of India once its complaint provisions are in force, or any other authority the law provides."]}
   ]},
  {slug:"grievance",nav:"Grievance Redressal",title:"Grievance Redressal Policy",
   desc:"How to raise a complaint with Space and Tech Engineering LLP, our Grievance Officer contact details and response commitments.",
   intro:"If something on this website or in our dealings with you is wrong, tell us. A named officer is responsible for every complaint.",
   officerBlock:true,
   sections:[
   {h:"How to complain",p:["Write, call or email the Grievance Officer using the details above. Please include your name, contact details, the page or product concerned and what went wrong. Complaints about privacy or personal data go to the same officer."]},
   {h:"What you can expect",ul:["We acknowledge your complaint within 2 working days.","We aim to resolve it within 15 days of receipt, or tell you why more time is needed.","We give you the reason for our decision in writing."]},
   {h:"Scope of this policy",p:["The timelines above are our own service commitments. This website does not host or publish content uploaded by the public. If any law gives you a shorter timeline or a further appeal route in a particular situation, we will follow it."]},
   {h:"Consumer complaints",p:["If you are a consumer and are not satisfied, you may also contact the National Consumer Helpline (1915) or the consumer commission that has jurisdiction under the Consumer Protection Act, 2019."]},
   {h:"Government and law-enforcement requests",p:["Lawful notices and orders may be sent in writing to the Grievance Officer at the postal address above."]}
   ]},
  {slug:"disclaimer",nav:"Disclaimer",title:"Disclaimer",
   desc:"General disclaimer for information on the Space and Tech Engineering LLP website, including specifications, images and technical guidance.",
   intro:"Please read this with our Terms and Conditions and Product Regulatory Disclaimer.",
   sections:[
   {h:"General information",p:["Content on this site is for general information. We try to keep it accurate but do not promise it is complete or current. Performance figures are from our design or test conditions and may differ in your build."]},
   {h:"Images and renders",p:["Photos and renders are illustrative. Where an image is a computer-generated render or has been materially altered, the actual product may differ."]},
   {h:"Technical guidance",p:["Documentation, guides and Drone Lab articles are educational. They are not a substitute for your own engineering, safety and legal review. Test any build in a safe, lawful environment."]},
   {h:"Third-party links and trademarks",p:["Links to other sites, open-source projects (such as AM32) and third-party names are for convenience. We do not control them, and their trademarks belong to their owners. Compatibility statements apply only to the configurations we describe."]},
   {h:"No professional advice",p:["Nothing on this site is legal, regulatory or financial advice."]}
   ]},
  {slug:"product-regulatory",nav:"Product Regulatory Disclaimer",title:"Product Regulatory Disclaimer",
   desc:"Regulatory position of drone components supplied by Space and Tech Engineering LLP: DGCA, drone rules, radio equipment and compliance.",
   intro:"Our products are parts of drones, not complete drones. This page explains what that means for regulation.",
   sections:[
   {h:"Components are not aircraft",p:[S.legal_uas_placeholder||"Space and Tech Engineering LLP supplies electronic components and accessories for unmanned aircraft systems. The supply of an individual component does not constitute certification or approval of a complete drone or unmanned aircraft system. Customers and system integrators are responsible for verifying applicable regulatory, safety and operational requirements before deployment."]},
   {h:"What we supply",ul:["Flight controllers, ESCs (speed controllers) and GPS modules: electronic components for integrators and builders.","Radio transmitters (planned, not yet released): radio equipment with its own approval requirements.","We do not sell complete unmanned aircraft systems on this site."]},
   {h:"Drone rules in India",p:["Complete drones and their operators are subject to the Drone Rules, 2021 and later amendments, the Certification Scheme for Unmanned Aircraft Systems, 2022 and DGCA notifications. Type certification, registration, remote pilot requirements and airspace permissions apply to the final aircraft and its operator. The final drone manufacturer and operator are responsible for them."]},
   {h:"Radio equipment",p:["Radio transmitters and links may need WPC Equipment Type Approval or other authorisation, and must use permitted frequencies and power. We do not state that any radio product is approved or legal to operate unless the approval is documented and listed on this page."]},
   {h:"Our approvals status",p:["As of the effective date we do not claim DGCA, WPC or other regulatory approval for any product on this website. If we obtain one, we will name the product and approval here only with supporting documents."]},
   {h:"Questions",p:["Ask the Grievance Officer or write to us through the contact page and we will tell you what we can document for a specific product."]}
   ]}
  ]
};
})();