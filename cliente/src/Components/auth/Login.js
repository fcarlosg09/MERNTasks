import React from 'react';

const Login = () => {

    const onChangeInicioSesion = (e) =>{
        console.log(e.target.value);
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sobra-dark">
                <h1>Iniciar Sesión</h1>
                <form>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={onChangeInicioSesion}
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;