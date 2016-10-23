var Kairos = require('kairos-api')
var kairos = new Kairos(process.env.KAPP_ID, process.env.KAPP_KEY)

module.exports = kairos
