import { Branch } from "src/app/models/sso-models/branch";
import { SubProcess } from "src/app/models/sso-models/sub-process";
import { Team } from "src/app/models/sso-models/team";
import { ProcurementStatusModel} from "./procurement-status-model"
import { AllIrregularity } from "src/app/models/icms-models/all-irregularity";

export class ProcurementModel {
    id: number;
    procurementDate: Date;
    name:string;
    caseId: string; 
    allCategory: any; 
    allSubCategory: any; 
    referenceNumber: string; 
    irregularity: AllIrregularity; 
    customerName: string; 
    amountInvolved: string;
    responsiblePerson: string; 
    procurementStatus: ProcurementStatusModel;
    subProcess:SubProcess;
    branch: Branch;
    team: Team;
    actionTaken:boolean;
    actionPlanDueDate: string;
    otherIrregularity: string; 
}
