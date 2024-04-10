import UserController from "./controllers/User.controller.js";
import User from "./models/User.model.js";

const userController = new UserController();
userController.loadUsers();

export const loadNavBar = () => {
  fetch("./templates/nav.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("root").insertAdjacentHTML("afterbegin", data);
    });
};

export const loadFooter = () => {
  fetch("./templates/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("root").insertAdjacentHTML("beforeend", data);
    });
};

setTimeout(() => {
  console.log(userController.getUsers());
}, 1000);
