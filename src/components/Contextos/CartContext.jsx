import React, { useState } from 'react'

import CartContext from './CartContextInit';

export default function CartState({ original = [], children }) {
    const [cache, setCache] = useState(original);
  
    function getFromCache(id) {
        console.log(id);

      return cache.find(x => x.id === id);
    }
  
    function isInCart({ id }) {
        console.log(id);

      return id === undefined ? undefined : getFromCache(id) !== undefined;
    }
  
    function addItem(obj) {
        console.log(obj);
      if (isInCart(obj)) {
        alert('Este Articulo ya esta en el Carrito');
        return;
      }
      setCache([...cache, obj]);
      console.log('Articulo agregado!');
    }
    return (
      <CartContext.Provider value={{ cache, addItem, isInCart, cacheSize: cache.length }} >
        { children }
      </CartContext.Provider>
    );
  }
