const express = require('express'); // importando express

const app = express(); // criando a aplicação


// .get => método para acessar a rota
// primeiro parâmetro => o endereço que queremos observar
// segundo parâmetro => função com parâmetros da requisição e resposta 
// todo retorno da rota precisa usar o response para devolver ao navegador uma resposta
// '/' significa localhost
// o request guarda as informações que o usuário está fazendo 
// ex: a rota que está usando, os parâmetros que está sendo enviado pra essa rota,
// imagina a criação de um usuário, a aplicação web, precisa enviar o nome, email,
// senha do usuário pra colocar no banco de dados
app.get('/', (request, response) => {
    // não iremos retornar um texto e sim uma estrutura de dados
    return response.json({ message: 'Hello World'});

    // return response.send('Hello World');
})


// acessar pelo navegador a aplicação
app.listen(3000);