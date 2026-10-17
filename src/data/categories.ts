import type { ProductCategory, CategoryDetails } from '../types/product';

export interface MachineryCategory extends CategoryDetails {
  iconName: 'Printer' | 'Layers' | 'Settings' | 'Scissors' | 'Package';
  image: string;
  badge: string;
}

export const machineryCategories: MachineryCategory[] = [
  {
    id: 'flexographic-printing',
    slug: 'flexographic-printing',
    name: 'Flexographic Printing Machines',
    badge: 'Flexo Presses',
    description: 'High-speed multi-color narrowweb and CI flexographic printing presses.',
    iconName: 'Printer',
    image: '/images/products/fitted/narrow-web-flexo-printing-machine-2-14-colors-v2.png',
  },
  {
    id: 'pre-production',
    slug: 'pre-production-machines',
    name: 'Pre-Production Machines',
    badge: 'Prepress',
    description: 'Precision plate mounting, plate masking & making, exposure stickness removal, and ultrasonic anilox cleaning equipment.',
    iconName: 'Layers',
    image: '/images/products/fitted/plate-mounting-machine.webp',
  },
  {
    id: 'finishing-processes',
    slug: 'post-production-machines',
    name: 'Post-Production Machines',
    badge: 'Post-Production & Converting',
    description: 'High-speed slitting-rewinding, flatbed & rotary die-cutting, semi-rotary IML, optical label inspection, and converting machinery.',
    iconName: 'Scissors',
    image: '/images/products/fitted/dbfq-370h-slitting-rewinding-machine-v2.png',
    legacySlugs: ['finishing-processes', 'production-machines', 'production', 'post-press-finishing-machines', 'post-press'],
  },
  {
    id: 'accessories-consumables',
    slug: 'accessories-consumables',
    name: 'Accessories & Consumables',
    badge: 'Tooling & Consumables',
    description: 'BiesSse BS MOUNT cushion mounting tapes, adhesives, lint-free cleanroom wipes, polyester wipes, and pressroom tooling.',
    iconName: 'Package',
    image: '/images/products/fitted/cushion-mounting-tapes-adhesives-v2.png',
  },
];

export const categories = machineryCategories;

export function getCategoryBySlug(slug: string): MachineryCategory | undefined {
  return machineryCategories.find(
    (c) => c.slug === slug || c.id === slug || c.legacySlugs?.includes(slug)
  );
}
