window.PRODUCT_GUIDES = [{"slug":"guide-flight-controller-india","h1":"How to choose a drone flight controller in India","products":["aazmuth-flight-controller","exelr8-fpv-flight-controller-f7","sate-aio-board","kinetik-flight-controller"]},{"slug":"guide-am32-esc","h1":"AM32 ESC explained: how to choose the right amp rating","products":["skydrive-am32-60a","sate-4-in-1-esc-80a","sate-high-amp-esc"]},{"slug":"guide-uav-gps-module","h1":"How to choose a GPS module for UAVs and FPV drones","products":["navsate-gps-for-uavs","navsate-mini-gps"]},{"slug":"guide-fpv-drone-electronics-stack","h1":"The FPV drone electronics stack explained","products":["exelr8-fpv-flight-controller-f7","kinetik-flight-controller","sate-4-in-1-esc-80a","elrs-fpv-receiver","sate-aio-board","navsate-mini-gps","analog-vtx","digital-vtx"]},{"slug":"guide-elrs-receiver","h1":"ExpressLRS (ELRS) receivers: what they are and how to choose","products":["elrs-fpv-receiver"]}];
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
      { src: "images/azmuth.avif",  ms: 3000, zoom: 1.6, alt: "Aazmuth flight controller", href: "aazmuth-flight-controller.html" },
      { src: "images/exclr8.avif",  ms: 3000, zoom: 1.6, alt: "Exelr8 flight controller for FPV drones", href: "exelr8-fpv-flight-controller-f7.html" },
      { src: "images/4in1.avif",    ms: 3000, zoom: 1.45, alt: "AM32 ESCs for FPV drones", href: "drone-escs.html" },
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
  catalogIntro: "Compare flight controllers, AM32 electronic speed controllers, GPS modules, ExpressLRS receivers and FPV video transmitters. Filter by component, then open a product to check its specifications, compatibility and availability.",
  catalogBuying: "Start with your aircraft type, battery voltage and the parts you already own. If you need a compatibility check, current pricing or a bulk quote in India, share your build details and quantity with our team.",
  productCollections: {
    "Flight controllers": {
      slug: "drone-flight-controllers", title: "Indian Drone Flight Controllers for UAV & FPV",
      description: "Compare Aazmuth STM32H7 and Exelr8 F7 flight controllers for UAV and FPV builds. Check specifications, documentation and OEM quote options.",
      advice: "For a survey or agriculture UAV, start with Aazmuth if you need three IMUs, two barometers and replaceable IMU boards. For a 3S to 6S FPV quad, compare Exelr8 F7 if you need onboard OSD. Check the exact firmware target, frame clearance and GPS, receiver and ESC connections before ordering. For an OEM quote, share your aircraft type, firmware requirements and quantity.",
      guide: "guide-flight-controller-india"
    },
    "ESCs": {
      slug: "drone-escs", title: "AM32 Drone ESCs for UAV and FPV Builds",
      description: "Compare AM32 electronic speed controllers, including 3–6S single and 4-in-1 ESCs and a high-current 6–12S option.",
      advice: "Match the battery cell count first, then compare continuous current ratings with your motor and propeller load. A 4-in-1 board combines four channels in one stack. Individual ESCs can be replaced one at a time. Check the individual product for its signal, voltage and mounting requirements.",
      guide: "guide-am32-esc"
    },
    "GPS": {
      slug: "drone-gps-modules", title: "GPS Modules for UAV and FPV Drones",
      description: "Compare NAVSATE UAV GPS and NAVSATE Mini FPV GPS for drone builds that need position data.",
      advice: "Choose the module by available space and the flight controller’s supported GPS interface. The UAV module is intended for builds that use position hold and waypoint missions. NAVSATE Mini is intended for compact FPV frames. Flight modes depend on the flight controller and its firmware.",
      guide: "guide-uav-gps-module"
    },
    "FPV": {
      slug: "fpv-drone-electronics", title: "FPV Drone Electronics and Components",
      description: "Browse FPV flight controllers, ESCs, GPS modules, ExpressLRS receivers and video transmitters by build requirement.",
      advice: "Check frame mounting dimensions and battery voltage before pairing components. Match the control receiver with your radio protocol and the video transmitter with your goggles or receiver. Leave room for connectors and verify how each part is powered.",
      guide: "guide-fpv-drone-electronics-stack"
    },
    "Video transmitters": {
      slug: "fpv-video-transmitters", title: "5.8 GHz FPV Video Transmitters",
      description: "Compare Space and Tech Engineering’s analog and digital 5.8 GHz FPV video transmitter product pages.",
      advice: "Check your goggles or video receiver for protocol support before comparing transmitters. Analog and digital products can share a frequency band, while compatibility depends on the video system. Compare the listed power, connector and mounting details for each model.",
      guide: "guide-fpv-drone-electronics-stack"
    }
  },
  /* FPV category: product ki main category (category:) wahi rehti hai; FPV me dikhane ke liye also: ["FPV"] lagao.
     Naya FPV product: category: "FPV" bhi likh sakte ho. */
  products: [
    {
      slug: "aazmuth-flight-controller", name: "Aazmuth flight controller", category: "Flight controllers",
      heading: "Aazmuth STM32H7 UAV Flight Controller",
      seoTitle: "Aazmuth STM32H7 UAV Flight Controller | Designed in India",
      seoDescription: "Indian-designed Aazmuth STM32H7 UAV flight controller with 3 IMUs, 2 barometers and replaceable IMU boards. Request an OEM quote.",
      buyerSummary: "Designed in India for professional UAVs, Aazmuth has three IMUs and two barometers on separate buses. Its modular design lets you replace an IMU board without replacing the controller.",
      buyerCheck: "For a survey or agriculture UAV, compare the 92 x 54 x 14.6 mm enclosure and 63 g weight with your airframe. Confirm the firmware, peripheral connections and supported sensor modules for your build.",
      status: "available", featured: true,
      image: "images/aazmuth-flight-controller-packshot.webp", gallery: [],
      /* BENCH TO SKY (product page ke neeche). Har step me: text (optional, khali = default), imgs: ["images/x.jpg"], video: YouTube link.
         Khali imgs/video = wo hissa dikhega hi nahi. Video: https://www.youtube.com/watch?v=XXXX ya https://youtu.be/XXXX */
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench:  { text: "", imgs: [], video: "" },
        fly:    { text: "", imgs: [], video: "" }
      },
      short: "Indian-designed Aazmuth STM32H7 UAV flight controller with 3 IMUs, 2 barometers and replaceable IMU boards. Request an OEM quote.",
      description: "Aazmuth is our flagship flight controller for professional UAVs. It runs on an STM32 H7 (Cortex-M7, up to 480 MHz) and carries 3 IMUs and 2 barometers, each on its own isolated bus, so one noisy or failed sensor does not take down the flight. IMU boards plug in over 20-pin Aazmuth Bus connectors, which means you can swap or upgrade sensors without replacing the controller. Built for defence, industry, agriculture, survey, startups and universities.",
      features: ["Triple IMU and dual barometer redundancy", "Isolated sensor buses, so vibration on one does not corrupt the others", "Modular IMU boards on the 20-pin Aazmuth Bus", "Public pinout, calibration and sensor-integration docs"],
      specs: [["Microcontroller","STM32 H7, Cortex-M7"],["Clock speed","Up to 480 MHz"],["Memory","2 MB flash, 1 MB RAM"],["Redundancy","3 IMUs, 2 barometers"],["Size","92 x 54 x 14.6 mm"],["Weight","63 g"]],
      bestFor: ["Agriculture", "Survey and mapping", "Defense and security", "Education and research"],
      faq: [
        { q: "What redundancy does the Aazmuth flight controller have?", a: "Aazmuth carries 3 IMUs and 2 barometers, each on its own isolated bus, so a fault or vibration on one sensor does not corrupt the others." },
        { q: "What processor does Aazmuth use?", a: "An STM32 H7 (Cortex-M7) running at up to 480 MHz, with 2 MB of flash and 1 MB of RAM." },
        { q: "How big and heavy is it?", a: "92 x 54 x 14.6 mm and 63 g." },
        { q: "How do I get Aazmuth pricing and availability in India?", a: "Request a quote using the contact options on this page. Include your order quantity, airframe type and firmware requirements so our team can check fit and availability." },
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
      heading: "Exelr8 F7 FPV Flight Controller",
      seoTitle: "Exelr8 F7 FPV Flight Controller for 3S–6S Quads",
      seoDescription: "Indian-designed Exelr8 F7 flight controller for 3S–6S FPV quads with onboard OSD, 5 V and 10 V outputs. Check specs and request a quote.",
      buyerSummary: "An F7 flight controller for 3S to 6S racing and freestyle quads, with an onboard OSD and separate 5 V and 10 V outputs for supported peripherals.",
      buyerCheck: "Check frame mounting, the ESC cable pinout and the voltage and current requirements of your receiver and video system. Ask which current ESC options fit your stack if you are replacing an older board.",
      also: ["FPV"], status: "available", featured: true,
      image: "images/exelr8-fpv-flight-controller-f7-packshot.webp", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "F7 flight controller for light, fast FPV racing and freestyle builds.",
      description: "Exelr8 is an F7 flight controller for 3S to 6S FPV racing and freestyle builds. It combines a fourth-generation InvenSense IMU, an Infineon barometer and onboard OSD. Separate 5 V and 10 V BEC outputs can power compatible peripherals within their listed ratings.",
      features: ["F7 processor","Pairs with Skydrive 4-in-1 ESC and NAVSATE mini GPS","Designed and supported in India"],
      specs: [["Microcontroller","F7"],["Gyroscope & Accelerometer","InvenSense 4th Generation"],["Barometer","Infineon High-Precision"],["OSD","High-Performance OSD"],["BEC Output","10V / 2A and 5V / 2A"],["Battery Input","3S–6S"],["Protection","Reverse-voltage and short-circuit protection"]],
      bestFor: ["FPV racing and freestyle","Startups and prototypes"],
      faq: [
        { q: "What is the Exelr8 flight controller for?", a: "Exelr8 is an F7 flight controller for FPV drone builds, including racing and freestyle quads." },
        { q: "Which ESC and GPS go with Exelr8?", a: "Choose an ESC that matches your battery and motor load, then check the harness pinout. If you are adding a GPS such as the NAVSATE Mini, confirm the interface and firmware support for your build." },
        { q: "Exelr8 or Aazmuth?", a: "Choose Exelr8 for FPV builds and Aazmuth when you need triple-redundant sensing for professional or mission work." }
      ],
      docs: []
    },
    {
      slug: "skydrive-am32-60a", name: "Skydrive AM32 60A 3-6S", category: "ESCs",
      heading: "Skydrive 60A AM32 ESC for 3-6S Drones",
      seoTitle: "Skydrive 60A AM32 Single ESC for 3S–6S Drones",
      seoDescription: "Skydrive 60A AM32 single ESC for 3S–6S LiPo drones. See specs for one-ESC-per-motor setups and request pricing in India.",
      buyerSummary: "A single 60 A AM32 electronic speed controller for 3S to 6S LiPo power systems. Compare it for multirotors that need one ESC per motor.",
      buyerCheck: "Share the battery cell count, motor model, propeller size and measured current under load when requesting a quote. Confirm cooling and current headroom for the intended payload.",
      status: "available", featured: true,
      image: "images/skydrive-am32-60a-packshot.webp", gallery: [],
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
      heading: "NAVSATE GPS Module for UAV Drones",
      seoTitle: "NAVSATE DroneCAN GPS Module for UAVs | u-blox GNSS",
      seoDescription: "NAVSATE DroneCAN UAV GPS with u-blox GNSS and an onboard magnetometer. Verify CAN compatibility and request pricing in India.",
      buyerSummary: "A DroneCAN GPS module with an onboard magnetometer for UAV positioning. Compare it for flight controllers that support CAN peripherals.",
      buyerCheck: "Confirm the controller supports DroneCAN and check the connector, available CAN port and mounting space. Position hold, return-to-home and waypoint behavior depend on your flight firmware and configuration.",
      also: ["FPV"], status: "available", featured: true,
      image: "images/navsate-gps-for-uavs-packshot.webp", gallery: [],
      journey: {
        design: { text: "", imgs: [], video: "" },
        bench : { text: "", imgs: [], video: "" },
        fly   : { text: "", imgs: [], video: "" }
      },
      short: "UAV-tuned GPS module, tested on long flights, for position hold and waypoint missions.",
      description: "NAVSATE is our GPS module tuned for UAVs and tested on long flights. It gives your flight controller the position and ground-speed data it needs for position hold, return-to-home and waypoint missions, and pairs with Aazmuth for survey, agriculture and defence work.",
      features: ["Tuned for UAVs","Tested on long flights","Enables position hold, return-to-home and waypoint missions"],
      specs: [["GNSS Chip","u-blox"],["Magnetometer:","Industry-grade"],["Communication Interface","CAN"],["Protocol","DroneCAN"],["RF Front End","Built-in LNA and RF filter"],["Oscillator","TCXO"],["Satellite Tracking","25+ satellites in urban areas"]],
      bestFor: ["Agriculture","Survey and mapping","Defense and security"],
      faq: [
        { q: "What does the NAVSATE GPS do?", a: "It tells the flight controller where the drone is and how fast it is moving, which enables position hold, return-to-home and waypoint missions." },
        { q: "Which flight controller works with NAVSATE?", a: "It is designed as part of our stack with the Aazmuth flight controller. Share your build and we will confirm wiring and settings." }
      ],
      docs: []
    },
    {
      slug: "navsate-mini-gps", name: "NAVSATE mini for FPV drones", category: "GPS",
      heading: "NAVSATE Mini GPS Module for FPV Drones",
      seoTitle: "NAVSATE Mini GPS Module for Compact FPV Drones",
      seoDescription: "NAVSATE Mini is a compact GPS module for FPV drones. Check mounting space and flight controller compatibility before requesting a quote.",
      buyerSummary: "A compact GPS module for FPV builds where mounting space is limited. It supplies position data to a compatible flight controller.",
      buyerCheck: "Ask for the current pinout, supply voltage, interface and dimensions before ordering, especially for a tight frame. Check which GPS features your flight firmware supports.",
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
      heading: "TRX 5 km Radio Transmitter",
      seoTitle: "TRX 5 km Drone Radio Transmitter | In Development",
      seoDescription: "TRX drone radio transmitter with a 5 km design target. In development. Ask about receiver compatibility and release timing.",
      buyerSummary: "A radio control transmitter in development with a 5 km design target. Ask about release timing and the supported receiver ecosystem.",
      buyerCheck: "Confirm receiver and protocol compatibility for your existing equipment when final specifications are available. The distance is a design target and actual range depends on operating conditions and the final hardware.",
      status: "soon", featured: false,
      image: "images/noimage.webp", gallery: [],
      short: "5 km range radio transmitter. Coming soon.",
      description: "TRX 5 km is a radio transmitter on our roadmap, aimed at 5 km control range. Ask us and we will tell you as soon as there is a launch date.",
      features: [],
      specs: [],
      faq: [],
      docs: []
    },
    {
      slug: "trx-10km", name: "TRX 10 km", category: "Transmitters",
      heading: "TRX 10 km Radio Transmitter",
      seoTitle: "TRX 10 km Drone Radio Transmitter | In Development",
      seoDescription: "TRX drone radio transmitter with a 10 km design target. In development. Ask about planned receiver options and availability.",
      buyerSummary: "A radio control transmitter in development with a 10 km design target. Ask for the planned receiver options and availability.",
      buyerCheck: "If you are comparing the two TRX models, ask for final specifications and range test conditions before choosing one. The product name reflects the design target.",
      status: "soon", featured: false,
      image: "", gallery: ["images/noimage.webp"],
      short: "10 km range radio transmitter. Coming soon.",
      description: "TRX 10 km is a radio transmitter on our roadmap, aimed at 10 km control range. Ask us and we will tell you as soon as there is a launch date.",
      features: [],
      specs: [],
      faq: [],
      docs: []
    },
    {
      slug: "elrs-fpv-receiver", name: "ELRS FPV radio receiver", category: "Receivers",
      heading: "2.4 GHz ExpressLRS FPV Receiver (ELRS)",
      seoTitle: "2.4 GHz ExpressLRS FPV Receiver | ESP32, CRSF, 5 V",
      seoDescription: "2.4 GHz ExpressLRS FPV receiver with ESP32, CRSF, a 5 V input and a 65 mm T-antenna. Check your setup and request pricing in India.",
      buyerSummary: "A 2.4 GHz ExpressLRS receiver for FPV aircraft. It connects to the flight controller through CRSF, takes a 5 V supply and includes a 65 mm T-antenna.",
      buyerCheck: "Check that your radio uses 2.4 GHz ExpressLRS, that the flight controller has a suitable UART for CRSF and that the frame has room for the antenna. Confirm firmware compatibility before binding.",
      also: ["ESCs","FPV"], status: "available", featured: false,
      image: "images/elrs-fpv-receiver-packshot.webp", gallery: ["images/elrs-fpv-receiver-gallery-1.webp"],
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
      heading: "SATE 80A 4-in-1 AM32 ESC for 3-6S FPV",
      seoTitle: "SATE 80A 4-in-1 AM32 ESC for 3S–6S FPV Drones",
      seoDescription: "SATE 80A 4-in-1 AM32 ESC for 3S–6S FPV quads. Check DShot support, battery input and motor compatibility before requesting a quote.",
      buyerSummary: "A four-channel AM32 ESC for 3S to 6S FPV builds. One board serves all four motors, with DShot support for compatible flight controllers.",
      buyerCheck: "Confirm whether the catalogue 80 A figure applies per channel or to the board before choosing motors. Also check your mounting pattern, flight-controller cable pinout and airflow.",
      also: ["FPV"], status: "available", featured: false,
      image: "images/sate-4-in-1-esc-80a-packshot.webp", gallery: [],
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
      heading: "5.8 GHz Analog FPV Video Transmitter (VTX)",
      seoTitle: "5.8 GHz Analog FPV Video Transmitter | In Development",
      seoDescription: "Compact 5.8 GHz analog FPV VTX in development. Ask about analog goggle compatibility, specifications and release timing.",
      buyerSummary: "A compact 5.8 GHz analog video transmitter in development for FPV builds using analog goggles or a compatible video receiver.",
      buyerCheck: "Ask for the final input voltage, supported channels, output power levels and antenna connector before choosing a video system.",
      also: ["FPV"], status: "soon", featured: false,
      image: "images/analog-vtx-packshot.webp", gallery: [],
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
      heading: "5.8 GHz Digital FPV Video Transmitter (VTX)",
      seoTitle: "5.8 GHz Digital FPV Video Transmitter | In Development",
      seoDescription: "Compact 5.8 GHz digital FPV VTX in development. Ask about the supported digital goggle or receiver ecosystem and release timing.",
      buyerSummary: "A compact 5.8 GHz digital video transmitter in development for FPV builds. Confirm support for your goggles or receiver before choosing this model.",
      buyerCheck: "Ask which digital video protocol and camera connections the final version supports. The frequency band alone does not establish compatibility with your existing equipment.",
      also: ["FPV"], status: "soon", featured: false,
      image: "images/digital-vtx-packshot.webp", gallery: [],
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
      also: ["FPV"], status: "soon", featured: false, hidden: true,
      image: "images/sate-h7-fpv-flight-controller-main.webp", gallery: [],
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
      heading: "SATE 200A AM32 ESC for 6-12S Drones",
      seoTitle: "SATE 200A AM32 Single ESC for 6S–12S UAVs",
      seoDescription: "SATE 200A AM32 single ESC for 6S–12S UAV power systems. Check the catalogue rating and request a quote for your propulsion setup.",
      buyerSummary: "A single AM32 ESC for 6S to 12S UAV propulsion with a catalogue rating of 200 A continuous. Compare it for builds with a high-current motor load.",
      buyerCheck: "Request the rating conditions and confirm cooling and connector requirements using your motor, propeller and battery details. Use your measured current under load when comparing ESCs.",
      also: ["FPV"], status: "available", featured: false,
      image: "images/sate-high-amp-esc-main.webp", gallery: [],
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
      heading: "Aazmuth Mini STM32H7 Flight Controller",
      seoTitle: "Aazmuth Mini STM32H7 Flight Controller for Training Drones",
      seoDescription: "Aazmuth Mini is a compact STM32H7 flight controller with an IMU, barometer and magnetometer for training drones. Coming soon.",
      buyerSummary: "A low-profile STM32H7 flight controller for training drones. It combines an IMU, barometer and magnetometer in a compact enclosure.",
      buyerCheck: "For a training fleet, check mounting options, cable access and firmware support for the exercises you plan to teach. Include the number of aircraft when requesting a quote.",
      also: ["FPV"], status: "soon", featured: false,
      image: "images/aazmuth-mini-packshot.webp", gallery: [],
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
      heading: "SATE AIO Flight Controller and 4-in-1 ESC",
      seoTitle: "SATE AIO Flight Controller with 25A 4-in-1 AM32 ESC",
      seoDescription: "SATE AIO combines an STM32 flight controller and a 4-in-1 ESC rated up to 25A continuous. See AM32 and DShot specs for compact builds.",
      buyerSummary: "A combined flight controller and 4-in-1 ESC for compact builds, with DShot and AM32 compatibility. It reduces the number of separate boards in the stack.",
      buyerCheck: "Ask how the published 25 A rating applies to the motor channels. Confirm motor load, battery input, mounting pattern and peripheral connections before choosing this board.",
      also: ["ESCs","FPV"], status: "available", featured: false,
      image: "images/sate-aio-board-packshot.webp", gallery: ["images/sate-aio-board-gallery-1.webp"],
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
      heading: "SATE FalconEye PLFM Beam-Steering Radar",
      seoTitle: "SATE FalconEye PLFM Beam-Steering Radar | In Development",
      seoDescription: "SATE FalconEye PLFM beam-steering radar in development. Compare the AERIS-10N and AERIS-10E variants and ask about availability.",
      buyerSummary: "A modular beam-steering radar platform under development, with the AERIS-10N and AERIS-10E variants listed on the product page.",
      buyerCheck: "For evaluation enquiries, ask which development version is available and what documentation can be shared.",
      status: "soon", featured: false,
      image: "", gallery: [],
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
      heading: "Kinetik FPV Flight Controller",
      seoTitle: "Kinetik STM32H7 FPV Flight Controller | Betaflight & ArduPilot",
      seoDescription: "Kinetik STM32H7 FPV flight controller for 3S–6S builds, with dual IMUs, dual barometers and Betaflight and ArduPilot support.",
      buyerSummary: "A 5 x 5 cm STM32H7 flight controller for 3S to 6S builds, with two IMUs, two barometers and support for Betaflight and ArduPilot.",
      buyerCheck: "Choose the firmware your project needs, then confirm the board target and peripheral support for that firmware. Check the mounting pattern separately from the overall board size.",
      also: ["FPV"], status: "available", featured: false,
      image: "images/kinetik-flight-controller-packshot.webp", gallery: [],
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
   Jis product ki image khali ho, uski jagah images/noimage.webp lagti hai. */
S.allProducts=S.products.slice();
S.products=S.allProducts.filter(p=>!p.hidden).map(p=>p.image?p:Object.assign({},p,{image:"images/noimage.webp",noimg:true}));
S.inCat=(p,c)=>p.category===c||(p.also||[]).indexOf(c)>-1;   /* product kisi category me hai ya nahi (main + also) */
const reg=(S.about.offices||[]).find(o=>/regist/i.test(o.role))||(S.about.offices||[])[0]||{};
S.company={
  llpName:S.name,
  llpin:"ABC-5467",                       // <-- LLPIN (MCA records se verify karke daalo, jaise AAA-1234)
  registeredOffice:reg.address||"",
  gstin:"27AEVFS0361R1Z2"                        // <-- optional, GSTIN verify karke
};
S.legal={
  effective:"26 November 2026", updated:"26 November 2026",
  officer:{
    name:"Arup Das",                      // <-- Grievance Officer ka poora naam
    designation:"Compliance Manager",               // <-- jaise "Director" / "Compliance Manager"
    email:S.email,                // existing verified email (badalna ho to yahin)
    phone:S.phone,                // existing verified number
    address:S.company.registeredOffice,
    hours:"Mon-Fri, 11:00 to 18:00 IST"                      // <-- jaise "Mon-Sat, 10:00 to 18:00 IST"
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
   {h:"Quotations, orders, delivery and returns",p:["The accepted quotation and our written order confirmation govern SKU, quantity, price, tax, shipping, delivery commitment, payment and warranty. Changes require written agreement. Additional PO terms apply only if expressly accepted in writing. The invoice records the transaction. See Returns and Warranty in the footer. Updated terms apply prospectively. Mandatory rights and terms already agreed remain applicable."]},
   {h:"Lawful use of products",p:["Our products are electronic components. You are responsible for lawful use, including drone registration, certification, airspace, radio and operational rules applicable to your final system."]},
   {h:"Intellectual property",p:["Content, designs, logos and product images on this site belong to us or our licensors unless stated. You may link to the site. Other use needs our written permission."]},
   {h:"Limitation of liability",p:["For commercial orders, to the extent permitted by law, neither party is liable for indirect or consequential losses including downtime, lost profits or loss of data. Our aggregate liability for an affected order is limited to the amount paid or payable for that order unless otherwise agreed in writing. The limit does not restrict agreed refunds, fraud, wilful misconduct, or any non-excludable liability, including applicable product liability and consumer rights."]},
   {h:"Governing law and complaints",p:["Indian law applies. Commercial court disputes are subject to the exclusive jurisdiction of the courts at Mumbai where those courts otherwise have jurisdiction. Consumers retain access to any competent forum provided by law."]},
   {h:"Changes",p:["We may update these terms. The latest version, with its effective date, is always on this page."]}
   ]},
  {slug:"refund-policy",nav:"Returns and Warranty",title:"Shipping, Returns, Refunds and Warranty Policy",
   desc:"SATE cancellation, delivery checks, warranty exclusions, return authorisation and refund process.",
   intro:"This policy covers orders placed directly with Space and Tech Engineering LLP. Agreed order terms apply subject to mandatory law.",
   sections:[
   {h:"Delivery checks",p:["Check the parcel, SKU, quantity and visible condition on receipt. Where practical, report transit damage, shortage or mismatch within 48 hours so courier evidence can be preserved. Keep the label and packaging if available. Report defects found later promptly within the applicable warranty or legal period. The 48-hour request does not cut off those remedies."]},
   {h:"Cancellation and change of mind",p:["Request cancellation in writing before dispatch or before custom work or procurement begins. A confirmed order may be cancelled with our written approval or where law permits. Change-of-mind, buyer selection errors and custom or special-order returns require written approval unless law or the accepted order provides otherwise. Any cancellation or restocking charge must have been disclosed and agreed before confirmation and be lawful. Where required for consumer e-commerce, we bear similar charges if we cancel unilaterally. If we cannot fulfil an order, we refund the unfulfilled portion unless you agree to an alternative."]},
   {h:"Commercial warranty",p:["Your accepted quotation specifies any commercial warranty, its duration, start date and covered items. Commercial warranty covers verified manufacturing defects within the agreed scope. Damage caused by incorrect wiring or polarity, use outside published limits, electrostatic discharge, impact, liquid, misuse, improper installation or unauthorised modification or repair is excluded. We assess whether the condition caused the reported fault. Any paid diagnostic or repair work needs your approval of the charge in advance."]},
   {h:"Request a return",p:["Contact our Grievance Officer at "+S.email+" with your order or invoice reference, affected SKU and quantity, serial or batch number if available, and a description of the issue. Include relevant photos, packaging or test details where available. We may request reasonable additional evidence and send return authorisation or pickup instructions. Alternative evidence is accepted for assessment. An unboxing video and original packaging are not mandatory. Do not power up visibly damaged goods for evidence."]},
   {h:"Inspection and remedies",p:["We verify the item against order and serial records and may test it to establish the fault and cause. We provide our decision and reasons in writing. We may decline duplicate, fraudulent or unsubstantiated claims after review. For eligible commercial warranty claims, we may repair or replace the affected unit first and refund the eligible amount if neither is reasonably available. Statutory remedies for defective, deficient, spurious or misdescribed goods and qualifying late deliveries remain available. Any force majeure exception applies only where permitted by law."]},
   {h:"Freight and refund payment",p:["For confirmed defects, incorrect supply or other claims where we are responsible, we arrange pickup or reimburse reasonable return freight, subject to applicable law. Freight and any lawful deduction for a discretionary return are agreed before return. We initiate approved refunds within seven working days of approval or sooner if required by law. Refunds go to the original payment method where possible or to a verified account agreed with the payer. Store credit is optional. Bank settlement times may vary."]},
   {h:"Review and statutory rights",p:["Request review through Grievance Redressal using your claim reference and any additional evidence. Mandatory rights remain available regardless of any commercial warranty or standard return condition."]}
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
   {h:"Retention and security",p:["We retain enquiry, order and claim records as needed to provide support, verify requests, address fraud and disputes, and meet legal obligations. Please redact unrelated information from evidence and never send passwords, PINs or one-time codes. If a refund requires alternative payment details we ask for the minimum needed. We use reasonable safeguards and notify affected people and authorities as required by law."]},
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
   {h:"What you can expect",p:["We acknowledge receipt within 48 hours and provide a complaint reference and a copy of the recorded complaint. We aim for resolution within 15 days and resolve consumer complaints within one month of receipt or any shorter mandatory deadline. We give the reasons for the decision in writing. You may request review using your complaint reference."]},
   {h:"Scope of this policy",p:["The timelines above are our own service commitments. This website does not host or publish content uploaded by the public. If any law gives you a shorter timeline or a further appeal route in a particular situation, we will follow it."]},
   {h:"Consumer complaints",p:["If you are a consumer and are not satisfied, you may also contact the National Consumer Helpline (1915) or the consumer commission that has jurisdiction under the Consumer Protection Act, 2019."]},
   {h:"Government and law-enforcement requests",p:["Lawful notices and orders may be sent in writing to the Grievance Officer at the postal address above."]}
   ]},
  {slug:"disclaimer",nav:"Disclaimer",title:"Disclaimer",
   desc:"General disclaimer for information on the Space and Tech Engineering LLP website, including specifications, images and technical guidance.",
   intro:"Please read this with our Terms and Conditions and Product Regulatory Disclaimer.",
   sections:[
   {h:"General information",p:["Performance figures depend on the stated test conditions, hardware revision and configuration. Confirm application-specific requirements before ordering. Agreed specifications, express warranties and mandatory rights continue to apply."]},
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
   {h:"Drone rules in India",p:["Integrators and operators are responsible for system integration and final-aircraft requirements under the Drone Rules, 2021 and amendments, including type certification, registration, pilot credentials and airspace permissions where required. SATE remains responsible for its own applicable product and supplier obligations."]},
   {h:"Radio equipment",p:["Radio transmitters and links may need WPC Equipment Type Approval or other authorisation, and must use permitted frequencies and power. We do not state that any radio product is approved or legal to operate unless the approval is documented and listed on this page."]},
   {h:"Our approvals status",p:["As of the effective date we do not claim DGCA, WPC or other regulatory approval for any product on this website. If we obtain one, we will name the product and approval here only with supporting documents."]},
   {h:"Questions",p:["Ask the Grievance Officer or write to us through the contact page and we will tell you what we can document for a specific product."]}
   ]}
  ]
};
})();
;
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
    { type: 'text', id: 'custom-components', title: 'Custom drone components in India',
      text: 'Need a custom flight controller, ESC or GPS module? Send your mounting, voltage or connector requirements for a prototype or OEM batch.',
      btn: { label: 'Explore Custom Drone Components', href: 'custom-components.html' } },

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
        { title: 'Exelr8 F7 FPV flight controller', href: 'exelr8-fpv-flight-controller-f7.html', text: 'An F7 flight controller for FPV racing and freestyle builds. See its specifications and matching GPS options before choosing components for your stack.' },
        { title: 'AM32 drone ESCs', href: 'drone-escs.html', text: 'Compare 3–6S and 6–12S electronic speed controllers, including single-channel ESCs for UAVs and 4-in-1 boards for FPV builds.' },
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
;
/* APP.JS - data.js se saare pages banata hai. Normal editing ke liye is file ko chhune ki zarurat nahi. */
(()=>{
const S=window.SITE,P=S.products,d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)];
const E=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CATSING={'ESCs':'ESC (electronic speed controller)','Flight controllers':'flight controller','GPS':'GPS module','Receivers':'receiver','Transmitters':'transmitter','Video transmitters':'video transmitter','Radar':'radar module','FPV':'FPV electronics'};
const altFor=p=>{const c=CATSING[p.category]||String(p.category||'').toLowerCase(),k=c.split(' ')[0].toLowerCase();return (String(p.name).toLowerCase().includes(k)?p.name:p.name+' '+c)+' for drones'};
const page=d.body.dataset.page,q=new URLSearchParams(location.search);
const abs=u=>/^https?:/.test(u)?u:S.url+'/'+String(u).replace(/^\//,'');
const pUrl=p=>p.slug+'.html';
const collections=Object.entries(S.productCollections||{}).filter(([category])=>P.some(p=>S.inCat(p,category)&&!p.noindex));
const collectionLinks=()=>`<ul>${collections.map(([,c])=>`<li><a href="${E(c.slug)}.html">${E(c.title)}</a></li>`).join('')}</ul>`;
const tel='tel:+'+S.whatsapp;
d.documentElement.classList.add('js');

/* ---------- SEO ---------- */
function seo(title,desc,img,ld,path){
  if(d.documentElement.dataset.static)return; /* static pages already carry full SEO tags */
  d.title=title;
  const set=(sel,attr,v)=>{let m=$(sel);if(!m){m=d.createElement(sel.startsWith('link')?'link':'meta');const[k,val]=sel.match(/\[(.+?)="(.+?)"\]/).slice(1);m.setAttribute(k,val);d.head.appendChild(m)}m.setAttribute(attr,v)};
  set('meta[name="description"]','content',desc);
  set('meta[property="og:title"]','content',title);
  set('meta[property="og:description"]','content',desc);
  set('meta[property="og:type"]','content','website');
  set('meta[name="twitter:card"]','content','summary_large_image');
  if(img)set('meta[property="og:image"]','content',abs(img));
  set('link[rel="canonical"]','href',S.url+'/'+path);
  [].concat(ld||[]).forEach(o=>{const s=d.createElement('script');s.type='application/ld+json';s.textContent=JSON.stringify(o);d.head.appendChild(s)});
}
let path='';
const org={"@context":"https://schema.org","@type":"Organization",name:S.name,url:S.url,logo:abs(S.logo||S.hero.image),email:S.email,telephone:'+'+S.whatsapp,sameAs:S.social.map(s=>s.url)};

/* ---------- shared parts ---------- */
const links=[['Products','products.html','products'],['Custom Drone Components','custom-components.html','custom-components'],['Documentation',S.docsUrl,''],['About','about.html','about'],['Contact','contact.html','contact']];
const cur=l=>(l[2]&&(page===l[2]||(l[2]==='products'&&page==='product')))?' aria-current="page"':'';
const header=`<a class="skip-link" href="#main">Skip to main content</a><header><div class="wrap nav"><a class="logo" href="/">${S.logo?`<img class="lgi" width="866" height="288" src="${E(S.logo)}" alt="${E(S.short)} logo">`:`<span class="lt">${E(S.short)}<small>${E(S.tagline)}</small></span>`}</a>
<nav aria-label="Main">${links.map(l=>`<a href="${E(l[1])}"${cur(l)}>${l[0]}</a>`).join('')}</nav>
<div class="hbar"><a class="btn" href="contact.html">Get a quote</a><button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><i></i><i></i><i></i></button></div></div></header>
<div class="menu" id="menu">${[['Home','/']].concat(links.map(l=>[l[0],l[1]])).map(l=>`<a class="m" href="${E(l[1])}">${l[0]}</a>`).join('')}
<div class="mf">Talk to our engineers<a href="${tel}">${E(S.phone)}</a></div></div>`;
const footer=`<footer><div class="wrap fcols"><div class="fc"><b>Company</b><a href="about.html">About us</a><a href="guides.html">Guides</a>${S.careersUrl?`<a href="${E(S.careersUrl)}">Careers</a>`:''}<a href="${E(S.docsUrl)}">Product documentation</a></div><div class="fc"><b>Legal</b>${S.legal.pages.map(x=>`<a href="${x.slug}.html">${E(x.nav)}</a>`).join('')}</div><div class="fc"><b>Grievance Officer</b><span>${E(S.legal.officer.name)}</span><a href="mailto:${E(S.legal.officer.email)}">${E(S.legal.officer.email)}</a><span>Complaint acknowledgement within 48 hours</span></div><div class="fc"><b>Follow</b>${S.social.map(s=>`<a href="${E(s.url)}" rel="noopener">Follow on ${E(s.label)}</a>`).join('')}<a href="sitemap.xml">Site map</a></div></div><div class="wrap fbar"><span>&copy; ${S.year} ${E(S.name)}${S.company.llpin?` &middot; LLPIN ${E(S.company.llpin)}`:''}</span><address>Registered office: ${E(S.company.registeredOffice)}</address><span>Last updated: ${new Date(document.lastModified).toISOString().slice(0,10)}</span></div></footer>
<div class="dock" id="dock"><a class="btn o" href="${tel}">Call us</a><a class="btn" href="contact.html">Get a quote</a></div>`;

const card=(p,i,detail=false)=>`<a class="card rv" href="${pUrl(p)}">${p.status==='soon'?'<span class="tag">Coming soon</span>':''}<div class="ph"><img${i<3?(i?'':' fetchpriority="high"'):' loading="lazy"'} width="320" height="240" src="${E(p.image)}" alt="${E(altFor(p))}" onerror="this.onerror=null;this.src='images/noimage.webp'"></div><div class="b"><span class="cat">${E(p.category)}</span><h3>${E(detail?(p.heading||p.name):p.name)}</h3><p>${E(detail?(p.buyerSummary||p.short):p.short)}</p></div></a>`;

/* ---------- bench to sky (har product page par) ---------- */
const ytId=u=>{u=String(u||'').trim();const m=u.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/|live\/)([\w-]{11})/)||u.match(/^([\w-]{11})$/);return m?m[1]:''};
const jr=p=>{if(p.status==='soon')return'';const J=p.journey||{},keys=['design','bench','fly','ship'];
  const body=keys.map((k,i)=>{const st=S.process[i]||{t:k,x:''},j=J[k]||{},txt=j.text||st.x,imgs=(j.imgs||[]).filter(Boolean),id=ytId(j.video);
    const media=(imgs.length?`<div class="jimgs n${Math.min(imgs.length,3)}">${imgs.map(u=>`<img loading="lazy" width="640" height="480" src="${E(u)}" alt="${E(p.name)} ${E(st.t.toLowerCase())}">`).join('')}</div>`:'')
      +(id?`<div class="yt" data-id="${E(id)}"><img loading="lazy" width="480" height="360" src="https://i.ytimg.com/vi/${E(id)}/hqdefault.jpg" alt="${E(p.name)} ${E(st.t.toLowerCase())} video"><button type="button" aria-label="Play ${E(st.t)} video"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg></button></div>`:'')
      +(k==='ship'?`<div class="cta"><a class="btn" href="contact.html?product=${encodeURIComponent(p.slug)}">Get a quote</a><a class="btn o" href="${tel}">Call us</a></div>`:'');
    return `<div class="jst rv"><div class="jt"><b>${i+1}</b><h3>${E(st.t)}</h3><p>${E(txt)}</p></div>${media?`<div class="jm">${media}</div>`:''}</div>`}).join('');
  return `<section class="alt jr"><div class="wrap"><h2>From bench to sky</h2><p class="lead">How the ${E(p.name)} got from our desk to your drone.</p>${body}</div></section>`};


