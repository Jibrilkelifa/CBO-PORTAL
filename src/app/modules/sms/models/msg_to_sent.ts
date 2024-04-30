export interface Msg_to_sent {
    id: number;
    messageContent: string;
    expiryDate: Date;
    listOfCategory: string[];
    processOfSender: string;
    subProcessOfSender: string;
    employee: string;
    isAuthorized: boolean;

  }
  