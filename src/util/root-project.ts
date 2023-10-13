import { readFileSync } from "fs";

/**
 * Returns the current version string of this library.
 * If the version cannot be determined, returns "UNKNOWN".
 * @returns {string} The current version string of this library.
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
