import { Dependency } from "../models";

export type DependencyOutputter = (dependency: Dependency) => string;
export type MetadataOutputter = (
  uniqueCount: number,
  whitelistedCount: number,
  warnCount: number,
  blacklistedCount: number
) => void;
