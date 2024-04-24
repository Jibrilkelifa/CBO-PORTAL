import { AuditType } from "./auditType";
import { AuditUniverseDTO } from "./auditUniverse";
import { BaseModel } from "./base";

export class AuditObjectDTO extends BaseModel {
    name: string;
    description: string;
    auditType: AuditType;
    auditUniverse: AuditUniverseDTO;
    status:string;
}
