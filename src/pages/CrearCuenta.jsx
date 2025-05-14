import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";

const CrearCuenta = () => {
    return(
        <>
        <Encabezado />
        <main id="main-container-registro">
            <div class="flex-registro">
                <section class="left-flex-registro">
                    <div class="registro-titulo">
                        <h2>Crea tu cuenta</h2>
                    </div>
                    <div class="registro-formulario" >
                        <form >
                            <input type="text" id="nombres" name="nombres" placeholder="Nombres" required class="nom-registro" />
                            <input type="text" id="usuario-email" name="usuario-email" placeholder="Usuario o email" required class="apell-registro" />
                            <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos" required class="U-ema" />
                            <div class="contraseña-container">
                                <input type="password" id="contraseña" name="contraseña" placeholder="Contraseña" required class="con-registro" />
                                <button type="button" id="togglePassword">Ver</button>
                            </div>
                            <div class="terminos-registro">
                                <input type="checkbox" id="terminos" name="terminos" required />
                                <label for="terminos">
                                    He leído los <span class="subrayado-rojo">términos y condiciones de uso</span> y la <span class="subrayado-rojo">política de privacidad</span>.</label>
                            </div>
                            <div class="flex-div-form-registro-bottom">
                                <div class="boton-registro"></div>
                                <button type="submit" class="Btn-registro" id="registrarBtn">Registrarse</button>
                            </div>
                        </form>
                        <p>¿Ya tienes una cuenta? <a href="./iniciarSesion.html">Inicia sesión aquí</a>.</p>
                    </div>
                </section>
                <div class="right-flex-registro"></div>
            </div>
        </main>
        <PieDePagina />
        </>
    )
}
export default CrearCuenta;