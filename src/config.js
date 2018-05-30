/**
 * note: this project does not provide any guidelines for how to set your environment variables
 * when deploying. there are several ways to handle that, and what works best is up to you:
 * - use webpack's DefinePlugin: https://gist.github.com/haf/f671f1113d2c5dead5a7#file-gistfile1-txt-L110
 * - use webpack's EnvironmentPlugin: https://webpack.js.org/plugins/environment-plugin/
 * - pull the config from your server (though this messes with the API_ROOT option!)
 * - set the environment variables when building (ex: `API_ROOT=https://my.website.com/ yarn run build`)
 *
 * this is provided as an example for validating your configuration against human error.
 * original source: https://github.com/elsewhencode/project-guidelines
 */

import joi from 'joi'

const envVarsSchema = joi.object({
  NODE_ENV: joi.string()
    .valid(['development', 'production', 'test', 'provision'])
    .required(),
  LOGGER_LEVEL: joi.string()
    .valid(['error', 'warn', 'info', 'verbose', 'debug', 'silly'])
    .default('info'),
  LOGGER_ENABLED: joi.boolean()
    .truthy('TRUE')
    .truthy('true')
    .falsy('FALSE')
    .falsy('false')
    .default(true),
  API_ROOT: joi.string()
    .uri()
    .default('https://conduit.productionready.io/api')
}).unknown()
  .required()

const { error, value: envVars } = joi.validate(process.env, envVarsSchema)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  env: envVars.NODE_ENV,
  isTest: envVars.NODE_ENV === 'test',
  isDevelopment: envVars.NODE_ENV === 'development',
  logger: {
    level: envVars.LOGGER_LEVEL,
    enabled: envVars.LOGGER_ENABLED
  },
  apiRoot: envVars.API_ROOT
}

export default config
