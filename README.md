# Tutorial de GraphQL

[GraphQL for Beginners: Setting Up GraphQL Server - Part 1 - Introduction](https://lo-victoria.com/graphql-for-beginners-introduction)

[GraphQL for Beginners: Setting Up GraphQL Server - Part 2 - Graphql for beginners subscriptions schemas and servers](https://lo-victoria.com/graphql-for-beginners-subscriptions-schemas-and-servers)

[GraphQL for Beginners - Part 3 - Setting Up GraphQL Server](https://lo-victoria.com/graphql-for-beginners-setting-up-graphql-server)

# Per a practicar

[GQL API Playground](https://gql.hashnode.com/?source=legacy-api-page)

Exemple de consulta de gql.hashnode.com:

```graphql

query {
  user(username:"victoria"){ 
    name
    dateJoined
  }
}

```

# GraphQLDemo

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

## npm
Per a poder instal·lar les dependències del projecte, necessitarem tenir instal·lat npm. Per a comprovar si ja el tenim instal·lat, executarem la següent comanda:

```bash
npm -v
```

Si no tenim instal·lat npm (en un sistema Linux), executarem la següent comanda:

```bash
sudo apt install npm
```

## GraphQL (llengunatge de consulta - opcional)
Per a poder utilitzar GraphQL, necessitarem instal·lar la llibreria `graphql`. Per a fer-ho, executarem la següent comanda:

```bash
npm install graphql
```

## GraphQL Server 
Per a poder utilitzar un servidor GraphQL, necessitarem instal·lar la llibreria `graphql-yoga`. Per a fer-ho, executarem la següent comanda:

```bash
npm install graphql-yoga
```

# Inicialització del projecte

Podem inicialitzar el projecte després d'instal·lar totes les dependències necessàries. Per a fer-ho, executarem la següent comanda:

```bash
npm init -y
```
# Execució del projecte

Per a executar el projecte, executarem la següent comanda:

```bash
node index.js
```
