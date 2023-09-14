import { Employee } from "./employee";
import { Role } from "../role";

export interface User {
  id: number;
  username: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  employee: Employee;
  roles: [Role]
}

