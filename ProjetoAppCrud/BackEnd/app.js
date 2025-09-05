// import express
const express = require("express");
/* EXPRESS ↪ é um framework para criar servidores e API de froma rápida
que facilita na criação de rotas, na forma de lidar com requisições e
 nas respostas.*/

// import cors
const cors = require("cors");
/*  CORS ↪ permite que o back-end aceite requisições vindas de outras
origens (React Native,  React). Sem o cors os navegadores bloqueiam
essas conexões. */

// import dotenv
const dotenv = require("dotenv");
/* DOTENV ↪ gerencia as variáveis de ambiente em um arquivo .env,
desta maneira não deixamos senhas, tokens e configs expostos no código. */

// import mysql2
const mysql = require("mysql2/promise");
/* MYSQL2 ↪ biblioteca para conectarmos o Node ao banco MYSQL. Essa
versão suporta Promises, permitindo usar async/await em consultas. */

// import bcrypt
const bcrypt = require("bcrypt");
/* BCRYPT ↪ é usado paracriptografar as senhas. Nunca devemos salvar
as senhas "puras" no banco, por isso usamos o bcrypt. */

// import jsonwebtoken
const jwt = require("jsonwebtoken");
/* JSONWEBTOKEN ↪ gera tokens de validação. Quando o usuário loga,
envia-se para ele um JWT que será usado para acessar rotas protegidas. */

const PORT = 3001 // onde vai rodar o back-end
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

// conexão com o banco MYSQL
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
})

// rota: REGISTRO
app.post("/auth/register", async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // verificação dos campos
    if (!nome || !email || !senha) {
      return res.status(400).json({ error: "Preencha todos os campos!" });
    }

    // verificação do email
    const [rows] = await pool.query("SELECT id FROM users WHERE email = ?", [email])
    if (rows.length > 0) {
      return res.status(400).json({ error: "Email já cadastrado!" })
    }

    // armazenamento da senha criptografada e das outras informações
    const senha_hash = await bcrypt.hash(senha, 10);
    await pool.query(
      "INSERT INTO users (nome, email, senha) VALUES (?, ?, ?)",
      [nome, email, senha_hash]
    );

    res.status(201).json({ message: "Usuário criado com sucesso!" })

    // mensagem de erro
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Erro ao registrar o usuário." })
  }
});

// rota: LOGIN
app.post("/auth/login", async (req, res) => {
  try {
    const { email, senha } = req.body;

    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email])
    if (rows.length === 0) {
      return res.status(400).json({ error: "Usuário não encontrado." })
    }

    const usuario = rows[0];
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ error: "Senha incorreta" });
    }

    // token do usuário (assinatura digital)
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    )

    res.json({ message: "Login bem sucedido!", token })

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error ao fazer login!" })
  }
})

// -------------- Devolução das informações para o usuário-----------
// MIDDLEWARE ↪ intermediário entre a requisição e a respostas
// Middleware:
function autenticarToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // se o token não for fornecido:
  if (!token) {
    return res.status(401).json({ error: "Token não fornecido!" })
  }

  // verificar se o token está correto:
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido!" })
    }
    req.user = user;
    next();
  })
}

// rota: PERFIL
app.get("/auth/profile", autenticarToken, async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT nome, email FROM users WHERE id = ?", [req.user.id])

    if (rows.length === 0) {
      return res.status(404).json({ error: "Usuário não encontrado." })
    }
    res.json({ user: rows[0] })

  } catch (error) {
    cosole.log(error);
    res.status(500).json({ error: "Erro ao buscar os dados do usuário." })
  }
})

// rota: ATUALIZAR
app.put("/auth/update", autenticarToken, async (req, res) => {
  try {
    const { nome, email } = req.body;

    if (!nome && !email) {
      return res.status(404).json({ error: "Informe nome ou email para atualizar" })
    }

    await pool.query(
      "UPDATE users SET nome = ?, email = ? WHERE id = ?", [nome, email, req.user.id]
    )

    res.json({ message: "Dados atualizados com sucesso!" })

  } catch (error) {
    cosole.log(error);
    res.status(500).json({ error: "Erro ao atualizar os dados." })
  }
})

async function conexaoDB() {
  try {
    const conn = await pool.getConnection();
    console.log("Conexão com MYSQL bem-sucedida!");
    conn.release();
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// iniciando o servidor:
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`)
});
