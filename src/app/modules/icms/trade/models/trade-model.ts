import { Branch } from "src/app/models/sso-models/branch";
import { SubProcess } from "src/app/models/sso-models/sub-process";
import { Team } from "src/app/models/sso-models/team";
import { TradeStatusModel} from "./trade-status-model"

export class TradeModel {
    id: number;
    shareDate: Date;
    name:string;
    caseId: string; 
    allCategory: any; 
    allSubCategory: any; 
    shareNumber: string; 
    shareHoldersName: string; 
    irregularity: string; 
    otherIrregularity: string; 
    amountInvolved: string; 
    responsiblePerson: string; 
    shareStatus: TradeStatusModel;
    subProcess:SubProcess;
    branch: Branch;
    team: Team;
    actionTaken:boolean;
     actionPlanDueDate: string;
}
