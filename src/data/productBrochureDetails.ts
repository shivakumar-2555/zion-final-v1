import type { Product } from '../types/product';

type BrochureDetails = Pick<
  Product,
  'shortDescription' | 'features' | 'specifications' | 'specificationTables' | 'specificationNote'
>;

export const brochureProductDetails: Record<string, Partial<BrochureDetails>> = {
  'plate-mounting-machine': {
    shortDescription: 'The TBJ Series Plate Mounter uses a rigid wallboard structure, high-definition camera positioning and centralized controls for stable, precise plate mounting.',
    features: [
      'The wallboard rack structure is processed as a high-strength assembly for working stability and durability.',
      'The 650-line color high-definition camera provides up to 70-times amplification, clear images and high resolution.',
      'The plate-roller lifting structure uses gear-motor drive control.',
      'Centralized circuit control provides convenient operation and a high degree of automation.',
      'The 19-inch high-resolution liquid crystal display provides clear, bright images.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'TBJ Series',
      columns: ['Model', 'Roller width', 'Roller perimeter', 'Length', 'Width', 'Height', 'Weight'],
      rows: [
        ['TBJ-320', '320 mm', '800 mm', '920 mm', '600 mm', '1650 mm', '230 kg'],
        ['TBJ-650', '650 mm', '800 mm', '1050 mm', '600 mm', '1650 mm', '270 kg'],
        ['TBJ-1000', '1000 mm', '1200 mm', '1500 mm', '600 mm', '1650 mm', '330 kg'],
        ['TBJ-1200', '1200 mm', '1200 mm', '1700 mm', '600 mm', '1650 mm', '370 kg'],
        ['TBJ-1300', '1300 mm', '1200 mm', '1800 mm', '700 mm', '1650 mm', '420 kg'],
        ['TBJ-1500', '1500 mm', '1200 mm', '2100 mm', '700 mm', '1650 mm', '450 kg'],
        ['TBJ-1800', '1800 mm', '1200 mm', '2400 mm', '700 mm', '1650 mm', '500 kg']
      ]
    }],
    specificationNote: 'Special orders with special sizes are accepted.'
  },
  'plate-washing-machine': {
    shortDescription: 'The XBJ Series provides an automatic two-stage washing and rinsing process for printing plates, followed by a clean, dry and ready-to-use result.',
    features: [
      'The quick and gentle cleaning process is fully automatic and leaves the plates 100% clean and dry within a very short time.',
      'Designed for environmentally friendly cleaning and suitable for all types of ink.',
      'Stainless steel casing provides a durable construction.',
      'Printing plates are placed on the conveyor belt and automatically brought through the cleaning process.',
      'Automatic two-stage cleaning uses cleaning liquid first and a water rinse second.',
      'The liquid system includes circulating filtration.',
      'Specially manufactured soft brushes and cleaning liquid provide efficient, gentle plate cleaning.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'XBJ Series',
      columns: ['Specification', 'XBJ-450', 'XBJ-650', 'XBJ-1050', 'XBJ-1350', 'XBJ-1800'],
      rows: [
        ['Maximum plate length', '450 mm', '650 mm', '1050 mm', '1350 mm', '1800 mm'],
        ['Machine dimension', '2350x1100x1150 mm', '3370x1350x1150 mm', '3370x1500x1150 mm', '3370x1920x1150 mm', '3370x2370x1150 mm'],
        ['Power', '2.7 kW', '3.5 kW', '4.7 kW', '5.5 kW', '6.7 kW'],
        ['Machine weight', '370 kg', '450 kg', '550 kg', '630 kg', '720 kg'],
        ['Voltage', '220 V', '220 V', '220 V', '220 V', '220 V']
      ]
    }]
  },
  'anilox-roller-washing-machine': {
    shortDescription: 'The ZX Series is a compact ultrasonic cleaning system for anilox rollers with selectable frequency, heating and constant-temperature control.',
    features: [
      'Economical and practical cleaning equipment with multiple functions.',
      'Small and easy to operate.',
      'Designed for safe and effective anilox-roller cleaning.',
      'Suspension design with single- or double-frequency configuration.',
      'Equipped with a roller swiveling wheel.',
      'Heating and constant-temperature system.',
      'Improved waterproof construction for durability and safety.',
      'Stainless steel shell.',
      'Cleaning fluid can be prepared with tap water and a small amount of special solvent.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'ZX Series',
      columns: ['Model', 'Vibrators', 'Ultrasonic power', 'Frequency', 'Heating power', 'Washing qty.', 'Roller length', 'Temperature', 'Voltage'],
      rows: [
        ['ZX-320', '16', '960 W', '40 kHz', '1000 W', '2', '0-350 mm', '20-100 C', '220 V'],
        ['ZX-450', '18', '1080 W', '40 kHz', '1000 W', '2', '0-450 mm', '20-100 C', '220 V'],
        ['ZX-650', '24', '1440 W', '40 kHz', '1000 W', '2', '0-660 mm', '20-100 C', '220 V'],
        ['ZX-850', '27', '1620 W', '40 kHz', '2000 W', '2', '0-860 mm', '20-100 C', '220 V'],
        ['ZX-1000', '33', '1980 W', '40 kHz', '2000 W', '2', '0-1030 mm', '20-100 C', '220 V'],
        ['ZX-1200', '39', '2340 W', '40 kHz', '2000 W', '2', '0-1230 mm', '20-100 C', '220 V'],
        ['ZX-1300', '42', '2520 W', '40 kHz', '2000 W', '2', '0-1360 mm', '20-100 C', '220 V'],
        ['ZX-1500', '48', '2880 W', '40 kHz', '3000 W', '2', '0-1560 mm', '20-100 C', '220 V'],
        ['ZX-1800', '60', '3600 W', '40 kHz', '3000 W', '2', '0-1860 mm', '20-100 C', '220 V']
      ]
    }],
    specificationNote: 'Special orders with special sizes are accepted.'
  },
  'hjz-370b-narrow-web-flexo': {
    shortDescription: 'A six-color unit-type flexo press designed for high-speed label and IML label production, with a compact web path and all-servo drive.',
    features: [
      'Designed to produce high-quality labels at high speed with IML label function.',
      'Compact size and short web path reduce material waste.',
      'The complete machine uses servo motors to keep film or paper tension smooth and stable.'
    ],
    specifications: {
      'Model': 'HJZ-370B',
      'Maximum web width': '380 mm',
      'Maximum printing width': '370 mm',
      'Color quantity': '6 colors',
      'Maximum unwind diameter': '700 mm',
      'Maximum rewind diameter': '700 mm',
      'Maximum printing speed': '120 m/min',
      'Printing precision accuracy': '+/-0.1 mm',
      'Rotary die-cutting accuracy': '+/-0.15 mm',
      'Printing length': '228.6-600 mm (72-189Z)',
      'Maximum label die-cutting speed': '100 m/min',
      'Pre-registration': 'Color sensor',
      'Material thickness': '0.02-0.35 mm',
      'Power': '60 kW, 50/60 Hz',
      'Air supply': '0.8 KPA',
      'Machine weight': 'About 8000 kg',
      'Machine dimension': '12500x1450x1500 mm',
      'Material': 'All paper material, aluminum material, some unsupported film'
    }
  },
  'hry-320b-narrow-web-flexo': {
    shortDescription: 'A nine-color multifunctional full-servo flexographic printing machine for adhesive labels, commercial labels, paper cups, aluminum foil and plastic film.',
    features: [
      'Anilox rollers spread the ink.',
      'Unwinding is controlled by a magnetic powder brake; rewinding is controlled by a servo motor with tension set by motion controller and touch screen.',
      'Each vertical printing unit uses a 360-degree servo motor for registration.',
      'Each printing unit has one IR dryer; a UV dryer is optional.',
      'The rubber roller can break away automatically while parking and run at low speed to avoid ink drying.',
      'The whole machine is controlled by servo motor.',
      'Unwinding and rewinding shafts use air shafts for convenient loading and unloading.',
      'Unwinding, printing, varnishing, IR drying, laminating and rewinding can be finished in one process.'
    ],
    specifications: {
      'Model': 'HRY-320B-9C',
      'Maximum printing speed': '100 m/min',
      'Printing color': '9 colors (1+4+4 colors)',
      'Maximum printing width': '320 mm',
      'Maximum web width': '330 mm',
      'Unwind roll diameter': '600 mm',
      'Rewind roll maximum diameter': '600 mm',
      'Printing length': '175-380 mm',
      'Registering accuracy': '+/-0.15 mm',
      'Air press': '0.6 MP',
      'Voltage': '380 V +/-10%',
      'Machine weight': '5000 kg',
      'Machine dimension': '5500x1350x2250 mm'
    }
  },
  'hry-850a-flexo-for-paper-cups': {
    shortDescription: 'A four-color flexographic printing machine with hydraulic lifting, optical web correction and corona treatment for paper-cup applications.',
    features: [
      'Uses an anilox roller to spread ink.',
      'Unwinding and rewinding are controlled by magnetic powder brake and clutch, or by an automatic tension controller.',
      'Each printing unit provides 360-degree registration.',
      'Each printing unit has one IR dryer.',
      'The rubber roller can break away automatically while parking and run at low speed to avoid ink drying.',
      'The main motor uses stepless frequency-conversion speed regulation.',
      'Unwinding, web guiding, printing, IR drying, die cutting, waste removal, rewinding and trimming can be finished in one process.'
    ],
    specifications: {
      'Model': 'HRY-850A',
      'Printing speed': '50-60 m/min',
      'Printing chromatic number': '4 colors',
      'Feed width': '860 mm',
      'Maximum unwinding diameter': '1300 mm',
      'Maximum winding diameter': '1300 mm',
      'Maximum print size': '180-380 mm',
      'Overprint precision': '+/-0.15 mm',
      'Voltage': '380 V +/-10%',
      'Total power': '36 kW',
      'Total pressure': '0.6 MP',
      'Weight': '4500 kg',
      'Outline dimension': '4500x1800x2250 mm'
    }
  },
  'gw-fj-450a-450b-rewinding-machine': {
    shortDescription: 'FJ Series Rewinding Machine. The source shows GW-FJ-450A and GW-FJ-450B variants and describes rewinding/unwinding with digital speed control, meter sensing and adjustable magnetic-powder tension.',
    features: [
      'Adopt brand motor/reducer, digital display governor, and stepless speed regulation to ensure stable operation.',
      'Using the meter sensor, the preset meter count automatically stops the machine upon reaching the target.',
      'Rewinding and unwinding reels adopt inflatable air shafts with adjustable magnetic-powder tension.',
      'Rotate the adjustment switch clockwise to slowly increase from low speed to desired working speed.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'GW-FJ-450 Series',
      columns: ['Specification', 'GW-FJ-450A', 'GW-FJ-450B'],
      rows: [
        ['Maximum take-up/unwind diameter', '450 mm', '450 mm'],
        ['Speed', '10-40 m/min', '10-40 m/min'],
        ['Weight capacity', '20 kg', '30 kg'],
        ['Power', '120 W', '200 W'],
        ['Rewind/unwind reel diameter', '3 in', '3 in'],
        ['Rewind/unwind reel height', '300 mm', '300 mm'],
        ['Power supply', '220 V', '220 V'],
        ['Weight', '60 kg', '60 kg'],
        ['Mechanical dimensions', '640x450x680 mm', '640x550x680 mm']
      ]
    }]
  },
  'gw-fj-450e-slitter-rewinder-inkjet': {
    shortDescription: 'Rewinding Machine with Web Guide and Inkjet Coding. The source identifies precise PLC touch-screen control and a compact, flexible machine configuration.',
    features: [
      'Equipped with precise positioning PLC touch screen control and full touch screen operation.',
      'Functions and configurations can be selected and adapted according to operating requirements.',
      'Integrated automatic web guide system ensures edge alignment during continuous winding.',
      'High work efficiency, small size, and flexible electric machine arrangement.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'GW-FJ-450E Series',
      columns: ['Specification', 'GW-FJ-450E', 'GW-FJ-450ES'],
      rows: [
        ['Maximum take-up/unwind diameter', '450 mm', '450 mm'],
        ['Speed', '10-40 m/min', '10-40 m/min'],
        ['Weight capacity', '30 kg', '30 kg'],
        ['Power', '200 W', '200 W'],
        ['Rewind/unwind reel diameter', '3 in', '3 in'],
        ['Rewind/unwind reel height', '300 mm', '300 mm'],
        ['Power supply', '220 V', '220 V'],
        ['Weight', '60 kg', '60 kg'],
        ['Mechanical dimensions', '640x550x680 mm', '640x550x680 mm']
      ]
    }]
  },
  'gw-fj-400c-automatic-rewinding-machine': {
    shortDescription: 'Automatic Rewinding Machine with Web Guide, as identified in the source brochure. Equipped with DC edge correction control, ultrasonic edge sensing, and magnetic powder brake.',
    features: [
      'Adopting the DC correction control system, the machine runs smoothly, quietly and durable.',
      'Ultrasonic sensors are used to sense both transparent and opaque substrate materials.',
      'Using magnetic powder brake, it is convenient to control the unwinding tension and tightness of material.',
      'The machine will automatically stop and trigger an alarm when rectified to limit position or unattended.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'GW-FJ-400C',
      columns: ['Specification', 'GW-FJ-400C'],
      rows: [
        ['Maximum paper width', '400 mm'],
        ['Rewinding/unwinding diameter', '650 mm'],
        ['Weight capacity', '50 kg'],
        ['Diameter of air shaft', '3 in'],
        ['Power supply', '220 V, 1 kW'],
        ['Tension range', '0-25 N'],
        ['Net weight', '280 kg'],
        ['Mechanical dimensions', '1000x1150x1200 mm']
      ]
    }]
  },
  'gw-fj-230s-slitter-rewinder-label-inspection': {
    shortDescription: 'Desktop Platform Winding Machine, as identified in the source brochure. Features dynamic tension regulation, PLC meter counting, and a visual defect inspection workstation.',
    features: [
      'The tension system automatically adjusts parameters to match the tension required by the actual substrate.',
      'The machine PLC system features a meter counting function for visual inspection and defective product shutdown.',
      'Touch screen supports preset meter output settings and stops automatically at the set meter target.',
      'Maximum rewinding speed of 120 m/min with defect shutdown accuracy within +/-50 mm.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'GW-FJ-230S',
      columns: ['Specification', 'GW-FJ-230S'],
      rows: [
        ['Coil width range', '20-230 mm'],
        ['Maximum unwinding/winding diameter', '400 mm'],
        ['Maximum detection speed', '60 m/min (Rewinding: 120 m/min)'],
        ['Air shaft size', '3 in (Standard 76 mm)'],
        ['Defect shutdown accuracy', '+/-50 mm'],
        ['Winding end-surface uniformity', '+/-0.2 mm'],
        ['Tension range', '10-100 N (Unwind +/-5 N, Rewind +/-3 N)'],
        ['Weight', '300 kg'],
        ['Mechanical dimensions', '1250x1200x1200 mm']
      ]
    }]
  },
  'hmq-350je-semi-rotary-die-punching': {
    shortDescription: 'A full-servo semi-rotary die-cutting machine with slitting and turret rewinding for pre-printed labels.',
    features: [
      'Servo motor motion-control system and register sensor for high-accuracy rotary die cutting.',
      'Applied to pre-printed labels.',
      'Unwinding, rotary die cutting, slitting and rewinding can be finished in one process.',
      'Runs in semi-rotary mode as well as full-rotary mode.',
      'Magnetic cylinders can be used for different labels in semi-rotary trimming because the machine can run backward.',
      'Only the flexible die needs to be changed.',
      'Web guiding supports smooth material feeding.',
      'Compact structure, fast speed, high efficiency, easy operation, accurate slitting and steady running.'
    ],
    specifications: {
      'Model': 'HMQ-350JE',
      'Maximum web width': '350 mm',
      'Maximum unwinding diameter': '600 mm',
      'Maximum rewinding diameter': '600 mm',
      'Die-cutting speed (semi-rotary)': '50 m/min',
      'Die-cutting speed (rotary)': '120 m/min',
      'Maximum slitting speed': '120 m/min',
      'Die-cutting length (semi-rotary)': '476 mm (150T)',
      'Die-cutting length (full rotary)': '570 mm (180T)',
      'Die-cutting positioning': 'Color sensor',
      'Standard magnetic cylinder': '150T (476 mm)',
      'Slitting device': '12-350 mm',
      'Voltage': '380 V + N + PE',
      'Machine dimension': '2200x1300x1500 mm',
      'Machine weight': '1600 kg'
    }
  },
  'hmq-350ja-semi-rotary-die-punching': {
    shortDescription: 'A full-servo intermittent die-cutting machine for pre-printed labels, supporting semi-rotary and full-rotary operation.',
    features: [
      'Servo motor motion-control system and register sensor for high-accuracy rotary die cutting.',
      'Applied to pre-printed labels.',
      'Unwinding, rotary die cutting, slitting and rewinding can be finished in one process.',
      'Runs in semi-rotary mode as well as full-rotary mode.',
      'Magnetic cylinders can be used for different labels in semi-rotary trimming because the machine can run backward.',
      'Only the flexible die needs to be changed.',
      'Web guiding supports smooth material feeding.',
      'Compact structure, fast speed, high efficiency, easy operation, accurate slitting and steady running.'
    ],
    specifications: {
      'Model': 'HMQ-350JA',
      'Maximum web width': '350 mm',
      'Maximum unwinding diameter': '600 mm',
      'Maximum rewinding diameter': '600 mm',
      'Die-cutting speed (semi-rotary)': '50 m/min',
      'Die-cutting speed (rotary)': '120 m/min',
      'Maximum slitting speed': '120 m/min',
      'Die-cutting length (semi-rotary)': '476 mm (150T)',
      'Die-cutting length (full rotary)': '570 mm (180T)',
      'Die-cutting positioning': 'Color sensor',
      'Standard magnetic cylinder': '150T (476 mm)',
      'Slitting device': '12-350 mm',
      'Voltage': '380 V + N + PE',
      'Machine dimension': '2200x1300x1500 mm',
      'Machine weight': '1600 kg'
    }

  },
  'ac-1300-core-cutting': {
    shortDescription: 'A servo-positioned paper-core cutting machine for batch production of short-length paper tubes.',
    features: [
      'Suitable for large-quantity, short-length paper-tube cutting.',
      'Intelligent, efficient and stable with a streamlined structure and low maintenance cost.',
      'Servo positioning, automatic tube-cutting count and automatic shutdown.',
      'Large-capacity silo with cylinder-assisted loading and unloading and automatic tube withdrawal.',
      'CNC single-knife precision cutting with arbitrary specification setting.',
      'Smooth, flat paper-tube end surface without burrs.',
      'Suitable for textile, stationery, daily-hygiene, fireworks, plastics, printing and packaging applications.'
    ],
    specifications: {
      'Model': 'AC-1300',
      'Maximum tube length': '1300 mm',
      'Cutting width': '10-120 mm',
      'Minimum cutting width': '10 mm',
      'Paper-core inner diameter': '25-76 mm',
      'Paper-core thickness': '2-10 mm',
      'Cutting method': 'Paper tube rotates',
      'Movable bar': 'Ball',
      'Knife quantity': '1',
      'Cutting blade': 'Tungsten steel alloy',
      'Motor': '3.2 kW',
      'Speed adjustment': 'Servo motor',
      'Operator': '1',
      'Power supply': '220 V, 1P, 50 Hz',
      'Weight': '600 kg',
      'Packing dimensions': '2100x850x1500 mm; 1800x1400x1100 mm'
    }
  },
  'hh-500-core-cutting': {
    shortDescription: 'A compact paper-core cutting machine with manual material handling and paper-tube rotation during cutting.',
    features: [
      'Paper-tube rotation cutting method.',
      'Manual up-and-down material method.'
    ],
    specifications: {
      'Model': 'HH-500',
      'Paper-tube diameter': '50-200 mm',
      'Paper-tube thickness': '1-20 mm',
      'Knife quantity': '1',
      'Cutting method': 'Paper tube rotation',
      'Weight': '300 kg',
      'Total power': '1 kW',
      'Material handling': 'Manual',
      'Outline dimension': '1200x500x800 mm'
    }
  },
  'ceramic-anilox-rollers': {
    shortDescription: 'High-precision laser-engraved ceramic anilox rollers engineered for uniform ink metering, long service life, and exceptional print density.',
    features: [
      'High-density, low-porosity plasma-sprayed ceramic coating for maximum wear resistance.',
      'Precision multi-hit laser engraving producing optimal cell geometry (60° hex, tri-helical, elongated).',
      'Consistent ink release across high line screens up to 1400 LPI.',
      'Corrosion-resistant sub-layer preventing cell wall erosion and doctor blade damage.',
      'Custom cell volumes (BCM) tailored to water-based, solvent, and UV ink applications.'
    ],
    specifications: {
      'Screen Count': '80 - 1400 LPI',
      'Cell Volume Range': '1.5 - 25.0 BCM/in²',
      'Engraving Angle': '60° Hexagonal, 45°, 30°, or Channelless Tri-Helical',
      'Ceramic Hardness': '1200 - 1400 HV0.3'
    },
    specificationTables: [{
      title: 'Standard Specifications',
      columns: ['Specification', 'Value / Options'],
      rows: [
        ['Base Material', 'High-strength steel or lightweight aluminum tube'],
        ['Surface Coating', 'Micro-porous chromium oxide ceramic (Cr₂O₃ > 99%)'],
        ['Total Indicated Runout (TIR)', '< 0.010 mm (< 0.0004 in)'],
        ['Concentricity', '< 0.012 mm']
      ]
    }],
    specificationNote: 'Custom diameters, face lengths, and journal configurations manufactured according to press specifications.'
  },
  'precision-doctor-blades': {
    shortDescription: 'High-grade carbon and coated steel doctor blades designed for clean wiping, reduced cylinder wear, and elimination of ink spitting.',
    features: [
      'Specialized microstructure steel with high tensile strength and micro-uniform blade edge.',
      'Available with lamella, bevel, or rounded edge profiles for instantaneous run-in.',
      'Optional ceramic and polymer surface coatings for extended life in abrasive ink environments.',
      'Eliminates streaking, bleeding, and doctor blade vibration at high press speeds.'
    ],
    specifications: {
      'Material Grades': 'Carbon Steel, Stainless Steel, Ceramic Coated, Long-Life Alloy',
      'Edge Profiles': 'Lamella (0.075-0.125mm), Bevel (1-5°), Rounded Smooth',
      'Thickness Range': '0.15 mm - 0.30 mm',
      'Width Range': '10.0 mm - 60.0 mm'
    }
  },
  'flexo-printing-inks': {
    shortDescription: 'High-performance flexographic inks, coatings, and varnishes formulated for narrow web, flexible packaging, and paper cup manufacturing.',
    features: [
      'High pigment loading providing brilliant color strength and minimal ink laydown.',
      'Fast drying formulations engineered for press speeds exceeding 150 m/min.',
      'Low odor, low migration compliance for food-grade paper packaging and labels.',
      'Superior scuff, moisture, and chemical resistance with UV and water-based gloss varnishes.'
    ],
    specifications: {
      'Ink Chemistry': 'Water-Based, UV Curable, LED-UV, Solvent-Based',
      'Substrates': 'Coated/Uncoated Paper, PE-Coated Board, BOPP, PET, Aluminum Foil',
      'Viscosity Range': '18 - 35 seconds (Zahn Cup #2 / DIN 4)'
    }
  },
  'photopolymer-printing-plates': {
    shortDescription: 'Digital and analog photopolymer flexographic plates delivering sharp highlights, high-definition dot reproduction, and consistent solids.',
    features: [
      'Flat-top dot capability minimizing dot gain under variable impression pressure.',
      'Wide exposure latitude and fast washout processing for quick plate turnaround.',
      'Excellent resistance to aggressive UV inks, water inks, and cleaning solvents.',
      'Durable plate resilience ensuring consistent registration over million-impression runs.'
    ],
    specifications: {
      'Plate Thickness': '1.14 mm, 1.70 mm, 2.54 mm, 2.84 mm',
      'Shore A Hardness': '65 - 75 Shore A',
      'Resolution': '1% - 98% at 175 LPI',
      'Isolated Dot Holding': '150 µm'
    }
  },
  'exposure-stickness-removal-machine': {
    shortDescription: 'The WD Series Exposure and Stickness Removing Machine combines precision UV plate exposure and UVC debonding in a durable stainless steel structure with automatic pneumatic lifting.',
    features: [
      'The entire machine adopts a stainless steel shell for maximum reliability and durability.',
      'Equipped with original Philips plate exposure lamps and Philip rectifiers.',
      'Philips UVC light source dedicated for removing surface stickness of plates.',
      'Unique electrical separation structure effectively prevents ozone corrosion.',
      'Automatic lift of upper lid provides convenient and effortless plate processing.',
      'Imported diffuse reflection ultraviolet exhaust film for uniform vacuum suction.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'WD Series Exposure & Stickness Removing Machine',
      columns: ['Model', 'Printer Area', 'Measurement (WxDxH)', 'Power', 'Weight'],
      rows: [
        ['WD-1280', '1200 x 800 mm', '1370 x 1010 x 850 mm', '2.3 kW', '330 kg'],
        ['WD-1210', '1200 x 1000 mm', '1370 x 1210 x 850 mm', '2.6 kW', '365 kg'],
        ['WD-1590', '1500 x 900 mm', '1730 x 1150 x 850 mm', '3.0 kW', '400 kg'],
        ['WD-1612', '1600 x 1200 mm', '1890 x 1460 x 900 mm', '4.2 kW', '495 kg'],
        ['WD-2012', '2000 x 1200 mm', '2320 x 1450 x 950 mm', '5.5 kW', '707 kg']
      ]
    }],
    specificationNote: 'Special orders with special sizes are accepted.'
  },
  'double-sink-ultrasonic-cleaning-machine': {
    shortDescription: 'The SC Series Two Tanks Ultrasonic Cleaning Machine features dual heavy-duty stainless steel tanks for professional ultrasonic solvent cleaning and clean tap-water rinsing of anilox rollers.',
    features: [
      'All stainless steel casing (AIS304 2mm) with AIS316 2.5mm acid-resistant double sinks.',
      '40KHz stable and reliable high-power ultrasonic cavitation for thorough deep-cell cleaning.',
      'Dual tank configuration: No. 1 sink for ultrasonic solvent wash, No. 2 sink for clean rinse.',
      'Equipped with heating and constant temperature system, roller rotation wheel, and exhaust outlet.',
      'Integrated tap water shower and circulation filtration device.',
      'Movable height-adjustable casters and compressed air blow-off nozzle.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'SC Series Two Tanks Ultrasonic Cleaning Machine',
      columns: ['Model', 'Transducers', 'Ultrasonic Power', 'Frequency', 'Heating Power', 'Sink Length', 'Temp Range', 'Power'],
      rows: [
        ['SC-650', '18', '1080 W', '40 kHz', '1000 W', '650 mm', '20-80 C', '220 V'],
        ['SC-1000', '30', '1800 W', '40 kHz', '2000 W', '1000 mm', '20-80 C', '220 V'],
        ['SC-1500', '48', '2880 W', '40 kHz', '3000 W', '1500 mm', '20-80 C', '220 V'],
        ['SC-2000', '60', '3600 W', '40 kHz', '3000 W', '2000 mm', '20-80 C', '220 V'],
        ['SC-2500', '75', '4500 W', '40 kHz', '3000 W', '2500 mm', '20-80 C', '220 V']
      ]
    }],
    specificationNote: 'Special orders with special sizes are accepted.'
  },
  'hmq-560yc-iml-label-rotary-die-cutting-machine': {
    shortDescription: 'The HMQ-560YC Double Stations IML Label Rotary Die-Cutting Machine is engineered for high-speed, precision in-mold label converting with double rotary stations, automated conveying, and stacking.',
    features: [
      'Specifically developed for In-Mold Label (IML) packaging and container labeling applications.',
      'Double rotary die-cutting stations provide high productivity up to 120 m/min.',
      'Integrated conveyor and stacking collection unit for orderly automatic product stacking.',
      'Precision slitting accuracy within ±0.1 mm.',
      'Heavy-duty pneumatic unwinding shaft with 1000 mm maximum roll diameter.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HMQ-560YC Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Die cutting speed', '120 m/min'],
        ['Maximum web width', '550 mm'],
        ['Die cutting repeat length', '350 - 600 mm'],
        ['Maximum unwinding diameter', '1000 mm'],
        ['Die cutting stations', '2 stations'],
        ['Conveyor & stacking unit', '1 set'],
        ['Slitting accuracy', '±0.1 mm'],
        ['Total power', 'About 15 kW'],
        ['Air pressure', '0.6 MPa'],
        ['Voltage', '380V, 50/60 Hz, 3 Phase'],
        ['Machine weight', '3000 kg'],
        ['Machine dimensions', '5500 x 1800 x 2000 mm'],
        ['Unwind air shaft diameter', '76 mm (3 in)']
      ]
    }],
    specificationNote: 'Special orders with customized specifications accepted upon request.'
  },
  'hmq-320pa-trademark-die-cutting-machine': {
    shortDescription: 'The HMQ-320PA Trademark Die-Cutting Machine delivers high-precision flatbed stamping for self-adhesive trademarks, rubber parts, and thermal insulation materials.',
    features: [
      'High-precision flatbed stamping mechanism suitable for adhesive products and technical foam materials.',
      'Computerized touchscreen PLC with servo motor paper feeding.',
      'Dual photoelectric sensor web-guiding and automatic stroke length adjustment.',
      'Precise positioning accuracy maintained within ±0.10 mm.',
      'Sturdy frame construction ensuring smooth, vibration-free operation.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HMQ-320PA Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Die cutting speed', '20 - 180 times/min'],
        ['Maximum roll diameter', '450 mm'],
        ['Maximum web width', '320 mm'],
        ['Die cutting area', '290 x 300 mm'],
        ['Positioning accuracy', '±0.10 mm'],
        ['Total power', '3 kW'],
        ['Machine weight', '1700 kg'],
        ['Outline dimensions', '2600 x 950 x 1400 mm']
      ]
    }],
    specificationNote: 'Specifications can be customized according to client requirements.'
  },
  'hmq-320ps-double-stations-flatbed-die-cutting-machine': {
    shortDescription: 'The HMQ-320PS features dual flatbed die-cutting stations for simultaneous multi-layer converting, cold stamping, lamination, and waste discharge of adhesive labels.',
    features: [
      'Double-station flatbed design allows two sequential die-cutting or stamping operations in a single pass.',
      'Supports online laminating, slitting, waste discharge, and rewinding.',
      'High stamping speed reaching up to 300 m/min with servo-driven feeding.',
      'Large 300 x 300 mm maximum cutting area with ±0.1 mm positioning precision.',
      'Heavy-duty 2.8-ton rigid body ensures utmost stamping accuracy and long die life.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HMQ-320PS Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Die cutting speed', '20 - 300 m/min'],
        ['Maximum web width', '320 mm'],
        ['Max unwind roll diameter', '500 mm'],
        ['Max rewinding diameter', '480 mm'],
        ['Max die cutting area', '300 x 300 mm'],
        ['Positioning accuracy', '±0.1 mm'],
        ['Machine weight', 'About 2800 kg']
      ]
    }],
    specificationNote: 'According to customer requirements customize different specifications.'
  },
  'hfq-320ap-label-slitting-rewinding-machine': {
    shortDescription: 'The HFQ-320AP is an automatic roll-to-roll label slitting and rewinding machine equipped with circular knives, automatic meter counting, and photoelectric web guide.',
    features: [
      'High-speed rotary circular knives providing clean, burr-free label slitting.',
      'Integrated photoelectric edge guide sensor for accurate web alignment.',
      'Automatic tension control with magnetic powder clutches on unwind and rewind shafts.',
      'High slitting speed up to 120 m/min with cutting precision of ±0.10 mm.',
      'PLC touch screen interface for automated meter counting and auto-stop.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HFQ-320AP Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Maximum web width', '320 mm'],
        ['Max unwinding/rewinding diameter', '600 mm'],
        ['Core shaft diameter', '76 mm (3 in)'],
        ['Cutting precision', '±0.10 mm'],
        ['Slitting speed', '120 m/min'],
        ['Main machine power', '1.5 kW'],
        ['Overall dimensions', '1500 x 1200 x 1500 mm'],
        ['Machine weight', '1000 kg']
      ]
    }],
    specificationNote: 'Special specifications available upon customer request.'
  },
  'hmq-320yc-double-position-cutter': {
    shortDescription: 'The HMQ-320YC Double Position Cutter combines double rotary feeding, automatic rectifying web guide, dual die-cutting stations, and slitting in one compact footprint.',
    features: [
      'Double rotary unwinding shafts with magnetic powder tension control.',
      'High-sensitivity ultrasonic rectifying edge guide tracking device.',
      'Two high-precision rotary die-cutting stations for complex label geometries.',
      'Integrated circular knife slitting unit with rotary waste collection.',
      'Microprocessor speed control with digital display and automatic meter stoppage.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HMQ-320YC Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Cutting speed', '120 m/min'],
        ['Die cutting speed', '80 m/min'],
        ['Maximum feed width', '330 mm'],
        ['Maximum die size', '180 - 380 mm'],
        ['Rotating diameter', '200 mm'],
        ['Maximum unwinding diameter', '600 mm'],
        ['Positioning accuracy', '±0.15 mm'],
        ['Total power', '4.5 kW'],
        ['Operating pressure', '0.6 MPa'],
        ['Machine weight', '1500 kg'],
        ['Outline dimensions', '2500 x 1200 x 1600 mm']
      ]
    }],
    specificationNote: 'Customizable according to specific production requirements.'
  },
  'hmq-320yw-tyvek-wristband-die-cutting-machine': {
    shortDescription: 'The HMQ-320YW is specially developed for converting high-density polyethylene fiber (Tyvek) into identification wristbands, integrating a hot-melt glue system, web guide, and rotary die-cutting.',
    features: [
      'Specially configured cutting geometry for fibrous Tyvek material.',
      'Equipped with a precision hot-melt glue applicator for tamper-evident adhesive closures.',
      'Ultrasonic edge-position web guide system for smooth unwinding.',
      'Rotary die-cutting station with magnetic cylinder and flexible die plates.',
      'Automatic waste rewinder and shingling conveyor for finished wristbands.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HMQ-320YW Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Maximum web width', '320 mm'],
        ['Die cutting speed', '60 - 100 m/min'],
        ['Applicable material', 'Tyvek / HDPE Synthetic Paper'],
        ['Glue system', 'Hot-melt adhesive coating'],
        ['Positioning accuracy', '±0.15 mm'],
        ['Power supply', '380V, 50/60 Hz, 3 Phase'],
        ['Operating pressure', '0.6 MPa']
      ]
    }],
    specificationNote: 'Custom wristband dimensions and adhesive configurations supported.'
  },
  'hmq-350pg-high-speed-die-cutting-machine': {
    shortDescription: 'The HMQ-350PG is a fully automatic high-speed die-cutting machine designed for mass production of labels, tags, and packaging components with high throughput and precision.',
    features: [
      'Heavy-duty cast iron mainframe ensures utmost mechanical stability at top speeds.',
      'Precision servo feed rollers with computerized stroke length control.',
      'Automatic centralized lubrication system for extended continuous duty.',
      'Touchscreen HMI allows recipe storage and quick job changeovers.',
      'Supports online laminating, slitting, and synchronized sheet stacking.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HMQ-350PG Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Maximum web width', '350 mm'],
        ['Die cutting speed', '50 - 250 strokes/min'],
        ['Maximum die cutting size', '340 x 350 mm'],
        ['Feeding precision', '±0.10 mm'],
        ['Total power', '5.5 kW'],
        ['Voltage', '380V, 50/60 Hz'],
        ['Machine weight', '2200 kg'],
        ['Overall dimensions', '3000 x 1200 x 1650 mm']
      ]
    }],
    specificationNote: 'Special orders with special sizes accepted.'
  },
  'hfq-320-simple-slitter-machine': {
    shortDescription: 'The HFQ-320 is a compact, robust two-axis rotary slitter machine designed for narrow-web slit coils, trimming, and small-batch rewinding of label stocks.',
    features: [
      'Dual-axis rotary slitting shafts with adjustable shear or razor blades.',
      'Independent stepless speed control with digital speed readout.',
      'Automatic length counter with preset deceleration and stop function.',
      'Pneumatic expanding rewind shafts with magnetic powder brake tensioning.',
      'Compact footprint ideal for small label converting workshops.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HFQ-320 Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Maximum feed width', '320 mm'],
        ['Slitting speed', '10 - 80 m/min'],
        ['Minimum slitting width', '10 mm'],
        ['Maximum unwinding diameter', '500 mm'],
        ['Maximum rewinding diameter', '400 mm'],
        ['Power', '1.1 kW, 220V'],
        ['Machine dimensions', '1100 x 900 x 1200 mm'],
        ['Machine weight', '350 kg']
      ]
    }],
    specificationNote: 'Available with pneumatic core shafts or mechanical chucks.'
  },
  'flexo-plate-making-machine': {
    shortDescription: 'The HH Series Flexo Plate Making Machine is an all-in-one unit integrating UV exposure, automated plate washing, constant-temperature drying, and UVC debonding.',
    features: [
      'All-in-one exposure, washing, drying, and debonding stations in a single enclosure.',
      'Original imported plate exposure lamps with high-efficiency electronic ballasts.',
      'Diffuse reflection ultraviolet exhaust vacuum film for bubble-free plate suction.',
      'Digital integrated temperature controller with cross-flow forced-air fast drying.',
      'Specialized UVC light source eliminates surface plate stickness.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'Flexo Plate Making Machine Specifications',
      columns: ['Model', 'Printer Area', 'Measurement (WxDxH)', 'Power'],
      rows: [
        ['ZX-400', '410 x 520 mm', '710 x 610 x 1050 mm', '2.2 kW'],
        ['ZX-600', '600 x 800 mm', '860 x 710 x 1050 mm', '2.3 kW'],
        ['ZX-800', '800 x 900 mm', '1090 x 910 x 1150 mm', '3.5 kW'],
        ['ZX-900', '900 x 1000 mm', '1190 x 910 x 1150 mm', '3.7 kW'],
        ['ZX-1200', '1200 x 900 mm', '1490 x 1210 x 1190 mm', '3.9 kW'],
        ['ZX-1210', '1200 x 1000 mm', '1490 x 1310 x 1190 mm', '4.2 kW']
      ]
    }],
    specificationNote: 'Custom sizes and plate thickness configurations manufactured upon request.'
  },
  'high-speed-punching-machine-for-paper-cup': {
    shortDescription: 'The HCQ-850A High Speed Punching Machine for Paper Cup is an automated roll-fed punching system engineered for continuous production of paper cups, meal boxes, and carton blanks.',
    features: [
      'Microcomputer touchscreen PLC control for automated web feeding and precision length setting.',
      'High-speed eccentric punching mechanism delivering up to 350 strokes per minute.',
      'Photoelectric sensor web guide tracking for accurate registration of pre-printed paper rolls.',
      'Automatic waste separation with neat stacker conveyor for finished cup fan blanks.',
      'Heavy-duty cast machine frame ensures smooth continuous operation with minimal vibration.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HCQ-850A Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Punching speed', '200 - 350 times/min'],
        ['Maximum roll width', '850 mm'],
        ['Maximum feed length', '400 mm'],
        ['Applicable material', '150 - 350 g/m² PE-coated paper'],
        ['Positioning precision', '±0.15 mm'],
        ['Total power', '7.5 kW'],
        ['Voltage', '380V, 50/60 Hz, 3 Phase'],
        ['Machine weight', '2800 kg'],
        ['Overall dimensions', '3200 x 1800 x 1800 mm']
      ]
    }],
    specificationNote: 'Custom punching die sizes and layout configurations available upon request.'
  },
  'multi-station-press': {
    shortDescription: 'The HRY-320M Multi Station Press integrates flexographic printing, rotary die-cutting, adhesive labeling, and UV drying stations into a compact, high-efficiency production platform.',
    features: [
      'Modular multi-station architecture combining 2-color flexographic printing with inline converting.',
      'Integrated rotary die-cutting station with magnetic cylinder and flexible die tooling.',
      'Inline labeling applicator and synchronized waste rewinding system.',
      'Dual UV curing dryers ensure instant ink drying and crisp print reproduction.',
      'Centralized PLC control with stepless speed regulation and automatic meter stop.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HRY-320M Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Printing colors', '2 colors (expandable)'],
        ['Maximum web width', '330 mm'],
        ['Maximum printing width', '320 mm'],
        ['Printing speed', '10 - 80 m/min'],
        ['Die cutting speed', '80 m/min'],
        ['Max unwinding diameter', '600 mm'],
        ['Max rewinding diameter', '600 mm'],
        ['UV drying stations', '2 sets'],
        ['Total power', '12 kW'],
        ['Machine weight', '3200 kg'],
        ['Dimensions', '4200 x 1300 x 1800 mm']
      ]
    }],
    specificationNote: 'Special multi-color and converting attachments custom built upon request.'
  },
  'full-servo-rotary-die-cutting-machine-with-slitting-and-turret-rewinding': {
    shortDescription: 'The HMQ-350JE is a full-servo die-cutting machine featuring dual-mode semi-rotary and full-rotary converting, circular knife slitting, and a non-stop dual-spindle turret rewinder.',
    features: [
      'Full servo motor drive system with high-speed color mark registration sensor.',
      'Dual-mode operation supporting both intermittent semi-rotary and continuous rotary die cutting.',
      'Dual-spindle turret rewinder allows continuous roll changes without stopping the machine.',
      'Integrated circular shear knives with automatic waste matrix suction and rewind.',
      'Intuitive touchscreen HMI with job recipe storage and auto tension control.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HMQ-350JE Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Die cutting speed (semi-rotary)', '50 m/min'],
        ['Die cutting speed (full rotary)', '120 m/min'],
        ['Maximum web width', '350 mm'],
        ['Die cutting repeat length', '50 - 330 mm'],
        ['Max unwinding diameter', '600 mm'],
        ['Max turret rewinding diameter', '600 mm (Dual Spindle)'],
        ['Positioning precision', '±0.10 mm'],
        ['Total power', '11 kW'],
        ['Voltage', '380V, 50/60 Hz, 3 Phase'],
        ['Machine weight', '2200 kg'],
        ['Dimensions', '2800 x 1400 x 1650 mm']
      ]
    }],
    specificationNote: 'Optional corona treater, cold foil stamping, and inline inspection available.'
  },
  'fax-paper-cashier-paper-cutting-machine': {
    shortDescription: 'The FQ-900 Series is a specialized high-speed slitter rewinder designed for thermal fax paper, POS cashier receipts, ATM rolls, and medical chart rolls with automated line marking.',
    features: [
      'Dedicated surface rewinding mechanism for tight, uniform rolls of thermal cashier paper.',
      'Equipped with automatic end-of-roll red ink line spray marking device.',
      'High-precision rotary circular shear knives providing clean, burr-free roll edges.',
      'Pneumatic roll loading with magnetic powder tension control and digital meter counting.',
      'High throughput operation reaching slitting speeds up to 180 m/min.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'FQ-900 Series Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Maximum web width', '900 mm'],
        ['Maximum unwinding diameter', '1000 mm'],
        ['Maximum rewinding diameter', '180 mm'],
        ['Minimum slitting width', '30 mm'],
        ['Slitting speed', '100 - 180 m/min'],
        ['Rewind shaft diameters', '12.7 mm (0.5 in), 25.4 mm (1 in)'],
        ['Total power', '3.7 kW, 380V'],
        ['Operating air pressure', '0.6 MPa'],
        ['Machine weight', '1500 kg'],
        ['Dimensions', '2100 x 1600 x 1400 mm']
      ]
    }],
    specificationNote: 'Automated core loader and roll packaging systems available upon request.'
  },
  'wide-slitting-machine': {
    shortDescription: 'The HFQ-1200 is a robust, heavy-duty wide-web slitting machine engineered for precision high-speed slitting and dual-shaft rewinding of papers, films, and composite packaging materials up to 1200 mm width.',
    features: [
      'Wide-format converting accommodating web widths from 100 mm up to 1200 mm.',
      'Dual air-expanding rewind shafts with independent friction tension control.',
      'Ultrasonic photoelectric edge position control (EPC) web guiding system.',
      'Heavy cast iron side frames eliminate vibration at operating speeds up to 130 m/min.',
      'Rotary circular knives and straight razor blade cutting modes supported.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HFQ-1200 Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Maximum unwinding diameter', '800 mm'],
        ['Maximum web width', '1200 mm'],
        ['Slitting width range', '100 - 1200 mm'],
        ['Cutting thickness range', '0.05 - 0.8 mm'],
        ['Maximum rewinding diameter', '400 mm'],
        ['Mechanical speed', '130 m/min'],
        ['Edge correction error', '≤ ±0.5 mm'],
        ['Tension control mode', 'Magnetic powder clutches'],
        ['Total power', '3.7 kW, 220V/380V'],
        ['Machine weight', '1600 kg'],
        ['Overall dimensions', '2200 x 1600 x 1400 mm']
      ]
    }],
    specificationNote: 'Customizable knife configurations and shaft sizes available.'
  },
  'platform-type-rewinder-machine': {
    shortDescription: 'The HH-320 is an ergonomic platform-type inspection and rewinding machine designed for label defect verification, small-lot trimming, and rewinding across converting lines.',
    features: [
      'Integrated horizontal inspection platform for convenient visual label verification.',
      'Stepless electronic speed governor with forward and reverse bi-directional rewinding.',
      'Photoelectric automatic meter counter with automatic deceleration and preset stop.',
      'Dual expanding core spindles with adjustable friction tension control.',
      'Compact footprint with ergonomic foot switch for hands-free stopping.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'HH-320 Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Detection platform area', '750 x 380 mm'],
        ['Maximum roll diameter', '450 mm'],
        ['Maximum web width', '320 mm'],
        ['Operating speed', '10 - 80 m/min'],
        ['Speed control', 'Stepless electronic frequency governor'],
        ['Motor power', '0.75 kW, 220V'],
        ['Machine weight', '150 kg'],
        ['Overall dimensions', '1000 x 700 x 1050 mm']
      ]
    }],
    specificationNote: 'Strobe light defect synchronization available upon request.'
  },
  'mq-series-digital-die-cutting-machine': {
    shortDescription: 'The MQ Series Digital Die Cutting Machine delivers high-precision knife cutting, creasing, and slitting directly from vector CAD files without physical die plates, ideal for on-demand short and medium label runs.',
    features: [
      'Multi-blade digital cutting system eliminates expensive wooden or flexible die tooling.',
      'High-speed CCD optical registration camera automatically compensates for print distortion and skew.',
      'Supports roll-to-roll and roll-to-sheet converting for self-adhesive labels, tags, and carton cards.',
      'Integrated slitting unit with rotary circular knives for finished coil separation.',
      'Fast job changeovers with instant electronic file loading from USB or network.'
    ],
    specifications: {},
    specificationTables: [{
      title: 'MQ Series Technical Parameters',
      columns: ['Specification', 'Value'],
      rows: [
        ['Maximum roll diameter', '450 mm'],
        ['Support label roll width', '100 - 350 mm'],
        ['Maximum cutting width', '340 mm'],
        ['Maximum label length', '1000 mm'],
        ['Maximum cutting speed', '18 - 40 m/min (geometry dependent)'],
        ['Cutting precision', '±0.10 mm'],
        ['Cutting heads', '2 - 4 digital blade holders'],
        ['Slitting blades', '4 sets (expandable to 15 sets)'],
        ['Blade type', 'Tungsten carbide precision cutter'],
        ['Slitting speed', 'Up to 100 m/min'],
        ['Total power', '4.5 kW, 220V / 380V'],
        ['Machine dimensions', '2600 x 1050 x 1450 mm']
      ]
    }],
    specificationNote: 'Compatible with standard DXF, PLT, and PDF vector cutting paths.'
  },
  'narrow-web-flexo-printing-machine-2-14-colors': {
    shortDescription: 'The Narroweb Flexo Printing Machine 2-14-Colors is an advanced fully-servo flexographic press engineered for high-speed multi-color printing on film, paper, and IML packaging substrates.',
    features: [
      'The Narroweb Flexo Printing Machine 2-14-Colors is an advanced fully-servo flexographic press engineered for high-speed multi-color printing on film, paper, and IML packaging substrates.',
      'All-servo motor direct drive eliminates mechanical gear backlash for perfect dot registration.',
      'Modular configuration supporting 2 to 14 high-precision color stations.',
      'Equipped with corona treater, chill drums, and UV curing on each print unit.',
      'Specialized web guide and edge position control for thin IML and shrink film substrates.',
      'Touchscreen PLC recipe control system with automatic pre-registration.'
    ],
    specifications: {
      'Max web width': '320-800 mm',
      'Max printing width': '320-800 mm',
      'Color quantity': '2-14 colors',
      'Printing speed': '50 - 120 m/min',
      'Drive': 'All-servo motor drive'
    }
  },
  'unit-type-flexo-printing-machine-6-colors': {
    shortDescription: 'The Narroweb Flexo Printing Machine 2-14-Colors is an advanced fully-servo flexographic press engineered for high-speed multi-color printing on film, paper, and IML packaging substrates.',
    features: [
      'The Narroweb Flexo Printing Machine 2-14-Colors is an advanced fully-servo flexographic press engineered for high-speed multi-color printing on film, paper, and IML packaging substrates.',
      'All-servo motor direct drive eliminates mechanical gear backlash for perfect dot registration.',
      'Modular configuration supporting 2 to 14 high-precision color stations.',
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
  'flexographic-printing-machine-for-paper-cups-4-colors': {
    shortDescription: 'The Flexographic Printing Machine for Paper Cups 4-Colors is designed for heavy-duty reel-fed paper cup blank and container carton printing with automatic hydraulic roll lifting and corona treatment.',
    features: [
      'Engineered specifically for heavy paper cup stock, PE-coated board, and folding cartons.',
      'Automatic hydraulic roll loading and unloading for heavy mother reels.',
      'Integrated high-output corona treatment unit enhances ink adherence on coated surfaces.',
      'High-efficiency hot air and infrared drying tunnels for water-based food-safe inks.',
      'Precision ceramic anilox rollers ensure uniform solid ink coverage and vibrant colors.'
    ],
    specifications: {
      'Feed width': '860 mm',
      'Printing speed': '50 - 60 m/min',
      'Max unwinding diameter': '1300 mm',
      'Color quantity': '4 colors'
    }
  },
  'paper-flexo-printing-machine-with-punching-inline-4-colors': {
    shortDescription: 'The Paper Flexo Printing Machine with Punching Inline 4-Colors integrates high-precision 4-color flexographic printing with an inline high-speed eccentric punching station for all-in-one cup blank and carton production.',
    features: [
      'All-in-one reel-to-punched blank production: unwinding, printing, punching, and collection in one pass.',
      'High-speed eccentric die punching unit operates at up to 250 strokes per minute.',
      'Photocell mark registration synchronizes the punching stroke precisely with pre-printed graphics.',
      'Automated waste scrap delivery belt and finished fan blank shingling stacker.',
      'Centralized microcomputer control panel with automatic piece counting and batch stop.'
    ],
    specifications: {
      'Feed width': '860 mm',
      'Printing speed': '50 - 80 m/min',
      'Punching speed': '150 - 250 strokes/min',
      'Colors': '4 colors',
      'Total power': '18 kW'
    }
  },
  'multi-functional-full-servo-flexo-printing-machine-9-colors': {
    shortDescription: 'The Multi-functional Full Servo Flexo Printing Machine 9-Colors offers high-end narrow-web converting with 9 printing stations, full servo motion control, and integrated semi-rotary die cutting.',
    features: [
      '9 high-precision unit-type color stations with independent servo drive on each cylinder.',
      'Multi-functional configuration: cold foil, lamination, delam/relam, and turn bar.',
      'High-speed optical register sensor maintains tight print-to-cut registration at 100 m/min.',
      'Intermittent semi-rotary and continuous full-rotary die cutting modes in a single unit.',
      'Digital touchscreen terminal with recipe memory for rapid job changeover.'
    ],
    specifications: {
      'Max web width': '330 mm',
      'Max printing width': '320 mm',
      'Color quantity': '9 colors',
      'Printing speed': '100 m/min'
    }
  },
  'paper-flexo-printing-machine-with-sheet-cutting-inline-4-colors': {
    shortDescription: 'The Paper Flexo Printing Machine with Sheet Cutting Inline 4-Colors combines 4-color flexo printing with synchronized rotary sheet cross-cutting for precision flat sheet and label production.',
    features: [
      'Inline rotary cross-cutting knife eliminates offline guillotining for sheeted paper products.',
      'Digital servo knife controller provides micro-step cut length adjustment with high accuracy.',
      'Continuous non-stop shingling delivery table with adjustable batch collection.',
      'Four high-precision print stations equipped with ceramic anilox and reverse-angle doctor blades.',
      'Suitable for coated paper, kraft paper, linerboard, and adhesive label sheeting.'
    ],
    specifications: {
      'Feed width': '860 mm',
      'Printing speed': '50 - 80 m/min',
      'Cut sheet length': '100 - 900 mm',
      'Color quantity': '4 colors'
    }
  },
  'uv-flexo-printing-machine-6-colors': {
    shortDescription: 'The UV Flexo Printing Machine 6-Colors is a compact, high-productivity vertical tower flexo press equipped with 6 UV curing print stations and rotary converting for prime labels.',
    features: [
      '6 vertical flexo color units with individual UV lamp dryers for instant drying of UV inks.',
      'Ceramic anilox rolls with high line screens for fine highlight dot reproduction.',
      'Inline rotary die-cutting, matrix waste rewinder, and dual rewind spindles.',
      'Electronic web guide tracking ensures smooth edge alignment across substrates.',
      'Compact vertical footprint saves valuable shop floor space while maximizing color capacity.'
    ],
    specifications: {
      'Max web width': '320 mm',
      'Max printing width': '310 mm',
      'Color quantity': '6 colors',
      'Printing speed': '50 - 100 m/min'
    }
  },
  'uv-flexo-printing-machine-5-colors': {
    shortDescription: 'The UV Flexo Printing Machine 5-Colors features 5 UV printing units with inline cold foil stamping and rotary die cutting for multi-color label and packaging manufacturing.',
    features: [
      '5-color flexographic printing tower with high-efficiency UV curing stations.',
      'Inline cold foil stamping attachment for metallic highlights and security branding.',
      'Precision helical gear drive ensures smooth, quiet, vibration-free ink transfer.',
      'Magnetic powder brake tension control with automatic length meter counter.',
      'Quick-change print cylinders and magnetic die cylinders for rapid job setup.'
    ],
    specifications: {
      'Max web width': '320 mm',
      'Max printing width': '310 mm',
      'Color quantity': '5 colors',
      'Printing speed': '50 - 100 m/min'
    }
  },
  'uv-flexo-printing-machine-4-colors': {
    shortDescription: 'The UV Flexo Printing Machine 4-Colors delivers standard CMYK four-color process printing with UV curing and rotary converting for self-adhesive labels and flexible packaging.',
    features: [
      'Four-color process (CMYK) flexographic printing with independent UV curing on every deck.',
      'High-accuracy 360° helical gear registration adjustment on each printing unit.',
      'Integrated laminating station, rotary die-cutting unit, and scrap rewind spool.',
      'Infrared and hot air drying auxiliary options alongside primary UV curing.',
      'Robust cast frame design offering exceptional mechanical rigidity and durability.'
    ],
    specifications: {
      'Max web width': '320 mm',
      'Max printing width': '310 mm',
      'Color quantity': '4 colors',
      'Printing speed': '50 - 100 m/min'
    }
  },
  'uv-flexo-printing-machine-2-colors': {
    shortDescription: 'The UV Flexo Printing Machine 2-Colors is an economical, reliable press optimized for two-color barcode, logo, text, and spot color label printing with integrated die cutting.',
    features: [
      '2-color flexographic printing station with dual UV curing lamps.',
      'Ideal for short-run promotional labels, warning stickers, and two-color packaging tape.',
      'Integrated rotary die-cutting station with circular slitting knives.',
      'Simple user operation with minimal setup time and fast ink wash-up.',
      'Pneumatic rewind shafts with automatic meter counting and deceleration stop.'
    ],
    specifications: {
      'Max web width': '320 mm',
      'Max printing width': '310 mm',
      'Color quantity': '2 colors',
      'Printing speed': '50 - 80 m/min'
    }
  },
  'uv-flexo-printing-machine-1-colors': {
    shortDescription: 'The UV Flexo Printing Machine 1-Colors is a single-color flexo coating, varnishing, and cold foil stamping press designed for surface finishing and single-color label production.',
    features: [
      'Single-color flexographic coating unit with high-intensity UV curing lamp.',
      'Supports full flood UV varnishing, primer application, and cold foil stamping.',
      'High-precision ceramic anilox roller with doctor blade for uniform coat weight.',
      'Compact footprint with easy operation and rapid plate changeovers.',
      'Low operational and maintenance costs with high return on investment.'
    ],
    specifications: {
      'Max web width': '320 mm',
      'Max printing width': '310 mm',
      'Color quantity': '1 color',
      'Printing speed': '50 - 80 m/min'
    }
  },
  'dbqx-350-ultrasonic-cleaning-machine': {
    shortDescription: 'Industrial ultrasonic anilox roller cleaning machine engineered to restore micro-cell volume on ceramic and chrome anilox rolls without surface damage.',
    features: [
      'Ultrasonic cleaning machine specifically engineered for precision ceramic and chrome anilox rollers.',
      'Deep micro-cavitation effectively purges dried UV, water-based, and solvent inks without damaging delicate cell walls.',
      'Automatic synchronized motorized roller rotation mechanism during the immersion cycle.',
      'Industrial SUS304 stainless steel fluid tank with thermostatic heating control.',
      'Digital frequency sweep generator for uniform cleaning intensity across the entire roller width.',
      'Built-in drain ball valve and liquid filtration cycle for cost-effective detergent reuse.'
    ],
    specifications: {
      'Max roller length': '350 mm (customizable)',
      'Tank material': 'SUS304 Stainless Steel',
      'Ultrasonic frequency': '40 kHz high power',
      'Heating temperature': 'Up to 60°C adjustable',
      'Rotation speed': 'Motorized slow-rotation drive',
      'Power supply': '220V / 380V 50Hz'
    }
  },
  'dbfq-370h-slitting-rewinding-machine': {
    shortDescription: 'High Speed Slitting Rewinding Machine engineered for narrow-web labels, adopting a full servo motor drive, taper tension control, digital web guiding, and turret rewinding.',
    features: [
      'High-speed narrow-web label slitting up to 350 m/min with vibration-free operation.',
      'Full servo motor driven system with automated taper tension control.',
      'High quality digital web guide system (EPC) with ultrasonic/optical edge sensors.',
      'Dual-spindle turret type rewinding system for continuous, high-efficiency roll changes.',
      'Supports both circular rotary shear knives and razor blades for film and paper substrates.',
      'Pneumatic automatic slip shafts for uniform roll hardness and neat reel edges.'
    ],
    specifications: {
      'Max. slitting speed': '350 m/min',
      'Max. web width': '370 mm',
      'Min. slitting width': '15 mm',
      'Slitting knives': 'Circular knife / razor blade',
      'Max. unwinding dia.': '800 mm',
      'Max. up rewinding dia.': '450 mm (turret type)',
      'Max. down rewinding dia.': '800 mm',
      'Air source': '0.8 MPa',
      'Total power': '11 kW',
      'Machine weight': '1300 kg',
      'Dimension': '2200 x 1350 x 1350 mm'
    }
  },
  'dbmq-f320h-flatbed-die-cutting-slitting-machine': {
    shortDescription: 'High-speed flatbed die-cutting and slitting machine featuring servo-driven web feed, digital web guiding, and integrated laminating and slitting.',
    features: [
      'Flat-bed die cutting machine with high precision and high operating speed up to 400 strokes/min (140 m/min).',
      'Paper feeding controlled by precision servo motor for accurate intermittent movement.',
      'Digital web guiding system ensures precise material alignment throughout the run.',
      'Die cutting, laminating, waste rewinding, and rotary slitting completed in a single pass.',
      'Applicable to die cut self-adhesive labels, Dacron film labels, and holographic security labels.',
      'Ideal auxiliary converting unit for flexographic printing presses and rotary presses.'
    ],
    specifications: {
      'Die cutting speed': '400 times/min (140 m/min)',
      'Max. unwinding diameter': '700 mm',
      'Max. web width': '320 mm',
      'Max. die cutting width': '300 mm',
      'Max. die cutting length': '300 mm',
      'Precision of chromatography': '±0.01 mm',
      'Total power': '2.5 kW',
      'Dimensions': '2600 x 850 x 1400 mm',
      'Machine weight': '2800 kg'
    }
  },
  'dbiml-370-semi-rotary-iml-die-cutting-machine': {
    shortDescription: 'Semi-Rotary IML Die Cutting Machine operating in both full-rotary and intermittent modes, purpose-built for In-Mold Labels (IML) and high-precision self-adhesive label production.',
    features: [
      'Available in both full-rotation and intermittent semi-rotary die cutting modes.',
      'Specifically designed for In-Mold Labels (IML), wrap-around labels, and film substrates.',
      'High precision and stable tension control with maximum roll diameter reaching 800 mm.',
      'Running speed reaches 120 m/min in full rotary mode and 60 m/min in intermittent mode.',
      'Color sensor mark positioning delivers kiss-cut precision of ±0.10 mm.',
      'Standard magnetic cylinder 140T with support for 80T to 204T interchangeable cylinders.'
    ],
    specifications: {
      'Max. web width': '370 mm',
      'Max. unwind/rewind diameter': '700 mm',
      'Max. die cutting width': '360 mm',
      'Full rotary speed': '120 m/min',
      'Intermittent speed': '60 m/min',
      'Kiss-cut precision accuracy': '±0.10 mm',
      'Die cutting positioning method': 'Color sensor',
      'Magnetic cylinder': '140T (80T - 204T optional)',
      'Power consumption': '19 kW',
      'Machine weight': '2000 kg'
    }
  },
  'dbpj-450-automatic-label-inspecting-slitting-machine': {
    shortDescription: 'Automatic Label Inspecting and Slitting Machine featuring high-speed 100% optical inspection and turret rewinding for medicine, food, chemical, and electrical labels.',
    features: [
      'High-speed automatic optical inspection system detecting fundamental, print, gold/cold stamp, scratch, bubble, and overflow defects.',
      'Suitable for pharmaceutical, food, chemical, and electrical pressure-sensitive label converting.',
      'High slitting speed up to 350 m/min and optical inspecting speed up to 180 m/min.',
      'Turret type upper rewinding system driven by 4-axis servo motors for non-stop productivity.',
      '6 sets of circular and razor slitting cutters with automated stop-on-defect positioning.'
    ],
    specifications: {
      'Type': 'DBPJ-450',
      'Max. web width': '450 mm',
      'Effective detection width': '450 mm',
      'Max. slitting width': '450 mm',
      'Min. slitting width': '20 mm',
      'Max. slitting speed': '350 m/min',
      'Max. inspecting speed': '180 m/min',
      'Max. unwinding diameter': '800 mm',
      'Max. down rewinding diameter': '700 mm',
      'Max. up rewinding diameter': '450 mm (turret type)',
      'Slitting cutter': '6 sets circular / razor knife',
      'Servo motor driven': '4 pcs servo motors'
    }
  },
  'cushion-adhesive-mounting-tapes-and-adhesives': {
    shortDescription: 'The BiesSse BS MOUNT range of cushion adhesive tapes is engineered to meet the highest demands of flexographic printing for labels, flexible packaging, and pre-print corrugated board.',
    features: [
      'High resilience BiesSse foam ensures maximum print quality and dot reproduction at high speeds.',
      'Characterised by foam carriers across 10 compressibilities and 2 thickness ranges, identified by specific colors.',
      '8 adhesive combinations with differential plate-side and cylinder-side tack for clean removal without residue.',
      'High-performance embossed liner eliminates air bubbles and plate lift during mounting.',
      'Certified Esko Full HD Flexo partner for vibration-free long print runs.'
    ],
    specifications: {
      'Brand / Range': 'BiesSse BS MOUNT',
      'Thickness Options': '0.38 mm (15 mil) & 0.50 mm (20 mil)',
      'Compressibility': '10 Color-Coded Foam Densities (Extra Soft to Extra Hard)',
      'Carrier': 'Closed-cell PE foam with high recovery resilience',
      'Adhesive Type': 'Differential solvent-based acrylic adhesives',
      'Liner': 'Micro-embossed PP release liner',
      'Application': 'Flexo printing of labels, flexible packaging, pre-print'
    }
  },
  'lint-free-cleanroom-wipes': {
    shortDescription: 'Ultra-pure lint-free cleanroom wipes engineered for delicate anilox roll cell cleaning, photopolymer plate wiping, doctor blade maintenance, and prepress optical surfaces.',
    features: [
      'Continuous filament non-woven polymer construction prevents particle and fiber release.',
      'Highly resistant to aggressive flexographic solvents, UV washes, and cleaning fluids.',
      'Soft non-scratch texture protects delicate ceramic anilox surfaces and photopolymer relief plates.',
      'High absorbency and fast liquid retention for thorough pressroom wipe-downs.',
      'Cleanroom packaged for ISO Class 5-7 compliance.'
    ],
    specifications: {
      'Grade': 'Lint-Free Cleanroom / Pressroom Grade',
      'Material': 'High-purity non-woven continuous filament blend',
      'Chemical Compatibility': 'UV washes, IPA, ethyl acetate, glycol ethers, water',
      'Packaging': 'Double-bagged cleanroom packs',
      'Standard Sizes': '9" x 9" and 12" x 12"'
    }
  },
  'polyester-cleanroom-wipes': {
    shortDescription: '100% continuous filament polyester cleanroom wipes with laser-sealed borders for zero fiber shedding during heavy-duty doctor blade and ink chamber cleaning.',
    features: [
      '100% continuous filament high-tenacity polyester double-knit fabric.',
      'Laser-sealed edges eliminate loose edge fibers and maximize abrasion durability.',
      'Outstanding tensile strength when saturated with press washes or solvents.',
      'Streak-free cleaning for optical register sensors, glass mounters, and ink fountains.'
    ],
    specifications: {
      'Material': '100% Virgin continuous filament polyester',
      'Border': 'Laser / ultrasonic sealed edge',
      'Weight': '125 g/m² ± 5 g/m²',
      'Absorbency': 'High capacity liquid wicking',
      'Resistant to': 'Solvents, inks, varnishes, cleaners'
    }
  }
};
