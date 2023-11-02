import { Branch } from "../../../models/sso-models/branch";
import { SubProcess } from "../../../models/sso-models/sub-process";

export interface CIPM {
  id: number;
  borrowerName: string,
  mortgagorName: string,
  loanAccount: string,
  loanType: string,
  preparedBy: string,
  preparationTimeStamp: string,
  authorizedBy: string,
  authorizationTimeStamp: string,
  collateralType: {
    id: number
  },
  status: {
    id: number
  },
  otherCollateralType: string,
  insuranceCoverageType: {
    id: number
  },
  otherInsuranceCoverageType: string,
  insuredName: string,
  isAuthorized:boolean,
  insuranceExpireDate: string,
  branch:Branch;
  subProcess:SubProcess;
}

