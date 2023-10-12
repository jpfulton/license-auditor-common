import { getConfiguration, getConfigurationFromUrl } from "./configuration.js";
import { removeDuplicates } from "./duplicate-remover.js";
import { getLicensesMarkdown } from "./markdown-helpers.js";
import { DependencyOutputter, MetadataOutputter } from "./outputters.js";
import { getCurrentVersionString } from "./root-project.js";

export type { DependencyOutputter, MetadataOutputter };

export {
  getConfiguration,
  getConfigurationFromUrl,
  getCurrentVersionString,
  getLicensesMarkdown,
  removeDuplicates,
};
