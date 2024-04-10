import User from "../models/User.model.js";
/**
 * User Controller
 */
export default class UserController {
  static users = [];
  static isLoaded = false;

  constructor() {
    if (this.users === null || this.users === undefined) {
      UserController.users = new Set();
    }
    if (this.isLoaded === null || this.isLoaded === undefined) {
      UserController.isLoaded = false;
    }
    if (!UserController.isLoaded) {
      this.loadUsers();
      UserController.isLoaded = true;
    }
  }

  /**
   * Add a new User
   * @param {User} user
   */
  addUser(user) {
    UserController.users.push(user);
  }

  /**
   * Remove a User
   * @param {int} id
   */
  removeUser(id) {
    UserController.users = this.users.filter((u) => u.id !== id);
  }

  /**
   * Get all Users
   * @return {User[]} users
   */
  getUsers() {
    return UserController.users;
  }

  /**
   * Get a User by id
   * @param {string} id
   * @return {User} user
   */
  getUserById(id) {
    return UserController.users.values().find((u) => u.id === id);
  }

  /**
   * @param {string} email
   * @returns {int} id
   */
  getUserIdByEmail(email) {
    return UserController.users
      .values()
      .find((u) => u.email.trim().toLowerCase() === email.trim().toLowerCase())
      .id;
  }

  /**
   * @param {string} username
   * @returns {int} id
   */
  getUserIdByUsername(username) {
    return UserController.users
      .values()
      .find(
        (u) => u.username.trim().toLowerCase() === username.trim().toLowerCase()
      ).id;
  }

  loadUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        await fetch("./static/user_data.json")
          .then((res) => res.json())
          .then((data) => {
            console.log("FETCHING USERS ", data);
            UserController.users = new Set();
            data.forEach((u) => {
              UserController.users.add(new User(u));
            });
            UserController.isLoaded = true;
            resolve(this.getUsers());
          });
      }, 400);
    });
  }
}
