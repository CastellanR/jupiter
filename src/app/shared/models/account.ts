import { Cart } from './cart';

export interface Account {
  id: string;
  name?: string;
  email: string;
  addresses?: string[];
  carts?: Cart[];
  scope?: string[];
  createdAt: string;
}
