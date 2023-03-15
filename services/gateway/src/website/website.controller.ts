import { Body, Controller, Get, Post, Query, Request } from "@nestjs/common";;
import { AppMessage } from "@solo-system/microservices";
import { WebsiteService } from "./website.service";

@Controller('/website')
export class WebsiteController {
  constructor(private readonly service: WebsiteService) {}

  @Post()
  async website(@Request() req) {
    try{
      const command: string = req.body.cmd;
      console.log(command);
      const data: Record<string, any> = req.body.data;
      const msg: AppMessage = { data: data, token: ''}
      return await this.service.message(command, msg);
    }catch(e:any){
      console.log('err');
      console.log(e);
      return e;
    }
  } 
}