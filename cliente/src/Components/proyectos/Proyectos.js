import React from 'react';
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <div className="seccion-principal">
                <main>
                    <Barra />
                    <div className="contenedor-tareas">
                        
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default Proyectos;