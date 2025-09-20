// Importa o framework Express
const express = require("express");
const app = express();

// Define a porta. É MUITO IMPORTANTE usar process.env.PORT para o Azure
const port = process.env.PORT || 3000;

// Cria uma rota principal ("/") que responde com uma mensagem
app.get("/", (req, res) => {
    res.send("<h1>Olá, Mundo!</h1><p>Meu webapp Node.js rodando no Azure!</p>");
});

// Inicia o servidor e o faz "escutar" na porta definida
app.listen(port, () => {
    console.log(`Servidor de exemplo rodando na porta ${port}`);
});
