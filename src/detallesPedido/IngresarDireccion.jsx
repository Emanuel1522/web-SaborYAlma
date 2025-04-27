const IngresarDireccion = ()=> {
    return(
        <div id="modalDireccion">
            <div className="modal-content">
                <h2>Direcciones de Entrega</h2>
                <div id="listaDirecciones"></div>
                <form id="direccionForm">
                    <label for="direccion">Nueva Dirección:</label>
                    <input type="text" id="direccion" name="direccion" required />
                    <button type="submit">Agregar Dirección</button>
                    <button type="button" /*onclick="cerrarModal()"*/>Cancelar</button>
                </form>
                <button id="finalizarPedido" onclick="finalizarPedidoDesdeModal()" style="display: none;">Finalizar Pedido</button>
            </div>
        </div>
    )
}

export default IngresarDireccion;