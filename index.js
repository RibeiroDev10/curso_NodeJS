const express = require('express'); // Requisitando o módulo 'express'
const app = express(); // Qualquer coisa que eu for usar agora do express, eu vou usar a partir da variavel app

// Definição de rotas
app.get('/', function(req, res){
    res.send("Bem vindos! Nodemon funcionando belezura!");
});

app.get("/sobre", function(req, res){
    res.send("Atuando na rota sobre!");
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!");
});

app.get('/ola/:nome/:cargo', function(req, res){
    res.send("<h1>Olá " + req.params.nome + "</h1>" + "<h2>Seu cargo é: " + req.params.cargo + "</h2>");
});


// Função listen que vem do express que pede a porta em que quero rodar a minha aplicação
// Essa função sempre tem que ser a ultima do nosso código
// Função de callback (executada sempre que algum evento acontece)
app.listen(8080, function(){
    console.log('Aplicação rodando na porta 8080!')
});
// localhost:8080