
import { List } from './List'
import {useState, useEffect} from 'react'

console.log(List)

function TaskList() {

    const [List, setList] = useState([])
    return (
        <div>Párrafos largos para él: elegir la palabra correcta para expresar
            tu amor a tu pareja es muy importante. Tal vez tu novio no lo diga,
            pero la mayoría de los hombres quieren recibir largos mensajes de amor
            y lindos párrafos de su novia. Les encanta ser apreciados y esto fortalece su relación.
            No se trata solo de él. A veces necesitas abrir tu corazón
            para mostrarle a tu hombre lo que sientes por él.</div>

    )
}

export default TaskList