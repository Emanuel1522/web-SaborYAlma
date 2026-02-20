import { useState } from "react";
import { useCarrito } from "./CarritoCompras";
import Swal from "sweetalert2";

const CarritoModal = ({ mostrar, cerrar }) => {

    const [mostrandoFormulario, setMostrandoFormulario] = useState(false);
    const { carrito, aumentarCantidad, disminuirCantidad, eliminarDelCarrito } = useCarrito();
    const [direccion, setDireccion] = useState("");
    const [telefono, setTelefono] = useState("");

    if (!mostrar) return null;
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    const confirmarPedido = () => {
        if (carrito.length === 0) {
            Swal.fire({
                title: "El carrito está vacío",
                icon: "warning",
                confirmButtonText: "Cerrar",
            });
            return;
        } else if (direccion.length === 0 || telefono.length === 0) {
            Swal.fire({
                title: "Por favor, completa todos los campos del formulario",
                icon: "warning",
                confirmButtonText: "Cerrar",
            });
            return;
        } else {
            Swal.fire({
                title: "Pedido confirmado. ¡Gracias por tu compra!",
                icon: "success",
                confirmButtonText: "Listo",
            }).then(() => {
                setMostrandoFormulario(false)
                setDireccion("");
                setTelefono("");
                carrito.map(item => (eliminarDelCarrito(item.id)))
                cerrar();
            })
        }
    }

    return (
        <div className="modal-carrito">
            <div className="contenido-modal">
                <h2>Carrito de Compras</h2>
                <div className="lista-items-carrito">
                    {carrito.length === 0 ? (
                        <p>No hay productos en el carrito.</p>
                    ) : (
                        carrito.map(item => (
                            <div key={item.id} className="item-carrito">
                                <img src={item.imagen} alt={item.nombre} className="thumb-carrito" />
                                <div className="info-item-carrito">
                                    <span className="nombre-item">{item.nombre}</span>
                                    <span className="precio-item">${item.precio}</span>
                                </div>
                                <div className="cantidad-controles">
                                    <button onClick={() => disminuirCantidad(item.id)}>-</button>
                                    <span>{item.cantidad}</span>
                                    <button onClick={() => aumentarCantidad(item.id)}>+</button>
                                </div>
                                <button className="eliminar-item" onClick={() => eliminarDelCarrito(item.id)}>❌</button>
                            </div>
                        ))
                    )}
                </div>
                {mostrandoFormulario && (
                    <div className="formulario-pago">
                        <hr />
                        <h3>Detalles de Entrega</h3>
                        <input value={direccion} type="text" placeholder="Dirección" required className="input-pago" onChange={(e) => setDireccion(e.target.value.trim())} />
                        <input value={telefono} type="text" placeholder="Teléfono" required className="input-pago" onChange={(e) => setTelefono(e.target.value.trim())} />
                        <input type="text" placeholder="Detalles adicionales (opcional)" required className="input-pago" />
                        <div className="total-contenedor">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="btn-premium" onClick={confirmarPedido}>Confirmar Pedido</button>
                    </div>
                )}
                <div className="contenedorBotonesCarrito">
                    <button className="btn-premium" style={{ background: 'var(--accent-secondary)' }} onClick={() => setMostrandoFormulario(true)}>Continuar</button>
                    <button className="btn-premium" style={{ background: 'transparent', borderColor: 'var(--text-muted)' }} onClick={() => { cerrar(); setMostrandoFormulario(false) }}>Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default CarritoModal;