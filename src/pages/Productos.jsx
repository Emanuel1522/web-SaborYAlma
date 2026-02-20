import TarjetaPlatosPedido from "../componentes/TarjetaPlatosPedido";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";
import { entradas, platosFuertes, postres } from "../services/database";

const Productos = () => {

    return (
        <>
            <Encabezado />
            <div className="container" style={{ paddingTop: 'var(--header-height)' }}>
                <h1 className="menu-title">Nuestra Carta</h1>
                <div className="menu-container">
                    <h2 className="serif">Entradas / Starters</h2>
                    <div className='listaPlatos'>
                        {entradas.map((entrada) => (
                            <TarjetaPlatosPedido
                                key={entrada.id}
                                plato={entrada}
                                nombreBoton="Agregar al Carrito"
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
                                nombreBoton="Agregar al Carrito"
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
                                nombreBoton="Agregar al Carrito"
                                requiereSesion={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <PieDePagina />
        </>
    )
}

export default Productos;