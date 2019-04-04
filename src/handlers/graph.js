'use strict'

const { ApolloServer } = require('apollo-server-lambda')
const { getTypes, getResolvers } = require('./../core/buildSchema')
const context = require('./../core/buildContext')
const responseFormatter = require('./../core/formatResponse')

const startExecution = Date.now()

const handler = (
	new ApolloServer({
		context,
		typeDefs: getTypes(),
		resolvers: getResolvers(),
		debug: process.env.DEBUG === 'true',
		formatResponse: response => responseFormatter(response, startExecution)
	}))
	.createHandler({ cors: { origin: '*' } })

module.exports = { process: handler }
