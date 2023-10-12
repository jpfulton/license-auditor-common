/**
 * Source of configuration:
 * - remote: configuration is fetched from a remote file
 * - file: configuration is fetched from a local file
 * - default: configuration is the default from within the library
 */
export type ConfigurationSource = "remote" | "file" | "default";

/**
 * Configuration interface. Represents the configuration of the library.
 */
export interface Configuration {
  /**
   * List of white listed license types.
   */
  whiteList: string[];
  /**
   * List of black listed license types.
   */
  blackList: string[];
  /**
   * List of license groupings.
   */
  groupings: Grouping[];
  /**
   * Source from which this configuration was loaded.
   */
  configurationSource: ConfigurationSource;
  /**
   * Name of the file from which this configuration was loaded.
   * May be a remote URL or a local file path.
   */
  configurationFileName?: string;
}

/**
 * License grouping interface. Represents a group of license name variations
 * that should be mapped to a single license name.
 */
export interface Grouping {
  target: string;
  variations: string[];
}
