import { User } from "./user";

export interface JwtResponse {
  user: User;
  accessToken: string;
}
