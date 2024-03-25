import { Branch } from "src/app/models/sso-models/branch";
import { SubProcess } from "src/app/models/sub-process";

export class FireExtinguisherModel {
    id: number;
    branch:Branch;
    subProcess:SubProcess;
    extinguisherSerialNumber: any; 
    size: any; 
    inspectionDate: Date; 
    nextInspectionDate: Date; 
    daysLeftForInspection: number; 
    status: any; 
}
