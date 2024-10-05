import { useState } from 'react'
import './addcanal.scss'
import axios from 'axios'




export default function AddCanal() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [aberto, setAberto] = useState(false);

    async function salvar() {
        let paramCorpo = {
            "nome": nome,
            "numero": numero,
            "aberto": aberto
        }

        const url = 'http://localhost:5020/canal';
        let resp = await axios.post(url, paramCorpo);

        alert('Canal adicionado a lista de canais. Id: ' + resp.data.novoId);
    }


    return (
        <div className='pagina-cadastrar'>
            <div className='header'>
                <a href="/canal"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- CADASTRAR CANAL </h1>
            </div>

            <div className='inputs'>
                <input type='text' placeholder='Insira o nome do canal' value={nome} onChange={e => setNome(e.target.value)} />
                <input type='text' placeholder='Insira o número do canal' value={numero} onChange={e => setNumero(e.target.value)} />

            <div className='aberto'>
                <label >É Aberto? </label>
                <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)} />
            </div>
            </div>

            <button onClick={salvar}> Adicionar </button>

        </div>
    )
}
