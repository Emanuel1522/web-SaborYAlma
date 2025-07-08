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
        }else if (direccion.length === 0 || telefono.length === 0) {
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
                        <input value={direccion} type="text" placeholder="Dirección" required className="input-pago" onChange={(e) => setDireccion(e.target.value.trim())}/>
                        <input value={telefono} type="text" placeholder="Teléfono" required className="input-pago" onChange={(e) => setTelefono(e.target.value.trim())}/>
                        <input type="text" placeholder="Detalles adicionales (opcional)" required className="input-pago" />
                        <div className="total-contenedor">
                            <span>Total:</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="btn-cerrar" onClick={confirmarPedido}>Confirmar pedido</button>
                    </div>
                )}
                <div className="contenedorBotonesCarrito">
                    <button className="btn-cerrar" onClick={() => setMostrandoFormulario(true)}>Continuar pedido</button>
                    <button className="btn-cerrar" onClick={() => {cerrar(); setMostrandoFormulario(false)}}>Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default CarritoModal;