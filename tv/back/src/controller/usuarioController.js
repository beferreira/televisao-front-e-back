import * as db from '../repository/usuarioRepository.js';

import {Router} from "express";
const endpoints = Router();

endpoints.post('/usuario', async (req,resp) => {
    try {
        let usuario = req.body;
        let id = await db.inserirUsuario(usuario);
        
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

endpoints.get('/usuario', async (req,resp) => {
    try {
        let registros = await db.consultarUsuario();
        resp.send(registros)
    }
    
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/usuario/:id', async (req,resp) => {
    try {
        let id = req.params.id;
        let usuario=req.body;
        let linhasAfetadas=await db.alterarUsuario(usuario, id);
        
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

endpoints.delete('/usuario/:id', async (req,resp) => {
    
    
    try {
        let id = req.params.id;
        let linhasAfetadas= await db.removerUsuario(id);
        
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