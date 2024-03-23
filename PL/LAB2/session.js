const checkSession = () => {
  if (localStorage.getItem("currentUser") === null) {
    redirect("login.html");
  }
};

checkSession();
