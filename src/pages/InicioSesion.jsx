import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";

const InicioSesion = () => {
    return (
        <>
        <Encabezado />
        <main id="main-container-iniciarSesion">
            <div class="flex-iniciarSesion">
                <section class="flex-iniciarSesion_left">
                    <img src="/public/logos/img2803.png" alt="logo negro largo" class="logo-negro" />
                    <form action="">
                        <input type="text" placeholder="Usuario o email" id="loginUsuario" name="email" required class="email-inicio" />
                        <div class="contraseña-login-flex">
                            <input type="password" id="loginContraseña" placeholder="Contraseña" class="contraseña-inicio" />
                            <p>¿Olvidaste tu Contraseña? <a href="#"> <span class="subray-rojo"> Click aquí</span></a></p>
                        </div>
                        <button type="submit" id="iniciarSesionBtn" class="btn-inicio">Iniciar sesion</button>
                    </form>
                    <div class="registrate">
                        <p>¿No has creado tu cuenta aun?</p>
                        <a href="./registrar.html"> <span class="subray-verde"> Registrate aqui</span> </a>
                    </div>
                </section>
                <div class="flex-iniciarSesion_right"></div>
            </div>
        </main>
        <PieDePagina />
        </>
    )
}
export default InicioSesion;