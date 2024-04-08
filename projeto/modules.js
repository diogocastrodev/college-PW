import UserController from "./controllers/User.controller.js";
import User from "./models/User.model.js";

const userController = new UserController();

const fetchUsers = async () => {
  setTimeout(async () => {
    await fetch("./static/user_data.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((u) => {
          userController.addUser(new User(u));
        });
      });
  }, 400);
};

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

fetchUsers();

setTimeout(() => {
  console.log(userController.getUsers());
}, 1000);
