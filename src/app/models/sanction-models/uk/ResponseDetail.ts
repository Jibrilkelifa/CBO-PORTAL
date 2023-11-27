import { Name } from "./Name";
import { NationalIdentifier } from "./NationalIdentifier";
import { NonLatinName } from "./NonLatinName";
import { Passport } from "./Passport";
import { UkAddress } from "./UkAddress";

export interface ResponseDetail {
  dateDesignated: string;
  designationSource: string;
  individualEntityShip: string;
  lastUpdated: string;
  oFSIgroupId: string;
  otherInformation: string;
  regimeName: string;
  sanctionImposed: string;
  ukStatementOfReasons: string;
  unReferenceNumber: string;
  uniqueId: string;
  locationList: Location[];
  emailAddress: string[];
  gender: string;
  iMONumber: string[];
  names: Name[];
  dobs: string[];
  nationalIdentifierList: NationalIdentifier[];
  nonLatinNameList: NonLatinName[];
  passportList: Passport[];
  phoneNumber: string[];
  position: string[];
  subsidiaryList: string[];
  titles: string[];
  typeOfEntity: string;
  ukAddressList: UkAddress[];
  parentCompanyList: string[];
  businessRegistrationNumber: string;
  nationality: string[];
  websiteList: string[];
}
