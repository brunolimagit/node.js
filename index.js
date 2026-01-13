import express from "express";

const server = express();

//localhost:3000/curso
//aqui estou recebendo "req" = nome | enviando "res"= <h1>curso de ${nome}</h1>
server.get('/curso', (req, res) => {
    const nome = req.query.nome

    //aqui estou usando o HTTP status codes em verificação para erros(400) bad request  = dados inválidos
    if(!nome){
    return res.status(400).send(`<h1>indique o nome do curso</h1>`)
    }
    console.log('acessou a rota');
    res.send(`<h1>curso de ${nome}</h1>`);
});

//localhost:3000/api
//aqui troquei a rota para /api e estou enviando "res"= um json em forma de obj
server.get('/api', (req, res) =>{
    return res.json({
        nome: "bruno lima",
        idade: 31,
        nacionalidade:"brasileiro"
    })
})

server.listen(3000);

