import { createServer } from 'http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'
import { createContext } from './context'
 
function main() {
  const yoga = createYoga({ schema, context: createContext })
  const server = createServer(yoga)
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
}
 
main()


/*

Per executar les proves connectar-se a http://localhost:4000/graphql i executar els següents codis per separat proves:

Per QUERY:

query {
  feed {
    id
    url
    description
  }
}

Per MUTATION:

mutation {
  postLink(url:"www.prisma.io",description: "Prisma replaces traditional ORMs") {
    id
  }
}


*/