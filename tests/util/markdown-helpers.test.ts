import { Dependency } from "../../src/models";
import { getLicensesMarkdown } from "../../src/util/markdown-helpers";

describe("getLicensesMarkdown", () => {
  it("should return a string with a single license", () => {
    const dependency: Dependency = {
      rootProjectName: "",
      name: "",
      repository: "",
      publisher: "",
      version: "",
      licenses: [{ license: "MIT" }],
    };

    const result = getLicensesMarkdown(dependency);

    expect(result).toBe("MIT");
  });

  it("should return a string with multiple licenses", () => {
    const dependency: Dependency = {
      rootProjectName: "",
      name: "",
      repository: "",
      publisher: "",
      version: "",
      licenses: [
        { license: "MIT" },
        { license: "Apache 2.0" },
        { license: "ISC" },
      ],
    };

    const result = getLicensesMarkdown(dependency);

    expect(result).toBe("Apache 2.0; ISC; MIT");
  });

  it("should return a string with a single license with a URL", () => {
    const dependency: Dependency = {
      rootProjectName: "",
      name: "",
      repository: "",
      publisher: "",
      version: "",
      licenses: [{ license: "MIT", url: "https://example.com" }],
    };

    const result = getLicensesMarkdown(dependency);

    expect(result).toBe("[MIT](https://example.com)");
  });

  it("should return a string with multiple licenses with URLs", () => {
    const dependency: Dependency = {
      rootProjectName: "",
      name: "",
      repository: "",
      publisher: "",
      version: "",
      licenses: [
        { license: "MIT", url: "https://example.com" },
        { license: "Apache 2.0", url: "https://example.com" },
        { license: "ISC", url: "https://example.com" },
      ],
    };

    const result = getLicensesMarkdown(dependency);

    expect(result).toBe(
      "[Apache 2.0](https://example.com); [ISC](https://example.com); [MIT](https://example.com)"
    );
  });

  it("should return a string with links and no links for an array of licenses where some have urls and others do not", () => {
    const dependency: Dependency = {
      rootProjectName: "",
      name: "",
      repository: "",
      publisher: "",
      version: "",
      licenses: [
        { license: "MIT", url: "https://example.com" },
        { license: "Apache 2.0" },
        { license: "ISC", url: "https://example.com" },
      ],
    };

    const result = getLicensesMarkdown(dependency);

    expect(result).toBe(
      "Apache 2.0; [ISC](https://example.com); [MIT](https://example.com)"
    );
  });
});
