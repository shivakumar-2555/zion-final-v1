import { Product, ProductCategory } from '../types/product';
import { brochureProductDetails } from './productBrochureDetails';
import { categories } from './categories';

export { categories };

const baseProducts: Product[] = [
  // ==========================================
  // PRE-PRODUCTION MACHINES
  // (Plate Mounting, Plate Masking & Making,
  //  Exposure Stickness Removal, Plate Washing, DBQX-350)
  // ==========================================
  {
    id: 'pre1',
    slug: 'plate-mounting-machine',
    name: 'Plate Mounting Machine',
    category: 'pre-production',
    image: '/images/products/fitted/plate-mounting-machine.webp',
    features: [
      'High-definition dual color cameras with 70x magnification',
      'Precision linear guide and motorized plate roller lifting',
      '19-inch high-resolution liquid crystal display'
    ],
    specifications: {}
  },
  {
    id: 'pre-flexo-plate-making',
    slug: 'flexo-plate-making-machine',
    name: 'Plate Masking & Making Machine',
    category: 'pre-production',
    image: '/images/products/fitted/hh-flexo-plate-making-machine.webp',
    features: [
      'All-in-one exposure, washing, drying and debonding functions',
      'Diffuse reflection ultraviolet exhaust vacuum film',
      'Specialized UVC light source for plate stickness removal'
    ],
    specifications: {}
  },
  {
    id: 'pre-exposure-stickness',
    slug: 'exposure-stickness-removal-machine',
    name: 'Exposure & Stickness Removal Machine',
    category: 'pre-production',
    image: '/images/products/fitted/exposure-stickness-removal-machine.webp',
    features: [
      'Stainless steel shell structure',
      'Philips lamps with UVC stickness removal',
      'Unique electrical separation to avoid ozone corrosion'
    ],
    specifications: {}
  },
  {
    id: 'pre-plate-washing',
    slug: 'plate-washing-machine',
    name: 'Plate Washing Machine',
    category: 'pre-production',
    image: '/images/products/fitted/plate-cleaning-machine.webp',
    features: [
      'Automatic two-stage cleaning',
      'Circulating liquid filtration',
      'Stainless steel casing'
    ],
    specifications: {}
  },
  {
    id: 'pre-dbqx-350',
    slug: 'dbqx-350-ultrasonic-cleaning-machine',
    name: 'Ultrasonic Anilox Roller Cleaning Machine',
    category: 'pre-production',
    image: '/images/products/fitted/dbqx-350-ultrasonic-cleaning-machine.png',
    features: [
      'Ultrasonic cleaning system specifically engineered for precision ceramic and chrome anilox rollers',
      'Deep micro-cavitation effectively purges dried UV, water-based, and solvent inks without damaging cell walls',
      'Automatic synchronized motorized roller rotation mechanism during immersion cycle',
      'Industrial SUS304 stainless steel fluid tank with thermostatic heating control',
      'Digital frequency sweep generator for uniform cleaning intensity across the entire roller width'
    ],
    specifications: {}
  },

  // ==========================================
  // FLEXOGRAPHIC PRINTING PRESSES
  // ==========================================
  {
    id: 'flexo-unit-2-14c',
    slug: 'narrow-web-flexo-printing-machine-2-14-colors',
    name: 'narrow web Flexo Printing Machine 2-14 Colors',
    category: 'flexographic-printing',
    image: '/images/products/fitted/narrow-web-flexo-printing-machine-2-14-colors-v2.png',
    features: [
      'The Narroweb Flexo Printing Machine 2-14-Colors is an advanced fully-servo flexographic press engineered for high-speed multi-color printing on film, paper, and IML packaging substrates.',
      'All-servo motor direct drive eliminates mechanical gear backlash for perfect dot registration.',
      'Modular configuration with 2 to 14 color stations tailored to demanding industrial workflows.',
      'Equipped with corona treater, chill drums, and UV curing on each print unit.',
      'Specialized web guide and edge position control for thin IML and shrink film substrates.'
    ],
    specifications: {
      'Max web width': '320-800 mm',
      'Max printing width': '320-800 mm',
      'Color quantity': '2-14 colors',
      'Printing speed': '50 - 120 m/min',
      'Drive': 'All-servo motor drive'
    }
  },
  {
    id: 'flexo-paper-cup-4c',
    slug: 'flexographic-printing-machine-for-paper-cups-4-colors',
    name: 'Flexographic Printing Machine for Paper Cups 4-Colors',
    category: 'flexographic-printing',
    image: '/images/products/fitted/paper-cups-flexo-printing-4c.webp',
    features: [
      'Ideal for paper cup fan blanks and container carton printing',
      'Heavy-duty automatic hydraulic roll lifting device',
      'Integrated corona treatment system for enhanced ink adhesion'
    ],
    specifications: {}
  },
  {
    id: 'flexo-punching-4c',
    slug: 'paper-flexo-printing-machine-with-punching-inline-4-colors',
    name: 'Paper Flexo Printing Machine with Punching Inline 4-Colors',
    category: 'flexographic-printing',
    image: '/images/products/fitted/paper-flexo-printing-machine-punching-inline-4-colors.webp',
    features: [
      'Inline roll unwinding, 4-color flexo printing and die punching',
      'Heavy-duty eccentric punching unit with automatic waste matrix strip',
      'Touchscreen PLC with photoelectric registration and batch stacker conveyor'
    ],
    specifications: {}
  },
  {
    id: 'flexo-servo-9c',
    slug: 'multi-functional-full-servo-flexo-printing-machine-9-colors',
    name: 'Multi-functional Full Servo Flexo Printing Machine 9-Colors',
    category: 'flexographic-printing',
    image: '/images/products/fitted/multi-functional-full-servo-flexo-printing-machine.webp',
    features: [
      '9-color multi-functional all-servo motor motion control system',
      'Color mark register sensor for ultra-high accuracy printing',
      'Integrated intermittent semi-rotary and continuous rotary die cutting'
    ],
    specifications: {}
  },
  {
    id: 'flexo-sheet-cutting-4c',
    slug: 'paper-flexo-printing-machine-with-sheet-cutting-inline-4-colors',
    name: 'Paper Flexo Printing Machine with Sheet Cutting Inline 4-Colors',
    category: 'flexographic-printing',
    image: '/images/products/fitted/paper-flexo-printing-machine-sheet-cutting-inline-4-colors.webp',
    features: [
      'Synchronized 4-color flexo printing and inline rotary sheet cross-cutting',
      'Computerized touch-screen length control with micro-step precision',
      'Automatic shingling delivery table for neat sheet collection'
    ],
    specifications: {}
  },
  {
    id: 'flexo-uv-6c',
    slug: 'uv-flexo-printing-machine-6-colors',
    name: 'UV Flexo Printing Machine 6-Colors',
    category: 'flexographic-printing',
    image: '/images/products/fitted/uv-flexo-printing-6c.webp',
    features: [
      'Full UV curing stations on each color station for instant ink curing',
      '6-color vertical printing tower for compact narrow-web converting',
      'High-accuracy ceramic anilox rollers with precision doctor blades'
    ],
    specifications: {}
  },
  {
    id: 'flexo-uv-5c',
    slug: 'uv-flexo-printing-machine-5-colors',
    name: 'UV Flexo Printing Machine 5-Colors',
    category: 'flexographic-printing',
    image: '/images/products/fitted/uv-flexo-printing-5c.webp',
    features: [
      '5-color high-productivity flexographic press with UV drying',
      'Inline lamination, cold foil stamping, and rotary die-cutting',
      'Electronic tension control with automatic meter counter'
    ],
    specifications: {}
  },
  {
    id: 'flexo-uv-4c',
    slug: 'uv-flexo-printing-machine-4-colors',
    name: 'UV Flexo Printing Machine 4-Colors',
    category: 'flexographic-printing',
    image: '/images/products/fitted/uv-flexo-printing-4c.webp',
    features: [
      '4-color flexo printing system for self-adhesive labels and tags',
      'Independent UV lamps with electronic stepless power adjustment',
      'Precision helical gears for smooth, quiet, vibration-free printing'
    ],
    specifications: {}
  },
  {
    id: 'flexo-uv-2c',
    slug: 'uv-flexo-printing-machine-2-colors',
    name: 'UV Flexo Printing Machine 2-Colors',
    category: 'flexographic-printing',
    image: '/images/products/fitted/uv-flexo-printing-2c.webp',
    features: [
      'Economical 2-color flexographic printing press',
      'Ideal for two-color barcode, logo, and trademark label production',
      'Integrated rotary die-cutting and slitting rewinding station'
    ],
    specifications: {}
  },
  {
    id: 'flexo-uv-1c',
    slug: 'uv-flexo-printing-machine-1-colors',
    name: 'UV Flexo Printing Machine 1-Colors',
    category: 'flexographic-printing',
    image: '/images/products/fitted/uv-flexo-printing-1c.webp',
    features: [
      'Single-color flexographic coating and cold stamping press',
      'Full varnish and UV protective top-coating application',
      'Compact footprint with easy operation and rapid plate changeovers'
    ],
    specifications: {}
  },

  // ==========================================
  // POST-PRODUCTION & CONVERTING MACHINERY
  // (Includes moved Pre-Production, moved Production,
  //  existing Post-Production, and new DABA models)
  // ==========================================

  // --- DABA Machinery Additions ---
  {
    id: 'post-dbfq-370h',
    slug: 'dbfq-370h-slitting-rewinding-machine',
    name: 'High Speed Slitting Rewinding Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/dbfq-370h-slitting-rewinding-machine-v2.png',
    features: [
      'High-speed narrow-web label slitting up to 350 m/min',
      'Full servo motor driven system with dynamic taper tension control',
      'High quality digital web guide system (EPC) with ultrasonic/optical sensor',
      'Dual-spindle turret type rewinding system for maximum throughput',
      'Supports interchangeable circular knife and razor blade slitting units'
    ],
    specifications: {}
  },
  {
    id: 'post-dbmq-f320h',
    slug: 'dbmq-f320h-flatbed-die-cutting-slitting-machine',
    name: 'High Speed Flatbed Die Cutting Slitting Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/dbmq-f320h-flatbed-die-cutting-slitting-machine-v2.png',
    features: [
      'Flatbed die cutting with high precision and speed up to 400 times/min (140 m/min)',
      'Precision servo-motor paper feeding with digital web guiding',
      'All-in-one laminating, die cutting, waste rewinding, and slitting in one pass',
      'Ideal auxiliary converting unit for self-adhesive labels, dacron film labels, and holographic anti-counterfeiting labels',
      'High registration accuracy with chromatography precision of ±0.01 mm'
    ],
    specifications: {}
  },
  {
    id: 'post-dbiml-370',
    slug: 'dbiml-370-semi-rotary-iml-die-cutting-machine',
    name: 'Semi-rotary IML Die Cutting Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/dbiml-370-semi-rotary-iml-die-cutting-machine-v2.png',
    features: [
      'Dual mode: Full-rotary and intermittent semi-rotary die cutting operation',
      'Designed specifically for In-Mold Labels (IML), synthetic films, and self-adhesive labels',
      'Running speed up to 120 m/min in full rotary mode and 60 m/min in intermittent mode',
      'Color optical mark sensor positioning for ultra-high kiss-cut accuracy (±0.10 mm)',
      'Large 800 mm unwinding and rewinding capacity with constant tension control'
    ],
    specifications: {}
  },
  {
    id: 'post-dbpj-450',
    slug: 'dbpj-450-automatic-label-inspecting-slitting-machine',
    name: 'Automatic Label Inspecting And Slitting Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/dbpj-450-automatic-label-inspecting-slitting-machine.png',
    features: [
      'Advanced optical inspection system detecting printing defects, bubbles, scratches, and missing foil',
      'Specifically engineered for pharmaceutical, food, chemical, and electrical labels',
      'High inspecting speed up to 180 m/min and slitting speed up to 350 m/min',
      'Turret type upper rewinding system with 4-servo motor motion control',
      '6 sets circular/razor slitting cutters with automatic defect-stop and rewind positioning'
    ],
    specifications: {}
  },

  // --- Moved from Pre-Production Section ---
  {
    id: 'post-hmq560yc',
    slug: 'hmq-560yc-iml-label-rotary-die-cutting-machine',
    name: 'Double Stations IML Label Rotary Die Cutting Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/hmq-560yc-iml-die-cutting.webp',
    features: ['High-speed precision label production', 'Specifically suited for In-Mold Label (IML) applications', 'Double rotary die-cutting station with conveyor & stacking unit'],
    specifications: {}
  },
  {
    id: 'post-hmq320pa',
    slug: 'hmq-320pa-trademark-die-cutting-machine',
    name: 'Trademark Die-cutting Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/hmq-320pa-trademark-die-cutting.webp',
    features: ['Precision trademark flatbed die cutting', 'Adhesive products, rubber, and insulation material converting', 'Servo motor feeding with touch screen control'],
    specifications: {}
  },
  {
    id: 'post-hmq320ps',
    slug: 'hmq-320ps-double-stations-flatbed-die-cutting-machine',
    name: 'Double Stations Flatbed Die Cutting Machine for Adhesive Trademark',
    category: 'finishing-processes',
    image: '/images/products/fitted/hmq-320ps-flatbed-die-cutting.webp',
    features: ['Double-station flatbed die-cutting structure', 'Precision stroke adjustment with laminating station', 'Independent tension control and high-speed operation'],
    specifications: {}
  },
  {
    id: 'post-hfq320ap',
    slug: 'hfq-320ap-label-slitting-rewinding-machine',
    name: 'Label slitting rewinding machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/hfq-320ap-label-slitting-rewinding.webp',
    features: ['Automatic roll-to-roll slitting and rewinding for label materials', 'High precision rotary slitting knives', 'Photoelectric web guide with automatic meter counting'],
    specifications: {}
  },
  {
    id: 'post-hmq320yc',
    slug: 'hmq-320yc-double-position-cutter',
    name: 'Double Position Cutter with double rotary feeding, rectifying device, double die-cutting station and slitting device',
    category: 'finishing-processes',
    image: '/images/products/fitted/double-position-cutter-hmq320yc.webp',
    features: ['Double rotary feeding system', 'Automatic rectifying web guide device', 'Double die-cutting station and integrated slitting device'],
    specifications: {}
  },
  {
    id: 'post-hmq320yw',
    slug: 'hmq-320yw-tyvek-wristband-die-cutting-machine',
    name: 'Tyvek wristband die cutting machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/hmq-320yw-tyvek-wristband-die-cutting.webp',
    features: ['Specialized for cutting high-density polyethylene fiber (Tyvek) wristbands', 'Integrated hot-melt glue system and web guide', 'Rotary die-cutting station with precise waste rewinding'],
    specifications: {}
  },
  {
    id: 'post-hmq350ja',
    slug: 'hmq-350ja-semi-rotary-die-punching',
    name: 'Full servo intermittent die cutting machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/full-servo-intermittent-die-cutting-hmq350ja.webp',
    features: ['Full servo motor motion control', 'High precision register sensor for pre-printed labels', 'Intermittent and rotary die cutting modes'],
    specifications: {}
  },
  {
    id: 'post-hmq350pg',
    slug: 'hmq-350pg-high-speed-die-cutting-machine',
    name: 'High speed Die cutting machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/hmq-350pg-high-speed-die-cutting.webp',
    features: ['High speed automated die-cutting operation', 'Heavy-duty machine frame with smooth vibration-free motion', 'Computerized length control and auto tension system'],
    specifications: {}
  },
  {
    id: 'post-ac1300',
    slug: 'ac-1300-core-cutting',
    name: 'Paper core cutting machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/ac-1300-core-cutting.webp',
    features: ['Automatic loading, cutting and unloading system', 'Servo positioning system with automatic tube counting', 'Single-knife precision tube cutting without burrs'],
    specifications: {}
  },
  {
    id: 'post-hfq320',
    slug: 'hfq-320-simple-slitter-machine',
    name: 'Simple Slitter Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/hfq-320-rotary-slitter.webp',
    features: ['Two-axis rotary slitting and rewinding mechanism', 'Independent stepless speed control with automatic meter counter', 'Compact footprint ideal for narrow-web slit coils'],
    specifications: {}
  },
  {
    id: 'post-hh500',
    slug: 'hh-500-core-cutting',
    name: 'Paper Core Cutting Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/paper-core-cutting-machine-hh500.webp',
    features: ['Compact manual paper core cutting machine', 'Adjustable core length and rotary slicing knife', 'Stable manual feed with precise tube clamping'],
    specifications: {}
  },

  // --- Moved from Production Machines Section ---
  {
    id: 'prod-hcq850a',
    slug: 'high-speed-punching-machine-for-paper-cup',
    name: 'High Speed Punching Machine for Paper Cup',
    category: 'finishing-processes',
    image: '/images/products/fitted/high-speed-punching-machine-for-paper-cup.webp',
    features: ['Fully automatic roll feeding, optoelectronic tracking and punching', 'High operating speed up to 350 strokes per minute', 'Microcomputer control with automatic counting and batch stacking'],
    specifications: {}
  },
  {
    id: 'prod-hry320m',
    slug: 'multi-station-press',
    name: 'Multi Station Press',
    category: 'finishing-processes',
    image: '/images/products/fitted/multi-station-press.webp',
    features: ['Multi-station inline printing, die-cutting, labeling and UV curing', 'Two-color high-precision registration with all-servo drive', 'Integrated waste discharge and synchronized finished product stacking'],
    specifications: {}
  },
  {
    id: 'prod-hmq350je',
    slug: 'full-servo-rotary-die-cutting-machine-with-slitting-and-turret-rewinding',
    name: 'Full Servo Rotary Die Cutting Machine with Slitting and Turret Rewinding',
    category: 'finishing-processes',
    image: '/images/products/fitted/hmq-350je-semi-rotary.webp',
    features: ['Full servo motion control system with high-speed color mark sensor', 'Dual-spindle turret rewinding unit for non-stop roll exchange', 'Rotary shear slitting and high-precision die-cutting in a single pass'],
    specifications: {}
  },
  {
    id: 'prod-fq900',
    slug: 'fax-paper-cashier-paper-cutting-machine',
    name: 'Fax Paper and Cashier Paper Cutting Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/fq-900-fax-paper-cutting.webp',
    features: ['Automated high-speed slitting and rewinding for cashier and fax paper rolls', 'Automatic end-line red warning marker and precise meter counter', 'Pneumatic tension control with air expanding shafts for smooth roll edges'],
    specifications: {}
  },
  {
    id: 'prod-hfq1200',
    slug: 'wide-slitting-machine',
    name: 'Wide Slitting Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/hfq-1200-wide-slitting-machine.webp',
    features: ['Wide-web precision slitting for paper, film and composite materials up to 1200 mm', 'Dual expanding rewind shafts with independent friction tension control', 'Photoelectric EPC web guide with automatic edge alignment'],
    specifications: {}
  },
  {
    id: 'prod-hh320',
    slug: 'platform-type-rewinder-machine',
    name: 'Platform Type Rewinder Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/hh-320-platform-rewinder.webp',
    features: ['Ergonomic horizontal inspection table for visual defect monitoring', 'Stepless electronic speed regulation with bi-directional winding', 'Synchronized electronic meter counter and foot switch control'],
    specifications: {}
  },
  {
    id: 'prod-mq350',
    slug: 'mq-series-digital-die-cutting-machine',
    name: 'MQ Series Digital Die Cutting Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/mq-series-digital-die-cutting.webp',
    features: ['Multi-blade digital flatbed die cutting without physical die tooling', 'High-speed CCD optical camera registration and automatic roll feeding', 'Integrated circular knife rotary slitting and waste rewinding'],
    specifications: {}
  },

  // --- Existing Post-Production Systems ---
  {
    id: 'post-fj450ab',
    slug: 'gw-fj-450a-450b-rewinding-machine',
    name: 'FJ Series Rewinding Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/gw-fj-450ab-rewinding-machine.webp',
    features: ['Digital speed governor with stepless control', 'Automatic meter sensing stop', 'Inflatable reel shafts with magnetic powder tension'],
    specifications: {}
  },
  {
    id: 'post2',
    slug: 'gw-fj-450e-slitter-rewinder-inkjet',
    name: 'Rewinding Machine with Web Guide & Inkjet Coding',
    category: 'finishing-processes',
    image: '/images/products/fitted/slitter-rewinder-inkjet.webp',
    features: ['Inkjet coding', 'Web Guide', 'Precise positioning PLC touch screen control'],
    specifications: {}
  },
  {
    id: 'post-fj400c',
    slug: 'gw-fj-400c-automatic-rewinding-machine',
    name: 'Automatic Rewinding Machine with Web Guide',
    category: 'finishing-processes',
    image: '/images/products/fitted/gw-fj-400c-automatic-rewinding.webp',
    features: ['DC web guide correction control', 'Ultrasonic sensor for transparent/opaque materials', 'Magnetic powder brake tension control'],
    specifications: {}
  },
  {
    id: 'post1',
    slug: 'gw-fj-230s-slitter-rewinder-label-inspection',
    name: 'Desktop Platform Winding Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/gw-fj-230s-label-inspection.webp',
    features: ['Table top design', 'Visual inspection system via meter counting function', 'Automatic tension adjustment'],
    specifications: {}
  },
  {
    id: 'post-anilox-washing',
    slug: 'anilox-roller-washing-machine',
    name: 'Anilox Roller Washing Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/anilox-cleaning-machine.webp',
    features: ['Ultrasonic cleaning', 'Heating and constant temperature system', 'Suspension type design'],
    specifications: {}
  },
  {
    id: 'post-double-sink-ultrasonic',
    slug: 'double-sink-ultrasonic-cleaning-machine',
    name: 'Double-Sink Ultrasonic Anilox Roller Cleaning Machine',
    category: 'finishing-processes',
    image: '/images/products/fitted/double-sink-ultrasonic-cleaning-machine.webp',
    features: ['AIS304 casing & AIS316 double sinks', '40KHz high-power ultrasonic cleaning', 'Heating constant-temperature system with tap water circulation'],
    specifications: {}
  },

  // ==========================================
  // ACCESSORIES & CONSUMABLES (SPARE ZONE & PRESSROOM)
  // ==========================================
  {
    id: 'cons-tapes-adhesives',
    slug: 'cushion-adhesive-mounting-tapes-and-adhesives',
    name: 'Cushion Adhesive Mounting Tapes & Adhesives (BS MOUNT)',
    category: 'accessories-consumables',
    image: '/images/products/fitted/cushion-mounting-tapes-adhesives-v2.png',
    features: [
      'High resilience BiesSse foam carriers engineered for demanding high-speed flexographic printing',
      'Available across 8 adhesive combinations, 2 thickness ranges, and 10 color-coded compressibilities',
      'Full HD Flexo certified delivering exceptional dot gain control and solid ink density',
      'High performance embossed liner prevents air bubble entrapment during plate mounting',
      'Easy repositioning with clean, residue-free demounting from sleeves and cylinders'
    ],
    specifications: {
      'Product Range': 'BiesSse BS MOUNT Cushion Adhesive Tapes',
      'Applications': 'Label printing, flexible packaging, pre-print corrugated',
      'Compressibilities': '10 color-coded foam density levels',
      'Adhesive Systems': 'Plate-side & cylinder-side differential acrylic adhesives',
      'Certification': 'Esko Full HD Flexo Certified'
    }
  },
  {
    id: 'cons-lint-free-wipes',
    slug: 'lint-free-cleanroom-wipes',
    name: 'Lint-Free Cleanroom Wipes',
    category: 'accessories-consumables',
    image: '/images/products/fitted/lint-free-wipes.jpg',
    features: [
      'Ultra-low particle and lint generation for critical prepress and pressroom cleaning',
      'Superior resistance to aggressive cleaning solvents, UV plate washes, and alcohols',
      'High absorbency and non-abrasive soft texture safeguarding delicate ceramic anilox cells and photopolymer plates',
      'Continuous filament non-shedding structure prevents fiber contamination on printing plates',
      'Compatible with ISO Class 5-7 (Class 100) cleanroom and industrial packaging standards'
    ],
    specifications: {
      'Material': 'Continuous filament non-woven cleanroom polymer blend',
      'Lint Level': 'Ultra-low particulate generation (Class 100 compatible)',
      'Solvent Compatibility': 'UV plate washes, isopropyl alcohol (IPA), ethyl acetate, water-based cleaners',
      'Standard Sizes': '9" x 9" (23 x 23 cm) and 12" x 12" (30 x 30 cm)',
      'Packaging': 'Double-bagged vacuum cleanroom packaging'
    }
  },
  {
    id: 'cons-polyester-wipes',
    slug: 'polyester-cleanroom-wipes',
    name: 'Polyester Cleanroom Wipes',
    category: 'accessories-consumables',
    image: '/images/products/fitted/polyester-wipes.jpg',
    features: [
      '100% continuous filament high-tenacity polyester double-knit construction',
      'Ultrasonically sealed or laser-sealed border edges eliminate edge abrasion and loose fibers',
      'Maximum chemical compatibility with doctor blade chamber cleaners, solvents, and adhesives',
      'High liquid absorption capacity with rapid wicking rate wet or dry',
      'Streak-free drying ideal for optical cameras, glass mounters, and ceramic surfaces'
    ],
    specifications: {
      'Material': '100% Virgin continuous filament polyester double-knit',
      'Edge Seal': 'Ultrasonic / Laser sealed border edge',
      'Basis Weight': '115 - 140 g/m²',
      'Chemical Resistance': 'Strong acids, alkalis, press washes, and organic solvents',
      'Applications': 'Anilox rollers, doctor blade chambers, optical lenses, flexo plates'
    }
  }
];

