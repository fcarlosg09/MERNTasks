import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareas = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Base de datos', estado: false },
        { nombre: 'Elegir Framework', estado: true }
    ]

    return (
        <Fragment>
            <h3>Listado tareas</h3>
            <ul className="listado-tareas">
                {
                    tareas.length === 0
                    ?
                        (
                            <li className="tarea">
                                <p>No hay tareas</p>
                            </li>
                        )
                    :
                        (
                            tareas.map(tarea => (
                                <Tarea 
                                    tarea={tarea}
                                />                            
                            ))
                        )
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </Fragment>    
     );
}
 
export default ListadoTareas;