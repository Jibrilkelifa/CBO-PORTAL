import { BaseModel } from './base';
import { OrganizationalUnit } from './organizationalunit';
import { Process } from './process';
import { District } from './district';
import { SubProcess } from './subProcess';
import { Branch } from './branch';

export class StampDTO extends BaseModel {
  organizationUnitId: number;
  subProcessId: number;
  processId: number;
  districtId: number;
  branchId: number;
  stamp: BinaryData;

  organizationalUnit: OrganizationalUnit;
  subProcess: SubProcess;
  process : Process;
  district : District;
  branch : Branch;
}

