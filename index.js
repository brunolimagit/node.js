import express from "express";

const server = express();
server.use(express.json());

const cursos = []

// aqui estou retornando uma resposta JSON com todos os cursos
server.get('/curso', (req, res) =>{ 

    return res.status(200).json(cursos);
})


//aqui estou usando o params do index do array cursos 
server.get('/curso/:index', (req, res) =>{
    const {index} = req.params

return res.json({
    curso: cursos[index]
})
}) 
//aqui estou recebendo um dado(nome) pelo body e armazenando no array cursos
server.post('/curso', (req, res) => {
  const { nome } = req.body;
  
  if (!nome) {
    return res.status(400).json({
      error: "O campo nome é obrigatório"
    });
  }
 
   const novoCurso = {
    id: cursos.length + 1,
    nome
  };

  cursos.push(novoCurso);

  return res.status(201).json(novoCurso);
});

//editando 
server.put('/curso/:index', (req, res) =>{
  const {index} = req.params
  const {nome} = req.body

  cursos[index]= nome

  return res.json(cursos);
})

//delete
server.delete('/curso/:index', (req, res) => {
  const { index } = req.params; // pega o índice vindo da URL

  // valida se o índice existe no array
  if (!cursos[index]) {
    return res.status(404).json({
      error: "Curso não encontrado"
    });
  }

  // remove o curso do array e guarda o valor removido
  const cursoRemovido = cursos.splice(index, 1);

  // retorna a lista atualizada + mensagem
  return res.json({
    message: `Curso deletado com sucesso`,
    cursos
  });
});
//localhost:3000/curso
//aqui estou recebendo "req" = nome | enviando "res"= <h1>curso de ${nome}</h1>
//isso e uma query params = ?nome=nodeJS 
/*
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
        nacionalidade:"brasileiro",
})
})

/*localhost:3000/data/1
essa e a Route Params = /data/1 onde o params vem do id, e nesse
codigo estou usando como exemplo um obj onde ele me mostra o
id

server.get('/data/:id', (req, res) =>{
   const data = req.params.id

   return res.json({
    curso:{
    id:`curso ${data}`
    },
})
})*/

server.listen(3000);

