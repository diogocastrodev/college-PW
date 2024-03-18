/*
{
    "users": [
        {
            "id": 1,
            "name": "John",
            "email": "john@doe.doe",
            "password": "1234"
            "todos": [
                {
                    "title": "Beep"
                    "date": "2021-12-12"
                    "status": true
                }
            ]
        }
    ]
} 
 */
const basePath = "/PW/PL/LAB2/";
let jsonVariable = {
  users: [],
};
if (localStorage.getItem("users") !== null) {
  jsonVariable = JSON.parse(localStorage.getItem("users"));
} else {
  localStorage.setItem("users", JSON.stringify(jsonVariable));
}
/**
 *
 * @param {int} spaces - Number of spaces to add to the placeholder
 * @returns {string} - String with the number of spaces requested
 */
const emailSpaces = (spaces) => {
  let a = "";
  for (let i = 0; i < spaces; i++) {
    a += " ";
  }
  return a;
};

// Add spaces to the placeholder of the email input
if (document.getElementById("email") !== null)
  document
    .getElementById("email")
    .setAttribute("placeholder", emailSpaces(40) + "@ipvc.pt");

const register = ({ name, email, password, retypePassword }) => {
  console.log("Beep");
  // Remove spaces and convert email to lowercase
  email = email.trim().toLowerCase();
  // Remove spaces from the name
  name = name.trim();
  // Invalid fields
  if (
    name.length < 0 ||
    email.length < 0 ||
    password.length < 0 ||
    retypePassword.length < 0
  ) {
    alert("Please fill in all the fields");
    return;
  }
  // Invalid email
  if (!email.includes("@")) {
    alert("Invalid email");
    return;
  }
  if (jsonVariable.users.map((user) => user.email).includes(email)) {
    alert("Email already exists");
    return;
  }
  // Passwords do not match
  if (password !== retypePassword) {
    alert("Passwords do not match");
    return;
  }
  const id = jsonVariable.users.length + 1;
  // Save locally
  jsonVariable.users.push({ id, name, email, password });
  // Save to local storage
  localStorage.setItem("users", JSON.stringify(jsonVariable));
  // Redirect to the login page
  redirect("login.html");
};

const login = ({ email, password }) => {
  // Remove spaces and convert email to lowercase
  email = email.trim().toLowerCase();
  // Invalid fields
  if (email.length < 0 || password.length < 0) {
    alert("Please fill in all the fields");
    return;
  }
  // Invalid email
  if (!email.includes("@")) {
    alert("Invalid email");
    return;
  }
  // Check if email exists
  const user = jsonVariable.users.find((user) => user.email === email);
  if (user !== undefined) {
    // Check if password is correct
    if (user.password === password) {
      localStorage.setItem("currentUser", user.id);
      // Redirect to the dashboard
      redirect("dashboard.html");
    } else {
      alert("Invalid email or password");
    }
  } else {
    alert("Invalid email or password");
  }
};

const checkSession = () => {
  if (localStorage.getItem("currentUser") === null) {
    redirect("login.html");
  }
};

const redirect = (path) => {
  if (window.location.href) window.location.href = basePath + path;
  else window.location.replace(basePath + path);
};
