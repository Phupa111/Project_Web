// To parse this data:
//
//   import { Convert } from "./file";
//
//   const cartShow = Convert.toCartShow(json);

export interface CartShow {
  blid:   number;
  fid:    number;
  name:   string;
  amount: number;
  price:  number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toCartShow(json: string): CartShow[] {
      return JSON.parse(json);
  }

  public static cartShowToJson(value: CartShow[]): string {
      return JSON.stringify(value);
  }
}
