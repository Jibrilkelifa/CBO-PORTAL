import { RegulationSummary } from "./RegulationSummary";

export interface Address {
  city: string;
  street: string;
  poBox: string;
  zipCode: string;
  region: string;
  place: string;
  asAtListingTime: string;
  countryIso2Code: string;
  countryDescription: string;
  regulationLanguage: string;
  logicalId: string;
  contactInfo: string;
  regulationSummary: RegulationSummary;
  remark: string;
}
