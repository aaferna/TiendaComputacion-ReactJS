import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
const Articulos = [
  {nombre: 'Teclado', disponible: 5, precio: 100, id:'210'},
  {nombre: 'Mouse', disponible: 10, precio: 150, id:'10'},
]
const Container = () => {
  const [artSet, setArt] = useState('')
  useEffect(() => {
    const timer = setTimeout(() => {
      const Load = new Promise((resolve) => {
        resolve(Articulos);
      }).then( result => {
        result.map(
          (art, index) => ( 
            setArt(<ItemList nombre={art.nombre} disponible={art.disponible} precio={art.precio} id={art.id} key={art.id}/>)
          )
        )
      })
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
    return (
        <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                { artSet }
               </div>
            </div>
        </div>
    )
}
export default Container