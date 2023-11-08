import { GetQueryInterface } from 'interfaces';

export interface SupplierInterface {
  id?: string;
  name: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SupplierGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
}
