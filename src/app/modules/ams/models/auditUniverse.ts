import { AuditObjectDTO } from "./auditObject";
import { AuditType } from "./auditType";
import { BaseModel } from "./base";

export class AuditUniverseDTO extends BaseModel {
    name: string;
    status : string;
    approvedBy : string;
    approvedAt : Date;
}
