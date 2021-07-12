import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import  { getFirestore } from "../../Firebase/core"
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const {id} = useParams();
  const [divShow, divShowSet] = useState('block')
  const [divShowart, divShowartSet] = useState('none')
  const [artSet, setArt] = useState([])
  
    useEffect(() => {
        const db = getFirestore()
        const itemCollection = db.collection("items")
        const item = itemCollection.doc(id)

        item.get()
        .then( doc => {
            if(!doc.exists) {
                return;
            }
            setArt({id: doc.id, ...doc.data()})
        })
        .catch( err => console.log(err) )
        .finally(() =>{
        divShowSet('none')
        divShowartSet('block')
        })

    }, [])

  

    return (
        <div className="album py-5 bg-light">
            <div style={{display: `${ divShow }`}} ><div className="loader">Loading...</div></div>
            <div className="container">
              <div className="row" style={{display: `${ divShowart }`}}>
                    <ItemDetail elementos={artSet} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer
