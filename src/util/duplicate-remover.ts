import { Dependency } from "../models";

// remove duplicates based on common name, version and licenses array
/*
export const removeDuplicates = (dependencyData: Dependency[]): Dependency[] => {
  const result: Dependency[] = [];
  dependencyData.forEach((dependency) => {
    if (
      !result.some((l) => {
        let licensesMatch = false;

        if (Array.isArray(l.licenses) && Array.isArray(dependency.licenses)) {
          // if both licenses are arrays, check if all licenses in l.licenses
          // are included in license.licenses
          licensesMatch = l.licenses.every((x) => dependency.licenses.includes(x));
        } else if (
          !Array.isArray(l.licenses) &&
          !Array.isArray(dependency.licenses)
        ) {
          // if both licenses are not arrays, check if they are equal
          licensesMatch = l.licenses === dependency.licenses;
        } else {
          // if one of the licenses is an array and the other is not
          if (
            Array.isArray(l.licenses) &&
            l.licenses.length == 1 &&
            !Array.isArray(dependency.licenses)
          ) {
            // if l.licenses is an array with one element, check if license.licenses
            // is included in l.licenses
            licensesMatch = l.licenses.includes(dependency.licenses);
          } else if (
            !Array.isArray(l.licenses) &&
            Array.isArray(dependency.licenses) &&
            dependency.licenses.length == 1
          ) {
            // if license.licenses is an array with one element, check if l.licenses
            // is included in license.licenses
            licensesMatch = dependency.licenses.includes(l.licenses);
          }
        }

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
*/

// remove duplicate dependency objects from the array
// duplicates are determined by the name, version and licenses array
// within the licenses array, the order of the licenses is not important
// and only the name of the license is important in identifying duplicates
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
