// To parse this data:
//
//   import { Convert } from "./file";
//
//   const customerBill = Convert.toCustomerBill(json);

export interface CustomerBill {
  bid:        number;
  dateDay:    string;
  status:     string;
  totalPrice: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCustomerBill(json: string): CustomerBill[] {
      return JSON.parse(json);
  }

  public static customerBillToJson(value: CustomerBill[]): string {
      return JSON.stringify(value);
  }
}
