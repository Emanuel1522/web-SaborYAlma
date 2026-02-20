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
                    <img src="/logos/img2802.PNG" alt="Logo Sabor y Alma" />
                </div>
            </div>
            <p style={{ marginTop: '40px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>© 2026 Sabor y Alma. Todos los derechos reservados.</p>
        </footer>
    );
};

export default PieDePagina;