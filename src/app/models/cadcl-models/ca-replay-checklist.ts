import { CusInfo } from "./cus-info";

export class CAReplayCheckList{

    id: number;
    customerName: String;
    accountNumber: String;
    description: String;
    amount: String;
    justification: String;
    responseDate: String;
    replayedUser: String;
    userPosition: String;
    activityPerformed: String;
    otherActivityPerformed: String;
    checklistId: number;
    attachments: String;
    branchId: number;
    branchName: String;
    replayed: boolean;
    accepted: boolean;
    rejected: boolean;
    rejectionReason: String;
    replayFileLinks: String [];
    cusInfoRes: CusInfo [];
}