import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { alertaExistente, alertaGeneral } from "../helper/funciones"
import { usuarios } from "../services/database";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";
import { generarToken } from "../helper/funciones";

const CrearCuenta = () => {
    let redireccion = useNavigate();

    const[nombre, setNombre] = useState("")
    const[apellido, setApellido] = useState("")
    const[correo, setCorreo] = useState("")
    const[contraseña, setContraseña] = useState("")

    function registrarUsuario() {
        let usuariosLocales = JSON.parse(localStorage.getItem("usuarios")) || [];

        const existeEnDatabase = usuarios.some((usuario) => usuario.correo === correo);
        const existeEnLocalStorage = usuariosLocales.some((usuario) => usuario.correo === correo);

        if (existeEnDatabase || existeEnLocalStorage) {
        alertaExistente();
        return;
        }

        const nuevoUsuario = {
            nombre,
            apellido,
            correo,
            contraseña
        };

        usuariosLocales.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuariosLocales));
        alertaGeneral(redireccion, "Usuario registrado con exito", "/realizarPedido")
        let token = generarToken();
        localStorage.setItem("token", token);
        
        setNombre("");
        setApellido("");
        setCorreo("");
        setContraseña("");
    }

    return(
        <>
        <Encabezado />
        <main id="main-container-registro">
            <div className="flex-registro">
                <section className="left-flex-registro">
                    <div className="registro-titulo">
                        <h2>Crea tu cuenta</h2>
                    </div>
                    <div className="registro-formulario" >
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            if (!nombre || !apellido || !correo || !contraseña || !document.getElementById("terminos").checked) {
                                alertaGeneral(null, "Por favor, llena todos los campos y acepta los términos.", null)
                                return;
                            }
                            registrarUsuario();
                            }}>
                            <input 
                                type ="text" 
                                placeholder ="NOMBRE" 
                                id ="nombres" 
                                className ="nom-registro"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)} />
                            <input 
                                type="text" 
                                placeholder="CORREO" 
                                id="usuario-email" 
                                className="apell-registro" 
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}/>
                            <input 
                                type="text" 
                                placeholder="APELLIDO" 
                                id="apellidos" 
                                className="U-ema" 
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}/>
                            <input 
                                type="password" 
                                id="contraseña" 
                                name="contraseña" 
                                placeholder="CONTRASEÑA" 
                                className="con-registro" 
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)} />
                            <div className="terminos-registro">
                                <input type="checkbox" id="terminos" name="terminos"/>
                                <label for="terminos">
                                    He leído los <span className="subrayado-rojo">términos y condiciones de uso</span> y la <span className="subrayado-rojo">política de privacidad</span>.</label>
                            </div>
                            <div className="flex-div-form-registro-bottom">
                                <div className="boton-registro"></div>
                                <button 
                                    type="submit" 
                                    className="Btn-registro" 
                                    id="registrarBtn">
                                        Registrarse
                                </button>
                            </div>
                        </form>
                        <p>¿Ya tienes una cuenta? <Link to="/inicioSesion">Inicia sesion aqui</Link>.</p>
                    </div>
                </section>
                <div className="right-flex-registro"></div>
            </div>
        </main>
        <PieDePagina />
        </>
    )
}
export default CrearCuenta;