import { CAReplayCheckList } from "./ca-replay-checklist";

export class CADailyCheckList{

    id: number;
    inquiryType: String;
    otherInquiryType: String;
    description: String;
    requestedOrgan: String;
    inquiryReceived: String;
    numAccountSearched: number;
    deadline: String;
    referenceNum: String;
    numRequestedOrgans: number;
    numPersonSearched: number;
    branches: String[];
    responseDate: String;
    sentAt: String;
    catagoryMain: String;
    category: String;
    taskCollectedDate: String;
    responseDelivered: String;
    responseLetterPrep: String;
    deliveredBy: String;
    caseOwner: String;
    taskStatus: String;
    justification: String;
    urgency: String;
    impact: String;
    replyCheckLists: CAReplayCheckList[];
    closed: boolean;
    statusPercent: number;
    // attachments
    attachments: String;
}