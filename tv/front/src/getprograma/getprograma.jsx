import { useState } from 'react'
import './getprograma.scss'
import axios from 'axios'




export default function GetPrograma() {
    const [getprograma, setGetPrograma] = useState([]);


    async function buscar() {
        const url = 'http://localhost:5020/programa';
        let resp = await axios.get(url);
        setGetPrograma(resp.data);
    }

    

    return (
        <div className='pagina-consultar'>
            <div className='header'>
                <a href="/programa"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- CONSULTAR PROGRAMA </h1>
            </div>

            <button onClick={buscar}>Buscar</button>

            
            <table>
                <thead>
                    <tr>
                        <th>ID do Programa</th>
                        <th>ID do Canal </th>
                        <th>Nome do Programa</th>
                        <th>Gênero</th>
                        <th>Hora que Passa</th>
                    </tr>
                </thead>

                <tbody>
                    {getprograma.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.idCanal}</td>
                            <td>{item.nomePrograma}</td>
                            <td>{item.genero}</td>
                            <td>{item.hora}</td>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}