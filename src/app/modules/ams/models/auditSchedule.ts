import { AnnualPlanDTO } from "./annualPlan";
import { TeamMemberDTO } from "./team-member";
import { BaseModel } from "./base";

export class AuditScheduleDTO extends BaseModel {
  
    startOn: string;
    endOn: string;
    status: string;
    quarter: number;
    auditeesOrganID:number;
    dateCompleted : Date;
    totalCost : number;
    involvesTravel: boolean;
    teamMembers : TeamMemberDTO[];
    annualPlan : AnnualPlanDTO;
}

