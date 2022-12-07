const express = require("express");
const app = express();
const {engine} = require('body-parser')
const bodyParser = require('body-parser')
const moment = require('moment')
const Post = require ('./models/Post')
const Sequelize = require('sequelize')

app.engine('handlebars', engine(
    {
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoP
        }
    }
))
