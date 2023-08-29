import { Module } from "./cas-models/module";

export interface Role {
  id: number;
  name: string;
  module: Module;
}
