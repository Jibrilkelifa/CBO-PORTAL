import { UserDTO } from "./userDTO";
import { BaseModel } from "./base";

export class TeamMemberDTO extends BaseModel {
    auditScheduleId: number;
    status: string;
    user: UserDTO;
    teamMemberStatus: string;
    teamType: string;
    auditStatus: string;
    perdium: number;
}
