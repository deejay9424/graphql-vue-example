const Users = require('../models/users').userSchema;

//Verbs for the application
const rootValue = {
    get: () => 'Hello World',               //Test
  
    getUsers: () => Users.find({}, (err, data) => {
      if (err) console.log(err)
      else return data;
    }),
  
    getUserByName: ({ name }) => {
      return Users.findOne({ "name": name }, (err, data) => {
        if (err) console.log(err)
        else return data;
      })
    },
  
    updateUserAge: ({ name, age }) => {
      return Users.findOneAndUpdate({ "name": name }, { "$set": { "age": age } }, (err, data) => {
        if (err) console.log(err)
        else return data;
      })
    },
  
    insertUser: ({ name, age }) => {
      return Users.create({ "name": name, "age": age })
    }
  }

module.exports = rootValue;