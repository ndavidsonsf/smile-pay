var payeezy = require('payeezy')(process.env.PAPI_KEY, process.env.PAPI_SECRET, process.env.PMERC_TOKEN)

module.exports = payeezy
