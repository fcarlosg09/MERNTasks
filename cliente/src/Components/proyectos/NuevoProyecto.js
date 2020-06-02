import React, { Fragment, useState, useContext } from 'react';
import ProyectoContext from '../../Context/Proyectos/proyectoContext';
import proyectoContext from '../../Context/Proyectos/proyectoContext';

const NuevoProyecto = () => {

    //Obtener state formulario
    const proyectosContext = useContext(ProyectoContext);
    const { nuevoProyectoForm } = proyectosContext;

    const [proyecto, setproyecto] = useState({
        nombreProyecto: ''
    });

    const { nombreProyecto } = proyecto;

    const FnCapturarNombreProyecto = (e) =>{
        setproyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    };

    const FnAgregarProyecto = (e) =>{
        e.preventDefault();
        
        
        //Validar el proyecto


        //Agregar el state


        //Reiniciar el form
    };

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo Proyecto
            </button>
            {
                nuevoProyectoForm
                ?
                    (
                        <form
                            className="formulario-nuevo-proyecto"
                            onSubmit={FnAgregarProyecto}
                        >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Nombre Proyecto"
                                name="nombreProyecto"
                                onChange={FnCapturarNombreProyecto}
                                value={nombreProyecto}
                            />
                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Proyecto"
                            />

                        </form>
                    )
                :
                null
            }
            
        </Fragment>
        
     );
}
 
export default NuevoProyecto;