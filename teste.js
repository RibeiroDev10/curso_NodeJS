// Como se conectar ao banco de dados mysql usando o Sequelize

const Sequelize = require('sequelize');
const sequelize = new Sequelize('sistemaDeCadastro', 'root', '1234', {
    host: "localhost",
    dialect: "mysql"
});
            // Essa função verifica se conseguimos sucesso ao realizar conexão com BD
sequelize.authenticate()
            .then(function(){
                console.log("Conectado com sucesso!");
            })
            .catch(function(error){
                console.log("Falha ao se conectar: " + error)
            }) 

// Montando model "Postagem", através do sequelize, 
// Vamos criar os campos da tabela dentro de um objeto JSON
const Postagem = sequelize.define('postagens', {
    titulo: {
        type:Sequelize.STRING
    },
    conteudo:{
        type:Sequelize.TEXT
    },
});

// Gerando uma tabela no banco
// Postagem.sync({force:true});

// Criando uma postagem
/*Postagem.create({
    titulo: "Um titulo qualquer!",
    conteudo:"Conteudo qualquer!"
});*/

// Criando um model "Usuario"
const Usuario = sequelize.define('usuarios', {
    nome:{
        type:Sequelize.STRING
    },
    sobrenome:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    }
});

// Usuario.sync({force:true});

/*Criando um usuário
Usuario.create({
    nome:"Rafael",
    sobrenome:"Ribeiro",
    idade:19,
    email:"rafael@teste.com.br"
})*/