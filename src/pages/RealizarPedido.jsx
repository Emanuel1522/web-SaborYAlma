import TarjetaPlatosPedido from "../componentes/TarjetaPlatosPedido";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";
import CarritoModal from "../componentes/CarritoModal";
import { entradas, platosFuertes, postres } from "../services/database";
import { useState } from "react";
import { useCarrito } from "../componentes/CarritoCompras";

const RealizarPedido = () => {
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const { carrito } = useCarrito();

    return (
        <>
            <Encabezado />
            <CarritoModal mostrar={mostrarCarrito} cerrar={() => setMostrarCarrito(false)} />
            <main className="container" style={{ paddingTop: 'var(--header-height)' }}>
                <h1 className="menu-title">Realizar Pedido</h1>

                <div className="menu-container">
                    <h2 className="serif">Entradas / Starters</h2>
                    <div className='listaPlatos'>
                        {entradas.map((entrada) => (
                            <TarjetaPlatosPedido
                                key={entrada.id}
                                plato={entrada}
                                nombreBoton="Agregar al carrito"
                                requiereSesion={false}
                            />
                        ))}
                    </div>
                    <h2 className="serif">Platos Fuertes / Main Course</h2>
                    <div className='listaPlatos'>
                        {platosFuertes.map((platoFuerte) => (
                            <TarjetaPlatosPedido
                                key={platoFuerte.id}
                                plato={platoFuerte}
                                nombreBoton="Agregar al carrito"
                                requiereSesion={false}
                            />
                        ))}
                    </div>
                    <h2 className="serif">Postres / Desserts</h2>
                    <div className='listaPlatos'>
                        {postres.map((postre) => (
                            <TarjetaPlatosPedido
                                key={postre.id}
                                plato={postre}
                                nombreBoton="Agregar al carrito"
                                requiereSesion={false}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <button className="botonCarrito" onClick={() => setMostrarCarrito(true)}>
                🛒 {carrito.length > 0 && <span className="contador-carrito">{carrito.length}</span>}
            </button>
            <PieDePagina />
        </>
    )
}

export default RealizarPedido;