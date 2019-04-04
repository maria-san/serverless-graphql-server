'use strict'

const moment = require('moment')
const { keys, pick } = require('lodash')

const yamlEnv = (require('yamljs').load(`${__dirname}/../../serverless.env.yml`))[process.env.STAGE]
const env = pick(process.env, keys(yamlEnv))

module.exports = (response, startExecution) => {

	const executionTime = Date.now() - startExecution

	if (process.env.DEBUG === 'true') {
		response.data = {
			...response.data,
			__debug__: {
				timestamp: moment().toISOString(),
				executionTime,
				env
			}
		}
	}

	return response

}
