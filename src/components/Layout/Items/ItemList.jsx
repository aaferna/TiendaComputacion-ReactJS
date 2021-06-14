import React from 'react'
import ItemCount from './ItemCount'

const ItemList = (elements) => {
    return (
        
        <div className="col" key={elements.id}>
            <div className="card shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>{elements.nombre}</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">{elements.nombre}</text></svg>
            <div className="card-body">
                <p className="card-text">Valor del Producto ${elements.precio}</p>
                <div className="d-flex justify-content-between align-items-center">
                <ItemCount cantidad={elements.disponible} productID={elements.id} />
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default ItemList
