import { Injectable } from "@nestjs/common";
import { Website } from "./dto/website.dto";
import { WebsiteConverter } from "./converter/website.converter";
import { FirestoreCollection } from "@solo-system/firebase-server";

@Injectable()
export class WebsiteCollection extends FirestoreCollection<Website> {
  constructor(protected converter:WebsiteConverter) {
    super('website', converter)
  }
}