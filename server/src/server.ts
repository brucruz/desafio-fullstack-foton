import Express from 'express';
import 'reflect-metadata';
import 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import cors from 'cors';
import schema from './graphql/schema';
import { seedDb } from './mongoose/seed/seedDb';
import { __prod__ } from './utils/constants';

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

  mongoose.connection.db.dropDatabase();

  await seedDb();

  mongoose.set('debug', true);

  const apolloServer = await createApolloServer();

  const app = Express();

  app.set('trust proxy', 1);
  app.use(
    cors({
      origin: __prod__
        ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          [process.env.APP_WEB_URL!, 'http://localhost:3000']
        : process.env.APP_WEB_URL,
      credentials: true,
    }),
  );

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen({ port: 4000 }, () =>
    console.log('🚀 Server ready and listening at port 4000'),
  );
};

server().catch(error => console.log('error: ', error));
