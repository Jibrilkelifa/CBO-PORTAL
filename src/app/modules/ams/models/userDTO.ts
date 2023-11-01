import { BaseModel } from './base';
import { Employee } from './employee';

export class UserDTO extends BaseModel {
    username: string;
    password: string;
    active: Boolean;
    employee: Employee;
}
