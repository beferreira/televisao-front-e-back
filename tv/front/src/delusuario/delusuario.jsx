import { useState } from 'react'
import './delusuario.scss'
import axios from 'axios'




export default function DelUsuario() {
    const [id, setId] = useState('')    

    async function salvar() {

        const url = `http://localhost:5020/usuario/${id}`;
        let resp = await axios.delete(url);

        alert(`Id: ${id} deletado da lista de usuários.` + resp.data);
    }


    return (
        <div className='pagina-deletar'>
            <div className='header'>
                <a href="/usuario"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- DELETAR USUÁRIO </h1>
            </div>

                <div>
                    <input type='text' placeholder='ID que deseja remover' value={id} onChange={e => setId(e.target.value)} />
                </div>

            <button onClick={salvar}> Deletar </button>

        </div>
    )
}
