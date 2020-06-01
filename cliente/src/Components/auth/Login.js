import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    const [infoUsuario, setinfoUsuario] = useState({
        email: '',
        password: ''
    });

    const [camposincompletos, setcamposincompletos] = useState(false);

    const { email, password } = infoUsuario;

    const onChangeInicioSesion = (e) =>{
        setinfoUsuario({
            ...infoUsuario,
            [e.target.name] : e.target.value
        })
    };

    const FnInicioSesion = (e) =>{
        e.preventDefault();
        if(email.trim() === '' || password.trim() === ''){
            camposincompletos(false); return;
        }
        camposincompletos(true);

        //Action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sobra-dark">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={FnInicioSesion}
                >
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            onChange={onChangeInicioSesion}
                            value={email}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChangeInicioSesion}
                            value={password}
                        />
                    </div>
                    <div className="campo-form">
                        <input 
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>

                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;