export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  role: string;
  photo: string;
  passwordLastChanged: Date;
  active: boolean;
}
