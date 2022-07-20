import { ApolloServer } from "apollo-server"
import { typeDefs } from "./schema.js"
import { resolvers } from "./resolvers.js"

const server = new ApolloServer({ typeDefs, resolvers })

const { url } = await server.listen({ port: 9000 })

console.log(`Server running at ${url}`)