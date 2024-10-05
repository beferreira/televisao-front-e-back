import con from "./connection.js";

export async function inserirProgramaFavorito(favorito){
    
    const comando = `
    insert into tb_programa_favorito (id_usuario, id_canal_programa, vl_avaliacao)
    values(?,?,?);
    `
    let resposta= await con.query(comando, [favorito.idUsuario, favorito.idPrograma, favorito.avaliacao])
    let info = resposta[0];
    
    return info.insertId;
}

export async function consultarProgramaFavorito(){
    const comando = `
    select id_programa_favorito     id,
    id_usuario                      idUsuario,
    id_canal_programa               idPrograma,
    vl_avaliacao                    avaliacao              
    from tb_programa_favorito
    `
    
    let resposta= await con.query(comando)
    let registros = resposta[0];

    return registros
}

export async function alterarProgramaFavorito(id,favorito){
    const comando = `
    update tb_programa_favorito
    set id_usuario =?,
    id_canal_programa =?,
    vl_avaliacao =?

    where id_programa_favorito =?;
    `
    let resposta = await con.query(comando, [favorito.idUsuario, favorito.idPrograma, favorito.avaliacao, id])
    let registros = resposta[0];
  
    let linhasAfetadas = registros.affectedRows
    return linhasAfetadas;

}

export async function removerProgramaFavorito(id){

    const comando = `
    delete from tb_programa_favorito
    where id_programa_favorito = ?
    `
    let resposta= await con.query(comando, [id])
    let info = resposta[0];
    
    return info.affectedRows;
    }