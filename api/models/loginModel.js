'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
  user: {
    type: String,
    required: 'Kindly Enter User Name'
  },
  pass: {
    type: [{
      type: String,
      required: 'Kindly Enter Password'
    }],
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Logins', LoginSchema);