import './usuario.scss'

export default function Home() {

    return (
        <div className='pagina-home'>
            <div className='header'>
                <a href="/"> <img src="./images/home.png" alt="" width={40}/> </a>
                <h1>- Usuário </h1>
            </div>
            <div className='links'>
                <li> <a href="/addusuario">Cadastrar</a> </li>
                <li> <a href="/getusuario">Consultar</a> </li>
                <li> <a href="/altusuario">Alterar</a> </li>
                <li> <a href="/delusuario">Deletar</a> </li>
            </div>

        </div>
    )
}
