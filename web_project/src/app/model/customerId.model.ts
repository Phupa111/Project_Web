// To parse this data:
//
//   import { Convert } from "./file";
//
//   const customerID = Convert.toCustomerID(json);

export interface CustomerID {
  cid:     number;
  name:    string;
  money:   number;
  address: string;
  phone:   number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCustomerID(json: string): CustomerID[] {
      return JSON.parse(json);
  }

  public static customerIDToJson(value: CustomerID[]): string {
      return JSON.stringify(value);
  }
}
