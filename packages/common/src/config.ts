import { Config } from './types'

export const config = (config: Config) => {
  console.log("Config: ", config)
  return JSON.stringify(config)
}