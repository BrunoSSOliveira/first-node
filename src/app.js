import express from "express";
import db from "./config/dbConnect.js"
// import livros from "./models/livro.js"
import routes from "./routes/index.js"

// const express = require("express");
// const db = require("./config/dbConnect.js");
// // const livros = require("./models/livro.js");
// const routes = require("./routes/index.js");


db.on("error", console.log.bind(console, '500 Erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json())

routes(app);

// const livros = [
//     {id: 1, "titulo": "Senhor dos Aneis"},
//     {id: 2, "titulo": "O Hobbit"}
// ]

// app.get('/', (req, res) => {
//     res.status(200).send('Curso de Node');
// })

// app.get('/livros', async (req, res) => {
//     const result = await livros.find();
//     res.status(200).json(result);
// })

// app.get('/livros/:id', (req, res) => {
//     let index = buscaLivro(req.params.id);
//     res.json(livros[index]);
// })

// app.post('/livros', (req, res) => {
//     livros.push(req.body);
//     res.status(201).send('Livro foi cadastrado com sucesso')
// })

// app.put('/livros/:id', (req, res) => {
//     let index = buscaLivro(req.params.id);
//     livros[index].titulo = req.body.titulo;
//     res.json(livros);
// })

// app.delete('/livros/:id', (req, res) => {
//     let {id} = req.params;
//     let index = buscaLivro(req.params.id);
//     livros.splice(index, 1);
//     res.send(`Livro ${id} removido com sucesso`);
// })

// function buscaLivro(id) {
//     return livros.findIndex(livro => livro.id == id)
// }

export default app