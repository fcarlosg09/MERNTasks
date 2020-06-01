import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    const [infoNuevoUsuario, setinfoNuevoUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        passwordConfirmar: ''
    })

    const { nombre, email, password, passwordConfirmar} = infoNuevoUsuario;

    const onChangeRegistro = (e) =>{
        setinfoNuevoUsuario({
            ...infoNuevoUsuario,
            [e.target.name] : e.target.value
        })
    }

    const FnRegistroNuevoUsuario = (e) =>{
        e.preventDefault();

        //Validar que no haya campos vacios


        //Validar Password mínimo de 6 caracteres

        //Los 2 Password son iguales

        //Action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sobra-dark">
            <h1>Obtener una cuenta</h1>
            <form
                onSubmit={FnRegistroNuevoUsuario}
            >
                <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre"
                        onChange={onChangeRegistro}
                        value={nombre}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu email"
                        onChange={onChangeRegistro}
                        value={email}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Tu password"
                        onChange={onChangeRegistro}
                        value={password}
                    />
                </div>
                <div className="campo-form">
                    <label htmlFor="password">Confirmar Password</label>
                    <input
                        type="password"
                        id="passwordConfirmar"
                        name="passwordConfirmar"
                        placeholder="Repite tu password"
                        onChange={onChangeRegistro}
                        value={passwordConfirmar}
                    />
                </div>
                <div className="campo-form">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Registrarme"
                    />                
                </div>
                <Link to="/" className="enlace-cuenta">
                    Volver a iniciar sesión
                </Link>
            </form>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;