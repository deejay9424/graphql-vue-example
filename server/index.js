const express = require('express')
const { graphql, buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const rootValue = require('./controllers/users');

const schema = buildSchema(`
  type Query {
    get: String
    getUsers: [User]
    getUserByName(name: String!): User
  }

  type Mutation {
    updateUserAge(name: String!, age: Int!): User
    insertUser(name: String!, age:Int!): User
  }

  type User {
    name: String
    age: Int
  }
`)

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({                 //Endpoint
  rootValue, schema, graphiql: true
}))

app.listen(process.env.PORT || 5000, () => console.log('Listening on 4000'))
