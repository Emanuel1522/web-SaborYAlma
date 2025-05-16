import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { alertaGeneral } from '../helper/funciones'

const Encabezado = () => {
    let redireccion = useNavigate();
    const [tokenActivo, setTokenActivo] = useState(false);

    useEffect(() => {
        setTokenActivo(!!localStorage.getItem("token"));
    }, []);

    function verificarSesion(vista) {
        let tokenActivo = localStorage.getItem("token");
        if(tokenActivo){
            redireccion(vista);
        } else {
            alertaGeneral(redireccion, "Por favor inicie sesion", "/inicioSesion")
        }
    }

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
                        <img src="/public/logos/img2795.png" alt="Logo Corto en blanco" />
                    </Link>
                </div>
                <div className="menu-icon">
                    ☰
                </div>
                <div className="nav-menu" id="nav-menu">
                    <ul>
                        <li><Link to="/" className='linkNav'>Inicio</Link></li>
                        <li><Link to="/quienesSomos" className='linkNav'>¿Quienes somos?</Link></li>
                        <li><li onClick={() => verificarSesion("/realizarPedido")} className='linkNav'>RealizarPedido</li></li>
                        
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


/*
<li><Link to="/inicioSesion" className='linkNav' id='iniciar-sesion-boton'>Iniciar sesion</Link></li>
<li><Link to="/crearCuenta" className='linkNav' id='crear-cuenta-boton'>Crear cuenta</Link></li>
*/