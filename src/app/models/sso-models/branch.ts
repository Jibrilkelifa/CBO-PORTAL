import { Location } from "./location";

export interface Branch {
  id: number;
  code: string;
  name: string;
  mnemonic: string;
  location: Location;
  telephone: string;
}
