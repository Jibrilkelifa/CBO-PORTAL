interface RegulationSummary {
  regulationType: string;
  publicationDate: string;
  numberTitle: string;
  publicationUrl: string;
}

interface NameAlias {
  firstName: string;
  remark: null | string;
  middleName: string;
  lastName: string;
  wholeName: string;
  function: string;
  gender: null | string;
  title: string;
  nameLanguage: string;
  strong: string;
  regulationLanguage: string;
  logicalId: string;
  regulationSummary: RegulationSummary;
  id: string;
}

interface Citizenship {
  region: string;
  countryIso2Code: string;
  countryDescription: string;
  regulationLanguage: string;
  logicalId: string;
  regulationSummary: RegulationSummary;
  remark: null | any; // You can replace 'any' with the correct type once you know it
}

interface BirthDate {
  circa: string,
  calendarType: string,
  city: string,
  zipCode: string,
  year: string,
  region: string,
  place: string,
  countryIso2Code: string,
  countryDescription: string,
  regulationLanguage: string,
  logicalId: string,
  birthdate: null | string,
  dayOfMonth: null | string,
  monthOfYear: null | string,
  regulationSummary: RegulationSummary,
  remark: null | string
  yearRangeFrom: null | string
  yearRangeTo: null | string
}

export interface EU_ {
  designationDetails: string,
  address: null | any, // You can replace 'any' with the correct type once you know it
  unitedNationId: string,
  logicalId: string,
  remark: string,
  regulation: {
    regulationType: string,
    organisationType: string,
    publicationDate: string,
    entryIntoForceDate: string,
    numberTitle: string,
    programme: string,
    logicalId: string,
    publicationUrl: string
  },
  subjectType: {
    code: string,
    classificationCode: string
  },
  nameAlias: Array<NameAlias>,
  citizenship: Citizenship,
  birthDate: BirthDate,
  identification: null | string,
  designationDate: null | string,
  id: string
}
