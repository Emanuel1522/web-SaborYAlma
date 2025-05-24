import { useCarrito } from "./CarritoCompras";

const CarritoModal = ({ mostrar, cerrar }) => {
  const { carrito, aumentarCantidad, disminuirCantidad, eliminarDelCarrito } = useCarrito();

  if (!mostrar) return null;

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
              <span className="precio-item">{item.precio}</span>
              <div className="cantidad-controles">
                <button onClick={() => disminuirCantidad(item.id)}>-</button>
                <span>{item.cantidad}</span>
                <button onClick={() => aumentarCantidad(item.id)}>+</button>
              </div>
              <button className="eliminar-item" onClick={() => eliminarDelCarrito(item.id)}>❌</button>
            </div>
          ))
        )}
        <button className="Btn-registro btn-cerrar" onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  );
};

export default CarritoModal;