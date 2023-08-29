import { Employee } from "./employee";
import { Role } from "../role";

export interface User {
  id: number;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  otp: boolean;
  employee: Employee;
  roles: [Role]
}
