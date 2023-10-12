import { Configuration, Grouping } from "../models";

/**
 * Maps the licenses by groupings.
 * @param configuration Configuration to get the groupings from.
 * @param licenseName Name of the license to map through the groupings.
 * @returns {string} The mapped license name.
 */
export const mapLicenseByGroupings = (
  configuration: Configuration,
  licenseName: string
): string => {
  const groupings = configuration.groupings;

  if (groupings === undefined) {
    return licenseName;
  }

  const grouping = groupings.find((grouping: Grouping) =>
    grouping.variations.includes(licenseName)
  );

  if (grouping === undefined) {
    return licenseName;
  }

  return grouping.target;
};
