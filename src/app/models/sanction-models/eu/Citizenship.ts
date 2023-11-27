import { RegulationSummary } from "./RegulationSummary";

export interface Citizenship {
  region: string;
  countryIso2Code: string;
  countryDescription: string;
  regulationLanguage: string;
  logicaId: string;
  regulationSummary: RegulationSummary;
  remark: string;
}
