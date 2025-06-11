import PaginaPrincipal from '../pages/PaginaPrincipal'
import QuienesSomos from '../pages/QuinesSomos'
import Productos from '../pages/Productos'
import RealizarPedido from '../pages/RealizarPedido'
import RutaProtegida from "../componentes/RutaProtegida";
import InicioSesion from '../pages/InicioSesion'
import CrearCuenta from '../pages/CrearCuenta'
import Graficos from '../pages/Graficos';

export let enrutador = [
    {
        path: "/",
        element: <PaginaPrincipal />,
      },
    {
      path: "/quienesSomos",
      element: <QuienesSomos />,
    },
    {
      path: "/productos",
      element: <Productos />,
    },
    {
      path: "/realizarPedido",
      element: <RutaProtegida componente={<RealizarPedido />} />,
    },
    {
        path: "inicioSesion",
        element: <InicioSesion />,
    },
    {
        path: "crearCuenta",
        element: <CrearCuenta />,
    },
    {
      path: "/graficos",
      element: <Graficos />
    }
];
  