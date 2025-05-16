import { Link, useNavigate } from 'react-router-dom';

const Encabezado = () => {
    let redireccion = useNavigate();

    function varificarSesion() {
        let tokenActivo = localStorage.getItem("token");
        if(tokenActivo){
            redireccion("/realizarPedido");
        } else {
            redireccion("/inicioSesion");
            alert("Por favor inicie sesion")
        }
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
                        <li><Link to="/quienesSomos" className='linkNav'>¿Quienes somos?</Link></li>
                        <li><li onClick={() => varificarSesion()} className='linkNav'>RealizarPedido</li></li>
                        <li><Link to="/inicioSesion" className='linkNav' id='iniciar-sesion-boton'>Iniciar sesion</Link></li>
                        <li><Link to="/crearCuenta" className='linkNav' id='crear-cuenta-boton'>Crear cuenta</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Encabezado;