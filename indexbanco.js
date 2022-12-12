const express = require("express");
const app = express();
const {engine} = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('../models/Post')
const Sequelize = require('sequelize')

app.engine
('handlebars',  engine({defaultLayout: 'main'}))
app.set('view engine','handlebars')

app.use
(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const sequelize = new sequelize 
('postapp', 'root','1234',
    {
        host: "localhost",
        dialect: "mysql"
    }
)

app.get('/add', function(req, res)
    {
        Post.create
        (
            {
                título: req.body.titulo,
                conteúdo: req.body.conteudo
            }
        ).then(function(erro)
                {
                    res.send("Houve um erro: " + erro)
                }
              )
    }
)
app.listen
(8090, function()
    {
        console.log("Servidor Rodando na url http:localhost>8090")
    }
);