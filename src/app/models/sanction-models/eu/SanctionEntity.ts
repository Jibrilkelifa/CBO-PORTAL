import { Address } from "./Address";
import { BirthDate } from "./BirthDate";
import { Citizenship } from "./Citizenship";
import { Identification } from "./Identification";
import { NameAlias } from "./NameAlias";
import { Regulation } from "./Regulation";
import { SubjectType } from "./SubjectType";

export interface SanctionEntity {
  Id: string;
  designationDetails: string;
  address: Address;
  unitedNationId: string; z
  logicalId: string;
  remark: string;
  regulation: Regulation;
  subjectType: SubjectType;
  nameAlias: NameAlias[];
  citizenship: Citizenship[];
  birthDate: BirthDate[];
  identification: Identification;
  designationDate: string;
}
