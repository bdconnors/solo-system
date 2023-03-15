import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { AppMessage } from "@solo-system/microservices";
import { UserRecord } from "firebase-admin/auth";
import { AppService } from "./app.service";
import { AccountList } from "./dto/account.dto";

@Controller()
export class AppController {

  constructor(private readonly service: AppService) {}

  @MessagePattern({ cmd:'create-account' })
  async create(@Payload() msg: AppMessage):Promise<UserRecord>{
    const data = msg.data;
    const account = data.account;
    const claims = data.claims;
    return await this.service.createAccount(account, claims);
  }
  @MessagePattern({ cmd:'get-account' })
  async get(@Payload() msg: AppMessage):Promise<UserRecord>{
    const data = msg.data;
    const id = data.id;
    return await this.service.getAccount(id);
  }
  @MessagePattern({ cmd:'update-account' })
  async update(@Payload() msg: AppMessage):Promise<UserRecord>{
    const data = msg.data;
    const id = data.id;
    const account = data.account;
    const claims = data.claims;

    return await this.service.updateAccount(id, account, claims);
  }
  @MessagePattern({ cmd:'delete-account' })
  async delete(@Payload() msg: AppMessage):Promise<boolean> {
    try{
      const id = msg.data.id;
      await this.service.deleteAccount(id);
      return true;
    }catch {
      return false;
    }
  }

  @MessagePattern({ cmd:'list-accounts' })
  async list():Promise<AccountList>{
    return await this.service.listAccounts();
  }
}