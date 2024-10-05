import './programa.scss'

export default function Programa() {

    return (
        <div className='pagina-home'>
            <div className='header'>
                <a href="/"> <img src="./images/home.png" alt="" width={40}/> </a>
                <h1>- Programa </h1>
            </div>
            <div className='links'>
                <li> <a href="/addprograma">Cadastrar</a> </li>
                <li> <a href="/getprograma">Consultar</a> </li>
                <li> <a href="/altprograma">Alterar</a> </li>
                <li> <a href="/delprograma">Deletar</a> </li>
            </div>

        </div>
    )
}
