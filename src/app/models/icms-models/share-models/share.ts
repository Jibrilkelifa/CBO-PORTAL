// import { OrganizationalUnit } from '../../sso-models/branch'
import { Branch } from '../../sso-models/branch'
import { AllIrregularity } from '../all-irregularity'
import { ShareStatus } from './share-status'
import { SubProcess } from '../../sso-models/sub-process'
export interface Share {
  id: number,
  date: string,
  caseId: string,
  // accountNumber: string,
  // accountName: string,
  amountInvolved: string,
  responsiblePerson: string,
  shareNumber: string,
  shareHolderName: string,
  shareStatus: ShareStatus,
  irregularity: AllIrregularity,
  otherIrregularity: string,
  branch: Branch,
  subProcess: SubProcess,
  // escalatedByManager:boolean,
  // actionTaken:boolean

   
}

