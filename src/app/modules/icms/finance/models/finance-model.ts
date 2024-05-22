import { Branch } from "src/app/models/sso-models/branch";
import { SubProcess } from "src/app/models/sso-models/sub-process";
import { Team } from "src/app/models/sso-models/team";
import { FinanceStatusModel} from "./finance-status-model"

export class FinanceModel {
    id: number;
    financeDate: Date;
    caseId: string; 
    allCategory: any; 
    allSubCategory: any; 
    accountNumber: string; 
    irregularity: string; 
    amount: string; 
    responsiblePerson: string; 
    subProcess:SubProcess;
    branch: Branch;
    team: Team;
    financeStatus: any;
    actionTaken:boolean;
    actionPlanDueDate: string;
}
