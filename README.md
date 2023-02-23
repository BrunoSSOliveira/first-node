# First-node

Minha oficialmente primeira api em node.js, baseado no curso ["Node.js: API Rest com Express e MongoDB"](https://cursos.alura.com.br/course/nodejs-api-rest-express-mongodb/) da Alura.

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
const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pag de livros',
    '/autores': 'Listagem de autores',
    '/editora': 'Pag de editora',
    '/sobre': 'Info sobre o projeto'
}
```