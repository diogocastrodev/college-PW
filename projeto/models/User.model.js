import { generateUUID } from "../utils.js";
/**
 * User Model
 */
export default class User {
  id;
  username;
  first_name;
  last_name;
  email;
  password;
  phone_number;
  created_at;
  updated_at;
  status;
  hash;
  admin;
  avatar;

  /**
   *
   * @param {{
   * id: number,
   * username: string,
   * first_name: string,
   * last_name: string,
   * email: string,
   * password: string,
   * phone_number: string,
   * created_at: Date,
   * updated_at: Date,
   * status: "ACTIVE" | "INACTIVE" | "SUSPENDED" | "WAITING"
   * hash: string,
   * admin: boolean,
   * avatar: string, }} data
   */
  constructor({
    id = generateUUID(),
    username,
    first_name,
    last_name,
    email,
    password,
    phone_number,
    created_at = new Date(),
    updated_at = new Date(),
    status = "active",
    hash,
    admin = false,
    avatar,
  }) {
    this.id = id;
    this.username = username;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.phone_number = phone_number;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.status = status;
    this.hash = hash;
    this.admin = admin;
    this.avatar = avatar;
  }

  /**
   * @param {string} name
   */
  set name(name) {
    if (!name) {
      throw new Error("Name is required");
    }
    console.log(name);
    this.name = name.trim();
  }

  toJSON() {
    return {
      id: this.id,
      username: this.username,
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone_number: this.phone_number,
      created_at: this.created_at,
      updated_at: this.updated_at,
      status: this.status,
      hash: this.hash,
      admin: this.admin,
      avatar: this.avatar,
    };
  }
}
