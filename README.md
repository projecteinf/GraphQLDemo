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
npm install graphql-yoga
```

# Tutorial seguit

[Creating Node.js & TypeScript Project](https://the-guild.dev/graphql/yoga-server/tutorial/basic/01-project-setup)

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
node index.js
```
