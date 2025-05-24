import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";
import { usuarios } from "../services/database.js"
import { alertaRedireccion, alertaError, generarToken } from "../helper/funciones.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const InicioSesion = () => {
    let redireccion = useNavigate();
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")

    useEffect(() => {
            window.scrollTo(0, 0);
    }, []);

    function buscarUsuario() {
        let usuariosLocales = JSON.parse(localStorage.getItem("usuarios")) || [];
        let todosLosUsuarios = [...usuarios, ...usuariosLocales];
        return todosLosUsuarios.find((e) => e.correo.toLowerCase() === correo.toLowerCase() && e.contraseña === contraseña)
    }

    function redirigirUsuario() {
        const usuario = buscarUsuario();
        if (usuario) {
            let token = generarToken();
            localStorage.setItem("token", token);
            alertaRedireccion(redireccion, "Usuario encontrado", '/realizarPedido');
        } else {
            alertaError();
        }
    }

    return (
        <>
        <Encabezado />
        <main id="main-container-iniciarSesion">
            <div className="flex-iniciarSesion">
                <section className="flex-iniciarSesion_left">
                    <img src="/public/logos/img2803.png" alt="logo negro largo" className="logo-negro" />
                    <form action="">
                        <input onChange={(e)=> setCorreo(e.target.value)} 
                        type="text" 
                        placeholder="CORREO" 
                        required
                        id="loginUsuario"
                        className="email-inicio" />
                        <div className="contraseña-login-flex">
                            <input onChange={(e)=> setContraseña(e.target.value)} 
                            type="password" 
                            placeholder="CONTRASEÑA" 
                            required
                            id="loginContraseña" 
                            className="contraseña-inicio"/>
                            <p>¿Olvidaste tu Contraseña? <a href="#"> <span className="subray-rojo"> Click aquí</span></a></p>
                        </div>
                        <button 
                        type="submit"
                        id="iniciarSesionBtn"
                        className="btn-inicio"
                        onClick={(e) => {
                            e.preventDefault();
                            redirigirUsuario();}}> Iniciar sesion </button>
                    </form>
                    <div className="registrate">
                        <p>¿No has creado tu cuenta aun?</p>
                        <Link to="/crearCuenta" className='subrayar-verde'> Registrate aqui </Link>
                    </div>
                </section>
                <div className="flex-iniciarSesion_right"></div>
            </div>
        </main>
        <PieDePagina />
        </>
    )
}
export default InicioSesion;