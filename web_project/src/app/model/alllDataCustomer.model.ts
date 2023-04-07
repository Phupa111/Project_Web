// To parse this data:
//
//   import { Convert } from "./file";
//
//   const allDataCustomer = Convert.toAllDataCustomer(json);

export interface AllDataCustomer {
  cid:      number;
  name:     string;
  username: string;
  password: string;
  money:    number;
  address:  string;
  phone:    number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toAllDataCustomer(json: string): AllDataCustomer[] {
      return JSON.parse(json);
  }

  public static allDataCustomerToJson(value: AllDataCustomer[]): string {
      return JSON.stringify(value);
  }
}
