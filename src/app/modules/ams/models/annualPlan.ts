import { RistScoreDTO } from "./RiskScoreDTO";
import { AuditObjectDTO } from "./auditObject";
import { AuditUniverseDTO } from "./auditUniverse";
import { BaseModel } from "./base";

export class AnnualPlanDTO extends BaseModel {
    name: string;
    description: string;
    year: string;
    riskLevel : string;
    riskScore : number;
    status : string;
    rectificationStatus : string;
    auditObject : AuditObjectDTO;
    riskScores : RistScoreDTO[];
    auditeesOrganID:number;

}

