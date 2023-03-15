import { Injectable, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Microservice} from "@solo-system/microservices";

@Injectable()
export class WebsiteService extends Microservice {
  constructor(@Inject('WEBSITE_SERVICE') protected readonly client: ClientProxy) { super(client) }
 
}