import { alertaGeneral } from '../helper/funciones'

export function verificarSesion(vista, redireccion) {
    let tokenActivo = localStorage.getItem("token");
    if(tokenActivo){
        redireccion(vista);
    } else {
        alertaGeneral(redireccion, "Por favor inicie sesion", "/inicioSesion")
    }
}
