import './programafavorito.scss'

export default function ProgramaFavorito() {

    return (
        <div className='pagina-home'>
            <div className='header'>
                <a href="/"> <img src="./images/home.png" alt="" width={40}/> </a>
                <h1>- Programa Favorito </h1>
            </div>
            <div className='links'>
                <li> <a href="/addprogramafavorito">Cadastrar</a> </li>
                <li> <a href="/getprogramafavorito">Consultar</a> </li>
                <li> <a href="/altprogramafavorito">Alterar</a> </li>
                <li> <a href="/delprogramafavorito">Deletar</a> </li>
            </div>

        </div>
    )
}
