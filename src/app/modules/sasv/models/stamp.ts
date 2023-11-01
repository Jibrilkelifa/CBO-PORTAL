import { BaseModel } from './base';
import { Process } from './process';
import { District } from './district';
import { SubProcess } from './subProcess';
import { Branch } from './branch';
import { Team } from 'src/app/models/sso-models/team';

export class StampDTO extends BaseModel {
  teamId:number;
  subProcessId: number;
  processId: number;
  branchId: number;
  districtId: number;
  stamp: BinaryData;
  team: Team;
  subProcess: SubProcess;
  process : Process;
  branch : Branch;
  district : District;
}

