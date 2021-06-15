
import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
const Articulos = [
  {nombre: 'Teclado', disponible: 5, precio: 100, id:'210'},
  {nombre: 'Mouse', disponible: 10, precio: 150, id:'10'},
]
const Container = () => {

  const [artSet, setArt] = useState([])

    useEffect( () => { const timer1 = setTimeout(() => {

        const Load = new Promise((resolve) => {
          resolve(Articulos);
        });
        
        Load.then( returns => { setArt(returns) });
      
      } , 2000);

      return () => { clearTimeout(timer1); };
    }, [] );


    return (
        <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <ItemList elementos={artSet}/>
                </div>
            </div>
        </div>
    )
}
export default Container