import { AuditableAreasDTO } from './auditableAreas';
import { BaseModel } from './base';

export class CkeckListItemDTO extends BaseModel {
  name: string;
  description: string;
  auditableArea: AuditableAreasDTO;
  objective_list: string[];
  action_list: string[];
}
