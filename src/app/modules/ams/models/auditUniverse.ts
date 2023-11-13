import { AuditObjectDTO } from "./auditObject";
import { AuditType } from "./auditType";
import { BaseModel } from "./base";

export class AuditUniverseDTO extends BaseModel {
    name: string;
    auditType: AuditType;
    status : string;
    approvedBy : string;
    approvedAt : Date;
    auditObject : AuditObjectDTO;
}
