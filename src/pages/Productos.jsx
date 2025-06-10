import TarjetaPlatosPedido from "../componentes/TarjetaPlatosPedido";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";
import { useEffect, useState } from "react";

const Productos = () => {
    const [entradas, setEntradas] = useState([]);
    const [platosFuertes, setPlatosFuertes] = useState([]);
    const [postres, setPostres] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch("https://dbsaboryalma.onrender.com/entradas")
            .then(res => res.json())
            .then(data => setEntradas(data))
            .catch(err => console.error("Error cargando entradas:", err));

        fetch("https://dbsaboryalma.onrender.com/platosFuertes")
            .then(res => res.json())
            .then(data => setPlatosFuertes(data))
            .catch(err => console.error("Error cargando platos fuertes:", err));

        fetch("https://dbsaboryalma.onrender.com/postres")
            .then(res => res.json())
            .then(data => setPostres(data))
            .catch(err => console.error("Error cargando postres:", err));
    }, []);

    return (
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