import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { alertaGeneral } from '../helper/funciones'
import { verificarSesion } from './VerificarSesion';

    const Encabezado = () => {
    let redireccion = useNavigate();
    const [tokenActivo, setTokenActivo] = useState(false);
    const [menuAbierto, setMenuAbierto] = useState(false);

    useEffect(() => {
        setTokenActivo(!!localStorage.getItem("token"));
    }, []);

    function cerrarSesion() {
        localStorage.removeItem("token");
        alertaGeneral(redireccion, "Has cerrado sesión", "/inicioSesion")
        setTokenActivo(false);
    }

    const toggleMenu = () => setMenuAbierto(!menuAbierto);

    return (
        <header className="glass">
            <nav>
                <div className="nav-logo">
                    <Link to="/">
                        <img src="/logos/img2795.PNG" alt="Logo Corto" />
                    </Link>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {menuAbierto ? '✕' : '☰'}
                </div>
                <div className={`nav-menu ${menuAbierto ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/" className='linkNav' onClick={() => setMenuAbierto(false)}>Inicio</Link></li>
                        <li><Link to="/quienesSomos" className='linkNav' onClick={() => setMenuAbierto(false)}>¿Quiénes somos?</Link></li>
                        <li><Link to="/graficos" className='linkNav' onClick={() => setMenuAbierto(false)}>Gráficos</Link></li>
                        <li><Link to="/productos" className='linkNav' onClick={() => setMenuAbierto(false)}>Menú</Link></li>
                        <li><span onClick={() => { verificarSesion("/realizarPedido", redireccion); setMenuAbierto(false); }} className='linkNav'>Pedidos</span></li>
                        
                        {!tokenActivo ? (
                            <>
                                <li><Link to="/inicioSesion" className='linkNav' id='iniciar-sesion-boton' onClick={() => setMenuAbierto(false)}>Iniciar Sesión</Link></li>
                                <li><Link to="/crearCuenta" className='linkNav' onClick={() => setMenuAbierto(false)}>Crear Cuenta</Link></li>
                            </>
                        ) : (
                            <li><span onClick={cerrarSesion} className='linkNav'>Cerrar Sesión</span></li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Encabezado;

