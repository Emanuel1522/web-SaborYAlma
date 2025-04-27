import miLogo from '../assets/logos/img_2795.png'

const Encabezado = ()=> {
    return(
    <header>
        <nav>
            <div class="nav-logo">
                <a href="./index.html">
                    <img src={miLogo} alt="Logo Corto en blanco" />
                </a>
            </div>
            <div class="menu-icon" onclick="toggleMenu()">
                ☰
            </div>
            <div class="nav-menu" id="nav-menu">
                <ul>
                    <li><a href="./HTML/quienesSomos.html">¿Quienes somos?</a></li>
                    <li><a href="./HTML/iniciarSesion.html">Reservar mesa</a></li>
                    <li><a href="./HTML/iniciarSesion.html">Realizar un pedido</a></li>
                    <li><a id="iniciar-sesion-boton" href="/HTML/iniciarSesion.html">Iniciar sesión</a></li>
                    <li><a id="crear-cuenta-boton" href="/HTML/registrar.html">Crear cuenta</a></li>
                </ul>
            </div>
        </nav>
    </header>
    )
}
export default Encabezado