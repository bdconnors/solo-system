import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { WebsiteController } from './website.controller';
import { WebsiteService } from './website.service';

@Module({
  imports:[
    ClientsModule.register([
      { 
        name: 'WEBSITE_SERVICE', 
        transport: Transport.TCP,
        options: { port: 3002 }
      }
    ])
  ],
  controllers: [WebsiteController],
  providers: [WebsiteService],
})
export class WebsiteModule {}
