import { useState } from 'react'
import './addusuario.scss'
import axios from 'axios'




export default function AddUsuario() {
    const [nomeUsuario, setNomeUsuario] = useState('');

    async function salvar() {
        let paramCorpo = {
            "nomeUsuario": nomeUsuario,
        }

        const url = 'http://localhost:5020/usuario';
        let resp = await axios.post(url, paramCorpo);

        alert('Pessoa adicionada na lista de Usuários. Id: ' + resp.data.novoId);
    }


    return (
        <div className='pagina-cadastrar'>
            <div className='header'>
                <a href="/usuario"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- CADASTRAR USUÁRIO </h1>
            </div>

                <div>
                    <input type='text' placeholder='Insira um nome de usuário' value={nomeUsuario} onChange={e => setNomeUsuario(e.target.value)} />
                </div>

            <button onClick={salvar}> Adicionar </button>

        </div>
    )
}
