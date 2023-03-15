import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountClaimsFactory } from './app.claims.factory';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AccountClaimsFactory, AppService],
})
export class AppModule {}
