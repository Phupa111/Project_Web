// To parse this data:
//
//   import { Convert } from "./file";
//
//   const nameOrder = Convert.toNameOrder(json);

export interface NameOrder {
  name:       string;
  status:     string;
  Adress:     string;
  phone:      string;
  totalPrice: number;
  day:        string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toNameOrder(json: string): NameOrder[] {
      return JSON.parse(json);
  }

  public static nameOrderToJson(value: NameOrder[]): string {
      return JSON.stringify(value);
  }
}
