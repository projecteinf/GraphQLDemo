import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefinitions =  `
  type Query {
    info: String!
    feed: [Link!]!
    hello: String
  }
  
  type Link {
    id: ID!
    description: String!
    url: String!
  } 
`

  
const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
}




export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})