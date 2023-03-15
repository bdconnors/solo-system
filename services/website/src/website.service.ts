import { Injectable } from '@nestjs/common';
import { Timestamp } from 'firebase-admin/firestore';
import { FirestoreQuery } from '@solo-system/firebase-server/dist/firestore-query/firestore.query';
import { WebsiteCollection } from './website.collection';
import { Website } from './dto/website.dto';
import { WebsiteConverter } from './converter/website.converter';

@Injectable()
export class WebsiteService {

  constructor(protected collection:WebsiteCollection){}
  
  newWebsite = async(values:Record<string, any>):Promise<Website> => this.collection.createOne(values);
  getAllWebsites = async():Promise<Website[]> => {
    const websiteColRef = this.collection.getCollectionRef('website');
    const res = await websiteColRef.withConverter<Website>(new WebsiteConverter()).get();
    return res.docs.map((snap)=> snap.data());
  }
  getWebsite = async(id:string):Promise<Website> => {
    const websiteRef = await this.collection.getDocumentRef(id);
    const snapshot = await websiteRef.get();
    return snapshot.data();
  }
  updateWebsiteInfo = async(id:string, values:Record<string, any>):Promise<Website> => this.collection.update(id,values);
  removeWebsite = async(id:string):Promise<Timestamp> => this.collection.deleteOne(id);
  queryWebsites = async(query:FirestoreQuery):Promise<Website[]>=> {
    const colRef = this.collection.getCollectionRef('website').where(query.field, query.operator, query.value);
    const snapshot = await colRef.get();
    const docs = await snapshot.docs;
    return docs.map((doc)=>doc.data());
  }
  /**populateManyWebsite = async(snapshots:QueryDocumentSnapshot<Website>[]):Promise<Website[]> =>{
    let result: Website[] = [];

    let curWebsite:Website;
    for(let i = 0; i < snapshots.length; i++){
      curWebsite = await this.populateWebsite(snapshots[i]);
      result.push(curWebsite);
    }
    return result;
  }
  populateWebsite = async(snapshot:QueryDocumentSnapshot<Website> | DocumentSnapshot<Website>):Promise<Website> => {
    const Website = snapshot.data();
    const subcolRef = await snapshot.ref.listCollections()
    const appColRef = subcolRef.find((col)=>col.id === 'application');
    const colSnapshot = await appColRef.withConverter(new ApplicationConverter()).get();
    const apps = colSnapshot.docs.map((doc)=>doc.data());
    Website.applications = apps;
    return Website;
  }**/
}