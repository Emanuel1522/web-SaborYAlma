import { useNavigate } from "react-router-dom";
import { useCarrito } from '../componentes/CarritoCompras.jsx';
import { agregadoExitosamente } from "../helper/funciones.js";

const TarjetaPlatosPedido = ( { plato, nombreBoton, requiereSesion} ) => {

    const redireccion = useNavigate();

    const { agregarAlCarrito } = useCarrito();

    const manejarClick = () => {
        if (!requiereSesion) {
            agregarAlCarrito(plato);
            agregadoExitosamente()
        } else {
            redireccion("/inicioSesion");
        }
    };

    return(
        <div className="item">
            <div className="contenido">
                <img src={plato.imagen} alt="" />
                <h3>{plato.nombre}</h3>
                <p>{plato.descripcion}</p>
                <p>{plato.precio}</p>
            </div>
            <button onClick={manejarClick} id="botonTarjeta" className="boton-reservar">{nombreBoton}</button>
        </div>
    )
}

export default TarjetaPlatosPedido;