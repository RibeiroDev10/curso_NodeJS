const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
        app.set('view engine', 'handlebars');
    // Body Parser
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
// Rotas
    app.get('/', function(req, res){
        // Render -> renderiza arquivos dentro da pasta "views"
            res.render('home'); 
    });

    app.get('/cad', function(req, res){
        // Nome do arquivo que quer exibir
        // Renderiza o formulário
            res.render('form'); 
    });

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            // Redirecionando para outra rota caso sucesso no post
                res.redirect('/');
        }).catch(function(error){
            res.send("Erro na criação do post: " + error);
        })
    });

app.listen(8080, function () {
    console.log('Aplicação rodando na porta 8080!');
});