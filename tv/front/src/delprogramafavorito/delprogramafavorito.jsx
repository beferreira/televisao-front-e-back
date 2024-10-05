import { useState } from 'react'
import './delprogramafavorito.scss'
import axios from 'axios'




export default function DelProgramaFavorito() {
    const [id, setId] = useState('')    

    async function salvar() {

        const url = `http://localhost:5020/programafavorito/${id}`;
        let resp = await axios.delete(url);

        alert(`Id: ${id} deletado da lista de programas favoritos.` + resp.data);
    }


    return (
        <div className='pagina-deletar'>
            <div className='header'>
                <a href="/programafavorito"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- DELETAR PROGRAMA FAVORITO</h1>
            </div>

                <div>
                    <input type='text' placeholder='ID que deseja remover' value={id} onChange={e => setId(e.target.value)} />
                </div>

            <button onClick={salvar}> Deletar </button>

        </div>
    )
}
