import { Branch } from "src/app/models/sso-models/branch";
import { SubProcess } from "src/app/models/sso-models/sub-process";
import { Team } from "src/app/models/sso-models/team";
import { ShareStatusModel } from "./share-status-model"

export class ShareModel {
    id: number;
    shareDate: Date;
    caseId: string;
    allCategory: any;
    allSubCategory: any;
    shareNumber: string;
    shareHoldersName: string;
    irregularity: string;
    otherIrregularity: string;
    amountInvolved: string;
    responsiblePerson: string;
    shareStatus: any;
    subProcess: SubProcess;
    branch: Branch;
    team: Team;
    actionTaken: boolean;
    actionPlanDueDate: string;
}
