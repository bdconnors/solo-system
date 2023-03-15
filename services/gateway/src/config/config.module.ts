import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigController } from './config.controller';
import { ConfigService } from './config.service';

@Module({
  imports:[
    ClientsModule.register([
      { 
        name: 'CONFIG_SERVICE', 
        transport: Transport.TCP,
        options: { port: 3004 }
      }
    ])
  ],
  controllers: [ConfigController],
  providers: [ConfigService],
})
export class ConfigModule {}
