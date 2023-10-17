import { BaseModel } from "./base";
import { Process } from "./process";

export class SubProcess extends BaseModel {
    code: string;
    name : string;  
    process: Process;
}

