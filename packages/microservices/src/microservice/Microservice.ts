import { ClientProxy } from "@nestjs/microservices";

export class Microservice {
  public constructor(protected readonly client: ClientProxy) {}

  public message = (cmd:string, data:any) => {
    return this.client.send<string>({ cmd:cmd }, data).pipe();
  }
}