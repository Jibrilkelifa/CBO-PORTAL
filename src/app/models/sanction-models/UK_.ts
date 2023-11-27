interface Name {
  id: number;
  name6: string;
  nameType: string;
  name2: string | null;
  name5: string | null;
  name3: string | null;
  name4: string | null;
  name1: string | null;
  aliasStrength: string | null;
}

interface Names {
  nameList: Name[];
  id: number;
}
interface SanctionsImposedIndicators {
  id: number;
  crewServicingOfShipsAndAircraft: string;
  charteringOfShips: string;
  preventionOfCharteringOfShips: string;
  trustServicesSanctions: string;
  prohibitionOfPortEntry: string;
  closureOfRepresentativeOffices: string;
  targetedArmsEmbargo: string;
  technicalAssistanceRelatedToAircraft: string;
  preventionOfCharteringOfShipsAndAircraft: string;
  preventionOfBusinessArrangements: string;
  armsEmbargo: string;
  assetFreeze: string;
  deflag: string;
  travelBan: string;
}


interface NonLatinName {
  id: number;
  nonLatinScriptType: string | null;
  nonLatinScriptLanguage: string | null;
  nameNonLatinScript: string;
}

interface NonLatinNames {
  nonLatinNameList: NonLatinName[];
  id: number;
}

interface PhoneNumbers {
  phoneNumber: Array<string>;
  id: number;

}
interface EmailAddresses {
  emailAddrss: Array<string>;
  id: number;
}
interface UkAddressList {
  id: number;
  addressPostalCode: string;
  addressLine3: string;
  addressLine6: string;
  addressLine2: string;
  addressLine5: string;
  addressCountry: string;
  addressLine4: string;
  addressLine1: string;

}

interface Addresses {
  ukAddressList: Array<UkAddressList>,
  id: number;
}

interface Subsidiaries {
  id: number;
  subsidiary: string;
}

interface ParentCompanies {
  id: number;
  parentCompanies: string;
}

interface BusinessRegistrationNumbers {
  id: number;
  businessRegistrationNumbers: string;
}
interface TypeOfEntities {
  id: number;
  typeOfEntities: string;
}

interface UkEntity {
  typeOfEntities: TypeOfEntities;
  businessRegistrationNumbers: BusinessRegistrationNumbers;
  parentCompanies: ParentCompanies;
  subsidiaries: Subsidiaries;
  id: number;

}
interface EntityDetails {
  ukEntity: Array<UkEntity>;
  id: number;
}
interface Nationalities {
  id: number;
  nationality: Array<string>;
}
interface Genders {
  gender: string;
  id: number;
}

interface NationalIdentifier {
  id: number;
  nationalIdentifierNumber: string;
  nationalIdentifierAdditionalInformation: string;
}
interface NationalIdentifierDetails {
  nationalIdentifier: Array<NationalIdentifier>;
  id: number;
}



interface Passports {
  id: number;
  passportNumber: string;
  passportAdditionalInformation: string;
}
interface PassportDetails {
  passports: Array<Passports>;
}


interface LocationList {
  id: number;
  countryOfBirth: string;
  townOfBirth: string;
}
interface BirthDetails {
  locationList: Array<LocationList>;
  id: number;
}

interface Positions {
  position: Array<string>;
  id: number;
}

interface DoBs {
  id: number;
  dob: Array<string>;
}
interface Individual {
  doBs: DoBs;
  positions: Positions;
  birthDetails: BirthDetails;
  passportDetails: PassportDetails;
  nationalIdentifierDetails: NationalIdentifierDetails;
  genders: Genders;
  id: number;
  nationalities: Nationalities;

}
interface IndividualDetails {
  individual: Array<Individual>;
  id: number;
}

interface Titles {
  id: number;
  title: Array<string>;
}

interface Websites {
  websiteList: Array<string>;
  id: number;
}

export interface UK_ {
  names?: Names,
  nonLatinNames?: NonLatinNames,
  sanctionsImposedIndicators?: SanctionsImposedIndicators,
  individualDetails?: IndividualDetails,
  titles?: Titles,
  phoneNumbers?: PhoneNumbers,
  emailAddresses?: EmailAddresses,
  entityDetails?: EntityDetails,
  websites?: Websites,
  shipDetails?: any,
  id?: number,
  dateDesignated?: string,
  lastUpdated?: string,
  ofsigroupID?: string,
  regimeName?: string,
  uniqueID?: string,
  otherInformation?: string,
  unreferenceNumber?: string,
  designationSource?: string,
  sanctionsImposed?: string,
  ukstatementofReasons?: string,
  individualEntityShip?: string,
  addresses?: Addresses
}
