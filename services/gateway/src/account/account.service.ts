import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Microservice} from "@solo-system/microservices";

@Injectable()
export class AccountService extends Microservice {
  constructor(@Inject('ACCOUNT_SERVICE') protected readonly client: ClientProxy) { super(client)}
}