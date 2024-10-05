import * as db from '../repository/canalRepository.js'

import {Router} from "express";
const endpoints = Router();

endpoints.post('/canal', async (req,resp) => {
    try {
        let canal = req.body;
        let id = await db.inserirCanal(canal);
        
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

endpoints.get('/canal', async (req,resp) => {
    try {
        let registros = await db.consultarCanal();
        resp.send(registros)
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/canal/:id', async (req,resp) => {
    try {
        let id = req.params.id;
        let canal=req.body;
        let linhasAfetadas=await db.alterarCanal(canal, id);
        
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

endpoints.delete('/canal/:id', async (req,resp) => {
    
    
    try {
        let id = req.params.id;
        let linhasAfetadas= await db.removerCanal(id);
        
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