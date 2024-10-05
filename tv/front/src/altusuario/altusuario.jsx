import { useState } from 'react'
import './altusuario.scss'
import axios from 'axios'




export default function AltUsuario() {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [id, setId] = useState('')

    async function salvar() {
        let paramCorpo = {
            "nomeUsuario": nomeUsuario,
        }

        const url = `http://localhost:5020/usuario/${id}`;
        let resp = await axios.put(url, paramCorpo);
        
        alert('Pessoa alterada na lista de usuários.'+ resp.data)
    }


    return (
        <div className='pagina-alterar'>
            <div className='header'>
                <a href="/usuario"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- ALTERAR USUÁRIO </h1>
            </div>

                <div className='inputs'>
                    <input type="text" placeholder='Id' value={id} onChange={e => setId(e.target.value)} />
                    <input type='text' placeholder='Insira um novo nome' value={nomeUsuario} onChange={e => setNomeUsuario(e.target.value)} />
                </div>

            <button onClick={salvar}> Alterar </button>

        </div>
    )
}
