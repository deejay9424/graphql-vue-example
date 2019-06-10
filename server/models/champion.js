var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseConfig = require('../config/mongooseConfig');

module.exports = {
  Champion: mongoose.model('ChampionSchema', new Schema({
    name: { type: String },
    attackPower: { type: Number }
  }, { strict: false }), 'champions')
}