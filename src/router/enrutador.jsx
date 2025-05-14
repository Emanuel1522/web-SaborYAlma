import PaginaPrincipal from '../pages/PaginaPrincipal'
import QuienesSomos from '../pages/QuinesSomos'
import RealizarPedido from '../pages/RealizarPedido'
import InicioSesion from '../pages/InicioSesion'
import CrearCuenta from '../pages/CrearCuenta'

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
      path: "/realizarPedido",
      element: <RealizarPedido />,
    },
    {
        path: "inicioSesion",
        element: <InicioSesion />,
    },
    {
        path: "crearCuenta",
        element: <CrearCuenta />,
    },
];
  