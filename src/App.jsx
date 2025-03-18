import { useState } from 'react'
import './style.css'
import Encabezado from './componentes/Encabezado'
import BanderaPrincipal from './componentes/BanderaPrincipal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Encabezado />
    <BanderaPrincipal />
    </>
  )
}

export default App
