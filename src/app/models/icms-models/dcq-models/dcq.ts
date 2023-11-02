import { ChequeType } from './cheque-type'
import { ActionTaken } from './action-taken'
import { Branch } from '../../sso-models/branch';
import { SubProcess } from '../../sso-models/sub-process';
// import { OrganizationalUnit } from '../../sso-models/branch';

export interface DCQ {
  datePresented: string,
  fullNameOfDrawer: string,
  accountNumber: string,
  drawerAddress: string,
  amountInBirr: string;
  actionTaken: ActionTaken,
  chequeNumber: string,
  frequency: string,
  tin: string,
  chequeType: ChequeType,
  nameOfBeneficiary: string,
  branch: Branch,
  subProcess:SubProcess
}
