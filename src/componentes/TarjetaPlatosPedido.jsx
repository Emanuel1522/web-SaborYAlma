const TarjetaPlatosPedido = ( { plato } ) => {
    return(
        <div className="item">
            <img src={plato.imagen} alt="" />
            <h3>{plato.nombre}</h3>
            <p>{plato.descripcion}</p>
            <p>{plato.precio}</p>
        </div>
    )
}

export default TarjetaPlatosPedido;