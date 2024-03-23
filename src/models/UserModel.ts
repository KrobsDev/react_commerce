export class UserModel {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_num?: string;
  date_of_birth?: string;
  avi?: string;

  constructor(data: Record<string, string>) {
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.email = data.email;
    this.password = data.password;
    this.phone_num = data.phone_num;
    this.date_of_birth = data.date_of_birth;
    this.avi = data.avi;
  }
}
