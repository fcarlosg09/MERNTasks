import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

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
        console.log('a');
    };

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo Proyecto
            </button>
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
        </Fragment>
        
     );
}
 
export default NuevoProyecto;