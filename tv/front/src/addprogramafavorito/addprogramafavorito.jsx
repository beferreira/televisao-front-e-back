import { useState } from 'react'
import './addprogramafavorito.scss'
import axios from 'axios'




export default function AddProgramaFavorito() {
    const [idUsuario, setIdUsuario] = useState('');
    const [idPrograma, setIdPrograma] = useState('');
    const [avaliacao, setAvaliacao] = useState('');

    async function salvar() {
        let paramCorpo = {
            "idUsuario": idUsuario,
            "idPrograma": idPrograma,
            "avaliacao": avaliacao
        }

        const url = 'http://localhost:5020/programafavorito';
        let resp = await axios.post(url, paramCorpo);

        alert('Programa adicionado a lista de programas favoritos. Id: ' + resp.data.novoId);
    }


    return (
        <div className='pagina-cadastrar'>
            <div className='header'>
                <a href="/programafavorito"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- CADASTRAR PROGRAMA FAVORITO </h1>
            </div>

            <div className='inputs'>
                <input type='text' placeholder='Insira o id do usuário' value={idUsuario} onChange={e => setIdUsuario(e.target.value)} />
                <input type='text' placeholder='Insira o id do programa' value={idPrograma} onChange={e => setIdPrograma(e.target.value)} />
                <input type='text' placeholder='Insira a avaliacao do programa' value={avaliacao} onChange={e => setAvaliacao(e.target.value)} />
            </div>

            <button onClick={salvar}> Adicionar </button>

        </div>
    )
}
