import {FORMULARIO_PROYECTO} from '../../Types';

export default (state, action) =>{
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                nuevoProyectoForm: true
            }
        default: 
            return state;
    }
}