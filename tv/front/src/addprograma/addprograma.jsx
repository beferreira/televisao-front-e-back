import { useState } from 'react'
import './addprograma.scss'
import axios from 'axios'




export default function AddPrograma() {
    const [idCanal, setIdCanal] = useState('');
    const [nomePrograma, setNomePrograma] = useState('');
    const [genero, setGenero] = useState('');
    const [hora, setHora] = useState(new Date());

    async function salvar() {
        let paramCorpo = {
            "idCanal": idCanal,
            "nomePrograma": nomePrograma,
            "genero": genero,
            "hora": hora
        }

        const url = 'http://localhost:5020/programa';
        let resp = await axios.post(url, paramCorpo);

        alert('Programa adicionado a lista de programas. Id: ' + resp.data.novoId);
    }


    return (
        <div className='pagina-cadastrar'>
            <div className='header'>
                <a href="/programa"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- CADASTRAR PROGRAMA </h1>
            </div>

            <div className='inputs'>
                <input type='text' placeholder='Insira o id do canal' value={idCanal} onChange={e => setIdCanal(e.target.value)} />
                <input type='text' placeholder='Insira o nome do programa' value={nomePrograma} onChange={e => setNomePrograma(e.target.value)} />
                <input type='text' placeholder='Insira o gênero do programa' value={genero} onChange={e => setGenero(e.target.value)} />
                <input type='time' value={hora} onChange={e => setHora(e.target.value)} />
            </div>

            <button onClick={salvar}> Adicionar </button>

        </div>
    )
}
