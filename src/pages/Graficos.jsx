import { useState, useEffect } from "react";
import Encabezado from "../componentes/Encabezado";
import PieDePagina from "../componentes/PiePagina";

let apiGraficos = "https://dbsaboryalma.onrender.com/graficos";

const Graficos = () => {
  const [graficos, setGraficos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(apiGraficos)
      .then((res) => res.json())
      .then((data) => setGraficos(data))
      .catch((err) => console.error("Error cargando graficos:", err));
  }, []);

  return (
    <>
      <Encabezado />
      <div>
        <h1 className="tituloGraficos">Graficos - Sabor y Alma</h1>
        <div>
          <div className="menu-container">
            <div className="listaPlatos">
              <div className="itemGraficos">
                <img src={"/graficos/uno.png"} alt="" />
              </div>
            </div>
            <div className="listaPlatos">
              <div className="itemGraficos">
                <img src={"/graficos/dos.png"} alt="" />
              </div>
            </div>
            <div className="listaPlatos">
              <div className="itemGraficos">
                <img src={"/graficos/tres.png"} alt="" />
              </div>
            </div>
            <div className="listaPlatos">
              <div className="itemGraficos">
                <img src={"/graficos/cuatro.png"} alt="" />
              </div>
            </div>
            <div className="listaPlatos">
              <div className="itemGraficos">
                <img src={"/graficos/cinco.png"} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PieDePagina />
    </>
  );
};
export default Graficos;
