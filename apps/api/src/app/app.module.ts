import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from '@api/config/app.config';
import postgresConfig from '@api/config/postgres.config';
import redisConfig from '@api/config/redis.config';
import { ZodValidationPipe } from 'nestjs-zod';
import { APP_PIPE } from '@nestjs/core';

import { UserModule } from '@api/user/user.module';
import { AuthModule } from '@api/auth/auth.module';
import { RedisModule } from '@api/redis/redis.module';
import { PostModule } from '@api/post/post.module';
import { PostMetaModule } from '@api/post-meta/post-meta.module';
import { MediaModule } from '@api/media/media.module';
import { CategoryModule } from '@api/category/category.module';
import { PrismaModule } from '@api/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, postgresConfig, redisConfig],
      envFilePath: ['.env'],
    }),
    RedisModule,
    AuthModule,
    UserModule,
    PostModule,
    PostMetaModule,
    MediaModule,
    CategoryModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
