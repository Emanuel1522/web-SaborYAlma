import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { alertaExistente, alertaGeneral } from "../helper/funciones"
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";
import { generarToken } from "../helper/funciones";

const apiUsuarios = "https://dbsaboryalma.onrender.com/usuarios";

const CrearCuenta = () => {
    let redireccion = useNavigate();

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [correo, setCorreo] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [usuariosApi, setUsuariosApi] = useState([]);

    useEffect(() => {
        fetch(apiUsuarios)
            .then((res) => res.json())
            .then((data) => setUsuariosApi(data))
            .catch((err) => console.error("Error al obtener usuarios:", err));
    }, []);

    function registrarUsuario() {
        const yaExiste = usuariosApi.some((usuario) => usuario.correo.toLowerCase() === correo.toLowerCase());
        if (yaExiste) {
            alertaExistente();
            return;
        }

        const nuevoUsuario = {
            nombre,
            apellido,
            correo,
            contraseña
        };

        fetch(apiUsuarios, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoUsuario)
        })
            .then((res) => {
                if (!res.ok) throw new Error("Error al registrar usuario");
                return res.json();
            })
            .then(() => {
                const token = generarToken();
                localStorage.setItem("token", token);
                alertaGeneral(redireccion, "Usuario registrado con éxito", "/realizarPedido");
                setNombre("");
                setApellido("");
                setCorreo("");
                setContraseña("");
            })
            .catch((err) => {
                console.error(err);
                alertaGeneral(null, "Hubo un error al registrar el usuario", null);
            });
    }

    return (
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
                                const terminosAceptados = document.getElementById("terminos").checked;
                                if (!nombre || !apellido || !correo || !contraseña || !terminosAceptados) {
                                    alertaGeneral(null, "Por favor, llena todos los campos y acepta los términos.", null)
                                    return;
                                }
                                registrarUsuario();
                            }}>
                                <input
                                    type="text"
                                    placeholder="NOMBRE"
                                    id="nombres"
                                    className="nom-registro"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)} />
                                <input
                                    type="text"
                                    placeholder="CORREO"
                                    id="usuario-email"
                                    className="apell-registro"
                                    value={correo}
                                    onChange={(e) => setCorreo(e.target.value)} />
                                <input
                                    type="text"
                                    placeholder="APELLIDO"
                                    id="apellidos"
                                    className="U-ema"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)} />
                                <input
                                    type="password"
                                    id="contraseña"
                                    name="contraseña"
                                    placeholder="CONTRASEÑA"
                                    className="con-registro"
                                    value={contraseña}
                                    onChange={(e) => setContraseña(e.target.value)} />
                                <div className="terminos-registro">
                                    <input type="checkbox" id="terminos" name="terminos" />
                                    <label htmlFor="terminos">
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