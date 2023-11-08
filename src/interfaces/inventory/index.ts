import { ProductInterface } from 'interfaces/product';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  product_id: string;
  location?: string;
  quantity?: number;
  reorder_level?: number;
  reorder_time?: number;
  quantity_in_reorder?: number;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  product_id?: string;
  location?: string;
}
