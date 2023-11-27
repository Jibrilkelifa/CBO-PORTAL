import { RegulationSummary } from "./RegulationSummary";

export interface NameAlias {
  id: string;
  firstName: string;
  remark: string;
  middleName: string;
  lastName: string;
  wholeName: string;
  function: string;
  gender: string;
  title: string;
  nameLanguage: string;
  strong: string;
  regulationLanguage: string;
  logicalId: string;
  regulationSummary: RegulationSummary;
}
