import Express from 'express';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import schema from './graphql/schema';

export async function createApolloServer(): Promise<ApolloServer> {
  const apolloServer = new ApolloServer({
    schema: await schema,
    // context: ({ req, res }) => ({
    //   req,
    //   res,
    //   redis,
    //   userLoader: new DataLoader(userLoader),
    //   postLoader: new DataLoader(postLoader),
    // }),
  });

  return apolloServer;
}

const server = async () => {
  await mongoose.connect(`mongodb://localhost:27017/books-app`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  mongoose.set('debug', true);

  const apolloServer = await createApolloServer();

  const app = Express();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen({ port: 4000 }, () =>
    console.log('🚀 Server ready and listening at port 4000'),
  );
};

server().catch(error => console.log('error: ', error));
