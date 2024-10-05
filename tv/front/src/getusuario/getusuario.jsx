import { useState } from 'react'
import './getusuario.scss'
import axios from 'axios'




export default function GetUsuario() {
    const [getusuario, setGetUsuario] = useState([]);


    async function buscar() {
        const url = 'http://localhost:5020/usuario';
        let resp = await axios.get(url);
        setGetUsuario(resp.data);
    }

    

    return (
        <div className='pagina-consultar'>
            <div className='header'>
                <a href="/usuario"> <img src="./images/seta.png" alt="" width={40}/> </a>
                <h1>- CONSULTAR USUÁRIO </h1>
            </div>

            <button onClick={buscar}>Buscar</button>

            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>

                <tbody>
                    {getusuario.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nomeUsuario}</td>
                        </tr>
                    )}
                </tbody>

            </table>

           
        </div>
    )
}