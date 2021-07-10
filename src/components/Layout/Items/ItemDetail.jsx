import React from 'react'
import ItemCount from './ItemCount'
import './ItemDetail.css'
const ItemDetail = ({elementos}) => {
    
    return (
        <div key={elementos.id}>
            <div className="container">
              <div className="row ">
                    <div className="col" >
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <p className="card-text"><strong>{elementos.nombre}</strong></p>
                            </div>
                            <img src={elementos.img} alt="" className="card-img-topv2" width=""/>
                            <div className="card-body">
                                
                                    <ItemCount cantidad={elementos.disponible} nombre={elementos.nombre} productID={elementos.id} costo={elementos.precio} />
                                
                            </div>
                            <div className="card-body">
                                <p className="card-text"><strong>Precio</strong>: ${elementos.precio} | <strong>Stock Disponible</strong>: {elementos.disponible} | <strong>Codigo</strong>: {elementos.id} </p>
                                <p className="card-text"><strong>Descripcion del Articulo</strong> <br></br><br></br>
                                    {elementos.detail}
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default ItemDetail
