import logoLargo from '../assets/logos/img_2802.png'
import logoCorto from '../assets/logos/img_2795.png'

const PiePagina = ()=> {
    return (
        <footer>
            <div className="footer-info">
                <div className="footer-links">
                    <ul>
                        <li><a href="../archivosSaborYAlma/Términos y Condiciones de Uso.pdf" target="_blank">Términos y condiciones de uso</a></li>
                        <li><a href="../archivosSaborYAlma/Politica de privacidad.pdf" target="_blank">Política de privacidad</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className="logos-footer">
                    <div className="logo-largo-footer">
                        <img src={logoLargo} alt="" />
                    </div>
                    <div className="logo-corto-footer">
                        <img src={logoCorto} alt="Logo Corto" />
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2024</p>
            </div>
    </footer>
    )
}

export default PiePagina;