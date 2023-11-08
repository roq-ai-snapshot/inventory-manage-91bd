import { InventoryInterface } from 'interfaces/inventory';
import { OrderInterface } from 'interfaces/order';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  description?: string;
  quantity?: number;
  price?: number;
  product_supplier?: string;
  category?: string;
  created_at?: any;
  updated_at?: any;
  inventory?: InventoryInterface[];
  order?: OrderInterface[];

  _count?: {
    inventory?: number;
    order?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  product_supplier?: string;
  category?: string;
}
