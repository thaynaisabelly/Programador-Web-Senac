//Conectar ao banco de dados usando o sequelize

const Sequelize = require('sequelize')
const sequelize = new Sequelize 
('thayná', 'root','1234', 
    {
        host: "localhost",
        dialect: "mysql"
    }
)


//Teste
sequelize.authenticate ().thn
(function()
    {
        console.log("Conectado com sucesso!")
    }
).catch
(function(erro)
    {
        console.log("Falha ao se conectar: " + erro)
    }
)