import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

const ProyectoState = props =>{
    const initialState = {
        nuevoProyectoForm: false
    }

    //Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState);


    // Serie de funciones para el CRUD

    return(
        <proyectoContext.Provider
            value={{
                nuevoProyectoForm : state.nuevoProyectoForm
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;