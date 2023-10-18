import {
  getConfiguration,
  getConfigurationFromUrl,
  getConfigurationFromUrlWithToken,
} from "./configuration";
import { removeDuplicates } from "./duplicate-remover";
import { mapLicenseByGroupings } from "./map-license-by-groupings";
import { getLicensesMarkdown } from "./markdown-helpers";
import { DependencyOutputter, MetadataOutputter } from "./outputters";
import { getCurrentVersionString } from "./root-project";

export type { DependencyOutputter, MetadataOutputter };

export {
  getConfiguration,
  getConfigurationFromUrl,
  getConfigurationFromUrlWithToken,
  getCurrentVersionString,
  getLicensesMarkdown,
  mapLicenseByGroupings,
  removeDuplicates,
};
