const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/Post');

// Config
    // Template Engine
        app.engine('handlebars', handlebars.engine({ 
                                            defaultLayout: 'main',
                                            runtimeOptions:{
                                                allowProtoPropertiesByDefault:true,
                                                allowProtoMethodsByDefault:true
                                            }
                                        }));
        app.set('view engine', 'handlebars');
    // Body Parser
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
// Rotas
    app.get('/', function(req, res){
        Post.findAll({order:[['id', 'DESC']]}).then(function(posts){
            // Render -> renderiza arquivos dentro da pasta "views"
                res.render('home', {posts:posts});
        })
    });

    app.get('/cad', function(req, res){
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

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where:{'id': req.params.id}})
            .then(function(){
                res.send('Postagem deletada com sucesso!')
            }).catch(function(error){
                res.send('Essa postagem não')
            });
    });

app.listen(8080, function () {
    console.log('Aplicação rodando na porta 8080!');
});