/* ---------- SECTIONS (layout.js se order aata hai) ----------
   compose(pageName, {sectionName: ()=>html}, opts) -> layout.js me jo list hai wahi sections, usi order me. */
const LAY=window.LAYOUT||{};
const hasTxt=v=>String(v||'').trim().length>0;
const BLK={ /* custom sections: layout.js me { type:'text', ... } likh kar kisi bhi page me daalo */
  text:o=>`<section${o.id?` id="${E(o.id)}"`:''} class="${o.alt?'alt':''}"><div class="wrap">${hasTxt(o.title)?`<h2>${E(o.title)}</h2>`:''}${hasTxt(o.lead)?`<p class="lead">${E(o.lead)}</p>`:''}${[].concat(o.text||[]).map(t=>`<p>${E(t)}</p>`).join('')}${o.btn?`<p><a class="btn" href="${E(o.btn.href)}">${E(o.btn.label)}</a></p>`:''}</div></section>`,
  banner:o=>`<section${o.id?` id="${E(o.id)}"`:''}${o.alt?' class="alt"':''}><div class="wrap join" style="margin:0 auto"><div><h3>${E(o.title||'')}</h3><p>${E(o.text||'')}</p></div>${o.btn?`<a class="btn" href="${E(o.btn.href)}">${E(o.btn.label)}</a>`:''}</div></section>`,
  tiles:o=>`<section${o.id?` id="${E(o.id)}"`:''} class="${o.alt?'alt':''}"><div class="wrap">${hasTxt(o.title)?`<h2>${E(o.title)}</h2>`:''}${hasTxt(o.lead)?`<p class="lead">${E(o.lead)}</p>`:''}<div class="tiles">${(o.items||[]).map((t,i)=>`<${t.href?`a href="${E(t.href)}" class="tile go rv"`:'div class="tile rv"'}><b>${t.href?'\u2197':'0'+(i+1)}</b><h3>${E(t.title)}</h3><p class="mute">${E(t.text||'')}</p></${t.href?'a':'div'}>`).join('')}</div></div></section>`,
  image:o=>`<section${o.id?` id="${E(o.id)}"`:''} class="${o.alt?'alt':''}"><div class="wrap">${hasTxt(o.title)?`<h2>${E(o.title)}</h2>`:''}${hasTxt(o.lead)?`<p class="lead">${E(o.lead)}</p>`:''}<figure class="gal" style="margin:0"><img loading="lazy" width="1200" height="800" src="${E(o.src)}" alt="${E(o.alt_text||o.caption||o.title||'')}" style="width:100%;height:auto;border-radius:12px">${o.caption?`<figcaption>${E(o.caption)}</figcaption>`:''}</figure></div></section>`,
  html:o=>`<section${o.id?` id="${E(o.id)}"`:''} class="${o.alt?'alt':''}"><div class="wrap">${o.code||''}</div></section>`
};
function compose(pg,defs,opt){
  opt=opt||{};const names=Object.keys(defs);
  const list=Array.isArray(LAY[pg])?LAY[pg]:names;
  const nav=[];
  const body=list.map((it,i)=>{
    if(typeof it==='string'){
      const f=defs[it];
      if(!f){console.warn('[layout.js] "'+it+'" naam ka section "'+pg+'" page me nahi hai. Chalne wale naam: '+names.join(', '));return ''}
      const h=f();if(h&&opt.nav&&opt.nav[it])nav.push([it,opt.nav[it]]);return h;
    }
    if(it&&typeof it==='object'){
      const f=BLK[it.type];
      if(!f){console.warn('[layout.js] "'+pg+'" me #'+(i+1)+' block ka type galat hai: '+it.type+'. Sahi type: '+Object.keys(BLK).join(', '));return ''}
      if(it.nav&&it.id&&opt.nav)nav.push([it.id,it.nav]);
      return f(it);
    }
    return '';
  }).join('\n');
  const sn=nav.length?`<nav class="sn" aria-label="Sections">${nav.map(n=>`<a href="#${E(n[0])}"><i></i><span>${E(n[1])}</span></a>`).join('')}</nav>\n`:'';
  return `<main id="main"${opt.cls?` class="${opt.cls}"`:''}>${sn}${body}</main>`;
}

