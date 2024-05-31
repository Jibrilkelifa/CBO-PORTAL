
import { AuditType } from "./auditType";
import { BaseModel } from "./base";

export class RiskLevelDTO extends BaseModel {
    low:string;
    medium:string;
    high:string;
    auditType:AuditType;
}
