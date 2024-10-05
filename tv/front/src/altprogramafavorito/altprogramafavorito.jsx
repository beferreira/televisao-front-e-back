import { useState } from 'react'
import './altprogramafavorito.scss'
import axios from 'axios'


export default function AltProgramaFavorito() {
    const [idUsuario, setIdUsuario] = useState('');
    const [idPrograma, setIdPrograma] = useState('');
    const [avaliacao, setAvaliacao] = useState('');

    const [id, setId] = useState('')

    async function salvar() {
        let paramCorpo = {
            "idUsuario": idUsuario,
            "idPrograma": idPrograma,
            "avaliacao": avaliacao
        }

        const url = `http://localhost:5020/programafavorito/${id}`;
        let resp = await axios.put(url, paramCorpo);
        
        alert('Programa alterado na lista de programas favoritos.'+ resp.data)
    }


    return (
        <div className='pagina-alterar'>
            <div className='header'>
                <a href="/programafavorito"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- ALTERAR PROGRAMA FAVORITO</h1>
            </div>

            <div className='inputs'>
                <input type="text" placeholder='ID do programa favorito' value={id} onChange={e => setId(e.target.value)} /> 
                <input type='text' placeholder='Insira o ID do usuário' value={idUsuario} onChange={e => setIdUsuario(e.target.value)} />
                <input type='text' placeholder='Insira o ID do programa' value={idPrograma} onChange={e => setIdPrograma(e.target.value)} />
                <input type='text' placeholder='Insira a avaliacao do programa' value={avaliacao} onChange={e => setAvaliacao(e.target.value)} />
            </div>

            <button onClick={salvar}> Alterar </button>

        </div>
    )
}
