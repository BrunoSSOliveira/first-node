// import autores from "../models/autor.js";
// import logger from '../config/logger.js';
const autores = require("../models/autor.js");
const logger = require('../config/logger.js');

class AutorController {

    static async listarAutores(req, res) {
        try {
            const result = await autores.find();
            res.status(200).json(result);
        } catch (err) {
            logger.error({
                usecase: "listarAutores",
                response: err.message,
                status: err.status
            });
            res.status(400).send({message: err.message})
        }
    };

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            let doc = await autores.findById(id);
            res.status(200).send(doc);
        } catch (err) {
            res.status(400).send({message: `${err.message} - Id do autor não localizado.`});
            logger.error({
                usecase: "listarAutorPorId",
                response: err.message,
                status: err.status
            });
        }
    }

    static async cadastrarAutor(req, res) {
        try {
            let autor = new autores(req.body);
            await autor.save();
            res.status(201).send(autor.toJSON());
        } catch (err) {
            logger.error({
                usecase: "cadastrarAutor",
                response: err.message,
                status: err.status
            });
            res.status(500).send({ message: `${err.message} - falha ao cadastrar autor.` });
        }
    };
    
    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autores.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: 'Autor atualizado com sucesso'})
        } catch (err) {
            logger.error({
                usecase: "atualizarAutor",
                response: err.message,
                status: err.status
            });
            res.status(500).send({message: err.message})
        }
    };

    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            await autores.findByIdAndDelete(id)
            res.status(200).send({message: 'Autor excluido com sucesso!'})
        } catch (err) {
            logger.error({
                usecase: "excluirAutor",
                response: err.message,
                status: err.status
            });
            res.status(500).send({message: err.message})
        }
    };
        
}

export default AutorController