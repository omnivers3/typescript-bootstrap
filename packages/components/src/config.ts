import { Config } from './types'

export const config = (config: Config) => {
  console.log("Config2: ", config)
  return JSON.stringify(config)
}