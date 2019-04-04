'use strict'

const hello = async () => {

	return {
		message: 'Hello world'
	}

}

const resolver = {
	Query: {
		hello
	}
}

module.exports = {
	resolver
}
