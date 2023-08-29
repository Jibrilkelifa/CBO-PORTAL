import { OrganizationalUnit } from "./organizational-unit";

export interface Employee {
  id: number;
  employeeId : string;
  fullName : string;
  jobTitle : string;
  organizationalUnit : OrganizationalUnit;
  personalEmail : string;
  companyEmail : string;
  phoneNumber : string;
  employeeImage : string;
  signatureImage : string;
  gender : string;
  birthDate : string;
}
