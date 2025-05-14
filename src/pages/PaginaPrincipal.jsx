import Encabezado from "../componentes/Encabezado"
import PiePagina from "../componentes/PiePagina"
import SeccionPrincipal from "../componentes/SeccionPrincipal"

function PaginaPrincipal() {
    return(
        <div>
        <Encabezado />
        <SeccionPrincipal />
        <PiePagina />
        </div>
    )
}
export default PaginaPrincipal