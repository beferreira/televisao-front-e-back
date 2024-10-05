import './canal.scss'

export default function Canal() {

    return (
        <div className='pagina-home'>
            <div className='header'>
                <a href="/"> <img src="./images/home.png" alt="" width={40}/> </a>
                <h1>- Canal </h1>
            </div>
            <div className='links'>
                <li> <a href="/addcanal">Cadastrar</a> </li>
                <li> <a href="/getcanal">Consultar</a> </li>
                <li> <a href="/altcanal">Alterar</a> </li>
                <li> <a href="/delcanal">Deletar</a> </li>
            </div>

        </div>
    )
}
