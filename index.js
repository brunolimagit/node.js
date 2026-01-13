import express from "express";

const server = express();

//localhost:3000/curso
server.get('/curso', (req, res) => {
    const nome = req.query.nome
    console.log('acessou a rota');
    res.send(`<h1>curso de ${nome}</h1>`);
});


server.listen(3000);

