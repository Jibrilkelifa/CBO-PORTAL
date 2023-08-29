export interface UNindividual_ {
  dataId: string;
  firstName: string;
  secondName: string;
  thirdName: string;
  fourthName: null | string;
  unListType: string;
  referenceNumber: string;
  listedOn: string;
  comments1: string;
  designation: {
    value: string;
    id: null | string;
  };
  individualPlaceOfBirth: string;
  sortKey: string;
  sortKeyLastMod: string;
  individualAddress: {
    country: string;
    note: null | string;
    stateProvince: null | string;
    street: null | string;
    city: null | string;
    zipCode: null | string;
    id: null | string;
  };
  individualAlias: {
    quality: string;
    aliasName: string;
    note: null | string;
    dateOfBirth: null | string;
    cityOfBirth: null | string;
    countryOfBirth: null | string;
    id: null | string;
  };
  individualDateOfBirth: {
    typeOfDate: string;
    date: string;
    year: null | number;
    fromYear: null | number;
    toYear: null | number;
    note: null | string;
    id: null | number
  };
  individualDocument: {
    typeOfDocument: string,
    number: string,
    issuingCountry: null | string,
    stateProvince: null | string,
    note: null | string,
    countryOfIssue: null | string,
    typeOfDocument2: null | string,
    dateOfIssue: null | string,
    cityOfIssue: null | string,
    id: null | string
  },
  lastDayUpdated: {
    value: string,
    id: null | string
  },
  listType: string,
  nationality: {
    value: string,
    id: null | string
  },
  nameOriginalScript: null | string,
  gender: null | string,
  title: null | string,
  submittedBy: null | string,
  id: null | string,
  versionNum: string
}
