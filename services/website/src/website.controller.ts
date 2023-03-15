import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { Timestamp } from "firebase-admin/firestore";
import { Website } from "./dto/website.dto";
import { WebsiteService } from "./website.service";
import { AppMessage } from "@solo-system/microservices";

@Controller()
export class WebsiteController {

  constructor(private readonly service: WebsiteService) {}

  @MessagePattern({ cmd:'website.new' })
  async addWebsite(@Payload() msg: AppMessage):Promise<Website>{
    const data = msg.data;
    const website = data.website
    return await this.service.newWebsite(website);
  }

  @MessagePattern({ cmd:'website.get' })
  async get(@Payload() msg: AppMessage):Promise<Website>{
    const data = msg.data;
    const id = data.id;
    return await this.service.getWebsite(id);
  }

  @MessagePattern({ cmd:'website.update' })
  async update(@Payload() msg: AppMessage):Promise<Website>{
    const data = msg.data;
    const id = data.id;
    const website = data.Website;
    return await this.service.updateWebsiteInfo(id, website);
  }

  @MessagePattern({ cmd:'website.delete' })
  async delete(@Payload() msg: AppMessage):Promise<Timestamp>{
    const data = msg.data;
    const id = data.id;
    return await this.service.removeWebsite(id);
  }

  @MessagePattern({ cmd:'website.list' })
  async listWebsites():Promise<Website[]>{
    return await this.service.getAllWebsites();
  }

  @MessagePattern({ cmd:'website.query' })
  async queryWebsite(@Payload() msg: AppMessage):Promise<Website[]>{
    const query = msg.data.query;
    return this.service.queryWebsites(query);
  }
}