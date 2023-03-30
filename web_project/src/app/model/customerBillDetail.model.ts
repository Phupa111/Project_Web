// To parse this data:
//
//   import { Convert } from "./file";
//
//   const customerBillDetail = Convert.toCustomerBillDetail(json);

export interface CustomerBillDetail {
  name:       string;
  bid:        number;
  status:     string;
  totalPrice: number;
  dateDay:    string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCustomerBillDetail(json: string): CustomerBillDetail[] {
      return JSON.parse(json);
  }

  public static customerBillDetailToJson(value: CustomerBillDetail[]): string {
      return JSON.stringify(value);
  }
}
