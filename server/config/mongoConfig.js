var path = require('path');
var rootPath = path.normalize(__dirname + '/../');
const dotenv = require('dotenv');
dotenv.config();

var obj = {
    db: process.env.MongoDbServerPath,
    rootPath: rootPath,
    port: process.env.PORT || 3030
}

module.exports = obj;
