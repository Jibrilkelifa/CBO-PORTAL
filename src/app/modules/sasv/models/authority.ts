import { Team } from "src/app/models/sso-models/team";
import { BaseModel } from "./base";
import { Branch } from "./branch";
import { District } from "./district";
import { Employee } from "./employee";
import { Process } from "./process";
import { SubProcess } from "./subProcess";

export class AuthorityDTO extends BaseModel {
    employee: Employee;
    team: Team;
    subProcess: SubProcess;
    process : Process;
    branch : Branch;
    district : District;
    createdAt : string;
    updatedAt : string;
    status : string;

}
