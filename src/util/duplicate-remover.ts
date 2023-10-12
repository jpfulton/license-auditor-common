import { Dependency } from "../models";

/**
 * Removes duplicate dependencies from an array of dependencies.
 * Dependencies are considered duplicates if they have the same name, version, and licenses.
 *
 * @param dependencyData - An array of dependencies to remove duplicates from.
 * @returns An array of dependencies with duplicates removed.
 */
export const removeDuplicates = (
  dependencyData: Dependency[]
): Dependency[] => {
  const result: Dependency[] = [];
  dependencyData.forEach((dependency) => {
    if (
      !result.some((l) => {
        // determine if the licenses match, order is not important
        // only the name of the license is important
        // we can assume that both licenses arrays are not empty
        // and that there are no duplicate licenses within the arrays
        // and that both dependency.licenses and l.licenses are arrays
        // with at least one element
        const licensesMatch =
          dependency.licenses.length === l.licenses.length &&
          dependency.licenses.every((x) =>
            l.licenses.some((y) => x.license === y.license)
          );

        // check if name, version and licenses match
        return (
          l.name === dependency.name &&
          l.version === dependency.version &&
          licensesMatch
        );
      })
    ) {
      result.push(dependency);
    }
  });

  return result;
};
