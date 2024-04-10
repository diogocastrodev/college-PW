const isUserLoggedIn = localStorage.getItem("userId") !== null;

const requireLogin = () => {
  if (!isUserLoggedIn) {
    window.location.href = "./signin.html";
  }
};

const requireLogout = () => {
  if (isUserLoggedIn) {
    window.location.href = "./dashboard.html";
  }
};

const logout = () => {
  localStorage.removeItem("userId");
  window.location.href = "./index.html";
};
