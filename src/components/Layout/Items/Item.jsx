import React from 'react'
import ItemCount from './ItemCount'
import './Item.css'

const Item = ({item}) => {
    return (
        <div className="col d-flex align-items-stretch" key={item.id}>
            <div className="card shadow-sm">
                <img src={item.img} alt="" className="card-img-topv3" width=""/>
                    <div className="card-body">
                        <p className="card-text"><strong>{item.nombre} - ${item.precio}</strong></p>
                        <div className="d-flex justify-content-between align-items-center">
                            <ItemCount cantidad={item.disponible} productID={item.id} />
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Item
