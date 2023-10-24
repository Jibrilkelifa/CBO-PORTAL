import { BaseModel } from "./base";

export class Branch extends BaseModel {
    code: string;
    name: string;
    mnemonic: string;
    location: Location;
    telephone: string;
}
