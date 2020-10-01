// Modules
import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app/config.module';
import { MongoDBConfigModule } from './config/db/mongo/config.module';

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [AppConfigModule, MongoDBConfigModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
