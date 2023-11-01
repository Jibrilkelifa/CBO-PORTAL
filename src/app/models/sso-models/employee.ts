import { Job } from "./job";
import { Branch } from "./branch";
import { Shared } from "./shared";
import { SharedWithCode } from "./shared-with-code";
import { Team } from "./team";

export interface Employee {
  id: number;
  employeeId : number;
  employeeSapUserName : string;
  employeeFullName : string;
  supervisorId : number;
  supervisorFullName : string;
  hrManagerId : number;
  hrManagerFullName : string;
  companyEntryDate : string;
  latestPositionEntryDate : string;
  gender : string;
  salutation : string;
  job : Job;
  branch : Branch;
  position : Shared;
  team : Team;
  subProcess : SharedWithCode;
  process : SharedWithCode;
  supervisor:boolean;
  subordinateIds :BigInt[];

}
