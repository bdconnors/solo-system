import { Module } from '@nestjs/common';
import { WebsiteConverter } from './converter/website.converter';
import { WebsiteCollection } from './website.collection';
import { WebsiteController } from './website.controller';
import { WebsiteService } from './website.service';

@Module({
  controllers: [WebsiteController],
  providers: [
    WebsiteCollection,
    WebsiteConverter,
    WebsiteService
  ],
})
export class WebsiteModule {}
