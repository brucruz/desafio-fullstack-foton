import Express from 'express';
import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
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
  const apolloServer = await createApolloServer();

  const app = Express();

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen({ port: 4000 }, () =>
    console.log('🚀 Server ready and listening at port 4000'),
  );
};

server().catch(error => console.log('error: ', error));
