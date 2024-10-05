import * as db from '../repository/programaRepository.js';

import {Router} from "express";
const endpoints = Router();

endpoints.post('/programa', async (req,resp) => {
    try {
        let programa = req.body;
        let id = await db.inserirPrograma(programa);
        
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

endpoints.get('/programa', async (req,resp) => {
    try {
        let registros = await db.consultarPrograma();
        resp.send(registros)
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/programa/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let programa = req.body;
        let linhasAfetadas = await db.alterarPrograma(id, programa);

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


endpoints.delete('/programa/:id', async (req,resp) => {
    
    
    try {
        let id = req.params.id;
        let linhasAfetadas= await db.removerPrograma(id);
        
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