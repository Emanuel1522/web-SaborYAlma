const PieDePagina = () => {
    return (
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
                        <img src="/logos/img2802.png" alt="" />
                    </div>
                    <div className="logo-corto-footer">
                        <img src="/logos/img2795.png" alt="Logo Corto" />
                    </div>
                </div>
            </div>
            <p>Copyright © 2024</p>
        </footer>
    );
};

export default PieDePagina;