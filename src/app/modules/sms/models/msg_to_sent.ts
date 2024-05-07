import { Category } from "./category";

export interface Msg_to_sent {
    id:number;
    messageContent: string;
    expiryDate: String;
    listOfCategory: Category[];
    processOfSender: number;
    subProcessOfSender: number;
    employee: number;
    isAuthorized: boolean;

  }
  