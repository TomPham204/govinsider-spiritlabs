import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { patchNestJsSwagger } from 'nestjs-zod';

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';
import { PrismaService } from './prisma/prisma.service';
import { TransformResponseInterceptor } from './interceptor/transform-response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const configService = app.get<ConfigService>(ConfigService);

  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };

  app.enableCors(options);

  app.setGlobalPrefix(configService.get('app.apiPrefix')!, {
    exclude: ['/'],
  });

  app.useGlobalInterceptors(new TransformResponseInterceptor());

  const config = new DocumentBuilder()
    .setTitle('Gov API')
    .setDescription('Gov API')
    .setVersion('1.0')
    .addBearerAuth({
      name: 'Authorization',
      bearerFormat: 'Bearer',
      scheme: 'Bearer',
      type: 'http',
      in: 'Header',
    })
    .build();

  patchNestJsSwagger();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(configService.get('app.port')!, '0.0.0.0');
  console.log(`Gov service listening on ${await app.getUrl()}/docs`);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
}
bootstrap();
