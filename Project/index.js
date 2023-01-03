const { ApolloServer } = require("apollo-server");
const { typeDefs } = require(".\\schema\\type-defs");
const { resolvers } = require(".\\schema\\resolvers");

const server = new ApolloServer({typeDefs, resolvers}); // new instance
// typeDefs: data type, query
// resolvers: functions, database call, send and receive

server.listen().then(({url})=>console.log(`Your API is running at:  ${url}`));
