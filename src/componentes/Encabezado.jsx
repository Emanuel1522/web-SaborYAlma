import { Link } from 'react-router-dom';

const Encabezado = () => {
    return (
        <header>
            <nav>
            <div class="nav-logo">
                <Link to="/">
                    <img src="/public/logos/img2795.png" alt="Logo Corto en blanco" />
                </Link>
            </div>
            <div class="menu-icon" onclick="toggleMenu()">
                ☰
            </div>
            <div class="nav-menu" id="nav-menu">
                <ul>
                    <li><Link to="/quienesSomos">¿Quienes somos?</Link></li>
                    <li><Link to="/realizarPedido">RealizarPedido</Link></li>
                    <li><Link to="/inicioSesion">Iniciar sesion</Link></li>
                    <li><Link to="/crearCuenta">Crear cuenta</Link></li>
                </ul>
            </div>
        </nav>
        </header>
    );
};

export default Encabezado;