/* ---------- pages ---------- */
const pages={
home(){
  path='';
  seo(`${S.name} | ${S.tagline}`,S.hero.text,S.hero.image,org,'');
  const feat=P.filter(p=>p.featured);const list=(feat.length?feat:P).slice(0,8);
  const cats=S.categories.filter(c=>P.some(p=>S.inCat(p,c)));
  const tk=S.ticker.concat(S.ticker).map(t=>`<span>${E(t)}</span>`).join('');
  const words=S.manifesto.split(' ').map(w=>`<span>${E(w)}</span>`).join(' ');
  const mts=[[640,210,0],[960,210,1],[640,490,1],[960,490,0]].map(([x,y,r])=>`<g transform="translate(${x} ${y})"><circle r="98" class="dsh"/><circle r="66" class="thn"/><g class="pr${r?' b':''}"><ellipse rx="94" ry="8"/><ellipse rx="94" ry="8" transform="rotate(90)"/></g><circle r="22" class="fl"/><circle r="7" class="wh"/></g>`).join('');
  const hbg=`<div class="hbg" aria-hidden="true"><svg viewBox="0 0 1200 700" preserveAspectRatio="xMaxYMid slice"><defs><pattern id="gp" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" class="gl"/></pattern><linearGradient id="sg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".3"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs>
<rect width="1200" height="700" fill="url(#gp)"/>
<circle cx="800" cy="350" r="320" class="dsh rot"/><circle cx="800" cy="350" r="250" class="thn"/><path d="M480 350H1120M800 30V670" class="thn" stroke-dasharray="2 8"/>
<g class="dr"><path d="M800 350L640 210M800 350L960 210M800 350L640 490M800 350L960 490" class="arm"/><path d="M800 350L640 210M800 350L960 210M800 350L640 490M800 350L960 490" class="arm2"/>${mts}
<rect x="736" y="296" width="128" height="108" rx="16" class="fl"/><rect x="758" y="316" width="84" height="68" rx="6" class="thn"/><path d="M770 334h20M770 350h44M770 366h30" class="thn"/><circle cx="830" cy="334" r="7" class="wh"/><circle cx="745" cy="305" r="3" class="led"/><circle cx="855" cy="395" r="3" class="led" style="animation-delay:.5s"/></g>
<path d="M862 332H1030M862 368H1030M985 196L1030 168" class="thn"/><text x="1038" y="336">FC / AAZMUTH</text><text x="1038" y="372">GPS / NAVSATE</text><text x="1038" y="170">ESC / AM32</text>
<path d="M640 610H960M640 602v16M960 602v16" class="thn"/><text x="800" y="598" text-anchor="middle">WHEELBASE 320 mm</text>
<path d="M560 80h-30v30M1150 80h30v30M560 640h-30v-30M1150 640h30v-30" class="thn"/><text id="tel" x="560" y="668">ALT 120.0 m | SPD 12.0 m/s | BAT 22.4 V</text><text x="560" y="72">R&amp;D TEST RIG / REV 04</text>
<rect class="scn" width="1200" height="140" fill="url(#sg)"/></svg></div>`;
  const hs=(c,x,y,r)=>`<g class="pt" data-c="${c}">${r}</g>`;
  const mot=[[90,90],[310,90],[90,310],[310,310]].map(([x,y])=>`<g class="pt" data-c="ESCs"><circle cx="${x}" cy="${y}" r="12"/><g class="rot" style="transform-origin:${x}px ${y}px"><path d="M${x-48} ${y}h96M${x} ${y-48}v96"/></g></g>`).join('');
  return compose('home',{
hero:()=>`<div class="hs" id="hs" data-ms="${+S.hero.interval||3000}" role="region" aria-roledescription="carousel" aria-label="Featured products"><h1 class="sr">${E(S.hero.title)}</h1><div class="hsw">${(S.hero.slides||[]).map((x,i)=>{const im=`<img width="1898" height="1148" src="${E(x.src)}" alt="${E(x.alt||'')}"${i?' loading="lazy"':' fetchpriority="high"'} draggable="false">`;return `<div class="hsl${i?'':' on'}" data-ms="${+x.ms||+S.hero.interval||3000}"${x.zoom?` style="--z:${+x.zoom}"`:''}${i?' aria-hidden="true"':''}>${x.href?`<a href="${E(x.href)}" tabindex="${i?-1:0}" aria-label="${E(x.alt||'Product')}">${im}</a>`:im}</div>`}).join('')}</div><button type="button" class="hnav p" aria-label="Previous slide"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg></button><button type="button" class="hnav n" aria-label="Next slide"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg></button><div class="hdots">${(S.hero.slides||[]).map((x,i)=>`<button type="button" class="hdot${i?'':' on'}" aria-label="Slide ${i+1}"></button>`).join('')}</div></div>`,
tech:()=>`<section id="tech"><div class="wrap"><h2>Drone electronics</h2><p class="lead">Flight controllers, AM32 ESCs, GPS modules and FPV components.</p>
<div class="grid">${list.map((p,i)=>card(p,i)).join('')}</div><div class="more"><a class="btn o" href="products.html">See all ${P.length} products</a></div></div></section>`,
cfg:()=>`<div id="cfg-slot"></div>`,
process:()=>`<section class="alt"><div class="wrap"><h2>From bench to sky</h2><p class="lead">How a board gets from our desk to your drone.</p><div class="proc">${S.process.map((s,i)=>`<div class="st"><b>${i+1}</b><h3>${E(s.t)}</h3><p class="mute">${E(s.x)}</p></div>`).join('')}</div></div></section>`,
manifesto:()=>`<section class="mfs"><div class="wrap"><p class="mf2">${words}</p></div></section>`,
cta:()=>`<section><div class="wrap join" style="margin:0 auto"><div><h3>Talk to our engineers</h3><p>Share your build and we will suggest the right parts.</p></div><a class="btn" href="contact.html">Get a quote</a></div></section>`
});
},
products(){
  path='products.html';
  seo(`Products | ${S.name}`,`Flight controllers, ESCs, GPS modules and more from ${S.name}.`,P[0]&&P[0].image,[org,{"@context":"https://schema.org","@type":"ItemList",itemListElement:P.map((p,i)=>({"@type":"ListItem",position:i+1,url:S.url+'/'+pUrl(p),name:p.name}))}],path);
  const cats=S.categories.filter(c=>P.some(p=>S.inCat(p,c)));
  return compose('products',{
catalog:()=>`<section><div class="wrap"><h1 class="cn" style="font-size:clamp(40px,7vw,72px)">Drone electronics catalog</h1><p>${E(S.catalogIntro)}</p><p class="lead">${E(S.catalogBuying)} <a href="contact.html">Request a quote</a></p><p><a href="custom-components.html">Request custom drone components</a> if your UAV needs a different mounting pattern, pinout or electrical specification.</p>
<div class="filters" role="group" aria-label="Filter by category">${['All'].concat(cats).map(c=>`<button type="button" aria-pressed="${c==='All'}" data-c="${E(c)}">${E(c)}</button>`).join('')}</div>
<div class="grid" id="pg"></div><h2 style="margin-top:32px">Browse by component</h2>${collectionLinks()}</div></section>`
});
},
product(){
  const p=P.find(x=>x.slug===(d.body.dataset.slug||q.get('p')));
  if(!p){path='products.html';seo(`Product not found | ${S.name}`,'This product does not exist.',null,null,path);
    return `<main id="main"><section><div class="wrap"><h1 class="cn" style="font-size:clamp(40px,7vw,72px)">Product not found</h1><p class="lead">Check the link or browse all products.</p><a class="btn" href="products.html">All products</a></div></section></main>`}
  path=pUrl(p);const imgs=[p.image].concat(p.gallery||[]).filter(Boolean);const soon=p.status==='soon';
  seo(`${p.name} | ${S.name}`,p.short||p.description,p.image,org,path);
  const rel=P.filter(x=>x.slug!==p.slug&&x.category===p.category).concat(P.filter(x=>x.slug!==p.slug&&x.category!==p.category)).slice(0,4);
  const guides=(window.PRODUCT_GUIDES||[]).filter(g=>g.products.includes(p.slug));
  const collection=collections.find(([category])=>category===p.category)?.[1];
  return compose('product',{
main:()=>`<section><div class="wrap"><p class="crumb"><a href="/">Home</a> / <a href="products.html">Products</a> / ${collection?`<a href="${E(collection.slug)}.html">${E(p.category)}</a> / `:''}${E(p.name)}</p>
<div class="pd"><div><div class="main-img"><img id="mi" width="640" height="480" src="${E(imgs[0])}" alt="${E(altFor(p))}" fetchpriority="high" onerror="this.onerror=null;this.src='images/noimage.webp'"></div>
${imgs.length>1?`<div class="thumbs">${imgs.map((u,i)=>`<button type="button" data-i="${i}" aria-label="Photo ${i+1}"${i?'':' aria-current="true"'}><img width="80" height="60" src="${E(u)}" alt="${E(p.name)} photo ${i+1}" onerror="this.onerror=null;this.src='images/noimage.webp'"></button>`).join('')}</div>`:''}</div>
<div><span class="cat">${E(p.category)}${soon?' &middot; Coming soon':''}</span><h1>${E(p.heading||p.name)}</h1><p class="d">${E(p.description)}</p>
${p.features&&p.features.length?`<h3>Highlights</h3><ul>${p.features.map(f=>`<li>${E(f)}</li>`).join('')}</ul>`:''}
${p.buyerCheck?`<h3>${soon?'What to confirm before launch':'What to check before ordering'}</h3><p>${E(p.buyerCheck)}</p>`:''}
${p.specs&&p.specs.length?`<h3>Specifications</h3><table>${p.specs.map(s=>`<tr><th scope="row">${E(s[0])}</th><td>${E(s[1])}</td></tr>`).join('')}</table>`:''}
${p.docs&&p.docs.length?`<h3>Documentation</h3><div class="docs">${p.docs.map(x=>`<a href="${E(x.url)}">${E(x.label)}</a>`).join('')}</div>`:''}
${p.bestFor&&p.bestFor.length?`<h3>Best for</h3><div class="docs">${p.bestFor.map(x=>`<span>${E(x)}</span>`).join('')}</div>`:''}
<div class="cta"><a class="btn" href="contact.html?product=${encodeURIComponent(p.slug)}">${soon?'Ask about launch':'Get a quote'}</a>${soon?'':`<a class="btn o" href="https://wa.me/${E(S.whatsapp)}?text=${encodeURIComponent('Hi, I want a quote for '+p.name+'. Quantity: ')}">WhatsApp quote</a>`}${p.buyUrl&&!soon?`<a class="btn o" href="${E(p.buyUrl)}">View in store</a>`:''}</div>${!soon?`<p>Need a different specification for your build? <a href="custom-components.html">Explore custom drone component orders</a>.</p>`:''}</div></div></div></section>`,
journey:()=>jr(p),
faq:()=>`${p.faq&&p.faq.length?`<section><div class="wrap"><h2>${E(p.name)} FAQ</h2><p class="lead"></p>${p.faq.map(f=>`<details><summary>${E(f.q)}</summary><p>${E(f.a)}</p></details>`).join('')}</div></section>`:''}`,
related:()=>`${guides.length?`<section><div class="wrap"><h2>Related guides</h2><ul>${guides.map(g=>`<li><a href="${E(g.slug)}.html">${E(g.h1)}</a></li>`).join('')}</ul></div></section>`:''}${rel.length?`<section class="alt"><div class="wrap"><h2>More products</h2><p class="lead"></p><div class="grid">${rel.map((p,i)=>card(p,i)).join('')}</div></div></section>`:''}`,
regulatory:()=>regBox(p)
});
},
about(){
  const A=S.about;path='about.html';
  seo(`About | ${S.name}`,A.text,S.hero.image,org,path);
  const tk=S.ticker.concat(S.ticker).map(t=>`<span>${E(t)}</span>`).join('');
  const cats=S.categories.filter(c=>P.some(p=>S.inCat(p,c)));
  const co=['19.25\u00b0 N, 72.86\u00b0 E','20.00\u00b0 N, 73.79\u00b0 E'];
  const words=S.manifesto.split(' ').map(w=>`<span>${E(w)}</span>`).join(' ');
  const nav=[['who','Who'],['build','Build'],['story','Story'],['process','Process'],['find','Find us']];
  return compose('about',{
intro:()=>`
<section class="abh"><canvas id="wp" aria-hidden="true"></canvas><div class="radar" aria-hidden="true"><i class="bl" style="top:28%;left:62%"></i><i class="bl" style="top:64%;left:30%;animation-delay:.9s"></i><i class="bl" style="top:46%;left:78%;animation-delay:1.7s"></i></div>
<div class="wrap"><span class="eye">About us \u00b7 Since ${E(A.timeline[0]?A.timeline[0].year:S.year)}</span><h1 class="scr" data-t="${E(A.title)}">${E(A.title)}</h1><p>${E(A.text)}</p><div class="cta"><a class="btn" href="products.html">See what we build</a><a class="btn o" href="#who">Who we are</a></div></div><a class="scue" href="#who" aria-label="Scroll down"><i></i></a></section>`,
ticker:()=>`<div class="tick" aria-hidden="true"><div>${tk}</div></div>`,
stats:()=>`<div class="stats"><div class="wrap">${S.stats.map(s=>`<div><b data-n="${s.n}" data-s="${E(s.s)}">${s.n}${E(s.s)}</b><span>${E(s.l)}</span></div>`).join('')}</div></div>`,
who:()=>`<section id="who"><div class="wrap"><h2>Who we are</h2><div class="mv"><p class="mf2">${words}</p><div class="mvc"><div class="mc rv"><span>Mission</span><p>${E(A.mission||A.text)}</p></div><div class="mc rv"><span>Vision</span><p>${E(A.vision||S.tagline)}</p></div></div></div></div></section>`,
values:()=>`${A.values.length?`<section class="alt"><div class="wrap"><h2>How we work</h2><p class="lead">Habits we refuse to give up.</p><div class="tiles">${A.values.map((v,i)=>`<div class="tile rv"><b>0${i+1}</b><h3>${E(v.title)}</h3><p class="mute">${E(v.text)}</p></div>`).join('')}</div></div></section>`:''}`,
build:()=>`<section id="build"><div class="wrap"><h2>What we engineer</h2><p class="lead">The full flight stack, designed and supported by one team.</p><div class="caps">${cats.map((c,i)=>{const ps=P.filter(p=>S.inCat(p,c));return `<a class="cap rv" href="products.html"><span class="n">0${i+1}</span><h3>${E(c)}</h3><p>${ps.map(p=>E(p.name)).join(' \u00b7 ')}</p><em>${ps.length}</em><i class="bar"></i></a>`}).join('')}</div></div></section>`,
story:()=>`${A.timeline.length?`<section id="story" class="alt"><div class="wrap"><h2>Our story</h2><p class="lead">From a garage bench to a production line, one board at a time.</p><div class="fl"><div class="spine"><i></i><em></em></div>${A.timeline.map((t,i)=>`<div class="ti2 rv${i%2?' r':''}"><span class="yr2">${E(t.year)}</span><h3>${E(t.title)}</h3><p>${E(t.text)}</p></div>`).join('')}</div></div></section>`:''}`,
process:()=>`<section id="process" class="alt"><div class="wrap"><h2>From bench to sky</h2><p class="lead">How a board gets from our desk to your drone.</p><div class="proc">${S.process.map((x,i)=>`<div class="st"><b>${i+1}</b><h3>${E(x.t)}</h3><p class="mute">${E(x.x)}</p></div>`).join('')}</div></div></section>`,
team:()=>`${A.team.length?`<section class="alt"><div class="wrap"><h2>The people</h2><p class="lead"></p><div class="cols4">${A.team.map(t=>`<div class="person"><div class="pic">${t.photo?`<img loading="lazy" width="320" height="320" src="${E(t.photo)}" alt="${E(t.name)}">`:`<b>${E(t.name.split(' ').map(w=>w[0]).slice(0,2).join(''))}</b>`}</div><h3>${E(t.name)}</h3><p class="mute" style="margin:0;font-size:14px">${E(t.role)}</p><p class="q">${E(t.note)}</p></div>`).join('')}</div></div></section>`:''}`,
gallery:()=>`${A.gallery.length?`<section><div class="wrap"><h2>Inside the workshop</h2><p class="lead"></p><div class="gal">${A.gallery.map(g=>`<figure><img loading="lazy" width="640" height="480" src="${E(g.src)}" alt="${E(g.caption)}"><figcaption>${E(g.caption)}</figcaption></figure>`).join('')}</div></div></section>`:''}`,
find:()=>`<section id="find" class="alt"><div class="wrap"><h2>Find us</h2><p class="lead">Two cities, one team.</p><div class="offs">${A.offices.map((o,i)=>`<div class="of rv"><h3>${E(o.city)}</h3><p class="mute" style="margin:0">${E(o.role)}</p><p>${E(o.address)}</p><p class="mute" style="font-size:13px;letter-spacing:.08em;margin:0 0 6px">${co[i%2]}</p><span class="clk live"></span></div>`).join('')}</div></div></section>`,
workwith:()=>`<section><div class="wrap"><h2>Work with us</h2><p class="lead">Partners, distributors, builders and engineers: start here.</p><div class="tiles">
<a class="tile go rv" href="contact.html"><b>\u2197</b><h3>Partner with us</h3><p class="mute">OEM, distribution and integration enquiries.</p></a>
${S.careersUrl?`<a class="tile go rv" href="${E(S.careersUrl)}"><b>\u2197</b><h3>Join the team</h3><p class="mute">Hardware, firmware and flight-test roles.</p></a>`:''}
<a class="tile go rv" href="${E(S.docsUrl)}"><b>\u2197</b><h3>Read the docs</h3><p class="mute">Pinouts, calibration and setup guides.</p></a></div></div></section>`,
closing:()=>`<section class="fin alt"><div class="wrap"><h2>Hardware that flies</h2><p class="lead" style="margin-inline:auto">Designed in India. Tested in the air.</p><a class="btn o" href="#">Back to top</a></div></section>`
},{nav:{who:'Who',build:'Build',story:'Story',process:'Process',find:'Find us'},cls:'ax'});
},
contact(){
  path='contact.html';
  seo(`Contact | ${S.name}`,`Call, email or message ${S.name} to get a quote for your build.`,S.hero.image,[org,{"@context":"https://schema.org","@type":"ContactPage",url:S.url+'/'+path}],path);
  const sel=q.get('product')||'';
  return compose('contact',{
form:()=>`<section><div class="wrap contact"><div><h1 class="cn" style="font-size:clamp(40px,7vw,72px)">Talk to our engineers</h1><p class="lead">Share your build and we will suggest the right parts.</p>
<a class="big" href="${tel}">${E(S.phone)}</a><a class="big" href="mailto:${E(S.email)}">${E(S.email)}</a><a class="big" href="https://wa.me/${E(S.whatsapp)}">WhatsApp</a>
<div style="margin-top:26px">${S.about.offices.map(o=>`<div class="off" style="margin-bottom:12px"><h3 style="font-size:26px">${E(o.role)}</h3><p>${E(o.address)}</p></div>`).join('')}</div></div>
<form id="f"><label>Your name<input name="n" required autocomplete="name" maxlength="80"></label><label>Phone<input name="p" type="tel" required autocomplete="tel" inputmode="tel" pattern="[0-9+ ()\-]{8,18}" maxlength="18" title="Enter a valid phone number"></label>
<label>Product<select name="s"><option value="">Not sure yet</option><option value="Custom component order"${sel==='custom-components'?' selected':''}>Custom component order</option>${P.map(p=>`<option value="${E(p.name)}"${p.slug===sel?' selected':''}>${E(p.name)}</option>`).join('')}</select></label>
<label>Message<textarea name="m" maxlength="1500" placeholder="${sel==='custom-components'?'Describe the component, specifications, quantity and target delivery date':'Tell us about your build and quantity'}"></textarea></label><div style="position:absolute;left:-9999px" aria-hidden="true"><label>Leave empty<input name="hp" tabindex="-1" autocomplete="off"></label></div><label class="chk"><input type="checkbox" name="ok" required> <span>I have read the <a href="privacy.html">Privacy Policy</a> and agree that Space and Tech Engineering LLP may use these details to reply to my enquiry.</span></label><button class="btn" type="submit">Send by email</button><button class="btn o" type="button" id="wa">Send on WhatsApp</button><p id="fs" role="status" aria-live="polite" class="mute" style="font-size:14px;margin:0"></p><p class="mute" style="font-size:13px;margin:0">Nothing is stored on our website. This opens your email app with the message ready to send. By contacting us you agree to our <a href=\"terms.html\">Terms</a> and <a href=\"privacy.html\">Privacy Policy</a>.</p></form></div></section>`
});
}};


