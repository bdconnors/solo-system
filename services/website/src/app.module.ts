import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WebsiteModule } from './website.module';


@Module({
  imports:[
    ConfigModule.forRoot(),
    WebsiteModule
  ],
})
export class AppModule {}
