

export type PermissionLevel = 'ALL' | 'OWNED';

export interface Permission {
  create: PermissionLevel;
  read: PermissionLevel;
  update: PermissionLevel;
  delete: PermissionLevel;
}

export interface Role {
  name: string;
  permission: Permission;
}

export interface WebsitePermission {
  id: string,
  role: Role
}

export class AccountClaims {
  id:string;
  admin: boolean;
  developer: boolean;
  permissions: WebsitePermission[];
}