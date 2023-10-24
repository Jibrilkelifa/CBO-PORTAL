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
  otherCollateralType: string,
  insuranceCoverageType: {
    id: number
  },
  otherInsuranceCoverageType: string,
  insuredName: string,
  insuranceExpireDate: string,
  branch: {
    id: number
  }
}

