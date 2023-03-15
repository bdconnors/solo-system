import { Injectable } from '@nestjs/common';
import { FirestoreDataConverter, QueryDocumentSnapshot } from 'firebase-admin/firestore';
import { Website } from '../dto/website.dto';

@Injectable()
export class WebsiteConverter implements FirestoreDataConverter<Website> {
  
  toFirestore = (website) =>  {
    return {
      id: website.id,
      name: website.name,
      brand: website.brand,
      favicon: website.favicon
    }
  }
  
  fromFirestore = (snapshot:QueryDocumentSnapshot) => {
    const data = snapshot.data();
    return new Website(snapshot.id, data.name, data.brand, data.favicon);
  }
}
