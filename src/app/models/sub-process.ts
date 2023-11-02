import { Shared } from "./sso-models/shared";
export interface SubProcess {
  id: number;
  name: string;
  category: Shared;
  process: Shared;
  workCenter: Shared;
}