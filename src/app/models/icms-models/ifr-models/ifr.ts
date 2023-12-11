import { SuspectedFraudsterProfession } from './suspected-fraudster-profession'
import { CaseStatus } from './case-status'
import { AllCategory } from '../all-category'
import { FraudType } from './fraud-type'
import { Branch } from '../../sso-models/branch';
import { SubProcess } from '../../sso-models/sub-process';
import { Team } from '../../sso-models/team';
// import { OrganizationalUnit } from '../../sso-models/branch';

export interface IFR {
  id: number,
  caseId: string,
  caseStatus: CaseStatus,
  preparedBy: string,
  authorizedBy: string,
  authorizationTimeStamp: string,
  fraudCause: string,
  fraudAmount: string,
  allCategory: AllCategory,
  otherFraudCategory: string,
  fraudType: FraudType,
  otherFraudType: string,
  fraudOccurrenceDate: string,
  fraudDetectionDate: string;
  fraudOccurrencePlace: string,
  fraudCommittingTechnique: string,
  reasonForDelay: string,
  reasonForFailedFraudAttempt: string,
  amountRecovered: string,
  provisionHeld: string,
  actionTaken: string,
  suspectedFraudsterAddress: string,
  suspectedFraudsterName: string,
  suspectedFraudsterProfession: SuspectedFraudsterProfession,
  otherSuspectedFraudsterProfession: string,
  otherComment: string,
  branch: Branch,
  team: Team,
  isWrittenOff:boolean,
  isAuthorized:boolean,
  inCaseOfClosedOrWrittenOff,
  subProcess:SubProcess,
  fileName: string,
  filePath: string,
  fileData: ArrayBuffer,
  addedByRole: string;
}
