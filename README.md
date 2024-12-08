# Range Project
- https://rangeproject-production.up.railway.app/
- Este é um projeto básico de API utilizando **Node.js** com o framework **Express.js**. Ele implementa funcionalidades para listar, adicionar e gerenciar usuários. O projeto inclui um frontend simples para interação com a API.

## Funcionalidades

- **Listar usuários**: Obtenha uma lista de usuários existentes.
- **Adicionar usuário**: Cadastre novos usuários, validando se o nome já existe.
- **Alternar entre lista e formulário**: Interface para listar usuários e cadastrar novos de forma interativa.

---

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **CORS**
- **HTTP Status Codes**
- **Frontend (HTML, CSS, JavaScript)**

---

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior recomendada)
- [Git](https://git-scm.com/)

---

## Passo a Passo para Utilização

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/matheussjsilva/rangeProject.git

### 2. Acesse o diretório do projeto
Navegue até o diretório do projeto recém-clonado:
    
    
    cd rage-project

### 3. Instale as dependências
Com o terminal aberto no diretório do projeto, execute o comando abaixo para instalar todas as dependências necessárias listadas no arquivo `package.json`:

    npm install
### 4. Inicie o servidor
Com todas as dependências instaladas, inicie o servidor executando o comando abaixo:

   
    node .
### 5. Acesse o servidor
Abra o navegador e acesse o endereço abaixo para visualizar a aplicação:

[http://localhost:3000](http://localhost:3000)

No navegador, você terá acesso ao frontend, onde é possível:

- **Listar usuários:** Clique no botão **"Listar Usuários"** para visualizar todos os usuários cadastrados.
- **Adicionar usuário:** Clique no botão **"Adicionar Usuário"**, preencha o formulário com nome e idade, e envie para cadastrar um novo usuário.

---

Caso prefira interagir diretamente com a API, você pode usar ferramentas como **Postman** ou **Insomnia** para testar as seguintes rotas:

#### Rotas da API

1. **Listar Usuários**
   - **Rota:** `GET /users`
   - **Descrição:** Retorna a lista de usuários cadastrados.

2. **Obter Usuário por ID**
   - **Rota:** `GET /users/:userId`
   - **Descrição:** Retorna os detalhes de um usuário específico pelo ID.

3. **Adicionar Usuário**
   - **Rota:** `POST /users`
   - **Descrição:** Adiciona um novo usuário.
   - **Corpo da Requisição (JSON):**
     ```json
     {
       "name": "Novo Usuário",
       "age": 30
     }
     ```

Aplicação pronta para uso! 🎉
