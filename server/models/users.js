var mongoose = require('mongoose');
require('../config/mongooseConfig');
var Schema = mongoose.Schema;

module.exports = {
  userSchema: mongoose.model('userSchema', new Schema({
    name: { type: String },
    age: { type: Number }
  }, { strict: false }), 'user')
}