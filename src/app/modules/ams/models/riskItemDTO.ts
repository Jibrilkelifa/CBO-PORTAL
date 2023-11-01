import { BaseModel } from "./base";

export interface RiskItemDTO extends BaseModel {
    name: string;
    strategicObjectiveLink: number;
    riskType: string;
}

