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
   * Create a new User
   * @param {int} id
   * @param {String} name
   * @returns {void} void
   */
  constructor({ id, name }) {
    if (!id) {
      this.id = generateUUID();
    }
    this.name = name;
  }

  get id() {
    return this.id;
  }

  /**
   * @return {string} id
   */
  get name() {
    return this.name;
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
      name: this.name,
    };
  }
}
