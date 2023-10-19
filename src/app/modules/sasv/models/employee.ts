import { Position } from "ngx-perfect-scrollbar";
import { BaseModel } from "./base";
import { Process } from "./process";
import { SubProcess } from "./subProcess";
import { Branch } from "./branch";
import { Job } from "src/app/models/sso-models/job";
import { Team } from "src/app/models/sso-models/team";

export class Employee extends BaseModel {
    employeeId: number;
    employeeSapUserName: string;
    employeeFullName : string;
    supervisorId: number;
    supervisorFullName:string;
    hrManagerId: number;
    hrManagerFullName: string;
    companyEntryDate: string;
    latestPositionEntryDate: string;
    gender: string;
    salutation: boolean;
    job:Job;
    branch:Branch;
    position:Position;
    team:Team;
    subProcess:SubProcess;
    process:Process;
}
