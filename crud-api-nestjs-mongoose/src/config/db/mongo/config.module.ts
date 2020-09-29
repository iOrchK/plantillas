import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// Services
import { MongoDBConfigService } from './config.service';

import configuration from './configuration';

/**
 * Importa y provee la configuración de MongoDB
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_ENV: Joi.string()
          .valid('development', 'test', 'production')
          .default('development'),
        DB_MONGO_COLLECTION: Joi.string().default('RoomieTest'),
        DB_MONGO_URL: Joi.string().default('http://localhost:27017/RoomieTest'),
        DB_MONGO_PORT: Joi.number().default(27017),
      }),
    }),
    MongooseModule.forRoot(process.env.DB_MONGO_URL),
  ],
  providers: [ConfigService, MongoDBConfigService],
  exports: [ConfigService, MongoDBConfigService],
})
export class MongoDBConfigModule {}
