const mongoose = require('mongoose');
const mongoConfig = require('./mongoConfig');
const chalk = require('chalk');
const dbName = mongoConfig.db;
const port = mongoConfig.port;

mongoose.connect(dbName, { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', console.error.bind(chalk.yellow('connection error...')));
db.on('connected', () => {
  if (process.env.NODE_ENV == 'DEV') {
    console.log(chalk.yellow('Database opened on port : ' + port));
  }
});
db.on('disconnected', () => {
  if (process.env.NODE_ENV == 'DEV') {
    console.log(chalk.yellow('Database is disconnected'));
  }
  
});
module.exports = { db: db, dbName: dbName };