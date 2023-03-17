// To parse this data:
//
//   import { Convert } from "./file";
//
//   const ownerDetail = Convert.toOwnerDetail(json);

export interface OwnerDetail {
  name:   string;
  price:  number;
  amount: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toOwnerDetail(json: string): OwnerDetail[] {
      return JSON.parse(json);
  }

  public static ownerDetailToJson(value: OwnerDetail[]): string {
      return JSON.stringify(value);
  }
}
