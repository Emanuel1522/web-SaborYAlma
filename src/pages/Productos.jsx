import { entradas, platosFuertes, postres } from "../services/database";
import TarjetaPlatosPedido from "../componentes/TarjetaPlatosPedido";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";
import { useEffect } from "react";

const Productos = () => {

    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
    
    return(
        <>
        <Encabezado />
        <div>
            <h1 className="menu-title">Lista de Platos</h1>
            <div className="menu-container">
                <h2>Entradas / Starters</h2>
                <div className='listaPlatos'>
                    {entradas.map((entrada) => (
                        <TarjetaPlatosPedido 
                            key={entrada.id} 
                            plato={entrada} 
                            nombreBoton="Realizar pedido"
                            requiereSesion={true}
                        />
                    ))}
                </div>
                <h2>Platos Fuertes / Main Course</h2>
                <div className='listaPlatos'>
                    {platosFuertes.map((platoFuerte) => (
                        <TarjetaPlatosPedido 
                            key={platoFuerte.id} 
                            plato={platoFuerte}
                            nombreBoton="Realizar pedido" 
                            requiereSesion={true}
                        />
                    ))}
                </div>
                <h2>Postres / Desserts</h2>
                <div className='listaPlatos'>
                    {postres.map((postre) => (
                        <TarjetaPlatosPedido 
                            key={postre.id} 
                            plato={postre} 
                            nombreBoton="Realizar pedido"
                            requiereSesion={true}
                        />
                    ))}
                </div>
            </div>
            <aside id="carrito">
            </aside>
        </div>
        <PieDePagina />
        </>
    )
}

export default Productos;