/* GUIDES - long-tail SEO / AEO content. Yahan edit karo, phir: node build.js
   Har guide ek alag page banata hai: <slug>.html  (e.g. guide-flight-controller-india.html)
   Sirf general technical baatein likhi hain. Product ke exact specs product pages par hain (data.js). */
module.exports = [
  {
    slug: 'guide-flight-controller-india',
    title: 'How to Choose a Drone Flight Controller in India (2026)',
    h1: 'How to choose a drone flight controller in India',
    desc: 'Learn how to pick a drone flight controller: MCU, IMU, firmware, UART count and size. A practical guide for Indian FPV and UAV builders.',
    take: 'Pick the flight controller by firmware support (Betaflight, INAV, ArduPilot), UART count, IMU quality and mounting size. Match it to your ESC and GPS before you buy.',
    products: ['aazmuth-flight-controller', 'exelr8-fpv-flight-controller-f7', 'sate-aio-board', 'kinetik-flight-controller'],
    sections: [
      { h: 'What does a flight controller do?', p: ['The flight controller (FC) is the brain of a drone. It reads the IMU (gyroscope and accelerometer), takes your stick commands from the receiver, and sends motor commands to the ESC hundreds or thousands of times every second. A good FC keeps the drone stable and responds cleanly to your input.'] },
      { h: 'Five things to check before you buy', ul: [
        'Firmware: Betaflight for freestyle and racing, INAV for GPS and long range, ArduPilot or PX4 for autonomous and survey missions.',
        'Processor: F4, F7 and H7 chips differ in speed and memory. Higher loop rates and more features need a faster processor.',
        'IMU and vibration handling: a quality gyro and soft-mounting make tuning easier and flights smoother.',
        'UARTs and ports: count the receiver, GPS, VTX, telemetry and camera ports you need. Running out of UARTs is a common build mistake.',
        'Mounting size: 20x20, 25.5x25.5 and 30.5x30.5 mm are the usual patterns. Match your frame and ESC stack.'] },
      { h: 'Match the FC with the rest of the stack', p: ['A flight controller never works alone. Check that its ESC connector voltage and current rating suit your ESC, that it has a port for your receiver protocol such as ELRS, and that GPS wiring is supported if you plan to fly long range or use return-to-home.', 'All-in-one boards combine FC and ESC in one PCB. They save weight and wiring, which suits compact builds, but a stack is easier to repair because you can replace each board separately.'] },
      { h: 'Where to buy in India', p: ['Space and Tech Engineering designs Aazmuth and Exelr8 flight controllers in India. The models below link to specifications and documentation. Ask for the exact firmware target and revision, current availability, and a quote for your quantity before ordering.'] }
    ],
    faq: [
      ['Which flight controller is best for beginners?', 'A flight controller with Betaflight support, a clear pinout and good documentation is easiest to start with. Check that it has enough UARTs for your receiver and VTX.'],
      ['Do I need F7 or H7 for an FPV drone?', 'Not always. F4 boards fly well for most 5-inch builds. F7 and H7 add processing headroom, more UARTs and room for extra features.'],
      ['Can one flight controller run both FPV and GPS?', 'Yes, if it has a free UART for the GPS and firmware that supports it, such as INAV or ArduPilot.']
    ]
  },
  {
    slug: 'guide-am32-esc',
    title: 'AM32 ESC Explained: Firmware, Amp Rating and Choice',
    h1: 'AM32 ESC explained: how to choose the right amp rating',
    desc: 'What is an AM32 ESC? Understand AM32 firmware, DShot support, current ratings, 3-6S vs 6-12S, and how to size an ESC for your drone.',
    take: 'AM32 is open-source ESC firmware for ARM-based ESCs. Choose the ESC by battery cell count and by motor current with a safety margin, not by the highest advertised number.',
    products: ['skydrive-am32-60a', 'sate-4-in-1-esc-80a', 'sate-high-amp-esc'],
    sections: [
      { h: 'What is AM32?', p: ['AM32 is open-source firmware that runs on ARM microcontrollers inside many modern brushless ESCs. It supports digital protocols such as DShot and lets you tune settings like motor direction and timing with a configurator. Open firmware means the community can fix bugs and add features.'] },
      { h: 'How to size the ESC', ul: [
        'Battery voltage: a 3-6S ESC suits 3 to 6 cell LiPo packs. Larger multirotors and heavy-lift drones use 6-12S ESCs.',
        'Motor current: look at the maximum current of your motor and propeller combination, then pick an ESC with a comfortable margin.',
        'Continuous vs burst: continuous current matters for real flights. Burst numbers are short peaks.',
        'Cooling: airflow and heatsinking decide how much current an ESC can really carry in your frame.'] },
      { h: '4-in-1 or single ESC?', p: ['A 4-in-1 ESC puts four power stages on one board. It keeps the stack tidy and light for FPV quads. Single ESCs on each arm are common on larger multirotors and make replacement cheaper when one motor channel fails.'] },
      { h: 'Check protection and wiring', p: ['Use good solder joints, a low-ESR capacitor on the battery lead if the ESC needs it, and the correct signal wire from the flight controller. Always test with props off the first time.'] }
    ],
    faq: [
      ['What does AM32 stand for?', 'AM32 is the name of an open-source ESC firmware for ARM microcontrollers. It is used on many 32-bit brushless ESCs.'],
      ['Can I use a 60A ESC on a 5-inch drone?', 'Yes, as long as the battery cell count matches and the motor current stays below the ESC rating. A higher rating gives more safety margin.'],
      ['What is the difference between 3-6S and 6-12S ESC?', 'It is the supported battery voltage range. 3-6S is for small and medium drones. 6-12S is for larger, heavy-lift builds.']
    ]
  },
  {
    slug: 'guide-uav-gps-module',
    title: 'How to Choose a GPS Module for UAVs and FPV Drones',
    h1: 'How to choose a GPS module for UAVs and FPV drones',
    desc: 'GPS and GNSS modules for drones explained: constellations, compass, update rate, antenna and return-to-home. Buying tips for India.',
    take: 'For reliable return-to-home and position hold, choose a GNSS module with multi-constellation support, a good antenna and a compass if your firmware needs one.',
    products: ['navsate-gps-for-uavs', 'navsate-mini-gps'],
    sections: [
      { h: 'GPS or GNSS?', p: ['GPS is the American satellite system. GNSS is the general term that includes GPS, GLONASS, Galileo and BeiDou. A drone module that listens to several constellations can lock more satellites and gets a stable position faster.'] },
      { h: 'What to look for', ul: [
        'Multi-constellation support for faster lock and better accuracy.',
        'Update rate: higher rates give smoother position data to the flight controller.',
        'Compass (magnetometer): needed on many multirotors for heading, and it must be kept away from power wires.',
        'Antenna size and placement: a bigger patch antenna on top of the frame usually gives better reception.',
        'Connector and protocol: make sure it matches the flight controller UART and firmware, such as INAV or ArduPilot.'] },
      { h: 'Mounting tips', p: ['Mount the module on a mast or the top plate with a clear view of the sky. Keep it away from the VTX antenna and high-current wires. Wait for a good satellite lock before arming, and test return-to-home at a safe height first.'] },
      { h: 'Full size or mini?', p: ['Full-size modules suit mapping, agriculture and long-range builds where reliability matters. Mini modules save weight for compact FPV drones and cinewhoops.'] }
    ],
    faq: [
      ['How many satellites do I need for a safe flight?', 'More is better. Many pilots wait for a solid lock with a healthy count before arming, and always test return-to-home before relying on it.'],
      ['Does an FPV drone need GPS?', 'Not for freestyle. For long range flights, GPS enables return-to-home and position logging.'],
      ['Why is my GPS slow to lock?', 'Poor sky view, interference from the VTX or power wires, or no cold-start almanac can slow the first lock. Try an open area and wait a few minutes.']
    ]
  },
  {
    slug: 'guide-fpv-drone-electronics-stack',
    title: 'FPV Drone Electronics Stack: FC, ESC, Receiver and VTX',
    h1: 'The FPV drone electronics stack explained',
    desc: 'Every part of an FPV drone stack explained: flight controller, ESC, receiver, VTX, GPS and power. A build guide for Indian pilots.',
    take: 'An FPV electronics stack has five core parts: flight controller, ESC, receiver, video transmitter and power distribution. Pick them together so voltage, protocol and size all match.',
    products: ['exelr8-fpv-flight-controller-f7', 'kinetik-flight-controller', 'sate-4-in-1-esc-80a', 'elrs-fpv-receiver', 'sate-aio-board', 'navsate-mini-gps', 'analog-vtx', 'digital-vtx'],
    sections: [
      { h: 'The core parts', ul: [
        'Flight controller: reads sensors and runs the flight firmware.',
        'ESC: drives each brushless motor from the flight controller commands.',
        'Receiver: brings your radio link into the drone, for example an ELRS receiver.',
        'Video transmitter (VTX): sends the camera feed to your goggles.',
        'Power: battery, XT60 connector, regulators and a clean 5V and 9-12V supply.'] },
      { h: 'Plan your build in this order', p: ['Start with the frame and motor size. Choose the ESC for the motor current and battery voltage. Then pick the flight controller with enough UARTs for the receiver, VTX and GPS. Finally choose the receiver and VTX that fit your radio and goggles.'] },
      { h: 'Common mistakes to avoid', ul: [
        'Mixing stack sizes that do not fit the frame.',
        'Running out of UARTs after buying the board.',
        'Putting the GPS or compass next to power wires.',
        'Skipping the props-off test before the first flight.'] },
      { h: 'Indian-made options', p: ['Space and Tech Engineering designs flight controllers, ESCs, receivers and GPS modules in India, so you can build a matching stack from one supplier and get local support.'] }
    ],
    faq: [
      ['What is a flight stack?', 'It is the set of boards stacked in the middle of a quad: usually a flight controller and an ESC, sometimes with a VTX or power board.'],
      ['Do I need an all-in-one board?', 'All-in-one boards save weight and wiring on compact builds. A separate FC and ESC stack is easier to repair and upgrade.'],
      ['Which receiver protocol should I use?', 'ExpressLRS is popular for low latency and long range. Choose the protocol that matches your radio transmitter.']
    ]
  },
  {
    slug: 'guide-elrs-receiver',
    title: 'ExpressLRS (ELRS) Receiver Guide for FPV Drones',
    h1: 'ExpressLRS (ELRS) receivers: what they are and how to choose',
    desc: 'ELRS receivers explained: 2.4 GHz vs 900 MHz, packet rate, telemetry, antenna and binding. Practical guide for FPV and long range drones.',
    take: 'ExpressLRS is an open-source radio link known for low latency and long range. Choose 2.4 GHz for freestyle and racing, 900 MHz for maximum range, and match it to your transmitter module.',
    products: ['elrs-fpv-receiver'],
    sections: [
      { h: 'What is ExpressLRS?', p: ['ExpressLRS, or ELRS, is an open-source radio control link for drones. It focuses on low latency, strong link quality and long range at a low cost, and it supports telemetry back to your radio.'] },
      { h: '2.4 GHz or 900 MHz?', ul: [
        '2.4 GHz: very fast packet rates, great for freestyle and racing, and the most common choice.',
        '900 MHz: lower frequency that handles obstacles better and reaches farther, popular for long range flying. Check your local frequency rules.'] },
      { h: 'Choosing a receiver', ul: [
        'Size and weight: tiny receivers suit micro builds.',
        'Antenna type: a good antenna and correct placement matter more than raw power.',
        'Telemetry: pick one that supports the telemetry data your radio shows.',
        'Firmware version: keep the receiver and transmitter module on compatible ELRS versions.'] },
      { h: 'Binding and setup', p: ['Update both sides to compatible versions, set the binding phrase or use the bind button, then check the UART and protocol settings in your flight controller firmware. Test the failsafe with props off.'] }
    ],
    faq: [
      ['Is ELRS better than Crossfire?', 'ELRS offers very low latency and low cost. Crossfire is a closed system with its own ecosystem. The better choice depends on your radio and range needs.'],
      ['Can I use 2.4 GHz ELRS in India?', 'Check current rules for the band you plan to use and fly within the law. 2.4 GHz is widely used for hobby drones, but you must follow local regulations.'],
      ['Do ELRS receivers need firmware updates?', 'Yes. Keep the receiver and transmitter module on compatible versions for the best link quality.']
    ]
  }
];
