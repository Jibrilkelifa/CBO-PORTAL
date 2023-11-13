import { AuditType } from "./auditType";
import { UserDTO } from "./userDTO";
import { BaseModel } from "./base";

export class AuditStaffDTO extends BaseModel {
    auditType : AuditType;
    user : UserDTO;
    status : string;
}

