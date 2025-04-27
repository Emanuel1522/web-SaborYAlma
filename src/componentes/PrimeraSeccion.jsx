import miImagen from '../assets/logos/img_2797.png'

const PrimeraSeccion = ()=> {
    return (
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
                        presentaciones artísticas.
                    </p>
                </div>
                <div id="div-3">
                    <p>El corazón de Sabor y Alma radica en la pasión por transformar lo simple en extraordinario.
                        Cada ingrediente es seleccionado cuidadosamente, buscando frescura, autenticidad y
                        sostenibilidad. Aquí, el arte no solo está en la cocina, sino también en la atmósfera: un
                        entorno
                        elegante y acogedor donde el diseño del espacio refleja el mismo nivel de cuidado y detalle que
                        nuestros platos.
                    </p>
                </div>
                <div id="div-4">
                    <a href="./HTML/quienesSomos.html" class="boton">Conoce mas</a>
                </div>
            </div>
            <div id="div-2">
                <img src={miImagen} alt="Logo corto rojo" />
            </div>
        </section>
    )
}

export default PrimeraSeccion;