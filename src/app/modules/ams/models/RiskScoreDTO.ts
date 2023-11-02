import { AnnualPlanDTO } from "./annualPlan";
import { BaseModel } from "./base";
import { RiskItemDTO } from "./riskItemDTO";

export interface RistScoreDTO extends BaseModel {
    riskItem: RiskItemDTO ;
    likelihood: number;
    impact: number;
    total : number;
    percentage : number;
    isWaited : boolean;
}