/* ---------- legal pages (IT Rules 2021, amended 2026) ---------- */
const LG=S.legal;
const secHtml=L=>L.sections.map((s,i)=>`<section class="lg-s" id="s${i+1}"><h2>${i+1}. ${E(s.h)}</h2>${(s.p||[]).map(t=>`<p>${E(t)}</p>`).join('')}${s.ul?`<ul>${s.ul.map(t=>`<li>${E(t)}</li>`).join('')}</ul>`:''}</section>`).join('');
const offHtml=()=>{const o=LG.officer,r=(k,v,h)=>v?`<dt>${k}</dt><dd>${h||E(v)}</dd>`:'';return `<div class="lg-card"><h3>Grievance Officer</h3>${o.name?'':`<p class="mute" style="margin:0 0 12px">Officer details are being finalised. Meanwhile, write to us at the email below.</p>`}<dl>${r('Name',o.name)}${r('Designation',o.designation)}${r('Email',o.email,`<a href="mailto:${E(o.email)}">${E(o.email)}</a>`)}${r('Phone',o.phone,`<a href="${tel}">${E(o.phone)}</a>`)}${r('Address',o.address)}${r('Hours',o.hours)}</dl></div>`};
const regBox=p=>`<section class="reg-s"><div class="wrap"><aside class="reg" role="note"><h3>Regulatory note</h3><p>${E(LG.uasNotice)}</p>${p.category==='Transmitters'?`<p>${E(LG.rfNotice)}</p>`:''}<p><a href="product-regulatory.html">Product Regulatory Disclaimer</a></p></aside></div></section>`;
LG.pages.forEach(L=>{pages[L.slug]=()=>{path=L.slug+'.html';
  seo(`${L.nav} | ${S.name}`,L.desc,S.hero.image,org,path);
  return `<main id="main"><section style="border-bottom:1px solid var(--line)"><div class="wrap"><span class="eye">Legal</span><h1 class="cn" style="font-size:clamp(36px,7vw,84px);max-width:12em">${E(L.title)}</h1><p class="lead" style="color:var(--hi);font-size:19px;margin-bottom:8px">${E(L.intro)}</p><p class="mute" style="font-size:14px;margin:0">Effective: ${E(LG.effective)} &middot; Last updated: ${E(LG.updated)}</p></div></section>
<section><div class="wrap lg"><aside class="lg-toc" aria-label="On this page"><b>On this page</b>${L.sections.map((s,i)=>`<a href="#s${i+1}">${i+1}. ${E(s.h)}</a>`).join('')}<hr>${LG.pages.filter(x=>x!==L).map(x=>`<a href="${x.slug}.html">${E(x.nav)}</a>`).join('')}</aside><article class="lg-body">${L.officerBlock?offHtml():''}${secHtml(L)}</article></div></section></main>`}});

