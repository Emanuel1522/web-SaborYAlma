import Encabezado from "../componentes/Encabezado"
import { verificarSesion } from "../componentes/VerificarSesion"
import PiePagina from "../componentes/PiePagina"
import ellipse from '../assets/otros/Ellipse.png'
import { Link, useNavigate } from 'react-router-dom';

function PaginaPrincipal() {
    let redireccion = useNavigate();
    return (
        <>
            <Encabezado />
            <main>
                <section className="main-section-home">
                    <img src="/logos/img2802.PNG" alt="Logo Sabor y Alma" />
                </section>
                <section className="main-section">
                    <div id="main-section-left">
                        <div id="div-1">
                            <h3>Nuestra Esencia</h3>
                            <p>En Sabor y Alma, cada detalle está diseñado para ofrecer una experiencia gastronómica
                                inolvidable. Nuestro restaurante combina la cocina de autor con una estética visual cautivadora, donde la
                                creatividad y la calidad se encuentran en cada plato.</p>
                        </div>
                        <div id="div-3">
                            <p>El corazón de Sabor y Alma radica en la pasión por transformar lo simple en extraordinario.
                                Aquí, un entorno elegante y acogedor donde el diseño del espacio refleja el mismo nivel de cuidado y detalle que
                                nuestros platos.</p>
                        </div>
                        <div id="div-4">
                            <Link to="/quienesSomos" className='btn-premium'>Conoce más</Link>
                        </div>
                    </div>
                    <div id="div-2">
                        <img src="/logos/img2797.PNG" alt="Logo Sabor y Alma" />
                    </div>
                </section>
                <section id="platos-destacados">
                    <section className="platos-destacados-main">
                        <h2>Nuestros platos más destacados</h2>
                        <div className="flex-container">
                            <div className="plato">
                                <img className="plato-img1" src="/assets/menuRestaurante/LomoSaborYAlma.jpg" alt="" />
                                <p>Lomo Sabor Y Alma</p>
                            </div>
                            <div className="plato">
                                <img className="plato-img1" src="/assets/menuRestaurante/PulpoSaborYAlma.jpg" alt="" />
                                <p>Pulpo Sabor Y Alma</p>
                            </div>
                            <div className="plato">
                                <img className="plato-img1" src="/assets/menuRestaurante/RollitosHeisei.jpg" alt="" />
                                <p>Rollitos Heisei</p>
                            </div>
                            <div className="plato">
                                <img className="plato-img1" src="/assets/menuRestaurante/PolloTrufado.jpg" alt="" />
                                <p>Pollo trufado</p>
                            </div>
                        </div>
                    </section>
                    <div className="boton-menu">
                        <Link to="/productos" className="btn-premium">Ver Menú Completo</Link>
                    </div>
                </section>
                <section id="reseñas-y-horarios">
                    <div className="reseñas">
                        <h2>Experiencias</h2>
                        <div className="reseña">
                            <div className="usuario-info">
                                <img src={ellipse} alt="Usuario" />
                                <div>
                                    <h4>Usuario1</h4>
                                    <p>Crítico Gastronómico</p>
                                </div>
                            </div>
                            <p>“La experiencia en el restaurante fue maravillosa, super recomendado. El servicio es impecable.”</p>
                        </div>
                        <div className="reseña">
                            <div className="usuario-info">
                                <img src={ellipse} alt="Usuario" />
                                <div>
                                    <h4>Usuario2</h4>
                                    <p>Gourmet Lover</p>
                                </div>
                            </div>
                            <p>“Un restaurante verdaderamente encantador, el ambiente es único y sofisticado.”</p>
                        </div>
                    </div>
                    <div className="horario-reservas">
                        <h2>Horario de Atención</h2>
                        <div className="tabla-horarios">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Lunes - Viernes</td>
                                        <td>11:00 AM - 11:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Sábado - Domingo</td>
                                        <td>11:00 AM - 12:00 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={() => verificarSesion("/realizarPedido", redireccion)} className="btn-premium">Realizar Pedido</button>
                        </div>
                    </div>
                </section>
                <section className="logo-relleno container" id="logo-relleno-home" style={{ padding: '100px 20px', textAlign: 'center' }}>
                    <img src="/logos/img2795.PNG" alt="Logo corto en blanco" style={{ maxWidth: '120px', margin: '0 auto' }} />
                </section>
            </main>

            <PiePagina />
        </>
    )
}
export default PaginaPrincipal