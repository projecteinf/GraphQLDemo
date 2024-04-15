# Tutorial seguit

[Creating Node.js & TypeScript Project](https://the-guild.dev/graphql/yoga-server/tutorial/basic/01-project-setup)

[GraphQL official documentation](https://graphql.org/learn/)

# Instal·lació software necessari

## Node.js
Per a poder executar el projecte, necessitarem tenir instal·lat Node.js. Per a comprovar si ja el tenim instal·lat, executarem la següent comanda:

```bash
node -v
```

Si no tenim instal·lat Node.js (en un sistema Linux), executarem la següent comanda:

```bash
sudo apt install nodejs
```

## npm i npx
Per a poder instal·lar les dependències del projecte, necessitarem tenir instal·lat npm. Per a comprovar si ja el tenim instal·lat, executarem la següent comanda:

```bash
npm -v
```

Si no tenim instal·lat npm (en un sistema Linux), executarem la següent comanda:

```bash
sudo apt install npm
```

Per a comprovar si tenim instal·lat `npx`, executarem la següent comanda:

```bash
npx -v
```

Per a poder utilitzar la comanda `npx`, necessitarem instal·lar la llibreria `npx`. Per a fer-ho, executarem la següent comanda:

```bash
npm install npx
```

## GraphQL (llengunatge de consulta - opcional)
Per a poder utilitzar GraphQL, necessitarem instal·lar la llibreria `graphql`. Per a fer-ho, executarem la següent comanda:

```bash
npm install graphql 
```

## GraphQL Server 
Per a poder utilitzar un servidor GraphQL, necessitarem instal·lar la llibreria `graphql-yoga`. Per a fer-ho, executarem la següent comanda:

```bash
npm i --save-exact graphql-yoga
```


# Inicialització del projecte

Podem inicialitzar el projecte després d'instal·lar totes les dependències necessàries. Per a fer-ho, executarem la següent comanda:

```bash
npm init -y
```

Initialize a new TypeScript configuration

```bash
npx tsc --init
```

# Execució del projecte

Per a executar el projecte, executarem la següent comanda:

```bash
npm run dev # Actualització automàtica
```

```bash
npm run start # Sense actualització automàtica
```
# Creating your First GraphQL Schema

```bash

npm i @graphql-tools/schema graphql

touch src/schema.ts

echo "import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefinitions =  \`
  type Query { 
    hello: string! 
  }\`

  
const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
}

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
})

" > src/schema.ts 

```
# Querying your GraphQL Schema

```bash
echo "
import { execute, parse } from 'graphql'
import { schema } from './schema'
 
async function main() {
  const myQuery = parse( \`
    query {
      hello
    }
  \`)
 
  const result = await execute({
    schema,
    document: myQuery
  })
 
  console.log(result)
}
 
main()
" > src/main.ts
```

# Mutation

```TypeScript

  import { makeExecutableSchema } from '@graphql-tools/schema';

  const typeDefinitions =  `
    type Query {
      info: String!
      feed: [Link!]!
      hello: String
    }
    
    type Mutation {
      postLink(url: String!, description: String!): Link!
    }

    type Link {
      id: ID!
      description: String!
      url: String!
    } 
  `

  type Link = {
    id: string
    url: string
    description: string
  }

  const links: Link[] = [
    {
      id: 'link-0',
      url: 'https://graphql-yoga.com',
      description: 'The easiest way of setting up a GraphQL server'
    },
    {
      id: 'link-0',
      url: 'https://graphql-yoga.com',
      description: 'The easiest way of setting up a GraphQL server'
    }
  ]
  
  const resolvers = {
    Query: {
      hello: () => 'Hello World!',
      info: () => `This is the API of a Hackernews Clone`,
      feed: () => links
    },
    Mutation: {
      postLink: (parent: unknown, args: { description: string; url: string }) => {
        let idCount = links.length
        const link: Link = {
          id: `link-${idCount}`,
          description: args.description,
          url: args.url
        }
        links.push(link)
        return link
      }
    }
  }

  export const schema = makeExecutableSchema({
    resolvers: [resolvers],
    typeDefs: [typeDefinitions]
  })

```

# Installing Prisma (ORM)

```bash
npm i -D --save-exact prisma @prisma/client
```

```bash
cd src
npx prisma init
```
