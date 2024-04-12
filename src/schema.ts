import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefinitions =  `
  type Query {
    users: [User!]!
    user(id: ID!): User
  }
  
  type Mutation {
    createUser(name: String!): User!
  }
  
  type User {
    id: ID!
    name: String!
  }  
`

  
const resolvers = {
  Query: {
    users: () => 'Hello World!'
  }
}




export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})