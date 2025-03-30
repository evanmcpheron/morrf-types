export enum Role {
  ADMIN = "admin",
  GUEST = "guest",
  STAFF = "staff",
  BUYER = "buyer",
  SELLER = "seller",
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
}
