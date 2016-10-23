var express = require('express')
var router = express.Router()
var payeezy = require('../config/payeezy')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('merchant/index')
})

router.get('/pay', function(req, res, next) {
  console.log(payeezy)
  payeezy.transaction.purchase({
    method: 'credit_card',
    amount: '100',
    currency_code: 'USD',
    credit_card: {
      card_number: '4788250000028291',
      cvv: '123',
      type: 'visa',
      exp_date: '1230',
      cardholder_name: 'Tom Eck',
    },
    billing_address: {
      street: '225 Liberty Street',
      city: 'NYC',
      state_province: 'NY',
      zip_postal_code: '10281',
      country: 'US'
    }
  },
  function(error, response) {
    if (error) {
      console.log('Purchase Transaction Failed\n' + error);
      // res.json({error: error})
    }
    if (response) {
      console.log("Purchase Successful.\n Transaction Tag" + response.transaction_tag);
      // res.json({response: response})
      // performSecondaryTransaction(secondaryTransactionType, response.transaction_id, response.transaction_tag, response.amount);
    }
  });
})

module.exports = router;
