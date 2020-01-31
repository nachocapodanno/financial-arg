var express = require('express');
var router = express.Router();
const Expense = require('../model/expense.js')

/* GET home page. */
router.get('/', function (req, res) {
  res.json('Welcome to Expenses API');
});

router.get('/api/expenses', function (req, res) {
  Expense.find({}).then(eachOne => {
    res.json(eachOne);
  })
});

router.post('/api/expense/create', function(req, res) {
  Expense.create({
    description: req.body.description,
    amount: req.body.amount,
    owner: req.body.owner,
  }).then(expense => {
    res.json(expense)
  });
});

module.exports = router;

