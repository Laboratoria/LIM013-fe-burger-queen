export interface Order {
  id?: string;
/*   nameUser?: string;
  numberOrder: number;
  numberTable: number;
  total: number; */
  name: string;
  price: number;
  category?: string;
  kind?: string;
  flavor?: string;
  accompaniment?: boolean;
}