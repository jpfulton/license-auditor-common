import { removeDuplicates } from "../../src/util/duplicate-remover";
import { Dependency } from "../../src/models";

describe("removeDuplicates", () => {
  it("should remove duplicate dependencies", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(1);
  });

  it("should not remove unique dependencies", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root",
        name: "dependency2",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(2);
  });

  it("should not remove duplicate dependencies with different licenses", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "Apache" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(2);
  });

  it("should not remove duplicate dependencies with different versions", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "2.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(2);
  });

  it("should not remove duplicate dependencies with different names", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root",
        name: "dependency2",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(2);
  });

  it("should remove duplicate dependencies with different publishers", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test2",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(1);
  });

  it("should remove duplicate dependencies with different repositories", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test2",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(1);
  });

  it("should remove duplicate dependencies with different root project names", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root2",
        name: "dependency",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(1);
  });

  it("should remove duplicate dependencies with different paths", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        path: "test",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root2",
        name: "dependency",
        path: "test2",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(1);
  });

  it("should remove duplicate dependencies with different emails", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        email: "test",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root2",
        name: "dependency",
        email: "test2",
        licenses: [{ license: "MIT" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(1);
  });

  it("should remove duplicate dependencies with different license urls", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT", url: "test" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root2",
        name: "dependency",
        licenses: [{ license: "MIT", url: "test2" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(1);
  });

  it("should not remove duplicate dependencies with different license paths", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [{ license: "MIT", path: "test" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root2",
        name: "dependency",
        licenses: [{ license: "MIT", path: "test2" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);

    expect(result).toHaveLength(1);
  });

  it("should not remove duplicate dependencies with different license arrays", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [
          { license: "MIT", path: "test" },
          { license: "Apache", path: "test" },
        ],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root2",
        name: "dependency",
        licenses: [{ license: "MIT", path: "test2" }],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);
    expect(result).toHaveLength(2);
  });

  it("should remove duplicate dependencies with the same licenses in arrays in different order", () => {
    const dependencies: Dependency[] = [
      {
        rootProjectName: "root",
        name: "dependency",
        licenses: [
          { license: "MIT", path: "test" },
          { license: "Apache", path: "test" },
        ],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
      {
        rootProjectName: "root2",
        name: "dependency",
        licenses: [
          { license: "Apache", path: "test" },
          { license: "MIT", path: "test" },
        ],
        repository: "test",
        publisher: "test",
        version: "1.0.0",
      },
    ];

    const result = removeDuplicates(dependencies);
    expect(result).toHaveLength(1);
  });
});
