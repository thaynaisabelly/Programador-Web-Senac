const  Sequelize  = require('sequelize')
const sequelize = new Sequelize 
('thayná', "root", "1234",
{
    host: "localhost",
    dialect: "mysql"
}
)

const Usuario = sequelize.define('usuarios',
{
    nome:
    {
        type: Sequelize.STRING
    },
    sobrenome:
    {
        type: Sequelize.STRING
    },
    idade:
    {
        type: Sequelize.INTEGER
    },
    email:
    {
        type: Sequelize.STRING
    },
})

//Usuario.sync({force:true})

Usuario.create 
(
    {        
        nome:"Wondewall",
        sobrenome:"Farias",
        idade:"16",
        email:"wonderwall@gmail.com",
       
        nome:"Marta",
        sobrenome:"Alien",
        idade:12,
        email:"marta.alien@gmail.com",
        
        nome:"Juan",
        sobrenome:"Santiago",
        idade:"13",
        email:"santiago.ju@gmail.com",
    }
)

Usuario.create 
(
    { 
        nome:"Matias",
        sobrenome:"Fernandez",
        idade:"14",
        email:"mati.fernandez@gmail.com"
        
    }
)
    
Usuario.create 
(
    { 

        nome:"Alice",
        sobrenome:"Costa",
        idade:"15",
        email:"alice123@gmail.com"    
    }
)
        