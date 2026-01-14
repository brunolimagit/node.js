import express from "express";

const server = express();
const cursos = ['Node.js', 'Javascript', 'React.js']


//aqui estou usando o params do index do array cursos 
server.get('/curso/:index', (req, res) =>{
    const {index} = req.params

return res.json({
    curso: cursos[index]
})
}) 

//localhost:3000/curso
//aqui estou recebendo "req" = nome | enviando "res"= <h1>curso de ${nome}</h1>
//isso e uma query params = ?nome=nodeJS 
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

/*localhost:3000/data/1
essa e a Route Params = /data/1 onde o params vem do id, e nesse
codigo estou usando como exemplo um obj onde ele me mostra o
id*/
server.get('/data/:id', (req, res) =>{
   const data = req.params.id

   return res.json({
    curso:{
    id:`curso ${data}`
    },
})
})





server.listen(3000);

