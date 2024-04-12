const typeDefinitions =  `
  type Query: any { 
    hello: string! 
  }`  
  
const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
}
