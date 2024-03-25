import {User} from '../../../models/sso-models/user';
import {Batch} from './batch';
export interface Summary{
  
    success: number;
    failed: number;
    pending:number;
    cost: number;
   
  }
  