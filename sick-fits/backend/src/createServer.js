const {GraphQLServer} = require("graphql-yoga")
const Mutation = require("./resolvers/Mutation")
const Query = require("./resolvers/Query")
const db = require("./db")

// Create the GraphQL Yoga Server
function createServer(){
  return new GraphQLServer({
    typeDefs: "src/schema.graphql", //type defs for yoga
    resolvers: {
      Query,
      Mutation
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false //avoid logging issue
    },
    context: req => ({ ...req, db }) // add the DB connection to every request
  })
} 

module.exports = createServer


