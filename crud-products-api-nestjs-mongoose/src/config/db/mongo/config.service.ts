import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Servicio de configuración de MongoDB.
 * * @class
 */
@Injectable()
export class MongoDBConfigService {
  constructor(private configService: ConfigService) {}

  get env(): string {
    return this.configService.get<string>('mongodb.env');
  }
  get url(): string {
    return this.configService.get<string>('mongodb.url');
  }
  get collection(): string {
    return this.configService.get<string>('mongodb.collection');
  }
  get port(): number {
    return Number(this.configService.get<number>('mongodb.port'));
  }
}
