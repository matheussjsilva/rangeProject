document.getElementById("list-users-btn").addEventListener("click", () => {
  fetchUsers();
});

document.getElementById("add-user-btn").addEventListener("click", () => {
  toggleForm();
});

document.getElementById("user-form").addEventListener("submit", (event) => {
  event.preventDefault();
  addUser();
});

function fetchUsers() {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      displayUsers(data);
    })
    .catch((error) => {
      console.error("Erro ao Buscar usuário", error);
    });
}

function displayUsers(users) {
  const userList = document.getElementById("users");
  userList.innerHTML = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${user.id}, Nome: ${user.name}, Idade: ${user.age}`;
    userList.appendChild(li);
  });

  document.getElementById("user-list").classList.remove("hidden");
  document.getElementById("add-user-form").classList.add("hidden");
}

function toggleForm() {
  document.getElementById("user-list").classList.add("hidden");
  document.getElementById("add-user-form").classList.toggle("hidden");
}

function addUser() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;

  const newUser = {
    name,
    age: parseInt(age, 10),
  };

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then(async (response) => {
      if (response.status === 409) {
        const data = await response.json();
        throw new Error(data.message);
      }
      return response.json();
    })
    .then((data) => {
      alert("Usuário cadastrado com sucesso!");
      toggleForm();
      fetchUsers();
    })
    .catch((error) => {
      console.error("Erro ao adicionar usuário", error);
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = error.message;
      errorMessage.classList.remove("hidden");
    });
}
