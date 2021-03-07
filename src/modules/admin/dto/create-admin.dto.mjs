import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
export class CreateAdminDto {
  id_admin;
  username;
  password;
  phone;
  address;
  type_admin;

  constructor(_username, _password, _phone, _address, _type_admin) {
    this.id_admin = uuidv4();
    this.username = _username;
    this.password = bcrypt.hashSync(_password, +process.env.BCRYPT_SALT);
    this.phone = _phone;
    this.address = _address;
    this.type_admin = _type_admin;
  }
}
