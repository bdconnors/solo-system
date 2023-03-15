import { Body, Controller, Get, Post, Query, Request } from "@nestjs/common";;
import { AppMessage } from "@solo-system/microservices";
import { AccountService } from "./account.service";

@Controller('/account')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Post()
  async account(@Request() req) {
    const command: string = req.body.cmd;
    const data: Record<string, any> = req.body.data;
    const msg: AppMessage = { data: data, token: ''}
    return await this.service.message(command, msg);
  }
  
}