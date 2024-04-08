import User from "../models/User.model.js";
/**
 * User Controller
 */
export default class UserController {
  static users = [];

  constructor() {
    this.users = [];
  }

  /**
   * Add a new User
   * @param {User} user
   */
  addUser(user) {
    this.users.push(user);
  }

  /**
   * Remove a User
   * @param {int} id
   */
  removeUser(id) {
    this.users = this.users.filter((u) => u.id !== id);
  }

  /**
   * Get all Users
   * @return {User[]} users
   */
  getUsers() {
    return this.users;
  }

  /**
   * Get a User by id
   * @param {string} id
   * @return {User} user
   */
  getUserById(id) {
    return this.users.find((u) => u.id === id);
  }
}
