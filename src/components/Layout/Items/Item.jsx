import React from 'react'
import { Link } from "react-router-dom";
import ItemCount from './ItemCount'
import './Item.css'

const Item = ({item}) => {

    return (
        <div className="col d-flex align-items-stretch" key={item.id}>
            <div className="card shadow-sm">
                <img src={item.img} alt="" className="card-img-topv3" width=""/>
                    <div className="card-body">
                        <p className="card-text"><strong>{item.nombre} - ${item.precio}</strong></p>

                            <ItemCount cantidad={item.disponible} productID={item.id} />
                            <div className="col-md-12 text-center">
                                <Link to={`/articulo/${item.id}`}  className="btn btn-warning" type="button">
                                    Ver Articulo
                                </Link>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default Item
