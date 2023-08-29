import { ChequeType } from './cheque-type'
import { ActionTaken } from './action-taken'
import { OrganizationalUnit } from '../../cas-models/organizational-unit';

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
  organizationalUnit: OrganizationalUnit,
}
