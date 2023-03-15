import { Injectable } from '@nestjs/common';
import { AccountClaims } from './dto/account.claims.dto';


@Injectable()
export class AccountClaimsFactory {
  
  make = (data:any):AccountClaims => ({ 
    id:data.id, 
    admin: data.admin, 
    developer: data.developer, 
    permissions: data.permissions 
  });
}
