import { UserRecord } from "firebase-admin/auth";

export class GetAccountsRequest {
  returnLimit?:number;
  pageToken?:string;
}

export class AccountList {
  accounts:UserRecord[];
  nextPage?:string;
}