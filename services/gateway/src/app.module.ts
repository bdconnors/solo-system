import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from "./account/account.module";
import { WebsiteModule } from "./website/website.module";
@Module({
  imports: [
    ConfigModule.forRoot(),
    WebsiteModule,
    AccountModule
  ],
})
export class AppModule {}