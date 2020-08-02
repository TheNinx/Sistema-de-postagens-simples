const Sequelize = require('sequelize');    
const sequelize = new Sequelize('usuario', 'root', '', {  

    host: "localhost",    
    dialect: 'mysql'


});



sequelize.authenticate().then(function(){     


    console.log("Conexão com banco de dados Funcionando");


}).catch(function(){

    console.log("Não foi possivel conectar com banco de dados");


});    



const Postagem = sequelize.define('postagens',{ 

    titulo: {    
        type: Sequelize.STRING

    },                                                     
    conteudo: {

        type: Sequelize.TEXT

    }



})



Postagem.create({       

titulo:  "Um homen perdido",
conteudo: "Carlos Pinheiro"


})



const Cadastro = sequelize.define('cadastro',{

    nome: {
        type: Sequelize.STRING

    },
    email: {
        type: Sequelize.STRING

    },
    senha:{
        type: Sequelize.INTEGER

    }

})



const Usuario = sequelize.define('usuarios',{

    nome: {
        type: Sequelize.STRING

    },
    sobrenome: {
        type: Sequelize.STRING

    },
    idade:{
        type: Sequelize.INTEGER

    },
    email :{

        type: Sequelize.STRING


    }

})

//Usuario.sync({force: true})



