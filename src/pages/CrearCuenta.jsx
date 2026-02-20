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
            <main className="auth-container">
                <div className="auth-flex glass">
                    <section className="auth-left" style={{ padding: '40px' }}>
                        <img src="/logos/img2803.PNG" alt="Logo Sabor y Alma" style={{ width: '150px', marginBottom: '20px' }} />
                        <h2 className="serif" style={{ marginBottom: '20px' }}>Crea tu Cuenta</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            const terminosAceptados = document.getElementById("terminos").checked;
                            if (!nombre || !apellido || !correo || !contraseña || !terminosAceptados) {
                                alertaGeneral(null, "Por favor, llena todos los campos y acepta los términos.", null)
                                return;
                            }
                            registrarUsuario();
                        }}>
                            <div className="form-grid">
                                <input
                                    type="text"
                                    placeholder="NOMBRE"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)} />
                                <input
                                    type="text"
                                    placeholder="APELLIDO"
                                    value={apellido}
                                    onChange={(e) => setApellido(e.target.value)} />
                            </div>
                            <input
                                type="email"
                                placeholder="CORREO ELECTRÓNICO"
                                value={correo}
                                onChange={(e) => setCorreo(e.target.value)} />
                            <input
                                type="password"
                                placeholder="CONTRASEÑA"
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)} />

                            <div className="terminos-registro" style={{ marginBottom: '20px' }}>
                                <input type="checkbox" id="terminos" name="terminos" style={{ width: 'auto', marginBottom: '0', marginRight: '10px' }} />
                                <label htmlFor="terminos" style={{ fontSize: '0.85rem' }}>
                                    He leído los <span className="subrayado-rojo">términos y condiciones</span> y la <span className="subrayado-rojo">política de privacidad</span>.</label>
                            </div>

                            <button type="submit" className="btn-premium" style={{ width: '100%' }}>
                                Registrarse
                            </button>
                        </form>
                        <p style={{ marginTop: '20px', fontSize: '0.9rem' }}>¿Ya tienes una cuenta? <Link to="/inicioSesion" className="subrayado-verde">Inicia sesión aquí</Link>.</p>
                    </section>
                    <div className="auth-right register-bg"></div>
                </div>
            </main>
            <PieDePagina />
        </>
    )
}
export default CrearCuenta;