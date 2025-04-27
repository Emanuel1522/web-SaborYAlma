import logo from '../assets/logos/img_2803.png'

const Formulario = () => {
    return (
        <div>
            <div>
                <div className="flex-iniciarSesion">
                    <section className="flex-iniciarSesion_left">
                        <img src={logo} alt="logo negro largo" class="logo-negro" />
                        <form>
                            <input type="text" placeholder="Usuario o email" id="loginUsuario" name="email" className="email-inicio" />
                            <div className="contraseña-login-flex">
                                <input type="password" id="loginContraseña" placeholder="Contraseña" className="contraseña-inicio" />
                                <p>¿Olvidaste tu Contraseña?
                                    <a href="#" className="subray-rojo">Click aquí</a>
                                </p>
                            </div>
                            <button type="submit" id="iniciarSesionBtn" className="btn-inicio">Iniciar sesion</button>
                        </form>
                        <div className="registrate">
                            <p>¿No has creado tu cuenta aun?</p>
                            <a href="./registrar.html" className="subray-verde"> Registrate aqui</a>
                        </div>
                    </section>
                    <div className="flex-iniciarSesion_right"></div>
                </div>
                <div class="container-logo-iniciarSesion">
                    <img src="../IMAGES/LOGOS/IMG_2797.PNG" alt="logo verde" class="logo-v" />
                </div>
            </div>
        </div>
   )
}

export default Formulario

