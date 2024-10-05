import './home.scss'


export default function Home() {

    return (
        <div className='pagina-home'>
            <div className='header'>
                <a href="/home"> <img src="./images/home.png" alt="" width={40}/> </a>
                <h1>- HOME </h1>
            </div>
            <div className='links'>
                <li> <a href="/canal">Canal</a> </li>
                <li> <a href="/programa">Programa</a> </li>
                <li> <a href="/usuario">Usuario</a> </li>
                <li> <a href="/programafavorito">Programa Favorito</a> </li>
            </div>

        </div>
    )
}
