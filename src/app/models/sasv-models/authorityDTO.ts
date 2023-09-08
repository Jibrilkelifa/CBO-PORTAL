import { Employee } from "../sso-models/employee";

export class AuthorityDTO {
  id: number;
  employee: Employee;
  // division: Division;
  active: boolean;
}
