const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo:{
        type:db.Sequelize.STRING
    },
    conteudo:{
        type:db.Sequelize.TEXT
    }
});

// Post.sync({force:true}); ----- Só execute o comando sync uma unica vez -----

module.exports = Post;