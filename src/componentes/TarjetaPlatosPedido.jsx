import { useNavigate } from "react-router-dom";
import { useCarrito } from '../componentes/CarritoCompras.jsx';
import { agregadoExitosamente } from "../helper/funciones.js";

const TarjetaPlatosPedido = ({ plato, nombreBoton, requiereSesion }) => {

    const redireccion = useNavigate();

    const { agregarAlCarrito } = useCarrito();

    const manejarClick = () => {
        if (requiereSesion) {
            redireccion("/inicioSesion");
        } else {
            agregarAlCarrito(plato);
            agregadoExitosamente()
        }
    };

    return (
        <div className="item">
            <img src={plato.imagen} alt={plato.nombre} />
            <div className="contenido">
                <h3>{plato.nombre}</h3>
                <p>{plato.descripcion}</p>
                <p className="serif" style={{ fontSize: '1.5rem', color: 'var(--accent-secondary)' }}>${plato.precio}</p>
                <button onClick={manejarClick} className="btn-premium" style={{ width: '100%', marginTop: 'auto' }}>{nombreBoton}</button>
            </div>
        </div>
    )
}

export default TarjetaPlatosPedido;