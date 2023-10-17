import { BaseModel } from "./base";
import { Branch } from "./branch";
import { District } from "./district";
import { Employee } from "./employee";
import { OrganizationalUnit } from "./organizationalunit";
import { Process } from "./process";
import { SubProcess } from "./subProcess";

export class AuthorityDTO extends BaseModel {
    employee: Employee;
    organizationalUnit: OrganizationalUnit;
    subProcess: SubProcess;
    process : Process;
    district : District;
    branch : Branch;
    createdAt : string;
    updatedAt : string;
    status : string;

}
