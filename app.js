const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/config');

const url = config.bdURL;
const options = { useUnifiedTopology: true , poolSize: 5, useNewUrlParser: true,useCreateIndex: true};

mongoose.connect(url,options);
mongoose.set('useCreateIndex',true);

mongoose.connection.on('error', (err) =>{
    console.log(`Erro na conexão com o banco de dados: ${err} `);
})

mongoose.connection.on('connected',() =>{
    console.log("Conectado com sucesso ao banco de dados");
})

mongoose.connection.on('disconnected',() =>{
    console.log("aplicação desconectada do banco de dados");
})


app.use(express.urlencoded());
app.use(express.json());

const indexRoute = require('./Routes/index');
const usersRoute = require('./Routes/users');

app.use('/', indexRoute); //setando o index como padrão caso nao seja passado rota
app.use('/users',usersRoute); //criando a rota de usuario


app.listen(3000);

module.exports = app;