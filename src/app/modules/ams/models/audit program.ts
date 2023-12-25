import { AuditEngagementDTO } from "./audit-engagement";
import { AuditScheduleDTO } from "./auditSchedule";
import { AuditType } from "./auditType";
import { BaseModel } from "./base";

export class AuditProgramDTO extends BaseModel {
    name: string;
    auditType: AuditType;
    status : string;
    previousStatus: string;
    previousDescription:string;
    methodology : string;
    scopeDescription : string;
    auditObject : AuditScheduleDTO;
    overAllTime: Date;
    engagementInfo: AuditEngagementDTO;
    

}
