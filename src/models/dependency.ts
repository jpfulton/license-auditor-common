/**
 * Represents a dependency to a project.
 */
export interface Dependency {
  /**
   * Name of the root project.
   */
  rootProjectName: string;
  /**
   * Name of the dependency project.
   */
  name: string;
  /**
   * Path to the dependency project within the root project.
   */
  path?: string;
  /**
   * List of licenses for the dependency.
   * This array will have at least one entry.
   */
  licenses: DependencyLicense[];
  /**
   * URL to the repository of the dependency.
   */
  repository: string;
  /**
   * Publisher of the dependency.
   */
  publisher: string;
  /**
   * Email address of the publisher of the dependency.
   */
  email?: string;
  /**
   * Version of the dependency.
   */
  version: string;
}

/**
 * Represents a license for a dependency.
 */
export interface DependencyLicense {
  /**
   * Name of the license.
   */
  license: string;
  /**
   * URL to the license contents.
   */
  url?: string;
  /**
   * Path to the license file.
   */
  path?: string;
  /**
   * License text.
   */
  fullText?: string;
}
