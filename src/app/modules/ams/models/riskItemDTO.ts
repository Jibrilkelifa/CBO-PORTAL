import { BaseModel } from "./base";

export class RiskItemDTO extends BaseModel {
    name: string;
    strategicObjectiveLink: number;
    riskType: string;
}

