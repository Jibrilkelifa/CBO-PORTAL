import { BaseModel } from "./base";
import { SubProcess } from "./subProcess";

export class OrganizationalUnit extends BaseModel {
    code: string;
    name : string;
    mnemonic : string;
    area : string;
    town : string;
    telephone : string;
    subProcess : SubProcess;
  
}
