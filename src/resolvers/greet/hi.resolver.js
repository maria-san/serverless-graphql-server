'use strict'

const hi = async (_root, args, _context) => {

	const { name } = args
    
	return {
		message: `hi ${name}`
	}

}

const resolver = {
	Mutation: {
		hi
	}
}

module.exports = { 
	resolver
}
