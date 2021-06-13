import React from 'react'
import ItemList from './ItemList'

const Container = () => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <ItemList nombre='Teclado' disponible='5' precio='100' id='100'/>
              </div>
            </div>
        </div>
    )
}

export default Container
