import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { alertaExistente } from "../helper/funciones"
import { usuarios } from "../services/database";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";

const CrearCuenta = () => {
    let redireccion = useNavigate();

    const[nombre, setNombre] = useState("")
    const[apellido, setApellido] = useState("")
    const[correo, setCorreo] = useState("")
    const[contraseña, setContraseña] = useState("")

    function registrarUsuario() {
        const existe = usuarios.some((usuario) => usuario.correo === correo);
        if(existe){
            alertaExistente();
            return;
        };

        const nuevoUsuario = {
            nombre,
            apellido,
            correo,
            contraseña
        };
        localStorage.setItem("nuevoUsuario", JSON.stringify(nuevoUsuario));
        redireccion("/realizarPedido")
        
        setNombre("");
        setApellido("");
        setCorreo("");
        setContraseña("");

        alert("usuario registrado")
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
                        <form>
                            <input 
                                type ="text" 
                                placeholder ="NOMBRE" 
                                required 
                                id ="nombres" 
                                className ="nom-registro"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)} />
                            <input 
                                type="text" 
                                placeholder="CORREO" 
                                required 
                                id="usuario-email" 
                                className="apell-registro" 
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)}/>
                            <input 
                                type="text" 
                                placeholder="APELLIDO" 
                                required 
                                id="apellidos" 
                                className="U-ema" 
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}/>
                            <input 
                                type="password" 
                                id="contraseña" 
                                name="contraseña" 
                                placeholder="CONTRASEÑA" 
                                required 
                                className="con-registro" 
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)} />
                            <div className="terminos-registro">
                                <input type="checkbox" id="terminos" name="terminos" required />
                                <label for="terminos">
                                    He leído los <span className="subrayado-rojo">términos y condiciones de uso</span> y la <span className="subrayado-rojo">política de privacidad</span>.</label>
                            </div>
                            <div className="flex-div-form-registro-bottom">
                                <div className="boton-registro"></div>
                                <button 
                                    type="submit" 
                                    className="Btn-registro" 
                                    id="registrarBtn"
                                    onClick= {(e) => { e.preventDefault(); registrarUsuario();}} >Registrarse
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