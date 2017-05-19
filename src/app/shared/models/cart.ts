import { Product } from '../product';

export interface Cart {
  createdAt: string;
  id: string;
  products: Product[];
  userId: string;
}
