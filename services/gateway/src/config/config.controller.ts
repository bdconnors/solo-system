import { Body, Controller, Get, Post, Query, Request } from "@nestjs/common";;
import { AppMessage } from "@solo-system/microservices";
import { ConfigService } from "./config.service";

@Controller('/config')
export class ConfigController {
  constructor(private readonly service: ConfigService) {}

  @Post()
  async config(@Request() req) {
    const command: string = req.body.cmd;
    const data: Record<string, any> = req.body.data;
    const msg: AppMessage = { data: data, token: ''}
    return await this.service.message(command, msg);
  }
  
}