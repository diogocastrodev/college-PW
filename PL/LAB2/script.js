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
  if (window) window.location.href = basePath + path;
  else window.location.replace(basePath + path);
};

/* -- Todos -- */
const addTodoModal = () => {
  const modal = document.getElementById("modal-body");
  modal.innerHTML = `
  <div class="text-3xl mb-3">Nova Tarefa</div>
                    <form id="form-tarefa" name="form-tarefa" class="flex flex-col gap-3" onsubmit="event.preventDefault(); addTodo({
                        description: document.getElementById('input-descricao').value,
                        date: document.getElementById('input-data').value
                    });">
                        <div>
                            <label for="input-descricao" class="form-label">Descrição</label>
                            <input type="text" class="form-control" id="input-descricao" name="input-descricao" required
                                minlength="1">
                        </div>
                        <div>
                            <label for="input-data" class="form-label">Data</label>
                            <input type="date" class="form-control" id="input-data" name="input-data" required>
                        </div>
                        <button type="submit"
                            class="w-full border-2 py-2 border-green-500 hover:bg-green-500 text-black hover:text-white shadow-lg"
                            onsubmit="(event) => {
                        event.preventDefault();
                            }">Gravar</button>
                    </form>`;
};

const addTodo = ({ description, date }) => {
  const tableBody = document.getElementById("tarefas-body");
  let dateFormatted = date;
  if (dateFormatted.split("-")[0].length === 4)
    dateFormatted = date.split("-").reverse().join("-");
  // Count the number of rows
  const rows = tableBody.rows.length;
  const newTodo = `<tr> 
    <td onclick="editTodo(event);">${description}</td>
    <td>${dateFormatted}</td>
    <td>
      <input type="checkbox" name="tarefa${rows + 1}" id="tarefa${
    rows + 1
  }" onchange="toggleTodo(event);"> 
    </td> 
  </tr>`;
  tableBody.innerHTML += newTodo;
  const formBody = document.getElementById("form-tarefa");
  if (formBody) formBody.reset();
  if (formBody) hideModal();
};

const editTodo = (event) => {
  const row = event.target.parentNode;
  const description = row.children[0].innerText;
  const date = row.children[1].innerText;
  const dateFormatted = date.split("-").reverse().join("-");
  const checked = row.children[2].children[0].checked;
  const id = row.rowIndex;
  const modal = document.getElementById("modal-body");
  modal.innerHTML = `
  <div class="text-3xl mb-3">Editar Tarefa</div>
                    <form id="form-tarefa" name="form-tarefa" class="flex flex-col gap-3" onsubmit="event.preventDefault(); editTodoData({
                        id: ${id},
                        description: document.getElementById('input-descricao').value,
                        date: document.getElementById('input-data').value,
                        checked: ${checked}
                    });">
                        <div>
                            <label for="input-descricao" class="form-label
                            ">Descrição</label>
                            <input type="text" class="form-control" id="input-descricao" name="input-descricao" required
                                minlength="1" value="${description}">
                        </div>
                        <div>
                            <label for="input-data" class="form-label">Data</label>
                            <input type="date" class="form-control" id="input-data" name="input-data" required value="${dateFormatted}">
                        </div>
                        <div class="flex flex-row gap-2">
                        <button type="submit"
                            class="w-full border-2 py-2 border-green-500 hover:bg-green-500 text-black hover:text-white shadow-lg"
                            onsubmit="(event) => {
                        event.preventDefault();
                            }">Gravar</button>
                        <button type="button"
                            class="w-full border-2 py-2 border-red-500 hover:bg-red-500 text-black hover:text-white shadow-lg"
                            onclick="deleteTodo(${id});">Apagar</button>
                        </div>
                    </form>`;
  showModal();
};

const hideModal = () => {
  // get modal
  const modal = document.getElementById("exampleModal");

  // change state like in hidden modal
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("style", "display: none");

  // get modal backdrop
  const modalBackdrops = document.getElementsByClassName("modal-backdrop");

  // remove opened modal backdrop
  document.body.removeChild(modalBackdrops[0]);
};

const showModal = () => {
  // get modal
  const modal = document.getElementById("exampleModal");

  // change state like in hidden modal
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  modal.setAttribute("style", "display: block");

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop fade show";
  document.body.appendChild(backdrop);
};

const deleteTodo = (id) => {
  const tableBody = document.getElementById("tarefas-body");
  tableBody.deleteRow(id - 1);
  hideModal();
};

const editTodoData = ({ id, description, date, checked }) => {
  const tableBody = document.getElementById("tarefas-body");
  const dateFormatted = date.split("-").reverse().join("-");
  const row = tableBody.rows[id - 1];
  row.children[0].innerText = description;
  row.children[1].innerText = dateFormatted;
  hideModal();
};

const toggleTodo = (event) => {
  const id = event.target.id;
  const row = document.getElementById(id).parentNode.parentNode;
  if (event.target.checked) {
    // Add class to the row
    row.classList.add("bg-blue-300");
  } else {
    row.classList.remove("bg-blue-300");
  }
};

const initialTodos = () => {
  addTodo({
    description: "Fazer o Lab 1 de PW",
    date: "14-03-2024",
  });
  addTodo({
    description: "Fazer o Lab 2 de PW",
    date: "27-03-2024",
  });
};

// When click outside the modal remove moda-backdrop
document.addEventListener("click", (event) => {
  if (event.target.id === "exampleModal") {
    hideModal();
  }
});
