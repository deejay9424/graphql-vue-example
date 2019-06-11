var mongoose = require('mongoose');
var mongoConfig = require('./mongoConfig');
var chalk = require('chalk');
var dbName = mongoConfig.db;
var port = mongoConfig.port;

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
module.exports = db;
