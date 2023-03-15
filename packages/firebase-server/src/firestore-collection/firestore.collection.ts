import { Injectable } from '@nestjs/common';
import { CollectionReference, DocumentReference, FieldPath, FirestoreDataConverter, getFirestore, Query, QueryDocumentSnapshot, Timestamp, WhereFilterOp, WriteResult } from 'firebase-admin/firestore';
import { FirestoreQuery } from 'src/firestore-query/firestore.query';

@Injectable()
export class FirestoreCollection<T> {
  constructor(protected path:string, protected converter:FirestoreDataConverter<T>){}

  async createOne(values):Promise<T> {
    const collectionRef: CollectionReference<T> = this.getCollectionRef(this.path);
    const docRef: DocumentReference<T> = await collectionRef.add(values)
    const snapshot = await docRef.get();
    return await snapshot.data();
  }

  async readOne(id:string):Promise<T>{
    const collectionRef: CollectionReference<T> = this.getCollectionRef(this.path);
    const docRef:DocumentReference<T> = collectionRef.doc(id);
    const snapshot = await docRef.get();
    return await snapshot.data();
  }
  
  async read(conditions?:FirestoreQuery):Promise<T[]> {

    let query: Query<T> | CollectionReference<T> = this.getCollectionRef(this.path);
    if(conditions) {
      query = query.where(conditions.field, conditions.operator, conditions.value);
    }
    
    const docs: QueryDocumentSnapshot<T>[] = (await query.get()).docs;

    return docs.map((snapshot:QueryDocumentSnapshot<T>)=>snapshot.data());
  }

  async update(id:string, values):Promise<T> {
    const collectionRef: CollectionReference<T> = this.getCollectionRef(this.path);
    const docRef:DocumentReference<T> = collectionRef.doc(id);
    await docRef.update(values);  
    return await this.readOne(id)
  }
  async deleteOne(id:string):Promise<Timestamp> {
    const collectionRef: CollectionReference<T> = this.getCollectionRef(this.path);
    const result = await collectionRef.doc(id).delete();
    return result.writeTime;
  }

  getDocumentRef(id:string):DocumentReference<T> {
    const collection = this.getCollectionRef(this.path);
    return collection.doc(id);
  }
  getCollectionRef(path:string):CollectionReference<T> {
    const db = getFirestore();
    return db.collection(path).withConverter(this.converter)
  }
}
