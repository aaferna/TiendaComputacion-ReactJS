import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import  { getFirestore } from "../../Firebase/core"

const Container = () => {


  const [divShow, divShowSet] = useState('block')
  const [artSet, setArt] = useState([])


    useEffect( () => {
      const db = getFirestore()
      const itemCollection = db.collection("items")
  
      itemCollection.get()
      .then((querySnapshot) => {
          if(querySnapshot.size === 0){
          } else { 
            setArt(
              querySnapshot.docs.map(
                doc => {
                  
                  let data = doc.data()
                  let newObj = Object.assign(data, {  id: doc.id });
                  return newObj
                
                }
              )  
            ) 
          }
      })
      .catch( err => console.log (err))
      .finally(() => { 
        divShowSet('none') 
      })
  
    }, [] );

    return (
      
        <div className="album py-5 bg-light">
            <div style={{display: `${ divShow }`}} ><div className="loader">Loading...</div></div>
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <ItemList elementos={artSet} />
                </div>
            </div>
        </div>
    )
}
export default Container