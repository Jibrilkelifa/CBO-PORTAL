import { AuditProgramDTO } from "./audit program";
import { AuditableAreasDTO } from "./auditableAreas";
import { AuditEngagementDTO } from "./audit-engagement";
import { AuditScheduleDTO } from "./auditSchedule";
import { AuditType } from "./auditType";
import { BaseModel } from "./base";

export class FindingDTO extends BaseModel {
        auditProgram: AuditProgramDTO;
        finding: String;
        criteria:String;
        area: AuditableAreasDTO;
        cause:String;
        implementedControls:String;
        impact:String;
        recommendations:String;
        //im not sure if user insert auditees, auditeesResponse
        // auditees:String;
        // auditeesResponse:String;
        justifications:String;
        isVisibleToAuditees:String;
        // no user structure so i can't include registred by and approved by 
        //registeredBy       
        //approvedBY
        //what is responseTime? 
        //responseTime
        rectificationStatus:Boolean;
        rectificationProgress:String;
        rectificationEvidenceAttachmentPath:String;
        //again what is this?
        //rectificationTime  
        isRectificationApproved:Boolean;
        findingEvidenceFileUploadedToSupplementTheFindings:String; 
}
