const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const expensesSchema = new Schema({
  description: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  amount: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
})
const Expense = mongoose.model('Expense', expensesSchema);

module.exports = Expense;