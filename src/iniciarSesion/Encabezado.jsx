import Logo from '../assets/logos/img_2795.png'

const Encabezado = ()=> {
    return(
        <nav class="navbar">
        <li class="nav-logo">
            <a href="../index.html" >
                <img src={Logo} alt="Logo corto en blanco" />
            </a>
        </li>
        </nav>
    )
}

export default Encabezado;