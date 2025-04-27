import { useState } from 'react'
import './style.css'
import './mobile.css'

import VolverInicio from './detallesPedido/VolverInicio'
import DetallesPrincipales from './detallesPedido/DetallesPrincipales'
import IngresarDireccion from './detallesPedido/IngresarDireccion'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VolverInicio />
      <DetallesPrincipales />
      <IngresarDireccion />
    </>
  )
}

export default App;

