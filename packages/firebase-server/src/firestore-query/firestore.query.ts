import { FieldPath, WhereFilterOp } from "firebase-admin/firestore";

export class FirestoreQuery {
  field:string | FieldPath;
  operator:WhereFilterOp; 
  value:any;
}