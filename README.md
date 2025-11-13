# 🧩 CRUD Simples — Node.js + Express + SQLite

## 📘 Descrição

Este projeto é um **CRUD básico** (Create, Read, Update, Delete) desenvolvido com **Node.js**, **Express** e **SQLite**.  
O sistema permite **criar, listar, atualizar e excluir** usuários armazenados em um banco de dados local (`database.db`).

---

## ⚙️ Tecnologias utilizadas

- Node.js  
- Express  
- SQLite3  
- Body-parser  

---

## 🚀 Como rodar o projeto

### 1️⃣ Clone o repositório
```bash
git clone https://github.com/seu-usuario/crud-simples.git
cd crud-simples
```

### 2️⃣ Instale as dependências
```bash
npm install
```

### 3️⃣ Inicie o servidor
```bash
node server.js
```

Servidor rodando em:  
👉 **http://localhost:3000**

---

## 🧱 Estrutura de pastas

```
crud-simples/
├── server.js
├── db.js
├── routes/
│   └── users.js
├── public/
│   ├── index.html
│   └── style.css
└── README.md
```

---

## 💾 Banco de Dados

O banco de dados é criado automaticamente com a tabela:

```sql
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  pontos INTEGER
);
```

---

## 🌍 Rotas da API

### 1️⃣ **GET /users**
Lista todos os usuários cadastrados.

📦 **Exemplo de resposta:**
```json
[
  { "id": 1, "nome": "João", "pontos": 50 },
  { "id": 2, "nome": "Maria", "pontos": 100 }
]
```

---

### 2️⃣ **POST /users**
Cria um novo usuário.

📤 **Exemplo de envio:**
```json
{
  "nome": "Alan",
  "pontos": 0
}
```

📦 **Resposta:**
```json
{ "message": "Usuário criado com sucesso!" }
```

---

### 3️⃣ **PUT /users/:id**
Atualiza um usuário existente.

📤 **Exemplo de envio:**
```json
{
  "nome": "Alan Cefair",
  "pontos": 150
}
```

📦 **Resposta:**
```json
{ "message": "Usuário atualizado com sucesso!" }
```

---

### 4️⃣ **DELETE /users/:id**
Remove um usuário do banco de dados.

📦 **Resposta:**
```json
{ "message": "Usuário deletado!" }
```

---

### 5️⃣ **GET /**
Página inicial simples (HTML + CSS) que mostra uma mensagem de boas-vindas.

---

## 💡 Teste rápido

1. Inicie o servidor:
   ```bash
   node server.js
   ```
2. Abra no navegador:
   ```
   http://localhost:3000
   ```
3. Teste as rotas no **Insomnia**, **Postman** ou **Thunder Client**:
   - `GET /users`
   - `POST /users`
   - `PUT /users/:id`
   - `DELETE /users/:id`

---

## 👨‍💻 Autor

**Desenvolvido por:** Alan Cefair  
📚 Projeto CRUD Simples — Node.js + SQLite
