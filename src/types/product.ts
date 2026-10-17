export type ProductCategory =
  | 'flexographic-printing'
  | 'pre-production'
  | 'production'
  | 'finishing-processes'
  | 'post-press'
  | 'post-production'
  | 'accessories-consumables';

export interface ProductSpecificationTable {
  title?: string;
  columns: string[];
  rows: string[][];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  secondaryCategory?: ProductCategory;
  image?: string;
  shortDescription?: string;
  features: string[];
  functions?: Record<string, string>;
  specifications?: Record<string, string>;
  specificationTables?: ProductSpecificationTable[];
  specificationNote?: string;
  additionalConfigurations?: string[];
  imagePath?: string;
  brochurePath?: string;
}

export interface CategoryDetails {
  id: ProductCategory;
  slug: string;
  name: string;
  badge?: string;
  description: string;
  image?: string;
  iconName?: 'Printer' | 'Layers' | 'Settings' | 'Scissors' | 'Package' | 'Wrench';
  legacySlugs?: string[];
}
