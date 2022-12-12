const Sequelize = require('sequelize')
const sequelize = new Sequelize 
('teste', 'root','1234', 
    {
        host: "localhost",
        dialect: "mysql"
    }
)

const Postagem = sequelize.define
('postagem', 
    {
        título:
            {
                type: Sequelize.STRING
            },

        conteúdo:
            {
                type: Sequelize.TEXT
            }
    }
)

Postagem.sync({force:true})