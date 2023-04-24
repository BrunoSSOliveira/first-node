import livros from "../models/livro.js";

class LivroController {

    static async listarLivros(req, res) {
        const result = await livros.find().populate('autor');
        res.status(200).json(result);
    };

    // static listarLivroPorEditora = (req, res) => {
    //     const editora = req.query.editora

    //     livros.find({'editora': editora}, {}, (err, livros) => {
    //         res.status(200).send(livros);
    //     })
    // }

    static async listarLivroPorEditora(req, res) {
        try {
            let editora = req.query.editora;
            let livrosEncontrados = await livros.find({'editora': editora});
            res.status(200).send(livrosEncontrados);
        } catch (err) {
            res.status(500).send({message: err.message});
        }
    };

    // static listarLivroPorId = (req, res) => {
    //     const id = req.params.id;

    //     livros.findById(id, (err, livros) => {
    //         if(err) {
    //             res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
    //         } else {
    //             res.status(200).send(livros);
    //         }
    //     })
    // }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            let doc = await livros.findById(id).populate('autor');
            res.status(200).send(doc);
        } catch (err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
        }
    }
    
    // static cadastrarLivro = (req,res) => {
    //     let livro = new livros(req.body);
    //     livro.save((err) => {
    //         if(err) {
    //             res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
    //         } else {
    //             res.status(201).send(livro.toJSON())
    //         }
    //     })
    // }

    static async cadastrarLivro(req, res) {
        try {
            let livro = new livros(req.body);
            await livro.save();
            res.status(201).send(livro.toJSON());
        } catch (err) {
            res.status(500).send({ message: `${err.message} - falha ao cadastrar livro.` });
        }
    };

    // static atualizarLivro = (req, res) => {
    //     const id = req.params.id;

    //     livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    //         if(!err) {
    //             res.status(200).send({message: 'Livro atualizado com sucesso'})
    //         } else {
    //             res.status(500).send({message: err.message})
    //         }
    //     })
    // }
    
    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: 'Livro atualizado com sucesso'})
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    };

    // static excluirLivro = (req, res) => {
    //     const id = req.params.id;

    //     livros.findByIdAndDelete(id, (err) => {
    //         if(!err){
    //             res.status(200).send({message: 'Livro removido com sucesso'})
    //         } else {
    //             res.status(500).send({message: err.message})
    //         }
    //     })
    // }

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livros.findByIdAndDelete(id)
            res.status(200).send({message: 'Livro excluido com sucesso!'})
        } catch (err) {
            res.status(500).send({message: err.message})
        }
    };
        
}

export default LivroController