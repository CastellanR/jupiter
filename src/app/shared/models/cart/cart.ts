import { Product } from '../product/product';

export interface Cart {
  createdAt: string;
  id: string;
  products: Product[];
  userId: string;
}
