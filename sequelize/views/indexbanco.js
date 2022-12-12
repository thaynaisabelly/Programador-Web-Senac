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

app.get('/', function(req, res)
{
    res.render('home')
}
)
app.get('/', function(req, res)
{
    res.render('formulario')
}
)

app.post('/add', function (req, res)
{
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then fu
})