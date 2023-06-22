import express from "express";
import livros from  "./livrosRoutes.js";
import autores from  "./autoresRoutes.js";
// const express = require("express");
// const livros = require("./livrosRoutes.js");
// const autores = require("./autoresRoutes.js");

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes