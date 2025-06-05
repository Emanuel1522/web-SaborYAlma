import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { alertaGeneral } from '../helper/funciones'
import { verificarSesion } from './VerificarSesion';

    const Encabezado = () => {
    let redireccion = useNavigate();
    const [tokenActivo, setTokenActivo] = useState(false);

    useEffect(() => {
        setTokenActivo(!!localStorage.getItem("token"));
    }, []);

    function cerrarSesion() {
        localStorage.removeItem("token");
        alertaGeneral(redireccion, "Has cerrado sesión", "/inicioSesion")
        setTokenActivo(false);
    }

    return (
        <header>
            <nav>
                <div className="nav-logo">
                    <Link to="/">
                        <img src="public/logos/img2795.png" alt="Logo Corto en blanco" />
                    </Link>
                </div>
                <div className="menu-icon">
                    ☰
                </div>
                <div className="nav-menu" id="nav-menu">
                    <ul>
                        <li><Link to="/" className='linkNav'>Inicio</Link></li>
                        <li><Link to="/quienesSomos" className='linkNav'>¿Quienes somos?</Link></li>
                        {!tokenActivo && (
                            <>
                            <li><Link to="/productos" className='linkNav'>Productos</Link></li>
                            </>
                        )}
                        
                        <li><li onClick={() => verificarSesion("/realizarPedido", redireccion)} className='linkNav'>RealizarPedido</li></li>
                        
                        {!tokenActivo && (
                            <>
                                <li><Link to="/inicioSesion" className='linkNav' id='iniciar-sesion-boton'>Iniciar sesión</Link></li>
                                <li><Link to="/crearCuenta" className='linkNav' id='crear-cuenta-boton'>Crear cuenta</Link></li>
                            </>
                        )}

                        {tokenActivo && (
                            <li><li onClick={cerrarSesion} className='linkNav'>Cerrar sesión</li></li>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Encabezado;

