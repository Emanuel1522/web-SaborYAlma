import Ellipse from '../assets/otros/Ellipse1.png'

const ExperienciasYHorarios = ()=> {
    return(
        <section id="reseñas-y-horarios">
            <div className="reseñas">
                <h2>Experiencias en Sabor Y Alma</h2>
                <div className="reseña">
                    <div className="usuario-info">
                        <img src={Ellipse} alt="" />
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
                        <img src={Ellipse} alt="" />
                        <div>
                            <h4>Usuario2</h4>
                            <p>Vlogger</p>
                        </div>
                    </div>
                    <p>“Lo ame, me encanto todo, un restaurante verdaderamente encantador, sin duda alguna volveria”</p>
                </div>
            </div>

            <div className="horario-reservas">
                <h2>Horario de Reservas</h2>
                <div className="tabla-horarios">
                    <table>
                        <tbody>
                            <tr>
                                <td id="dia-semana">Lunes</td>
                                <td>12:00 PM A 9:00 PM</td>
                            </tr>
                            <tr>
                                <td id="dia-semana">Martes</td>
                                <td>12:00 PM A 9:00 PM</td>
                            </tr>
                            <tr>
                                <td id="dia-semana">Miércoles</td>
                                <td>12:00 PM A 9:00 PM</td>
                            </tr>
                            <tr>
                                <td id="dia-semana">Jueves</td>
                                <td>12:00 PM A 10:00 PM</td>
                            </tr>
                            <tr>
                                <td id="dia-semana">Viernes</td>
                                <td>12:00 PM A 10:30 PM</td>
                            </tr>
                            <tr>
                                <td id="dia-semana">Sábado</td>
                                <td>1:00 PM A 11:00 PM</td>
                            </tr>
                            <tr>
                                <td id="dia-semana">Domingo</td>
                                <td>11:00 PM A 8:30 PM</td>
                            </tr>
                            <tr>
                                <td id="dia-semana">Festivo</td>
                                <td>12:00 PM A 8:30 PM</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Elige el número de personas, fecha y hora disponible para realizar tu reserva</p>
                    <a href="#reservar" class="boton-reservar">Reservar</a>
                </div>
            </div>
        </section>
    )
}

export default ExperienciasYHorarios;