import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
const Articulo = { nombre: 'Logitech G213', disponible: 5, precio: 100, id:'210', detail: "El teclado G213 para juegos está dotado de teclas Logitech G Mech-Dome ajustadas especialmente para ofrecer una respuesta táctil superior y un perfil de desempeño global similar al de un teclado mecánico. Las teclas Mech-Dome tienen una altura estándar, ofrecen un recorrido total de 4 mm, una fuerza de actuación de 50 g y un funcionamiento silencioso.", img:"./assets/img/g213.webp" }
const ItemDetailContainer = () => {

    const [artSet, setArt] = useState([])

    useEffect( () => { const timer1 = setTimeout(() => {

        const Load = new Promise((resolve) => {
          resolve(Articulo);
        });
        
        Load.then( returns => { setArt(returns) });
      
      } , 2000);

      return () => { clearTimeout(timer1); };
    }, [] );

    return (
        <div className="album py-5 bg-light">
            <div className="container">
              <div className="row ">
                    <ItemDetail elementos={artSet} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer
