import { useState } from 'react'
import './altprograma.scss'
import axios from 'axios'


export default function AltPrograma() {
    const [idCanal, setIdCanal] = useState('');
    const [nomePrograma, setNomePrograma] = useState('');
    const [genero, setGenero] = useState('');
    const [hora, setHora] = useState(new Date());

    const [id, setId] = useState('')


    async function salvar() {
        let paramCorpo = {
            "idCanal": idCanal,
            "nomePrograma": nomePrograma,
            "genero": genero,
            "hora": hora
        }

        const url = `http://localhost:5020/programa/${id}`;
        let resp = await axios.put(url, paramCorpo);
        
        alert('Programa alterado na lista de programas.'+ resp.data)
    }


    return (
        <div className='pagina-alterar'>
            <div className='header'>
                <a href="/programa"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- ALTERAR PROGRAMA </h1>
            </div>

            <div className='inputs'>
                <input type="text" placeholder='ID do programa' value={id} onChange={e => setId(e.target.value)} /> 
                <input type='text' placeholder='Insira um novo id do canal' value={idCanal} onChange={e => setIdCanal(e.target.value)} />
                <input type='text' placeholder='Insira um novo nome do programa' value={nomePrograma} onChange={e => setNomePrograma(e.target.value)} />
                <input type='text' placeholder='Insira um novo gênero do programa' value={genero} onChange={e => setGenero(e.target.value)} />
                <input type='time' value={hora} onChange={e => setHora(e.target.value)} />
            </div>

            <button onClick={salvar}> Alterar </button>

        </div>
    )
}
