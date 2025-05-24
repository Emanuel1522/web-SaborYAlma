import { useState } from "react";
import { useCarrito } from "./CarritoCompras";

const CarritoModal = ({ mostrar, cerrar }) => {

    const [mostrandoFormulario, setMostrandoFormulario] = useState(false);
    const { carrito, aumentarCantidad, disminuirCantidad, eliminarDelCarrito } = useCarrito();

    if (!mostrar) return null;
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <div className="modal-carrito">
            <div className="contenido-modal">
                <h2>Carrito de Compras</h2>
                {carrito.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) : (
                    carrito.map(item => (
                        <div key={item.id} className="item-carrito">
                            <span className="nombre-item">{item.nombre}</span>
                            <span className="precio-item">${item.precio}</span>
                            <div className="cantidad-controles">
                                <button onClick={() => disminuirCantidad(item.id)}>-</button>
                                <span>{item.cantidad}</span>
                                <button onClick={() => aumentarCantidad(item.id)}>+</button>
                            </div>
                            <button className="eliminar-item" onClick={() => eliminarDelCarrito(item.id)}>❌</button>
                        </div>
                    ))
                )}
                {mostrandoFormulario && (
                    <div className="formulario-pago">
                        <h3>Detalles de Entrega</h3>
                        <input type="text" placeholder="Dirección" required className="input-pago" />
                        <input type="text" placeholder="Teléfono" required className="input-pago" />
                        <input type="text" placeholder="Detalles adicionales (opcional)" required className="input-pago" />
                        <div className="total-contenedor">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="btn-cerrar">Confirmar pedido</button>
                    </div>
                )}
                <div className="contenedorBotonesCarrito">
                    <button className="btn-cerrar" onClick={() => setMostrandoFormulario(true)}>Continuar pedido</button>
                    <button className="btn-cerrar" onClick={cerrar}>Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default CarritoModal;