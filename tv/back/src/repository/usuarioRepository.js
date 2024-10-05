import con from "./connection.js";

export async function inserirUsuario(usuario){
    
    const comando = `
    insert into tb_usuario(nm_usuario)
    values(?);
    `
    let resposta= await con.query(comando, [usuario.nomeUsuario])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarUsuario(){
    const comando = `
    select id_usuario        id,
    nm_usuario               nomeUsuario
    from tb_usuario
    `
    
    let resposta= await con.query(comando)
    let registros = resposta[0];

    return registros
}

export async function alterarUsuario(usuario, id) {
    const comando = `
  
    update tb_usuario
    set nm_usuario = ?
    where id_usuario = ?;
    `
  
    let resposta = await con.query(comando, [usuario.nomeUsuario, id])
    let registros = resposta[0];
  
    let linhasAfetadas = registros.affectedRows
    return linhasAfetadas;
}

export async function removerUsuario(id){

    const comando = `
    delete from tb_usuario
    where id_usuario = ?
    `
    let resposta= await con.query(comando, [id])
    let info = resposta[0];
    
    return info.affectedRows;
}