import { AuditType } from "./auditType";
import { UserDTO } from "./userDTO";
import { BaseModel } from "./base";

export class AuditCommentDTO extends BaseModel {
    originalfinding : String;
    comment : String;
    providedBy : String;
}
 
