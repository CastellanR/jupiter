import { Collection } from './collection';

export interface Product {
  enabled: boolean;
  sku: string;
  name: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
  images: {url: string}[];
  pricing: {
    currency: string;
    list: number;
    retail: number;
    vat: number;
  };
  stock: number;
  tags: string[];
  collections: Collection[];
  metadata: any;
  createdAt: string;
}
