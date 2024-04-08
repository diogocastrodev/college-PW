import { generateUUID } from "../utils.js";
/**
 * User Model
 */
export default class User {
  id;
  name;

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
    this.name = name.trim();
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
