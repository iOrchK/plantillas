import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import configuration from './configuration';
import { AppConfigService } from './config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

/**
 * Importa y provee la configuración de la App
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_NAME: Joi.string().default('CRUD de Productos NestJS/MongoDB'),
        APP_ENV: Joi.string()
          .valid('development', 'test', 'production')
          .default('development'),
        APP_URL: Joi.string().default('http://localhost:3001'),
        APP_PORT: Joi.number().default(3001),
      }),
    }),
  ],
  providers: [ConfigService, AppConfigService],
  exports: [ConfigService, AppConfigService],
})
export class AppConfigModule {}
