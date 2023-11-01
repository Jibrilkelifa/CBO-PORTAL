import { BaseModel } from "./base";
import { UserDTO } from "./userDTO";
export interface Employee extends BaseModel{
    employeeId: number;
    fullName: string;
    jobTitle: string;
    phoneNumber: string;
    personalEmail: string;
    companyEmail: string;
    gender: string;
    birthDate: string;
    employeeImage: string;
    signatureImage: string;
    active: Boolean;
    user: UserDTO;

}
