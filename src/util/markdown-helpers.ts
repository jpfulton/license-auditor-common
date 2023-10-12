import { Dependency } from "../models";

/**
 * Gets the markdown string for the licenses of a dependency.
 * @param dependency Dependency to get the licenses markdown for.
 * @returns Markdown string for the licenses of the dependency.
 */
export const getLicensesMarkdown = (dependency: Dependency): string => {
  // use the licenses array to construct a markdown string
  // if the license.url is defined, use it to construct a markdown link
  // separate licenses with a semicolon
  // the licenses array will always have at least one entry
  const { licenses } = dependency;

  // sort the licenses array by license name
  licenses.sort((a, b) => {
    if (a.license < b.license) {
      return -1;
    } else if (a.license > b.license) {
      return 1;
    } else {
      return 0;
    }
  });

  let licenseString = "";
  licenses.forEach((license, index) => {
    if (index > 0) {
      licenseString += "; ";
    }

    if (license.url) {
      licenseString += `[${license.license}](${license.url})`;
    } else {
      licenseString += license.license;
    }
  });

  return licenseString;
};
