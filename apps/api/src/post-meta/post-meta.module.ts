import { Module } from '@nestjs/common';
import { PostMetaService } from './post-meta.service';
import { PostMetaController } from './post-meta.controller';

@Module({
  providers: [PostMetaService],
  controllers: [PostMetaController],
  exports: [PostMetaService],
})
export class PostMetaModule {}
