import { AuditStaffDTO } from "./auditStaff";
import { BaseModel } from "./base";

export class TeamMemberDTO extends BaseModel {
    status : string;
    auditScheduleId: number;
    auditStaffDTO: AuditStaffDTO;
    teamRole: string;
    auditStatus: string;
    perdium: number;
}
