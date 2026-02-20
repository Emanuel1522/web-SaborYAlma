import Encabezado from "../componentes/Encabezado"
import PiePagina from "../componentes/PiePagina"
import imgRelleno from '../assets/otros/imagen-relleno-quienes-somos.jpg'
import { useEffect } from "react";

const QuienesSomos = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Encabezado />
            <main>
                <section>
                    <div className="imagen-quienes-somos">
                        <img className="logo-largo" src="/logos/img2801.PNG" alt="" />
                    </div>
                </section>
                <section id="nuestra-historia">
                    <div className="historia-titulo">
                        <h2 className="serif">Nuestra Historia</h2>
                    </div>
                    <div className="historia-parrafo1">
                        <p>Sabor y Alma comenzó en un pequeño pueblo, donde los aromas de la cocina casera se entrelazaban con los recuerdos de la infancia. Fue allí, en la cocina de su abuela, donde el fundador descubrió que la comida no solo alimenta el cuerpo, sino también el alma.</p>
                    </div>
                    <div className="historia-parrafo2">
                        <div className="container">
                            <img src="/logos/img2796.PNG" alt="Logo Sabor y Alma" style={{ width: '80px', margin: '0 auto 20px' }} />
                            <p>Con el tiempo, el chef viajó por el mundo, aprendiendo de diferentes culturas y perfeccionando su arte culinario. Siempre volvía a esa sencilla verdad: la comida tiene el poder de contar historias y conectar a las personas.</p>
                        </div>
                    </div>
                    <div className="historia-parrafo3">
                        <p>Así nació la visión de Sabor y Alma: un restaurante donde cada plato es una obra de arte. Aquí, la cocina de autor es un homenaje a los recuerdos, a los ingredientes frescos y a la creatividad sin límites.</p>
                    </div>
                    <div className="historia-logo">
                        <img src="/logos/img2801.PNG" alt="Sabor y Alma" style={{ maxWidth: '300px' }} />
                    </div>
                </section>
                <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                    <img src={imgRelleno} alt="Ambiente" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div id="enfoque-parrafo">
                    <div className="container" style={{ padding: '80px 20px' }}>
                        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>Con un enfoque en la estética e innovación, llevamos a la mesa algo más que comida: emociones, memorias y una invitación a disfrutar de la belleza en cada detalle.</p>
                    </div>
                </div>
            </main>
            <PiePagina />
        </>
    )
}

export default QuienesSomos;