import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfig } from '../config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: AppConfig,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://testuser:4APWK5m^CuT8@guiltyspark.qsbai.mongodb.net/RoomieTest?retryWrites=true&w=majority',
    ),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
