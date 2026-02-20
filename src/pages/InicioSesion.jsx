import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";
import { alertaRedireccion, alertaError, generarToken } from "../helper/funciones.js";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { usuarios } from "../services/database.js";

let apiUsuarios = "https://dbsaboryalma.onrender.com/usuarios"

const InicioSesion = () => {
    let redireccion = useNavigate();
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [usuariosApi, setUsuariosApi] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch(apiUsuarios)
            .then(response => response.json())
            .then(data => setUsuariosApi(data))
            .catch(error => console.error("Error al traer usuarios:", error));
    }, []);

    function buscarUsuario() {
        let usuarioEncontrado = usuarios.find((usuario) =>
            usuario.correo.toLowerCase() === correo.toLowerCase() && usuario.contraseña === contraseña);

        let usuarioApiEncontrado = usuariosApi.find((usuario) =>
            usuario.correo.toLowerCase() === correo.toLowerCase() && usuario.contraseña === contraseña);

        return usuarioEncontrado || usuarioApiEncontrado;
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
                <div className="flex-iniciarSesion glass">
                    <section className="flex-iniciarSesion_left">
                        <img src="/logos/img2803.PNG" alt="Logo Sabor y Alma" className="logo-negro" style={{ width: '250px', marginBottom: '30px' }} />
                        <h2 className="serif">Bienvenido</h2>
                        <form onSubmit={(e) => { e.preventDefault(); redirigirUsuario(); }}>
                            <input onChange={(e) => setCorreo(e.target.value)}
                                type="email"
                                placeholder="CORREO ELECTRÓNICO"
                                required
                                className="email-inicio" />

                            <div className="contraseña-login-flex">
                                <input onChange={(e) => setContraseña(e.target.value)}
                                    type="password"
                                    placeholder="CONTRASEÑA"
                                    required
                                    className="contraseña-inicio" />
                                <p style={{ fontSize: '0.8rem', textAlign: 'right' }}><a href="#" className="subrayado-rojo">¿Olvidaste tu contraseña?</a></p>
                            </div>

                            <button type="submit" className="btn-premium" style={{ width: '100%' }}> Iniciar Sesion </button>
                        </form>
                        <div className="registrate">
                            <p>¿No tienes cuenta?</p>
                            <Link to="/crearCuenta" className='subrayado-verde'> Regístrate aquí </Link>
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