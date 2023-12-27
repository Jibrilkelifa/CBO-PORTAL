import { AuditProgramDTO } from "./audit program";
import { AuditEngagementDTO } from "./audit-engagement";
import { AuditScheduleDTO } from "./auditSchedule";
import { AuditType } from "./auditType";
import { BaseModel } from "./base";

export class WBS_DTO extends BaseModel {
    name: string;
    description: string;
    auditProgram: AuditProgramDTO;
    status : string;
}
