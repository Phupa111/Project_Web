// To parse this data:
//
//   import { Convert } from "./file";
//
//   const bill = Convert.toBill(json);

export interface Bill {
  bid:        number;
  cid:        number;
  dateDay:    string;
  status:     string;
  totalPrice: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toBill(json: string): Bill[] {
      return JSON.parse(json);
  }

  public static billToJson(value: Bill[]): string {
      return JSON.stringify(value);
  }
}
