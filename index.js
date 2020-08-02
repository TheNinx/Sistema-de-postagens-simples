const express = require("express");
const app = express();
const handlebars = require('express-handlebars');   
const bodyParse = require('body-parser');
const Sequelize = require('sequelize');    
const bodyParser = require("body-parser");
const Post = require('./models/Posts');





//********************************************************************************************************************************************//
//boby Parse

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//********************************************************************************************************************************************//

//********************************************************************************************************************************************//
//conexão com BD

   
const sequelize = new Sequelize('usuario', 'root', '', {  
    host: "localhost",    
    dialect: 'mysql'


});

//********************************************************************************************************************************************//
//config template engine

app.engine('handlebars', handlebars({defaultLayout:  'main'})); // esta dizendo que o layouts padrao vai ser o handlebars na pasta main
app.set('view engine', 'handlebars');

//********************************************************************************************************************************************//
//ROTAS

app.get("/", function(req,res){  
    
    Post. findAll().then(function(posts){       

        res.render("home", { posts: posts}) 


    })
    
    
    
});




app.get("/Cadastro", function(req,res){  
    
    
    res.render('formulario');  
    
    
    
});


app.post("/enviaForm", function(req,res){     
    
    Post.create({

        titulo: req.body.titulo,
        conteudo: req.body.conteudo

    }).then(function(){

        res.redirect("/")



    }).catch(function(){

        res.send("Infelizmente não foi possivel realizar sua postagem tente novamente");



    })
    
    
    
    
});


app.get("/deletar/:id", function(req,res){  
    
   Post.destroy({where: {"id": req.params.id}}).then(function(){

    res.send("Postagem excluida com sucesso")


   }).catch(function(){

    res.send("Não foi possivel excluir")

   })
    
    
});

//********************************************************************************************************************************************//




app.listen(8081, function(){


    console.log("Servidor Rodando");




}); // função sempre será a ultima  //localhost:8081