import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO } from '../../Types';

const ProyectoState = props =>{
    const initialState = {
        proyectos : [
            { id:1,  nombre: 'Tienda Virtual' },
            { id:2, nombre: 'Intranet' },
            { id:3, nombre: 'Diseño sitio web' }
        ],
        nuevoProyectoForm: false
    }

    //Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState);


    // Serie de funciones para el CRUD

    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                nuevoProyectoForm : state.nuevoProyectoForm,
                mostrarFormulario,
                proyectos : state.proyectos
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;