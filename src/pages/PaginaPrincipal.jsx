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
                    <img src="/logos/img2802.png" alt="Logo sabor y alma en blanco y largo" />
                </section>
                <section className="main-section">
                    <div id="main-section-left">
                        <div id="div-1">
                            <p>En Sabor y Alma, cada detalle está diseñado para ofrecer una experiencia gastronómica
                                inolvidable.
                                Nuestro restaurante combina la cocina de autor con una estética visual cautivadora, donde la
                                creatividad y
                                a calidad se encuentran en cada plato. Inspirados en la fusión de tradiciones culinarias y
                                técnicas modernas, nuestros chefs crean menús únicos
                                que despiertan los sentidos, invitando a cada comensal a un viaje lleno de sabores inesperados y
                                presentaciones artísticas.</p>
                        </div>
                        <div id="div-3">
                            <p>El corazón de Sabor y Alma radica en la pasión por transformar lo simple en extraordinario.
                                Cada ingrediente es seleccionado cuidadosamente, buscando frescura, autenticidad y
                                sostenibilidad. Aquí, el arte no solo está en la cocina, sino también en la atmósfera: un
                                entorno
                                elegante y acogedor donde el diseño del espacio refleja el mismo nivel de cuidado y detalle que
                                nuestros platos.</p>
                        </div>
                        <div id="div-4">
                            <Link to="/quienesSomos" className='boton'>Conoce mas</Link>
                        </div>
                    </div>
                    <div id="div-2">
                        <img src="/logos/img2797.png" alt="logo corto en rojo" />
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
                        <Link to="/productos" className="btn">Conoce nuestro menú</Link>
                    </div>
                </section>
                <section id="reseñas-y-horarios">
                    <div className="reseñas">
                        <h2>Experiencias en Sabor Y Alma</h2>
                        <div className="reseña">
                            <div className="usuario-info">
                                <img src={ellipse} alt="" />
                                <div>
                                    <h4>Usuario1</h4>
                                    <p>Fooder</p>
                                </div>
                            </div>
                            <p>“La experiencia en el restaurante fue maravillosa, super recomendado, en especial el servicio es
                                excelente”</p>
                        </div>
                        <div className="reseña">
                            <div className="usuario-info">
                                <img src={ellipse} alt="" />
                                <div>
                                    <h4>Usuario2</h4>
                                    <p>Vlogger</p>
                                </div>
                            </div>
                            <p>“Lo ame, me encanto todo, un restaurante verdaderamente encantador, sin duda alguna volveria”</p>
                        </div>
                    </div>
                    <div className="horario-reservas">
                        <h2>Horario de atencion</h2>
                        <div className="tabla-horarios">
                            <table>
                                <tbody>
                                    <tr>
                                        <td id="dia-semana">Lunes</td>
                                        <td>11:00 AM A 11:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="dia-semana">Martes</td>
                                        <td>11:00 AM A 11:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="dia-semana">Miércoles</td>
                                        <td>11:00 AM A 11:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="dia-semana">Jueves</td>
                                        <td>11:00 AM A 11:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="dia-semana">Viernes</td>
                                        <td>11:00 AM A 11:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="dia-semana">Sábado</td>
                                        <td>11:00 AM A 11:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="dia-semana">Domingo</td>
                                        <td>11:00 AM A 11:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td id="dia-semana">Festivo</td>
                                        <td>11:00 AM A 11:00 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Realiza el pedido y te llevamos tu comida hasta la puerta de tu casa!!!</p>
                            <button onClick={()=> verificarSesion("/realizarPedido", redireccion)} className="boton-reservar">Realizar pedido</button>
                        </div>
                    </div>
                </section>
                <section className="logo-relleno" id="logo-relleno-home">
                    <img src="/logos/img2795.png" alt="Logo corto en blanco" />
                </section>
            </main>

            <PiePagina />
        </>
    )
}
export default PaginaPrincipal