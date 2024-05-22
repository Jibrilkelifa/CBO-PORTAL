import { Branch } from "src/app/models/sso-models/branch";
import { SubProcess } from "src/app/models/sso-models/sub-process";
import { Team } from "src/app/models/sso-models/team";
import { TradeStatusModel} from "./trade-status-model"

export class TradeModel {
    id: number;
    tradeDate: Date;
    name:string;
    caseId: string; 
    allCategory: any; 
    allSubCategory: any; 
    tradeType:any;
    // tradeNumber: string; 
    // tradeHoldersName: string; 
    referenceNumber: string; 
    irregularity: string; 
    otherIrregularity: string; 
    // amountInvolved: string; 
    customerName: string; 
    responsiblePerson: string; 
    tradeStatus: TradeStatusModel;
    subProcess:SubProcess;
    branch: Branch;
    team: Team;
    actionTaken:boolean;
     actionPlanDueDate: string;
}
