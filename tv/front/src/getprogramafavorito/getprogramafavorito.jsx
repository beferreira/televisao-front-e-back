import { useState } from 'react'
import './getprogramafavorito.scss'
import axios from 'axios'




export default function GetProgramaFavorito() {
    const [getprogramafavorito, setGetProgramaFavorito] = useState([]);


    async function buscar() {
        const url = 'http://localhost:5020/programafavorito';
        let resp = await axios.get(url);
        setGetProgramaFavorito(resp.data);
    }

    

    return (
        <div className='pagina-consultar'>
            <div className='header'>
                <a href="/programafavorito"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- CONSULTAR PROGRAMA FAVORITO</h1>
            </div>

            <button onClick={buscar}>Buscar</button>

            
            <table>
                <thead>
                    <tr>
                        <th>ID do Programa</th>
                        <th>ID do Usuário </th>
                        <th>ID do Programa</th>
                        <th>Avaliação</th>
                    </tr>
                </thead>

                <tbody>
                    {getprogramafavorito.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.idUsuario}</td>
                            <td>{item.idPrograma}</td>
                            <td>{item.avaliacao}</td>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}