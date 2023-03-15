import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { auth } from 'firebase-admin';
import { App } from 'firebase-admin/app';
import { CreateRequest, DecodedIdToken, ListUsersResult, UpdateRequest, UserRecord } from 'firebase-admin/auth';
import { AccountList } from './dto/account.dto';
import { AccountClaims } from './dto/account.claims.dto';
import { AccountClaimsFactory } from './app.claims.factory';

@Injectable()
export class AppService {

  constructor(protected factory: AccountClaimsFactory){}
  
  validateToken = async (token:string, app?:App):Promise<DecodedIdToken|undefined> => {
    try{
      return await admin.auth(app).verifyIdToken(token);
    }catch(e) {
      console.log(e);
      return undefined;
    }
  }

  tryGetToken(header?:string):string | undefined {
    let result = undefined;
    const isValidHeader: boolean = header && header.startsWith('Bearer ');
    if(isValidHeader){ result = header.split(" ")[1]; }
    return result;
  }

  validateAccount= async (idToken:string):Promise<AccountClaims> => {
    const validToken = await this.validateToken(idToken);
    const user = await this.getAccount(validToken.user_id);
    return user.customClaims as AccountClaims;
  }
  
  getAccount = async (id:string, app?:App):Promise<UserRecord> => {
    try{
      return await admin.auth(app).getUser(id)
    }catch {
      return undefined;
    }
  }

  createAccount = async (userInfo:CreateRequest, claims?:AccountClaims):Promise<UserRecord> => {
    const account: UserRecord  = await admin.auth().createUser(userInfo);
    await admin.auth().setCustomUserClaims(account.uid, claims);
    return await this.getAccount(account.uid);
  } 

  updateAccount = async (uid:string, accountInfo:UpdateRequest, claims?:AccountClaims):Promise<UserRecord> => {
    if(accountInfo){
      await admin.auth().updateUser(uid, accountInfo);
    }

    if(claims){
      await admin.auth().setCustomUserClaims(uid, claims);
    }
    
    return await this.getAccount(uid);
  }
  
  deleteAccount = async (uid:string):Promise<void> => await admin.auth().deleteUser(uid);
    
  listAccounts = async (resultLimit?:number, pageToken?:string):Promise<AccountList> => {
    let returnCount = resultLimit ? resultLimit : 50;
    const result : ListUsersResult = await auth().listUsers(returnCount, pageToken);
    const accounts: UserRecord[] = result.users;
    return { accounts: accounts, nextPage: result.pageToken }
  }
}
