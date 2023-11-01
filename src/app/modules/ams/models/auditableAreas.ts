import { AuditObjectDTO } from './auditObject';
import { BaseModel } from './base';

export class AuditableAreasDTO extends BaseModel {
  name: string;
  description: string;
  auditObject: AuditObjectDTO;
}
