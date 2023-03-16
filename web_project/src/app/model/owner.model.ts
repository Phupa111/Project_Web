// To parse this data:
//
//   import { Convert } from "./file";
//
//   const owner = Convert.toOwner(json);

export interface Owner {
  oid:        number;
  cid:        number;
  name:       string;
  totalprice: number;
  day:        string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toOwner(json: string): Owner[] {
      return JSON.parse(json);
  }

  public static ownerToJson(value: Owner[]): string {
      return JSON.stringify(value);
  }
}
