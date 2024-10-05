import { useState } from 'react'
import './getcanal.scss'
import axios from 'axios'




export default function GetCanal() {
    const [getcanal, setGetCanal] = useState([]);


    async function buscar() {
        const url = 'http://localhost:5020/canal';
        let resp = await axios.get(url);
        setGetCanal(resp.data);
    }

    

    return (
        <div className='pagina-consultar'>
            <div className='header'>
                <a href="/canal"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- CONSULTAR CANAL </h1>
            </div>

            <button onClick={buscar}>Buscar</button>

            
            <table>
                <thead>
                    <tr>
                        <th>ID do Canal </th>
                        <th>Nome do Canal</th>
                        <th>Número</th>
                        <th>Aberto</th>
                    </tr>
                </thead>

                <tbody>
                    {getcanal.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.numero}</td>
                            <td>{item.aberto  ? 'Sim' : 'Não'}</td>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}