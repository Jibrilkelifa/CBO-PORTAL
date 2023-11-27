export interface IFRSummary {
  id: number,
  categoryId: number,
  otherFraudCategory: string,
  fraudTypeId: number,
  otherFraudType: string,
  outstandingCaseAsOfPreviousQuarter: {
    count: number,
    amount: number
  },
  newCaseDuringCurrentQuarter: {
    count: number,
    amount: number
  },
  closedCasesDuringCurrentQuarter: {
    count: number,
    amount: number
  },
  outstandingCaseAsOfCurrentQuarter: {
    count: number,
    amount: number
  },
  totalAmountRecovered: number,
  provisionForOutstandingCases: number,
  amountRecoveredInCurrentQuarter: number,
  writtenOffInCurrentQuarter: {
    count: number,
    amount: number
  },
}
