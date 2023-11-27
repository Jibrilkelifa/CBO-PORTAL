import { RegulationSummary } from "./RegulationSummary";

export interface Identification {
  remark: string;
  diplomatic: string;
  knownExpired: string;
  knownFalse: string;
  reportedLost: string;
  revokedByIssuer: string;
  eportedLost: string;
  issuedBy: string;
  latinNumber: string;
  nameOnDocument: string;
  number: string;
  region: string;
  identificationTypeCode: string;
  identificationTypeDescription: string;
  countryIso2Code: string;
  countryDescription: string;
  regulationLanguage: string;
  logId: string;
  regulationSummary: RegulationSummary;
  validTo: string;
  validFrom: string;
  issueDate: string;
}
