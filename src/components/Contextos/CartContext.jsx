import React, { useState } from 'react'

import CartContext from './CartContextInit';

export default function CartState({ original = [], children }) {
    const [cache, setCache] = useState(original);
  
    function getFromCache(id) {
      return cache.find(x => x.id === id);
    }

    function getCache() {
          return cache;
    }

    function delItemCache(elem) {

      for( let i = 0; i < cache.length; i++){ 

        function arrayRemove(arr, value) { 
    
            return arr.filter(function(ele){ 
                return ele != value; 
            });

        }

        if ( cache[i].id === elem) { 
          let result = arrayRemove(cache,  cache[i]);
            setCache(result)

        }
    
      }

      return true;
    }

    function isInCart({ id }) {

      return id === undefined ? undefined : getFromCache(id) !== undefined;
    }
  
    function addItem(obj) {
      if (isInCart(obj)) {
        alert('Este Articulo ya esta en el Carrito');
        return;
      }
      setCache([...cache, obj]);
    }

    function cleanCart(elem) {

      setCache([])
      return true;

    }
    return (
      <CartContext.Provider value={{ cache, addItem, isInCart, getCache, cleanCart, delItemCache, cacheSize: cache.length }} >
        { children }
      </CartContext.Provider>
    );
  }
