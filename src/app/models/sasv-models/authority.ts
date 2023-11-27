import { Employee } from "../sso-models/employee";

export interface Authority {
    id: number;
    employee: Employee;
    active: boolean;
}
