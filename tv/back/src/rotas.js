import canalController from './controller/canalController.js'
import programaController from './controller/programaController.js'
import usuarioController from './controller/usuarioController.js'
import programafavoritoController from './controller/programafavoritoController.js'

export default function adicionarRotas(servidor){
    servidor.use(canalController)
    servidor.use(programaController)
    servidor.use(usuarioController)
    servidor.use(programafavoritoController)
}