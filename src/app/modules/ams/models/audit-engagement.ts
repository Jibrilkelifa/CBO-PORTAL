import { AuditScheduleDTO } from "./auditSchedule";
import { BaseModel } from "./base";

export class AuditEngagementDTO  extends BaseModel {
    auditSchedule: AuditScheduleDTO;
    status: string;
}
