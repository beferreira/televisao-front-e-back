import { useState } from 'react'
import './altcanal.scss'
import axios from 'axios'




export default function AltCanal() {
    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [aberto, setAberto] = useState(false);

    const [id, setId] = useState('')


    async function salvar() {
        let paramCorpo = {
            "nome": nome,
            "numero": numero,
            "aberto": aberto
        }

        const url = `http://localhost:5020/canal/${id}`;
        let resp = await axios.put(url, paramCorpo);
        
        alert('Canal alterado na lista de canais.'+ resp.data)
    }


    return (
        <div className='pagina-alterar'>
            <div className='header'>
                <a href="/canal"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- ALTERAR CANAL </h1>
            </div>

            <div className='inputs'>
                <input type="text" placeholder='ID do canal' value={id} onChange={e => setId(e.target.value)} /> 
                <input type='text' placeholder='Insira um novo nome do canal' value={nome} onChange={e => setNome(e.target.value)} />
                <input type='text' placeholder='Insira um novo número do canal' value={numero} onChange={e => setNumero(e.target.value)} />

            <div className='aberto'>
                <label >É Aberto? </label>
                <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)} />
            </div>
            </div>

            <button onClick={salvar}> Alterar </button>

        </div>
    )
}
