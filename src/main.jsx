import { createRoot } from 'react-dom/client'
import { enrutador } from './router/enrutador.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CarritoCompras } from './componentes/CarritoCompras.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <CarritoCompras >
    <RouterProvider router={createBrowserRouter(enrutador)} />
  </CarritoCompras>,
)