/* ---------- render ---------- */
const pcbLoader = $('#pcb-loader');
d.body.innerHTML=header+(['guides','collection','custom-components'].includes(page)?$('#main').outerHTML:(pages[page]||pages.home)())+footer;
if (pcbLoader) d.body.prepend(pcbLoader);

/* hero slider: har 3 sec (data.js: hero.interval) me auto slide. Dots, arrows, swipe, tab hidden hone par ruk jata hai */
(()=>{const hs=$('#hs');if(!hs)return;
const sl=$$('.hsl',hs),dots=$$('.hdot',hs),dflt=Math.max(1500,+hs.dataset.ms||3000);let i=0,t=0,x0=null;
const dur=k=>Math.max(1500,+sl[k].dataset.ms||dflt);
const go=n=>{i=(n+sl.length)%sl.length;sl.forEach((s,k)=>{s.classList.toggle('on',k===i);s.setAttribute('aria-hidden',k===i?'false':'true');const a=$('a',s);if(a)a.tabIndex=k===i?0:-1});dots.forEach((b,k)=>b.classList.toggle('on',k===i));
  const im=$('img',sl[(i+1)%sl.length]);if(im)im.loading='eager'};
const stop=()=>{clearTimeout(t);t=0},play=()=>{stop();if(sl.length>1&&!d.hidden)t=setTimeout(()=>{go(i+1);play()},dur(i))};
const to=n=>{go(n);play()};
$('.hnav.p',hs).onclick=()=>to(i-1);$('.hnav.n',hs).onclick=()=>to(i+1);
dots.forEach((b,k)=>b.onclick=()=>to(k));
hs.addEventListener('pointerdown',e=>{x0=e.clientX});
addEventListener('pointerup',e=>{if(x0==null)return;const dx=e.clientX-x0;x0=null;if(Math.abs(dx)>50)to(i+(dx<0?1:-1))});
hs.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')to(i-1);if(e.key==='ArrowRight')to(i+1)});
d.addEventListener('visibilitychange',()=>d.hidden?stop():play());
if(sl.length<2){$$('.hnav,.hdots',hs).forEach(e=>e.style.display='none')}
play()})();

/* youtube: click par isi jagah play (privacy-enhanced embed) */
d.addEventListener('click',e=>{const y=e.target.closest('.yt');if(!y||y.querySelector('iframe'))return;const id=y.dataset.id;y.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${E(id)}?autoplay=1&rel=0&modestbranding=1" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`});

/* menu */
const burger=$('.burger'),menu=$('#menu');
const setMenu=o=>{menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu');d.body.classList.toggle('lock',o)};
burger.onclick=()=>setMenu(!menu.classList.contains('open'));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
matchMedia('(min-width:901px)').addEventListener('change',e=>e.matches&&setMenu(false));

/* products filter */
const pg=$('#pg');
if(pg){const show=c=>{const l=P.filter(p=>c==='All'||S.inCat(p,c));pg.innerHTML=l.length?l.map((p,i)=>card(p,i,true)).join(''):'<div class="empty">No products in this category yet.</div>';reveal()};
$$('.filters button').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.setAttribute('aria-pressed',x===b));show(b.dataset.c)});show('All')}

/* product gallery */
$$('.thumbs button').forEach(b=>b.onclick=()=>{const pp=P.find(x=>x.slug===(d.body.dataset.slug||q.get('p'))),i=+b.dataset.i,u=[pp.image].concat(pp.gallery||[]);$('#mi').src=u[i];$$('.thumbs button').forEach(x=>x.toggleAttribute('aria-current',x===b))});

/* contact form -> mailto */
const f=$('#f');
if(f)f.onsubmit=e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f));if(v.hp)return;if(!f.checkValidity()){f.reportValidity();return}$('#fs').textContent='Thank you. Your email app should open with your message. Press send there to reach us. If it did not open, email '+S.email+'.';
location.href='mailto:'+S.email+'?subject='+encodeURIComponent('Quote request'+(v.s?': '+v.s:''))+'&body='+encodeURIComponent(`Name: ${v.n}\nPhone: ${v.p}\nProduct: ${v.s||'-'}\n\n${v.m||''}`)};

const wa=$('#wa');if(wa)wa.onclick=()=>{if(!f.checkValidity()){f.reportValidity();return}const v=Object.fromEntries(new FormData(f));open('https://wa.me/'+S.whatsapp+'?text='+encodeURIComponent(`Hi, I am ${v.n||''}. Product: ${v.s||'not sure yet'}. ${v.m||''} Phone: ${v.p||''}`),'_blank')};

