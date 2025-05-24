import { createContext, useState, useContext } from "react";

const ContextoCarrito = createContext();

export const CarritoCompras = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
      const existente = prev.find(item => item.id === producto.id);
      if (existente) {
        return prev.map(item =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      } else {
        return [...prev, { ...producto, cantidad: 1 }];
      }
    });
  };

  const aumentarCantidad = (id) => {
    setCarrito(prev =>
      prev.map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito(prev =>
      prev
        .map(item =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter(item => item.cantidad > 0)
    );
  };

  const eliminarDelCarrito = id => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  return (
    <ContextoCarrito.Provider value={{ carrito, agregarAlCarrito, aumentarCantidad, disminuirCantidad, eliminarDelCarrito }}>
      {children}
    </ContextoCarrito.Provider>
  );
};

export const useCarrito = () => useContext(ContextoCarrito);
