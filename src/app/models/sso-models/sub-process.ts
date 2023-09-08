import { Shared } from "./shared";

export interface SubProcess {
  id: number;
  name: string;
  category: Shared;
  process: Shared;
  workCenter: Shared;
}
