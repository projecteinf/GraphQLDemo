import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefinitions =  `
  type Query: any { 
    hello: string! 
  }`

  
const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})


