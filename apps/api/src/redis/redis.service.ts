import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, RedisClientType } from 'redis';

@Injectable()
export class RedisService implements OnModuleInit {
  public redis: RedisClientType;

  constructor(private configService: ConfigService) {
    this.redis = createClient({
      socket: {
        port: configService.get('redis.port'),
        host: configService.get('redis.host'),
      },
      password: configService.get('redis.password'),
    });
  }

  async onModuleInit() {
    await this.redis.connect();
  }
}
