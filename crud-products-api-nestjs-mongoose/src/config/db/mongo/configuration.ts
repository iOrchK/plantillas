import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
  env: process.env.APP_ENV,
  url: process.env.DB_MONGO_URL,
  collection: process.env.DB_MONGO_COLLECTION,
  port: process.env.DB_MONGO_PORT,
}));
