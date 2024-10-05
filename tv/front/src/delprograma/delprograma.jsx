import { useState } from 'react'
import './delprograma.scss'
import axios from 'axios'




export default function DelPrograma() {
    const [id, setId] = useState('')    

    async function salvar() {

        const url = `http://localhost:5020/programa/${id}`;
        let resp = await axios.delete(url);

        alert(`Id: ${id} deletado da lista de programas.` + resp.data);
    }


    return (
        <div className='pagina-deletar'>
            <div className='header'>
                <a href="/programa"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- DELETAR PROGRAMA </h1>
            </div>

                <div>
                    <input type='text' placeholder='ID que deseja remover' value={id} onChange={e => setId(e.target.value)} />
                </div>

            <button onClick={salvar}> Deletar </button>

        </div>
    )
}
