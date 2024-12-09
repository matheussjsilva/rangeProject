document.getElementById("list-users-btn").addEventListener("click", () => {
  console.log("Botão de Listar Usuários clicado");
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
  console.log("Buscando usuários...");
  fetch("https://rangeproject-production.up.railway.app/users")
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

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.style.marginLeft = "10px";
    deleteButton.addEventListener("click", () => deleteUser(user.id));

    li.appendChild(deleteButton);
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

  fetch("https://rangeproject-production.up.railway.app/users", {
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

function deleteUser(userId) {
  fetch(`https://rangeproject-production.up.railway.app/users/${userId}`, {
    method: "DELETE",
  })
    .then((response) => {
      console.log("Resposta do servidor:", response);
      if (!response.ok) {
        throw new Error("Erro ao deletar o usuário");
      }
      alert("Usuário deletado com sucesso!");
      fetchUsers();
    })
    .catch((error) => {
      console.error("Erro", error);
      alert("Não foi possível deletar o usuário.");
    });
}
