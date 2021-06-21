import React, {useState, useEffect} from 'react'
import ItemCategoriaList from './ItemCategoriaList'
const Articulos = [
  {cat: 1, nombre: 'Logitech G213', disponible: 5, precio: 100, id:'210', detail: "El teclado G213 para juegos está dotado de teclas Logitech G Mech-Dome ajustadas especialmente para ofrecer una respuesta táctil superior y un perfil de desempeño global similar al de un teclado mecánico. Las teclas Mech-Dome tienen una altura estándar, ofrecen un recorrido total de 4 mm, una fuerza de actuación de 50 g y un funcionamiento silencioso.", img:"http://localhost:3000/assets/img/g213.webp"},
  {cat: 2, nombre: 'Logitech G502', disponible: 3, precio: 100, id:'220', detail: "G502 HERO dispone de un sensor óptico avanzado para máxima precisión de seguimiento, iluminación RGB personalizada, perfiles de juego personalizados, de 200 a 25.600 dpi y pesas reposicionables.", img:"http://localhost:3000/assets/img/g502.png"},
]

const Container = () => {

  const [divShow, divShowSet] = useState('block')
  const [artSet, setArt] = useState([])

    useEffect( () => { const timer1 = setTimeout(() => {

        const Load = new Promise((resolve) => {
          resolve(Articulos);
        });
        
        Load.then( returns => { setArt(returns) }).then(
          divShowSet('none')
        );
      
      } , 3000);

      return () => { clearTimeout(timer1); };
    }, [] );


    return (
        <div className="album py-5 bg-light">
            <div style={{display: `${ divShow }`}} ><div className="loader">Loading...</div></div>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <ItemCategoriaList elementos={artSet} />
                </div>
            </div>
        </div>
    )
}
export default Container