/* reveal, counters, marquee */
const rm=false;
function reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});$$('.rv:not(.in)').forEach(el=>io.observe(el))}
$$('section h2,.val,.person,.off,.ti,.gal figure,.stats div').forEach(el=>el.classList.add('rv'));reveal();
if(!rm)$$('[data-n]').forEach(el=>{const n=+el.dataset.n,s=el.dataset.s||'';el.textContent='0'+s;
new IntersectionObserver((es,o)=>es.forEach(e=>{if(!e.isIntersecting)return;o.disconnect();const t0=performance.now();const f=t=>{const p=Math.min((t-t0)/1500,1);el.textContent=Math.round(n*(1-Math.pow(1-p,4)))+s;if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}),{threshold:.6}).observe(el)});
const lg=$('.logos');if(lg&&!rm)[...lg.children].forEach(n=>{const c=n.cloneNode(true);c.setAttribute('aria-hidden','true');lg.appendChild(c)});else if(lg)lg.style.animation='none';

/* hide dock on contact page */
if(page==='contact')$('#dock').style.display='none';
})();
;
/* FX.JS - saari animations (canvas, tilt, magnetic buttons, scroll effects). Normal editing me chhuna nahi. */
(()=>{const d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)],
rm=false, /* reduce-motion ignore: animations hamesha chalengi */
fine=matchMedia('(hover:hover)').matches||matchMedia('(any-hover:hover)').matches||matchMedia('(pointer:fine)').matches||matchMedia('(any-pointer:fine)').matches;
const bar=d.createElement('i');bar.id='pb';d.body.appendChild(bar);
const gl=d.createElement('div');gl.id='gl';if(fine&&!rm)d.body.appendChild(gl);
const words=$$('.mf2 span'),hi=$('.hero>.hbg');
const sc=()=>{const h=d.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${h>0?scrollY/h:0})`;
if(hi&&!rm&&scrollY<900)hi.style.translate=`0 ${scrollY*.18}px`;
if(!rm)words.forEach(s=>{const t=(innerHeight*.9-s.getBoundingClientRect().top)/(innerHeight*.45);s.style.opacity=Math.max(.15,Math.min(1,t))})};
addEventListener('scroll',sc,{passive:true});addEventListener('resize',sc);sc();

/* hero bg: drone blueprint parallax + live telemetry */
const hb=$('.hbg');
if(hb){const sv=$('svg',hb),hero=hb.parentElement,tel=$('#tel',hb);let t=0;
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();sv.style.translate=((e.clientX-r.left)/r.width-.5)*-30+'px '+((e.clientY-r.top)/r.height-.5)*-20+'px'},{passive:true});
hero.addEventListener('pointerleave',()=>sv.style.translate='');
setInterval(()=>{t++;tel.textContent='ALT '+(120+Math.sin(t/9)*6).toFixed(1)+' m | SPD '+(12+Math.sin(t/5)*2.5).toFixed(1)+' m/s | BAT '+(22.4-t*.0004).toFixed(1)+' V'},150)}
/* hero: network pattern canvas - sirf black/white/gray. Mouse paas aaye to dots door bhagte hain aur lines chamakti hain */
const cv=$('#cv');let mx=-9999,my=-9999;
if(cv){const x=cv.getContext('2d');let W=0,H=0,N=[],run=false,raf=0;
const R=190,LINK=130;
const mk=()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,s:1+Math.random()*1.6,near:0});
const fit=()=>{const w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return;if(w===W&&h===H&&N.length)return;
const r=Math.min(devicePixelRatio||1,2),n=Math.min(150,Math.max(20,Math.round(w*h/9000)));
W=w;H=h;cv.width=Math.round(W*r);cv.height=Math.round(H*r);x.setTransform(r,0,0,r,0,0);
while(N.length<n)N.push(mk());N.length=n;N.forEach(p=>{p.x=Math.min(p.x,W);p.y=Math.min(p.y,H)})};
const draw=()=>{raf=0;if(!run)return;if(!N.length)fit();x.clearRect(0,0,W,H);
for(const a of N){a.x+=a.vx;a.y+=a.vy;
if(a.x<0){a.x=0;a.vx=Math.abs(a.vx)}else if(a.x>W){a.x=W;a.vx=-Math.abs(a.vx)}
if(a.y<0){a.y=0;a.vy=Math.abs(a.vy)}else if(a.y>H){a.y=H;a.vy=-Math.abs(a.vy)}
const dx=a.x-mx,dy=a.y-my,dm=Math.hypot(dx,dy);
if(dm<R&&dm>.1){const f=(1-dm/R)*2.2;a.x+=dx/dm*f;a.y+=dy/dm*f}
a.near=dm<R?1-dm/R:0}
for(let i=0;i<N.length;i++){const a=N[i];
for(let j=i+1;j<N.length;j++){const b=N[j],l=Math.hypot(a.x-b.x,a.y-b.y);
if(l<LINK){const g=Math.min(1,(1-l/LINK)*.45+Math.max(a.near,b.near)*.5);x.strokeStyle='rgba(255,170,70,'+g.toFixed(3)+')';x.lineWidth=1;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}}
for(const a of N){x.fillStyle='rgba(255,170,70,'+(.55+a.near*.45).toFixed(2)+')';x.beginPath();x.arc(a.x,a.y,a.s+a.near*2,0,6.2832);x.fill()}
if(mx>-9000){x.strokeStyle='rgba(255,170,70,.18)';x.lineWidth=1;x.beginPath();x.arc(mx,my,R,0,6.2832);x.stroke()}
raf=requestAnimationFrame(draw)};
const start=()=>{if(!raf){run=true;fit();raf=requestAnimationFrame(draw)}};
const hero=cv.parentElement;
fit();
/* re-fit whenever hero size changes (fonts/image/layout settling) */
if('ResizeObserver'in window)new ResizeObserver(()=>{fit();if(run&&!raf)start()}).observe(cv);else addEventListener('resize',fit);
addEventListener('load',()=>{fit();if(run)start()});
if(d.fonts&&d.fonts.ready)d.fonts.ready.then(()=>{fit()});
d.addEventListener('visibilitychange',()=>{if(d.hidden){run=false}else if(vis){start()}});
let vis=true;
hero.addEventListener('pointermove',e=>{const r=cv.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top},{passive:true});
hero.addEventListener('pointerleave',()=>{mx=my=-9999});
new IntersectionObserver(([e])=>{vis=e.isIntersecting;if(vis&&!d.hidden)start();else run=false}).observe(hero);
start()}

/* about page: scramble title, warp stars (scroll = speed), flight line, spotlight, live clock */
const abh=$('.abh');
if(abh){const h=$('.scr',abh),T=h.dataset.t,G='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&';let f=0;h.style.minHeight=h.offsetHeight+'px';
const tk=()=>{h.textContent=[...T].map((c,i)=>c===' '||f>i*1.2+6?c:G[Math.random()*G.length|0]).join('');f++;if(f<T.length*1.2+8)setTimeout(tk,35);else h.textContent=T};tk();
const c=$('#wp'),g=c.getContext('2d');let W,H,S=[],v=0,last=scrollY,px=0,py=0,on=true;
const fit=()=>{const r=Math.min(devicePixelRatio||1,2);W=c.clientWidth;H=c.clientHeight;c.width=W*r;c.height=H*r;g.setTransform(r,0,0,r,0,0);S=Array.from({length:Math.round(W*H/5500)},()=>({x:(Math.random()-.5)*W*2,y:(Math.random()-.5)*H*2,z:Math.random()*W}))};
fit();addEventListener('resize',fit);
abh.addEventListener('pointermove',e=>{px=e.clientX/innerWidth-.5;py=e.clientY/innerHeight-.5},{passive:true});
new IntersectionObserver(([e])=>on=e.isIntersecting).observe(abh);
const loop=()=>{if(on){v+=(Math.min(Math.abs(scrollY-last),70)-v)*.1;last=scrollY;const sp=2+v*1.6,ox=W/2-px*70,oy=H/2-py*70;g.clearRect(0,0,W,H);
for(const s of S){const pz=s.z;s.z-=sp;if(s.z<=1){s.x=(Math.random()-.5)*W*2;s.y=(Math.random()-.5)*H*2;s.z=W;continue}
const k=W*.5/s.z,k0=W*.5/pz,a=1-s.z/W;g.strokeStyle='rgba(255,170,70,'+a.toFixed(2)+')';g.lineWidth=Math.max(.6,a*1.8);g.beginPath();g.moveTo(ox+s.x*k0,oy+s.y*k0);g.lineTo(ox+s.x*k,oy+s.y*k);g.stroke()}}
requestAnimationFrame(loop)};loop()}
const fl=$('.fl');
if(fl){const up=()=>{const r=fl.getBoundingClientRect();fl.style.setProperty('--p',Math.max(0,Math.min(1,(innerHeight*.6-r.top)/r.height)))};addEventListener('scroll',up,{passive:true});up()}
const sn=$$('.sn a');
if(sn.length){const mp=new Map(sn.map(a=>[a.getAttribute('href').slice(1),a]));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){sn.forEach(x=>x.classList.remove('on'));const a=mp.get(e.target.id);a&&a.classList.add('on')}}),{rootMargin:'-45% 0px -50% 0px'});
mp.forEach((a,id)=>{const el=d.getElementById(id);el&&io.observe(el)})}
$$('.tile').forEach(t=>t.addEventListener('pointermove',e=>{const r=t.getBoundingClientRect();t.style.setProperty('--mx',e.clientX-r.left+'px');t.style.setProperty('--my',e.clientY-r.top+'px')},{passive:true}));
const ck=$$('.clk');if(ck.length){const tm=()=>{const s=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata'});ck.forEach(e=>e.textContent=s+' IST')};tm();setInterval(tm,1000)}

/* tilt cards + magnetic buttons + cursor glow */
if(fine&&!rm){
addEventListener('pointermove',e=>{gl.style.transform=`translate(${e.clientX}px,${e.clientY}px)`;
const c=e.target.closest('.card');if(c){const r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
c.style.setProperty('--mx',px*100+'%');c.style.setProperty('--my',py*100+'%');c.style.transform=`perspective(800px) rotateY(${(px-.5)*10}deg) rotateX(${(.5-py)*10}deg) translateY(-4px)`}
const b=e.target.closest('.btn');if(b){const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`}},{passive:true});
addEventListener('pointerout',e=>{const c=e.target.closest('.card,.btn');if(c&&!c.contains(e.relatedTarget))c.style.transform=''})}

