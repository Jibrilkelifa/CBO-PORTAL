import { Employee } from "../sso-models/employee";

export interface AuthorityC {
    id: number;
    employee: Employee;
    stamp: string;
    signature: string;
    active: boolean
}
