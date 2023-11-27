import { Module } from "./sso-models/module";

export interface Role {
  id: number;
  name: string;
  module: Module;
}
