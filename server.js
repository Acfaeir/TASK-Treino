const express = require("express");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db");

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

let sessions = {};

// Registro
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 8);
  db.run("INSERT INTO users(username, password) VALUES(?, ?)", [username, hash], err => {
    if (err) return res.status(400).json({ error: "Usuário já existe" });
    res.json({ success: true });
  });
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {
    if (!user || !bcrypt.compareSync(password, user.password)) 
      return res.status(401).json({ error: "Credenciais inválidas" });
    const token = Math.random().toString(36).substring(2);
    sessions[token] = user.id;
    res.json({ token });
  });
});

// Middleware de autenticação
app.use((req, res, next) => {
  if (["/register", "/login", "/"].includes(req.path)) return next();
  const token = req.headers.authorization;
  if (!token || !sessions[token]) return res.status(403).json({ error: "Não autorizado" });
  req.userId = sessions[token];
  next();
});

// CRUD de tarefas
app.get("/tasks", (req, res) => {
  db.all("SELECT * FROM tasks WHERE user_id = ?", [req.userId], (err, rows) => res.json(rows));
});

app.post("/tasks", (req, res) => {
  const { title } = req.body;
  db.run("INSERT INTO tasks(title, user_id) VALUES(?, ?)", [title, req.userId], function(err) {
    res.json({ id: this.lastID, title });
  });
});

app.put("/tasks/:id", (req, res) => {
  db.run("UPDATE tasks SET done = ? WHERE id = ? AND user_id = ?", [req.body.done, req.params.id, req.userId], err => {
    res.json({ success: !err });
  });
});

app.delete("/tasks/:id", (req, res) => {
  db.run("DELETE FROM tasks WHERE id = ? AND user_id = ?", [req.params.id, req.userId], err => {
    res.json({ success: !err });
  });
});

app.listen(3000, () => console.log("✅ Servidor rodando em http://localhost:3000"));

module.exports = app