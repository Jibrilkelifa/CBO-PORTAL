import { Shared } from "../shared";
import { SubProcess } from "../sub-process";

export interface OrganizationalUnit {
  id: number;
  code: string;
  name: string;
  mnemonic: string;
  area: string;
  town: string;
  telephone: string;
  category: Shared;
  subProcess: SubProcess;
}
