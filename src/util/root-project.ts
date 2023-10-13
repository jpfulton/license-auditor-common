import { readFileSync } from "fs";

/**
 * Returns the current version string of the package.
 * If the version cannot be determined, returns "UNKNOWN".
 * @returns {string} The current version string of the package.
 */
export const getCurrentVersionString = (): string => {
  try {
    const packageJson = JSON.parse(
      readFileSync(`${__dirname}/../../../package.json`).toString()
    );
    const version = packageJson?.version ?? "UNKNOWN";
    return version;
  } catch (e) {
    // this error happens when running the tests
    // which have a different path relationship to the package.json file
    return "UNKNOWN";
  }
};

/**
 * Returns the current version string of the calling project.
 * If the version cannot be determined, returns "UNKNOWN".
 * @returns {string} The current version string of the calling project.
 */
export const getCallingProjectVersionString = (): string => {
  try {
    const packageJson = JSON.parse(
      readFileSync(`${__dirname}/../../../../../../package.json`).toString()
    );
    const version = packageJson?.version ?? "UNKNOWN";
    return version;
  } catch (e) {
    // this error happens when running the tests
    // which have a different path relationship to the package.json file
    return "UNKNOWN";
  }
};
