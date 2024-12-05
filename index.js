import express from "express";
import path from "node:path";
import { fileURLToPath } from "url";
import { StatusCodes } from "http-status-codes";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "/frontend")));
const PORT = 3000;
let users = [
  {
    id: 1,
    name: "Rafael",
    age: 41,
  },
  {
    id: 2,
    name: "Jose",
    age: 56,
  },
  {
    id: 3,
    name: "Carlos Alberto",
    age: 23,
  },
];

app.listen(PORT, () => {
  console.log(`Servidor rodando no http://localhost:${PORT}`);
});

app.get("/", (request, response) => {
  response.send(`
    <h1>Hello World</h1>
    <h1>Trabalhando com exspressjs</h1>
    `);
});

app.get("/users", (request, response) => {
  return response.send(users);
});

app.get("/users/:userId", (request, response) => {
  const userId = request.params.userId;
  const user = users.find((user) => {
    return user.id === Number(userId);
  });
  return response.send(user);
});

app.post("/users", (request, response) => {
  const newUser = request.body;

  const userExistente = users.find((user) => user.name === newUser.name);
  if (userExistente) {
    return response
      .status(StatusCodes.CONFLICT)
      .send({ message: "Usuário existente" });
  }

  let maxId = 0;
  for (const user of users) {
    if (user.id > maxId) {
      maxId = user.id;
    }
  }

  newUser.id = maxId + 1;

  users.push(newUser);

  return response.status(StatusCodes.CREATED).send(newUser);
});
