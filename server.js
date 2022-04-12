const args = require('minimist')(process.argv.slice(2))
args["port"]

const port = args.port || process.env.port || 5000

