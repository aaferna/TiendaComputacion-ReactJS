import React, { useEffect, useState, useContext } from 'react'
import CartState from '../../Contextos/CartContextInit';
import { Link } from "react-router-dom";

const Carting = () => {
    const { getCache } = useContext(CartState);

    let r = getCache()
    return (

        <div>
             <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Tu lista de Compras</h1>
              </div>
            </div>
          </section>
          
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row" style={{display: `${ r.length === 0 ? 'none' : 'block' }`}}  >
                        <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Articulo</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                            {r.map((s) => (
                               
                                <tr>
                                    <td>{s.id}</td>
                                    <td>
                                        <Link to={`/articulo/${s.id}`} className="nav-link active" aria-current="page">
                                            {s.name}
                                        </Link>
                                    </td>
                                    <td>{s.cant}</td>
                                    <td>${s.cant * s.precio}</td>
                                </tr>
                            ))}
                                
                                
                            </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row" style={{display: `${ r.length === 0 ? 'block' : 'none' }`}}>
                        <h4 className="fw-light">Tu lista se encuentra vacia</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carting
