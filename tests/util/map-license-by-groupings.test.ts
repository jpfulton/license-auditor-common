import { Configuration } from "../../src/models";
import { mapLicenseByGroupings } from "../../src/util/map-license-by-groupings";

describe("mapLicenseByGroupings", () => {
  it("should return the license name if no groupings are defined", () => {
    const configuration: Configuration = {
      whiteList: [],
      blackList: [],
      groupings: [],
      configurationSource: "default",
    };

    const result = mapLicenseByGroupings(configuration, "MIT");

    expect(result).toBe("MIT");
  });

  it("should return the license name if no groupings match", () => {
    const configuration: Configuration = {
      whiteList: [],
      blackList: [],
      groupings: [
        {
          target: "MIT",
          variations: ["Apache 2.0", "ISC"],
        },
      ],
      configurationSource: "default",
    };

    const result = mapLicenseByGroupings(configuration, "BSD");

    expect(result).toBe("BSD");
  });

  it("should return the target license name if a grouping matches", () => {
    const configuration: Configuration = {
      whiteList: [],
      blackList: [],
      groupings: [
        {
          target: "MIT",
          variations: ["Apache 2.0", "ISC"],
        },
      ],
      configurationSource: "default",
    };

    const result = mapLicenseByGroupings(configuration, "Apache 2.0");

    expect(result).toBe("MIT");
  });
});
