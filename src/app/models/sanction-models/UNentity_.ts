export interface UNentity_ {
  dataId: string;
  firstName: string;
  secondName: null | string;
  thirdName: null | string;
  unListType: string;
  referenceNumber: string;
  listedOn: string;
  comments1: string;
  listType: string;
  lastDayUpdated: {
    value: string;
    id: number;
  };
  unEntityAlias: {
    quality: string;
    aliasName: string;
    note: null | string;
    dateOfBirth: null | string;
    cityOfBirth: null | string;
    countryOfBirth: null | string;
    id: number;
  };
  unEntityAddress: {
    city: string;
    country: string;
    note: null | string;
    stateProvince: null | string;
    street: null | string;
    zipCode: null | string;
    id: number;
  };
  sortKey: string;
  sortKeyLastMod: string;
  nameOriginalScript: null | string;
  submittedOn: null | any; // You can replace 'any' with the correct type once you know it
  id: number;
  versionNum: string;
}
