import { RistScoreDTO } from "./RiskScoreDTO";
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
    auditUniverse : AuditUniverseDTO;
    riskScores : RistScoreDTO[];
}

