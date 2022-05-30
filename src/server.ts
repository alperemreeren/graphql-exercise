const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importing Resolvers and Type Defs.
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

// Types
import { Request, Response } from "express";

const startServer: Function = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
  });
  
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  
  // Allow Cross-Origin Resource Sharing
  app.use(cors())
  
  app.use((req: Request, res: Response) => {
    res.send("It Works!");
  });


  // Dynamic connection string changeable from .env file for convenience
  await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}${process.env.DB_PARAMS}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Connected to MongoDB 💾')

  app.listen(process.env.PORT, () => console.log(`🌐 Listening on URL: http://localhost:${process.env.PORT}`));
}
startServer();