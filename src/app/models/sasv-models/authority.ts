import { Employee } from "../cas-models/employee";

export interface Authority {
    id: number;
    employee: Employee;
    active: boolean;
}
