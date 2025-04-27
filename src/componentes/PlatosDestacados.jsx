import menuLomo from '../assets/menuSaborYAlma/LomoSaborYAlma.jpg'
import menuPulpo from '../assets/menuSaborYAlma/PulpoSaborYAlma.jpg'
import menuRollitosHeisei from '../assets/menuSaborYAlma/RollitosHeisei.jpg'
import menuPolloTrufado from '../assets/menuSaborYAlma/PolloTrufado.jpg'

const PlatosDestacados = ()=> {
    return(
        <section id="platos-destacados">
            <section className="platos-destacados-main">
                <h2>Nuestros platos más destacados</h2>
                <div className="flex-container">
                    <div className="plato">
                        <div className="plato-img1"><img src={menuLomo} alt="" /></div>
                        <p>Lomo Sabor Y Alma</p>
                    </div>
                    <div className="plato">
                        <div className="plato-img2"><img src={menuPulpo} alt="" /></div>
                        <p>Pulpo Sabor Y Alma</p>
                    </div>
                    <div className="plato">
                        <div className="plato-img3"><img src={menuRollitosHeisei} alt="" /></div>
                        <p>Rollitos Heisei</p>
                    </div>
                    <div className="plato">
                        <div className="plato-img4"><img src={menuPolloTrufado} alt="" /></div>
                        <p>Pollo trufado</p>
                    </div>
                </div>
            </section>
            <div className="boton-menu">
                <a href="./HTML/menu.html" className="btn">Conoce nuestro menú</a>
            </div>
        </section>
    )
}
export default PlatosDestacados;