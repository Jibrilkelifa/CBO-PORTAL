import { AuditType } from "./auditType";
import { UserDTO } from "./userDTO";
import { BaseModel } from "./base";

export class AuditStaffDTO extends BaseModel {
    auditType : AuditType;
    employeeId : string;
    fullName : string;
    status : string;
}


 
