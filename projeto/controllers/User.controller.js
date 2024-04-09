import User from "../models/User.model.js";
/**
 * User Controller
 */
export default class UserController {
  static users = [];
  static isLoaded = false;

  constructor() {
    this.users = [];
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

  loadUsers() {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        await fetch("./static/user_data.json")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            // data.forEach((u) => {
            //   this.addUser(new User(u));
            // });
            resolve(this.getUsers());
          });
        this.isLoaded = true;
      }, 400);
    });
  }
}