export const products: Product[] = baseProducts.map((product) => ({
  ...product,
  ...brochureProductDetails[product.slug],
}));

export function getProductsByCategory(category: ProductCategory | string): Product[] {
  return products.filter((p) => {
    if (p.category === category || p.secondaryCategory === category) {
      return true;
    }
    // Backward compatibility for finishing-processes, post-production, production, and post-press
    if (
      (category === 'finishing-processes' ||
        category === 'post-production-machines' ||
        category === 'post-production' ||
        category === 'production-machines' ||
        category === 'production' ||
        category === 'post-press-finishing-machines' ||
        category === 'post-press') &&
      (p.category === 'finishing-processes' || p.category === 'post-press' || p.category === 'production')
    ) {
      return true;
    }
    // Pre-production machines
    if (
      (category === 'pre-production' || category === 'pre-production-machines') &&
      p.category === 'pre-production'
    ) {
      return true;
    }
    // Flexographic printing presses
    if (
      (category === 'flexographic-printing' || category === 'flexo') &&
      (p.category === 'flexographic-printing' || p.secondaryCategory === 'flexographic-printing')
    ) {
      return true;
    }
    // Accessories & Consumables
    if (
      (category === 'accessories-consumables' || category === 'consumables') &&
      p.category === 'accessories-consumables'
    ) {
      return true;
    }
    return false;
  });
}

export function getProductBySlug(slug: string): Product | undefined {
  const targetSlug = slug === 'unit-type-flexo-printing-machine-6-colors'
    ? 'narrow-web-flexo-printing-machine-2-14-colors'
    : slug;
  return products.find((p) => p.slug === targetSlug || p.slug === slug);
}
