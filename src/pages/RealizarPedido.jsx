import { entradas, platosFuertes, postres } from "../services/database";
import TarjetaPlatosPedido from "../componentes/TarjetaPlatosPedido";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";

const RealizarPedido = () => {

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
                        />
                    ))}
                </div>
                <h2>Platos Fuertes / Main Course</h2>
                <div className='listaPlatos'>
                    {platosFuertes.map((platoFuerte) => (
                        <TarjetaPlatosPedido 
                            key={platoFuerte.id} 
                            plato={platoFuerte} 
                        />
                    ))}
                </div>
                <h2>Postres / Desserts</h2>
                <div className='listaPlatos'>
                    {postres.map((postre) => (
                        <TarjetaPlatosPedido 
                            key={postre.id} 
                            plato={postre} 
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

export default RealizarPedido;