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
  logo: "logo.svg",
  ogImage: "og-default.png",

  /* ---------- HOME PAGE ---------- */
  hero: {
    title: "Indian flight controllers, ESCs and GPS for drones",
    text: "Triple-redundant Aazmuth flight controllers, Skydrive AM32 ESCs and NAVSATE GPS modules. Designed in Mumbai and Nashik, tested in flight, supported by the engineers who built them.",
    image: "https://static.wixstatic.com/media/e688f6_10c2110744d94fc980962c8b7d6fc872~mv2.png"
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
  categories: ["Flight controllers", "ESCs", "GPS", "Development kits", "Transmitters"],
  products: [
    {
      slug: "aazmuth-flight-controller", name: "Aazmuth flight controller", category: "Flight controllers",
      status: "available", featured: true,
      image: "https://static.wixstatic.com/media/e688f6_4ef9d2c2ab6a43a5ab35ac564c0604cc~mv2.jpg", gallery: [],
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
      status: "available", featured: true,
      image: "https://static.wixstatic.com/media/e688f6_7ed082c4ce4c4d01baea626a1683544f~mv2.jpg", gallery: [],
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
      status: "available", featured: false,
      image: "https://static.wixstatic.com/media/e688f6_f41fedc59ef8475a8a40bf6cc0885654~mv2.jpg", gallery: [],
      short: "40A AM32 ESC for 3-6S LiPo builds. A light choice for survey and mapping drones.",
      description: "The Skydrive AM32 40A is a 3-6S electronic speed controller running AM32 firmware. It is a light, efficient choice for survey, mapping and general UAV builds that do not need the 60 A headroom.",
      features: ["40 A rating", "AM32 firmware", "3-6S LiPo input"],
      specs: [["Current","40 A"],["Battery","3-6S"],["Firmware","AM32"]],
      bestFor: ["Survey and mapping", "Startups and prototypes"],
      faq: [
        { q: "Which firmware does the Skydrive 40A run?", a: "AM32, configurable with standard AM32 tools." },
        { q: "40A or 60A Skydrive ESC?", a: "Pick 40 A for lighter survey and general UAV builds, and 60 A for heavy payloads such as sprayer drones." }
      ], docs: []
    },
    {
      slug: "skydrive-55a-am32-4-in-1", name: "Skydrive 55A AM32 4-in-1", category: "ESCs",
      status: "available", featured: false,
      image: "https://static.wixstatic.com/media/e688f6_f41fedc59ef8475a8a40bf6cc0885654~mv2.jpg", gallery: [],
      short: "Four 55A AM32 ESCs on one board. Short wiring for 5-inch FPV builds and below.",
      description: "The Skydrive 55A 4-in-1 puts four AM32 ESCs on a single board, which keeps wiring short and the stack tidy on 5-inch FPV builds and smaller. It is the matching ESC for the Exelr8 F7 flight controller.",
      features: ["4 ESCs on one board", "55 A rating", "AM32 firmware"],
      specs: [["Current","55 A"],["Type","4-in-1"],["Firmware","AM32"]],
      bestFor: ["FPV racing and freestyle"],
      faq: [
        { q: "What is a 4-in-1 ESC?", a: "A single board that carries four speed controllers, one for each motor of a quadcopter, which keeps wiring short and weight low." },
        { q: "Which firmware does the 55A 4-in-1 run?", a: "AM32." }
      ], docs: []
    },
    {
      slug: "navsate-gps-for-uavs", name: "NAVSATE GPS for UAVs", category: "GPS",
      status: "available", featured: true,
      image: "https://static.wixstatic.com/media/e688f6_64ebb40d939447eb83457bcc81170048~mv2.jpg", gallery: [],
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
      status: "available", featured: false,
      image: "https://static.wixstatic.com/media/e688f6_64ebb40d939447eb83457bcc81170048~mv2.jpg", gallery: [],
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
      slug: "dev-kit-1", name: "Dev Kit 1", category: "Development kits", status: "soon", featured: false, noindex: true,
      image: "https://static.wixstatic.com/media/e688f6_c9645f8cf58b4468be911911ded63735~mv2.jpg", gallery: [],
      short: "Development kit for universities and startups. Coming soon.", description: "Dev Kit 1 is on our roadmap for universities, labs and startups that want to learn and prototype on our flight electronics. Ask us and we will tell you as soon as there is a launch date.", features: [], specs: [], docs: [], faq: []
    },
    {
      slug: "dev-kit-2", name: "Dev Kit 2", category: "Development kits", status: "soon", featured: false, noindex: true,
      image: "https://static.wixstatic.com/media/e688f6_c9645f8cf58b4468be911911ded63735~mv2.jpg", gallery: [],
      short: "Second development kit. Coming soon.", description: "Dev Kit 2 is on our roadmap. Ask us and we will tell you as soon as there is a launch date.", features: [], specs: [], docs: [], faq: []
    },
    {
      slug: "trx-5km", name: "TRX 5 km", category: "Transmitters", status: "soon", featured: false, noindex: true,
      image: "https://static.wixstatic.com/media/e688f6_c9645f8cf58b4468be911911ded63735~mv2.jpg", gallery: [],
      short: "5 km range radio transmitter. Coming soon.", description: "TRX 5 km is a radio transmitter on our roadmap, aimed at 5 km control range. Ask us and we will tell you as soon as there is a launch date.", features: [], specs: [], docs: [], faq: []
    },
    {
      slug: "trx-10km", name: "TRX 10 km", category: "Transmitters", status: "soon", featured: false, noindex: true,
      image: "https://static.wixstatic.com/media/e688f6_c9645f8cf58b4468be911911ded63735~mv2.jpg", gallery: [],
      short: "10 km range radio transmitter. Coming soon.", description: "TRX 10 km is a radio transmitter on our roadmap, aimed at 10 km control range. Ask us and we will tell you as soon as there is a launch date.", features: [], specs: [], docs: [], faq: []
    }
  ],

  /* ---------- PARTNERS (logo add/remove) ---------- */
  partners: [
    { name: "Garuda Aerospace", logo: "images/garuda-aerospace-logo.png" },
    { name: "DA3", logo: "https://static.wixstatic.com/media/6d90dc_a5da0d88ad12431ba5e9c54e63df72a9~mv2.png" },
    { name: "NEC", logo: "images/NEC.png" },
    { name: "Known Aero", logo: "images/Known Aero.png" },
    { name: "Nitiraj Engineers", logo: "images/Nitiraj Engee.webp" },
    { name: "Faradic", logo: "images/FARADIC.png" },
    { name: "Riddl", logo: "images/riidl.webp" },
    { name: "Sandip University", logo: "images/sandip uni.png" },
    { name: "Rotorize Aviation", logo: "https://static.wixstatic.com/media/6d90dc_c34d727a13a24f1e86c07c676c491c0c~mv2.png" },
    { name: "Flylab Solutions", logo: "https://static.wixstatic.com/media/6d90dc_2643795abf4c44b3971c111bd4bd011f~mv2.png" },
    { name: "Greventek", logo: "https://static.wixstatic.com/media/6d90dc_1407130ef82344e78a8920eb1d16beb2~mv2.png" },
    { name: "MSINS", logo: "https://static.wixstatic.com/media/6d90dc_632a942e250946649aaac5083453e028~mv2.png" },
    { name: "GGSF", logo: "https://static.wixstatic.com/media/6d90dc_8129da0665d746f89b3120d47318336f~mv2.png" }
  ],

  /* ---------- ABOUT PAGE ---------- */
  about: {
    title: "Built in Nashik. Flown everywhere.",
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
      { title: "Make it here", text: "Designed in Mumbai and Nashik, so a fix is a phone call away." }
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
  ticker: ["Flight controllers", "AM32 ESCs", "GPS modules", "Dev kits", "Transmitters", "Made in India"],
  manifesto: "We design the electronics, write the firmware and fly every batch ourselves. When something needs fixing, you call the people who built it.",
  apps: [
    { t: "Agriculture", x: "Spraying and crop-mapping drones need a steady hover and long, GPS-locked runs.", p: ["aazmuth-flight-controller", "navsate-gps-for-uavs", "skydrive-am32-60a"] },
    { t: "Survey and mapping", x: "Redundant sensors and a reliable GPS keep survey lines straight.", p: ["aazmuth-flight-controller", "navsate-gps-for-uavs"] },
    { t: "Defense and security", x: "Triple-redundant sensing for missions where a failure is not an option.", p: ["aazmuth-flight-controller", "navsate-gps-for-uavs"] },
    { t: "FPV racing and freestyle", x: "Light, fast F7 control and 4-in-1 ESCs for tight, punchy builds.", p: ["exelr8-fpv-flight-controller-f7", "skydrive-55a-am32-4-in-1", "navsate-mini-gps"] },
    { t: "Education and research", x: "Modular boards and open docs that students can open up and learn from.", p: ["aazmuth-flight-controller", "dev-kit-1"] },
    { t: "Startups and prototypes", x: "Small batches, direct support and parts that match your build.", p: ["skydrive-am32-40a", "skydrive-am32-60a", "exelr8-fpv-flight-controller-f7"] }
  ],
  process: [
    { t: "Design", x: "Schematics, PCBs and firmware drawn in Mumbai and Nashik." },
    { t: "Bench test", x: "Every board is powered, loaded and measured before it leaves the bench." },
    { t: "Fly test", x: "Real flights, real logs, real fixes." },
    { t: "Ship and support", x: "Public docs, and a phone number that gets answered." }
  ],
  faq: [
    { q: "What is AM32 firmware?", a: "AM32 is open-source firmware for 32-bit brushless ESCs. Skydrive ESCs run it, so you can configure and update them with the usual AM32 tools." },
    { q: "Which ESC should I buy for an agriculture or sprayer drone?", a: "Start with the Skydrive AM32 60A 3-6S, which is meant for heavier payloads. Share your motor, prop and battery setup and we will confirm the fit." },
    { q: "Which flight controller should I pick?", a: "Aazmuth for redundancy and professional work, Exelr8 F7 for FPV builds. Tell us your build and we will confirm." },
    { q: "Are your drone electronics made in India?", a: "They are designed in Mumbai and Nashik by our own hardware and firmware engineers, so support and fixes are a phone call away." },
    { q: "Can I buy in bulk or for a company or OEM project?", a: "Yes. Send quantity and use case through the quote form, or call or WhatsApp us, and we will reply with the right parts." },
    { q: "Where are the pinouts and setup guides?", a: "In our public documentation. Each product page links to its own docs, where they exist." },
    { q: "Do you ship across India?", a: "Call or WhatsApp us with your pincode and quantity and we will confirm shipping." },
    { q: "When will the coming-soon products launch?", a: "Dev Kit 1, Dev Kit 2 and the TRX transmitters are on our roadmap. Message us and we will tell you as soon as there is a date." }
  ],

  /* ---------- INVESTORS PAGE (sirf wahi dikhao jo sach aur verify ho) ----------
     metrics: [] khali = block hide. Revenue / funding / certifications tabhi daalo jab public karna ho.
     metrics format: [{ n: "Rs 1.2 Cr", l: "FY26 revenue" }] */
  investors: {
    title: "Building India's own drone electronics stack",
    text: "Every drone needs a flight controller, speed controllers and GPS. We design all three in India, test them in flight and support the people who build with them.",
    thesis: [
      { t: "Full flight-electronics stack", x: "Flight controllers, AM32 ESCs and GPS modules from one team, so parts are designed to work together." },
      { t: "Redundancy-first design", x: "Aazmuth carries 3 IMUs and 2 barometers on isolated buses, aimed at professional, industrial and defence work." },
      { t: "Modular platform", x: "IMU boards plug into the 20-pin Aazmuth Bus, so one platform can be upgraded instead of replaced." },
      { t: "Two ways to sell", x: "Direct sales to builders, and OEM and bulk supply to drone companies, universities and startups." },
      { t: "Local design and support", x: "Engineering in Mumbai and Nashik means fast fixes, custom firmware conversations and a phone that gets answered." },
      { t: "Open documentation", x: "Public pinouts, calibration and integration guides lower the cost of adopting our boards." }
    ],
    roadmap: [
      { t: "Development kits", x: "Dev Kit 1 and Dev Kit 2 for universities, labs and startups." },
      { t: "Long-range transmitters", x: "TRX 5 km and TRX 10 km radio links." },
      { t: "More product depth", x: "Fuller specs, docs and variants across the Exelr8, Skydrive and NAVSATE lines." }
    ],
    metrics: [
      { n: "Rs 1.2 Cr", l: "FY26 revenue" },
      { n: "40+", l: "OEM customers" },
      { n: "Rs 50 L", l: "Seed raised" },
      { n: "3", l: "Patents filed" }
    ],
    cta: "Investor and strategic partnership enquiries"
  }
};


/* =====================================================================
   LEGAL / COMPLIANCE  -  IT (Intermediary Guidelines and Digital Media
   Ethics Code) Rules, 2021 (as amended up to 10.02.2026)
   Sirf [BRACKET] wali values apni asli details se badlo, phir: node build.js
   ===================================================================== */
(function(){
const S=window.SITE;
S.legal={
  updated:"16 November 2026",
  officer:{
    name:"[NAAM - Grievance Officer ka naam daalo]",
    designation:"Grievance Officer",
    email:S.email,
    phone:S.phone,
    address:"Space and Tech Engineering LLP, Unit 37A, Patel Industrial Estate, Vivekananda Rd, Yadav Nagar, Dahisar East, Mumbai 400068, Maharashtra, India",
    hours:"Monday to Saturday, 10:00 to 18:00 IST"
  },
  pages:[
  { slug:"terms", nav:"Terms of Use", title:"Terms of Use and User Agreement",
    desc:"Rules for using the Space and Tech Engineering website: what you may not post or send, what we can do if rules are broken, and your legal responsibilities.",
    intro:"These terms apply to everyone who visits spaceandtechengineerings.com, sends us an enquiry or uses any page, form or link on it. Please read them once. Using the site means you accept them.",
    sections:[
    {h:"Who we are",p:["This site is run by "+S.name+", Mumbai and Nashik, India. It shows our drone flight controllers, ESCs and GPS modules and lets you contact us for quotes and support."]},
    {h:"What you must not send or upload to us",p:["Through our forms, email, WhatsApp or any other channel we provide, you agree not to host, upload, share or transmit anything that:"],
     ul:["belongs to someone else and you have no right to use it;","is obscene, pornographic, paedophilic, or invades another person's privacy, including bodily privacy;","harasses or insults anyone on the basis of gender, or is racially or ethnically objectionable;","promotes money laundering or gambling, or promotes enmity between groups on grounds of religion or caste with intent to incite violence;","is harmful to children;","infringes a patent, trademark, copyright or other proprietary right;","deceives the reader about who sent it, or knowingly spreads false or misleading information as if it were fact;","impersonates another person;","threatens the unity, integrity, defence or security of India, friendly relations with other countries or public order, or incites a cognisable offence;","contains a virus or any code meant to disrupt or damage a computer resource;","is synthetically generated (AI-made or AI-altered) and unlawful, or falsely shows a real person or event in a way meant to deceive;","violates any law in force in India."]},
    {h:"What we may do if these terms are broken",p:["We may immediately remove or disable access to the content, suspend or end your access, and preserve the related records for 180 days without altering the evidence. Where the law requires it we report the matter to the proper authority, and we may disclose a violating user's identity to a victim or a person acting for the victim, in line with applicable law."]},
    {h:"Your legal responsibility",p:["Breaking these terms can lead to penalty or punishment under the Information Technology Act, 2000, the Bharatiya Nyaya Sanhita, 2023 read with the Bharatiya Nagarik Suraksha Sanhita, 2023, the Protection of Children from Sexual Offences Act, 2012 and other laws. Offences that must be reported by law will be reported."]},
    {h:"Products, quotes and technical information",p:["Specifications, images and prices on this site are for general information and may change without notice. A product is sold only on a written quote or invoice from us. Drone electronics must be used in line with Indian drone rules and other applicable law; you are responsible for lawful use."]},
    {h:"Our content",p:["Text, designs, firmware descriptions, logos and product images on this site belong to us or our licensors. You may share links freely. Copying content for commercial use needs our written permission."]},
    {h:"Complaints and changes",p:["To report content or raise any issue, use the process on our Grievance Redressal page. We review these terms regularly and remind users of them at least once every three months. Continued use after a change means you accept it."]}
    ]},
  { slug:"privacy", nav:"Privacy Policy", title:"Privacy Policy",
    desc:"What personal information Space and Tech Engineering collects through this website, why, how long we keep it and how to reach us about it.",
    intro:"We keep this simple: we collect only what we need to answer your enquiry, quote you, deliver an order and support you after the sale.",
    sections:[
    {h:"What we collect",p:["Only what you give us: name, phone number, email, product of interest, build details and message when you use our contact form, email or WhatsApp, plus details needed to raise an invoice or ship an order (company name, address, GST number). The contact form opens your own email app or WhatsApp with the message prepared; nothing is sent until you press send there."]},
    {h:"Why we use it",ul:["to reply to enquiries and prepare quotes;","to process orders, invoices and warranty or support requests;","to meet legal, tax and security obligations;","to share product updates only if you ask for them."]},
    {h:"Who we share it with",p:["We do not sell personal information. We share it only with logistics, payment and accounting partners who need it to serve you, and with government agencies when a lawful order requires it. Where a lawful written order requires, we provide information to an authorised agency within the time the rules allow."]},
    {h:"How long we keep it",p:["Enquiry and registration details are kept for as long as needed for the purpose above. If we collect registration information from you, we retain it for 180 days after you cancel or withdraw it. Content removed under our terms and its related records are preserved for 180 days, or longer if a court or authorised agency requires."]},
    {h:"Security",p:["We follow reasonable security practices and procedures under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011, and report cyber security incidents to CERT-In as required."]},
    {h:"Your choices",p:["You may ask us to correct or delete your details, or to stop contacting you, by writing to the Grievance Officer. We will acknowledge within 24 hours and resolve within seven days."]},
    {h:"Third-party links",p:["Our site links to services such as our documentation, LinkedIn and Instagram. Their privacy practices are their own."]}
    ]},
  { slug:"grievance", nav:"Grievance Redressal", title:"Grievance Redressal",
    desc:"Name and contact details of the Grievance Officer, how to file a complaint, response timelines and how to appeal to the Grievance Appellate Committee.",
    intro:"If something on this site or in our dealings with you is wrong, tell us. A named officer reads every complaint.",
    officerBlock:true,
    sections:[
    {h:"How to file a complaint",p:["Write to the Grievance Officer by email, phone or post using the details above. Tell us the page or link, what the problem is and how to reach you. Complaints about content help us most when they include the exact web address."]},
    {h:"How fast we act",ul:["Acknowledgement of every complaint: within 24 hours.","Resolution of a complaint: within seven days of receipt.","Requests to remove content that breaches our Terms of Use (other than ownership, infringement and general-law categories): as quickly as possible and within 36 hours.","Intimate or impersonating content: if a person, or someone on their behalf, complains that content shows their private area, full or partial nudity, a sexual act, or is an impersonation including a morphed image, we take reasonable and practicable steps to remove or disable access within two hours of the complaint.","Orders of a court or lawful notices from the Appropriate Government: acted on within three hours of receipt, as the rules require."]},
    {h:"If you are not satisfied",p:["If you disagree with the Grievance Officer's decision, or you do not get a resolution in time, you may appeal to the Grievance Appellate Committee established by the Central Government within 30 days of receiving our reply. The Committee aims to decide within 30 calendar days, and its orders bind us."]},
    {h:"Law enforcement and government agencies",p:["Lawful orders and notices can be sent to the Grievance Officer at the address above. We provide information or assistance to an authorised agency within 72 hours of a written order that states its purpose."]},
    {h:"Our commitment",p:["We respect the rights of every person under the Constitution of India, including Articles 14, 19 and 21, and we keep our services accessible and transparent."]}
    ]},
  { slug:"synthetic-content", nav:"AI and Synthetic Content", title:"AI and Synthetic Content Policy",
    desc:"How Space and Tech Engineering labels AI-generated or AI-altered images, audio and video, and what we do not allow.",
    intro:"Under the IT Rules, audio, images and video that are artificially created or altered so they look real are called synthetically generated information. This is our policy on it.",
    sections:[
    {h:"What we label",p:["Any image, video or audio on this site that was created or materially altered with AI or other computer generation, and could be taken for a real person, place or event, carries a clear visible label (or an audio notice at the start) and, where technically possible, embedded provenance information. Product renders, diagrams and illustrations are marked as illustrative where they are not photographs of the actual product."]},
    {h:"What we do not allow",ul:["synthetic content showing child sexual abuse material, non-consensual intimate imagery, or anything obscene, pornographic or sexually explicit;","false documents or false electronic records;","content about making explosives, arms or ammunition;","fake depictions of a real person or event meant to deceive, including false identity, voice, actions or statements."]},
    {h:"Routine edits are fine",p:["Normal editing such as cropping, colour correction, noise reduction, compression, translation, captions and accessibility improvements, and good-faith drafts, templates and educational material, do not need a label so long as they do not change the real meaning."]},
    {h:"Report a concern",p:["If you see content on our site that looks fake, misleading or harmful, send the link to the Grievance Officer. We act quickly, remove or disable access where needed and keep the evidence intact."]}
    ]}
  ]
};
})();
