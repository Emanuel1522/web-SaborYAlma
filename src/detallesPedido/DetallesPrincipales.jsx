const DetallesPrincipales = () => {
    return (
        <main className="main-detallesPedido">
            <h1 style="text-align: center; font-size: 3rem;">Detalles de tu Pedido</h1>
            <div id="detallesPedido"></div>
            <button /*onclick="mostrarModal()"*/ style="background-color: grey; color: white; border: none; padding: 10px; border-radius: 5px;">Siguiente</button>
            <div id="mensajeCarga">Cargando...</div>
            <div id="mensajeExito">Orden realizada con éxito!</div>
        </main>
    )
}

export default DetallesPrincipales;