import {User} from '../../../models/sso-models/user';
import {Batch} from '../models/batch';
export interface Message{
    messageBatchDate: any;
    id: number;
    Batch: Batch;
    phoneNumber: string;
    userName: string;
    user: User;
    messageContent: string;
    status: number;
  }
  