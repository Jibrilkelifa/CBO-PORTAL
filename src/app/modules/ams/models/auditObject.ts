import { AuditType } from "./auditType";
import { BaseModel } from "./base";

export class AuditObjectDTO extends BaseModel {
    name: string;
    description: string;
    auditType: AuditType;
}
