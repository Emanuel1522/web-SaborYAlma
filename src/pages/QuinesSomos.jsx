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
                        <img className="logo-largo" src="/public/logos/img2801.png" alt="" />
                    </div>
                </section>
                <section id="nuestra-historia">
                    <div className="historia-titulo">
                        <h2>Nuestra Historia</h2>
                    </div>
                    <div className="historia-parrafo1">
                        <p>Sabor y Alma comenzó en un pequeño pueblo, donde los aromas de la cocina casera se entrelazaban con
                            los recuerdos de la infancia. Fue allí, en la cocina de su abuela, donde el fundador, un apasionado
                            chef, descubrió que la comida no solo alimenta el cuerpo, sino también el alma. Los sabores
                            auténticos, preparados con dedicación y amor, dejaron una huella indeleble en su vida.</p>
                    </div>
                    <div className="historia-parrafo2">
                        <div className="historia-parrafo2-div">
                            <img src="/public/logos/img2796.png" alt="Logo corto verde" />
                            <p>Con el tiempo, el chef viajó por el mundo, aprendiendo de diferentes culturas y perfeccionando su
                                arte culinario. Pero en cada rincón del planeta, sin importar cuán sofisticada o exótica fuera la
                                cocina, siempre volvía a esa sencilla verdad que había aprendido en su hogar: la comida tiene el
                                poder de contar historias y conectar a las personas.</p>
                        </div>
                    </div>
                    <div className="historia-parrafo3">
                        <p>Así nació la visión de Sabor y Alma: un restaurante donde cada plato es una obra de arte que refleja
                            el alma de su creador. Aquí, la cocina de autor no es solo una técnica, es una forma de expresión,
                            un homenaje a los recuerdos, a los ingredientes frescos y a la creatividad sin límites. Desde su
                            apertura, el restaurante ha sido un lugar donde el sabor y la presentación se entrelazan para
                            ofrecer a los comensales una experiencia sensorial única.</p>
                    </div>
                    <div className="historia-logo">
                        <img src="/public/logos/img2801.png" alt="Logo Largo" />
                    </div>
                </section>
                <div className="contenedorImagenRelleno">
                    <img className="logo-ls" src={imgRelleno} alt="" />
                </div>
                <div id="enfoque-parrafo">
                    <p>Con un enfoque en la estética y la innovación,
                        Sabor y Alma ha logrado transformar lo cotidiano en extraordinario,
                        llevando a la mesa algo más que comida: emociones, memorias y una invitación a disfrutar de la belleza
                        en cada detalle.</p>
                </div>
            </main>
            <PiePagina />
        </>
    )
}

export default QuienesSomos;