import { readFile } from "fs/promises";
import fetch from "node-fetch";
import blacklist from "../default-configuration/blacklist.js";
import whitelist from "../default-configuration/whitelist.js";
import { Configuration } from "../models/configuration.js";

const DEFAULT_CONFIG_FILE_NAME = ".license-checker.json";

const defaultConfiguration: Configuration = {
  whiteList: whitelist,
  blackList: blacklist,
  groupings: [],
  configurationSource: "default",
  configurationFileName: undefined,
};

// return a configuration object from a file
// if the file does not exist, return the default configuration
export async function getConfiguration(
  configFileName: string = DEFAULT_CONFIG_FILE_NAME
): Promise<Configuration> {
  try {
    // read the configuration JSON file into a Configuration object
    // pull the file from the current working directory with the file name
    // provided by the configFileName parameter
    const configuration = JSON.parse(
      await readFile(`${process.cwd()}/${configFileName}`, "utf8")
    ) as Configuration;
    configuration.configurationSource = "file";
    configuration.configurationFileName = configFileName;

    return configuration;
  } catch (e) {
    return defaultConfiguration;
  }
}

// return a configuration object from a remote file based on a URL over HTTP or HTTPS
// if the file does not exist, throw an error
export async function getConfigurationFromUrl(
  url: string
): Promise<Configuration> {
  // read the configuration JSON file into a Configuration object
  // pull the file from the URL provided by the url parameter
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(
      `Unable to load configuration from URL: ${url} Status: ${response.status} was returned.`
    );
  }

  const body = await response.text();

  const configuration = JSON.parse(body) as Configuration;
  configuration.configurationSource = "remote";
  configuration.configurationFileName = url;

  return configuration;
}

// return a configuration object from a remote file based on a URL over HTTP or HTTPS
// using a token for authentication
// if the file does not exist, throw an error
export async function getConfigurationFromUrlWithToken(
  url: string,
  token: string
): Promise<Configuration> {
  // read the configuration JSON file into a Configuration object
  // pull the file from the URL provided by the url parameter
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Unable to load configuration from URL: ${url} Status: ${response.status} was returned.`
    );
  }

  const body = await response.text();

  const configuration = JSON.parse(body) as Configuration;
  configuration.configurationSource = "remote";
  configuration.configurationFileName = url;

  return configuration;
}
