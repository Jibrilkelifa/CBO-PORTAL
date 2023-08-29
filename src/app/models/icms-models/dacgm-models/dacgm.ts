import { OrganizationalUnit } from '../../cas-models/organizational-unit'
import { AllIrregularity } from '../all-irregularity'
import { ActivityStatus } from './activity-status'
export interface DACGM {
  id: number,
  date: string,
  caseId: string,
  accountNumber: string,
  accountName: string,
  amountInvolved: string,
  responsiblePerson: string,
  actionPlanDueDate: string,
  activityStatus: ActivityStatus,
  irregularity: AllIrregularity,
  otherIrregularity: string,
  organizationalUnit: OrganizationalUnit
}
