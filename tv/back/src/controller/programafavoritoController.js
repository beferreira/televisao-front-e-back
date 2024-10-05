import * as db from '../repository/programafavoritoRepository.js';

import {Router} from "express";
const endpoints = Router();

endpoints.post('/programafavorito', async (req,resp) => {
    try {
        let programafavorito = req.body;
        let id = await db.inserirProgramaFavorito(programafavorito);
        
        resp.send({
            novoId:id
        })
        
        
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/programafavorito', async (req,resp) => {
    try {
        let registros = await db.consultarProgramaFavorito();
        resp.send(registros)
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/programafavorito/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let programafavorito = req.body;
        let linhasAfetadas = await db.alterarProgramaFavorito(id, programafavorito);

        if (linhasAfetadas == 0) {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' });
        } else {
            resp.send();
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

endpoints.delete('/programafavorito/:id', async (req,resp) => {
    
    
    try {
        let id = req.params.id;
        let linhasAfetadas= await db.removerProgramaFavorito(id);
        
        if(linhasAfetadas==0){
            resp.status(404).send({erro:' Nenhum registro encontrado'})
            
        }
        
        else(resp.send())
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;