/* flight stack explorer: hover/auto highlight + click par text popup (halki blue glow) */
const sx=$('.sx');
if(sx){const svg=$('svg',sx),all=$$('[data-c]',sx),set=c=>all.forEach(el=>el.classList.toggle('on',el.dataset.c===c));
const order=['Flight controllers','ESCs','GPS','Transmitters'];let k=0,hold=false,open=null;
const info={};$$('.si',sx).forEach(a=>{info[a.dataset.c]={n:$('small',a).textContent,h:a.getAttribute('href')}});
const wrap=d.createElement('div');wrap.className='sv';svg.parentNode.insertBefore(wrap,svg);wrap.appendChild(svg);
const pop=d.createElement('div');pop.className='pop';pop.setAttribute('role','status');wrap.appendChild(pop);
const hide=()=>{open=null;pop.classList.remove('show');hold=false};
const show=(el)=>{const c=el.dataset.c,i=info[c]||{n:'',h:'products.html'};open=c;hold=true;set(c);
pop.innerHTML='<b></b><span></span><a></a>';$('b',pop).textContent=c;$('span',pop).textContent=i.n;const a=$('a',pop);a.textContent='View products';a.href=i.h;
const wr=wrap.getBoundingClientRect(),r=el.getBoundingClientRect();
pop.classList.add('show');const pw=pop.offsetWidth,ph=pop.offsetHeight;
let L=r.left-wr.left+r.width/2-pw/2,T=r.top-wr.top-ph-14;if(T<0)T=r.bottom-wr.top+14;
L=Math.max(0,Math.min(wr.width-pw,L));pop.style.left=L+'px';pop.style.top=T+'px'};
$$('.pt',svg).forEach(el=>{el.setAttribute('tabindex','0');el.setAttribute('role','button');el.setAttribute('aria-label',el.dataset.c);
el.addEventListener('click',e=>{e.stopPropagation();open===el.dataset.c?hide():show(el)});
el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open===el.dataset.c?hide():show(el)}})});
d.addEventListener('click',e=>{if(open&&!pop.contains(e.target))hide()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&open)hide()});
all.forEach(el=>{el.addEventListener('pointerenter',()=>{if(!open){hold=true;set(el.dataset.c)}});el.addEventListener('focus',()=>{if(!open){hold=true;set(el.dataset.c)}})});
sx.addEventListener('pointerleave',()=>{if(!open)hold=false});
if(!rm)setInterval(()=>{if(!hold&&!open)set(order[k++%order.length])},2200);else set(order[0])}
})();
;
(()=>{const d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)],fine=matchMedia('(pointer:fine)').matches;
const drone=(g)=>`<svg viewBox="0 0 400 260" class="dr"><path d="M70 50L330 210M330 50L70 210" class="a"/><rect x="165" y="95" width="70" height="70" rx="10" class="b"/><rect x="182" y="112" width="36" height="36" class="c"/><circle cx="200" cy="130" r="4" class="led"/>${g?'<circle cx="200" cy="72" r="10" class="m"/><circle cx="200" cy="72" r="10" class="rg"/>':''}`+[[70,50,0],[330,50,1],[70,210,1],[330,210,0]].map(([x,y,r])=>`<g transform="translate(${x} ${y})"><circle r="16" class="m"/><g class="p${r?' r':''}"><ellipse rx="52" ry="5"/><ellipse rx="52" ry="5" transform="rotate(90)"/></g></g>`).join('')+'</svg>';
/* 2. cursor */
if(fine){const r=d.createElement('div'),o=d.createElement('div');r.id='cr';o.id='cd';r.innerHTML='<b></b>';d.body.append(r,o);let x=-99,y=-99,rx=-99,ry=-99;
addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY;o.style.transform=`translate(${x}px,${y}px)`;r.classList.toggle('h',!!e.target.closest('a,button,.part,.pin,.nd'));$('b',r).textContent=x+' , '+y},{passive:true});
(function f(){rx+=(x-rx)*.15;ry+=(y-ry)*.15;r.style.transform=`translate(${rx}px,${ry}px)`;requestAnimationFrame(f)})()}
/* 3. hero drone with hotspots + 3D tilt */
const hero=$('.hero');
if(hero){const w=d.createElement('div');w.className='d3';w.innerHTML=drone(1)+[[50,28,'NAVSATE GPS','Satellite navigation for position hold, return-to-home and missions.'],[50,50,'Aazmuth flight controller','STM32 H7 at 480 MHz, 3 IMUs, 2 barometers. The brain of the drone.'],[50,72,'Skydrive AM32 ESC','Turns battery power into precise motor drive. 40A, 60A, 55A 4-in-1.'],[17.5,19,'Motor + propeller','Brushless motors give lift and control on every axis.']].map(([x,y,t,i])=>`<button class="pin" style="left:${x}%;top:${y}%" aria-label="${t}"><span class="tt"><b>${t}</b>${i}</span></button>`).join('');
hero.appendChild(w);w.addEventListener('click',e=>{const p=e.target.closest('.pin');$$('.pin',w).forEach(q=>q.classList.toggle('o',q===p&&!q.classList.contains('o')))});
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect(),a=(e.clientX-r.left)/r.width-.5,b=(e.clientY-r.top)/r.height-.5;w.style.transform=`perspective(900px) rotateY(${a*28}deg) rotateX(${-b*22}deg)`});
hero.addEventListener('pointerleave',()=>w.style.transform='');
/* 4. scroll-exploded anatomy */
const L=[['Battery','Energy','Stores the energy for flight. Cell count sets voltage, capacity sets flight time.',['Cells','Balance lead','Power connector','Power module']],['Frame','Airframe','Carbon structure that carries everything and absorbs vibration.',['Centre plate','Arms','Vibration mounts','Landing gear']],['ESC','Skydrive AM32','Converts battery power into three-phase drive for each motor.',['MCU','MOSFET bridge','Gate drivers','Current sense']],['Flight controller','Aazmuth','Triple-redundant brain. Runs the control loops hundreds of times a second.',['STM32 H7 480 MHz','Triple IMU','Dual barometer','Aazmuth Bus']],['GPS','NAVSATE','Knows where the drone is. Enables position hold and waypoints.',['Antenna','RF front-end','GNSS receiver','Link to FC']],['Propulsion','Motors + props','Four brushless motors turn ESC pulses into thrust.',['Stator','Rotor magnets','Bearings','Propeller']]];
const an=d.createElement('section');an.id='an';an.innerHTML=`<div class="sk"><div class="tx"><small id="as">Scroll to open the drone</small><h2 id="at">Inside the machine</h2><p id="ad">Keep scrolling. The drone opens layer by layer and every part explains itself.</p><div class="ch" id="ac"></div><div class="pg"><i id="ap"></i></div></div><div class="st"><div class="iso" id="ai">${L.map((x,i)=>`<div class="ly"><em>${x[0]}</em>${i==5?'<span class="pr"></span><span class="pr"></span>':'<b></b>'}</div>`).join('')}</div></div></div>`;
hero.after(an);const ly=$$('.ly',an),iso=$('#ai');let last=-2;
const tick=()=>{const r=an.getBoundingClientRect(),p=Math.max(0,Math.min(1,-r.top/(r.height-innerHeight))),e=Math.min(1,p/.2),s=e*e*(3-2*e),k=p<.2?-1:Math.min(5,((p-.2)/.8*6)|0);
iso.style.transform=`rotateX(62deg) rotateZ(${-38+p*110}deg)`;ly.forEach((q,i)=>{q.style.transform=`translateZ(${(i-2.5)*s*62}px)`;q.classList.toggle('on',i===k);q.classList.toggle('dim',k>=0&&i!==k)});
$('#ap').style.width=p*100+'%';
if(k!==last){last=k;if(k<0){$('#as').textContent='Scroll to open the drone';$('#at').textContent='Inside the machine';$('#ad').textContent='Keep scrolling. The drone opens layer by layer and every part explains itself.';$('#ac').innerHTML=''}else{const x=L[k];$('#as').textContent=`Layer ${k+1} / 6 - ${x[1]}`;$('#at').textContent=x[0];$('#ad').textContent=x[2];$('#ac').innerHTML=x[3].map((c,j)=>`<span style="animation-delay:${j*.1}s">${c}</span>`).join('')}}};
addEventListener('scroll',tick,{passive:true});addEventListener('resize',tick);tick()}
/* 5. text scramble on headings */
const ch='ABCDEFGHJKLMNPRSTUVWXYZ0123456789#/';
if('IntersectionObserver'in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const el=e.target,t=el.dataset.t;let i=0;const iv=setInterval(()=>{el.textContent=t.split('').map((c,j)=>c===' '||j<i?c:ch[Math.random()*ch.length|0]).join('');i+=.7;if(i>=t.length){el.textContent=t;clearInterval(iv)}},30)}),{threshold:.6});
$$('main h2,section h2').forEach(h=>{if(!h.children.length&&h.textContent.trim()&&!h.closest('#an,#tech')){h.dataset.t=h.textContent;io.observe(h)}})}
/* 6. flying companion drone follows scroll */
const f=d.createElement('div');f.id='fd';f.innerHTML=drone(0);d.body.appendChild(f);let ly0=scrollY,vel=0;
addEventListener('scroll',()=>{const h=d.documentElement.scrollHeight-innerHeight,p=h>0?scrollY/h:0;vel=scrollY-ly0;ly0=scrollY;f.style.top=(10+p*72)+'%';f.style.rotate=Math.max(-25,Math.min(25,vel*.6))+'deg'},{passive:true});
})();
;
(()=>{const d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)],S=window.SITE||{};
const run=f=>d.readyState==='loading'?d.addEventListener('DOMContentLoaded',f):f();
/* card spotlight */
d.addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}},{passive:true});
/* flight dividers between sections */
run(()=>{const fd=$('#fd'),dr=fd?fd.innerHTML:'';
const io=new IntersectionObserver(es=>es.forEach(e=>e.target.classList.toggle('in',e.isIntersecting)));
$$('section').filter(s=>!s.closest('#an')&&s.id!=='aud'&&s.id!=='an').slice(1,7).forEach(s=>{const v=d.createElement('div');v.className='fdv';v.innerHTML='<i>'+dr+'</i>';s.before(v);io.observe(v)})});

})();
/* extra motion: blur-in reveals + 3D card tilt */
(()=>{const d=document,run=f=>d.readyState==='loading'?d.addEventListener('DOMContentLoaded',f):f(),io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
run(()=>d.querySelectorAll('section p,section h3,section li,section img,.card').forEach((e,i)=>{if(e.closest('#an,#lab,.hero,#aud'))return;e.classList.add('ai');e.style.transitionDelay=(i%4)*.08+'s';io.observe(e)}));
d.addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.transform=`perspective(700px) rotateY(${((e.clientX-r.left)/r.width-.5)*10}deg) rotateX(${-((e.clientY-r.top)/r.height-.5)*10}deg) translateY(-4px)`}},{passive:true});
d.addEventListener('pointerout',e=>{const c=e.target.closest&&e.target.closest('.card');if(c&&!c.contains(e.relatedTarget))c.style.transform=''})})();
;
(()=>{const d=document,$=(s,r=d)=>r.querySelector(s),$$=(s,r=d)=>[...r.querySelectorAll(s)],S=window.SITE||{};
if(d.body.dataset.page!=='home')return;
/* FX4 - Configure your drone stack: layout.js ke 'cfg' wali jagah par lagta hai */
/* ---- OEM stack configurator ---- */
const P=S.products||[],by=s=>P.find(p=>p.slug===s);
const PL={'FPV racing':{s:[['exelr8-fpv-flight-controller-f7','Flight controller'],['skydrive-55a-am32-4-in-1','4-in-1 ESC'],['navsate-mini-gps','GPS']],w:'Light and punchy. A single 4-in-1 ESC keeps wiring short for 5-inch builds and below.'},
'Survey and mapping':{s:[['aazmuth-flight-controller','Flight controller'],['skydrive-am32-40a','ESC x4'],['navsate-gps-for-uavs','GPS']],w:'Redundant sensors and a UAV-grade GPS for steady, repeatable flight lines.'},
'Agriculture':{s:[['aazmuth-flight-controller','Flight controller'],['skydrive-am32-60a','ESC x4'],['navsate-gps-for-uavs','GPS']],w:'60A ESCs carry heavy sprayer payloads. Isolated sensors tolerate vibration and field conditions.'},
'Defence and industrial':{s:[['aazmuth-flight-controller','Flight controller'],['skydrive-am32-60a','ESC x4'],['navsate-gps-for-uavs','GPS']],w:'Triple-redundant flight control, made in India, with custom firmware support for your programme.'}};
const sec=d.createElement('section');sec.id='cfg';sec.innerHTML=`<div class="wrap"><h2>Configure your drone stack</h2><p class="lead">Pick your platform. We show the electronics we would put in it and how they connect.</p><div class="tb">${Object.keys(PL).map(k=>`<button>${k}</button>`).join('')}</div><div class="gr"><div class="dg" id="dg4"></div><div class="ls" id="ls4"></div></div><div class="bd"><div>Made in India<span>Local supply, short lead times</span></div><div>Open AM32 firmware<span>No locked-in ESC software</span></div><div>Triple redundancy<span>Isolated IMUs and barometers</span></div><div>Engineer support<span>Docs, pinouts and direct help</span></div></div></div>`;
const slot=$('#cfg-slot');if(!slot)return; /* layout.js me 'cfg' nahi hai to configurator nahi dikhta */
slot.replaceWith(sec);
const N=(x,y,w,t,i)=>`<g class="nd" style="animation-delay:${i*.1}s"><rect x="${x}" y="${y}" width="${w}" height="34" rx="3"/><text x="${x+w/2}" y="${y+21}">${t}</text></g>`;
function show(k){const c=PL[k],it=c.s.map(([s,r])=>[by(s),r]).filter(x=>x[0]);$$('#cfg .tb button').forEach(b=>b.classList.toggle('on',b.textContent===k));
const ys=[40,110,180,250];
$('#dg4').innerHTML=`<svg viewBox="0 0 520 300"><path class="ln" d="M90 150H150"/><path class="ln" d="M215 56V116"/><path class="ln" d="M215 150H330"/><path class="ln" d="M290 56H250"/>${ys.map(y=>`<path class="ln" d="M330 150L400 ${y+17}" style="animation-delay:-${y/100}s"/>${N(400,y,86,'Motor',3)}`).join('')}${N(20,133,70,'Battery',0)}${N(150,133,100,'ESC',1)}${N(150,40,130,'Flight ctrl',2)}${N(290,40,0,'',4).replace(/<g.*/,'')}${N(300,40,70,'GPS',4)}${[0,1,2,3].map(i=>`<circle r="3" fill="#fff"><animateMotion dur="1.4s" begin="${i*.3}s" repeatCount="indefinite" path="M330 150L400 ${ys[i]+17}"/></circle>`).join('')}<circle r="3" fill="#fff"><animateMotion dur="1.2s" repeatCount="indefinite" path="M90 150H150"/></circle><circle r="3" fill="#fff"><animateMotion dur="1s" repeatCount="indefinite" path="M215 56V116"/></circle></svg>`;
const names=it.map(x=>x[0].name),msg=`OEM enquiry - ${k}: ${names.join(', ')}`;
$('#ls4').innerHTML=`<div class="why">${c.w}</div>`+it.map(([p,r],i)=>`<a class="it" style="animation-delay:${.1*i+.1}s" href="${p.slug}.html"><img src="${p.image}" alt=""><div><small>${r}</small><b>${p.name}</b><span>${p.short}</span></div></a>`).join('')+`<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:6px"><a class="btn" href="mailto:${S.email}?subject=${encodeURIComponent(msg)}&body=${encodeURIComponent(msg+'\n\nQuantity:\nCompany:\nPhone:')}">Request OEM quote</a><a class="btn o" href="https://wa.me/${S.whatsapp}?text=${encodeURIComponent(msg)}">WhatsApp us</a></div>`}
sec.addEventListener('click',e=>{const b=e.target.closest('.tb button');if(b)show(b.textContent)});show('Agriculture');
})();
