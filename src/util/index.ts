import { getConfiguration, getConfigurationFromUrl } from "./configuration";
import { removeDuplicates } from "./duplicate-remover";
import { mapLicenseByGroupings } from "./map-license-by-groupings";
import { getLicensesMarkdown } from "./markdown-helpers";
import { DependencyOutputter, MetadataOutputter } from "./outputters";
import {
  getCallingProjectVersionString,
  getCurrentVersionString,
} from "./root-project";

export type { DependencyOutputter, MetadataOutputter };

export {
  getCallingProjectVersionString,
  getConfiguration,
  getConfigurationFromUrl,
  getCurrentVersionString,
  getLicensesMarkdown,
  mapLicenseByGroupings,
  removeDuplicates,
};
