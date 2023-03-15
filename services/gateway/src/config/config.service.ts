import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Microservice} from "@solo-system/microservices";

@Injectable()
export class ConfigService extends Microservice {
  constructor(@Inject('CONFIG_SERVICE') protected readonly client: ClientProxy) { super(client)}
}