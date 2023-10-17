import { BaseModel } from "./base";
import { District } from "./district";

export class Branch extends BaseModel {
    code : string;  
    name : string;  
    mnemonic : string;  
    zone : string;  
    town : string;  
    telephone : string;  
    district : District;  
}
