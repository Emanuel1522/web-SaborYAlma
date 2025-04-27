import LogoLargo from '../assets/logos/img_2802.png'
import logoCorto from '../assets/logos/img_2795.png'

const PiePagina = ()=> {
    return(
        <footer>
        <div className="footer-info">
            <div className="footer-links">
                <ul>
                    <li><a href="./archivosSaborYAlma/Términos y Condiciones de Uso.pdf" target="_blank">Términos y condiciones de uso</a></li>
                    <li><a href="./archivosSaborYAlma/Politica de privacidad.pdf" target="_blank">Política de privacidad</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div>
            <div className="logos-footer">
                <div className="logo-largo-footer">
                    <img src={LogoLargo} alt="Logo largo" />
                </div>
                <div className="logo-corto-footer">
                        <img src={logoCorto} alt="Logo corto" />
                </div>
                <div className="footer-copyright"></div>
            </div>
        </div>
        <p>Copyright © 2024</p>
        </footer>
    )
}

export default PiePagina;