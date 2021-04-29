import 'reflect-metadata';
import { ApolloServerBase, Config } from 'apollo-server-core';
import mongoose, { ConnectOptions } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import schema from '../graphql/schema';
import { startCounters, restartCounters } from '../mongoose/seed/createBook';

const mongod = new MongoMemoryServer();

async function getMongoMemoryUri() {
  const uri = await mongod.getUri();

  return uri;
}

process.env.NODE_ENV = 'test';

const mongooseOptions: ConnectOptions = {
  autoIndex: false,
  autoReconnect: false,
  connectTimeoutMS: 10000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

// Just in case want to debug something
// mongoose.set('debug', true);

export async function connectMongoose(): Promise<typeof mongoose | void> {
  jest.setTimeout(20000);
  startCounters();

  await mongoose.connect(await getMongoMemoryUri(), {
    ...mongooseOptions,
  });
}

export async function clearDatabase(): Promise<void> {
  await mongoose.connection.db.dropDatabase();
}

export async function disconnectMongoose(): Promise<void> {
  await mongoose.disconnect();

  await mongod.stop();
}

export async function clearDbAndRestartCounters(): Promise<void> {
  await clearDatabase();
  restartCounters();
}

const getTestServer = async (userId = ''): Promise<() => ApolloServerBase> => {
  const config: Config = {
    schema: await schema,
    context: ({ req, res }) => ({
      req: {
        ...req,
        session: { userId },
      },
      res,
      // redis,
      // userLoader: new DataLoader(userLoader),
      // postLoader: new DataLoader(postLoader),
    }),
  };

  const server: () => ApolloServerBase = () => new ApolloServerBase(config);

  return server;
};

export default getTestServer;
