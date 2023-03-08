# First-node

Minha oficialmente primeira api em node.js, baseado no curso ["Node.js: API Rest com Express e MongoDB"](https://cursos.alura.com.br/course/nodejs-api-rest-express-mongodb/) da Alura.

O curso utiliza uma versão mais antiga do MongoDB, por eu ter instalado uma versão mais atualizada, acabei encontrando um problema de incompatibilidade, porém, ao invés de fazer o downgrade para fazer a api conforme o curso, decidi continuar seguindo com a aula, mas convertendo para promises async/await.

## Installation

Por enquanto rodar o projeto não é nada complicado.

Em seu terminal:
```bash
node server.js
```
ou
```bash
npm install nodemon -D
npm run dev
```


## routes

```javascript
GET http://localhost:3000/livros -> Bruscar Relação de livros
GET http://localhost:3000/livros/{id} -> Bruscar livro específico
POST http://localhost:3000/livros -> Criar um novo livro
PUT http://localhost:3000/livros/{id} -> Editar alguma informação
DELETE http://localhost:3000/livros/{id} -> Excluir um livro
```