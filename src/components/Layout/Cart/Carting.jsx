import React, { useEffect, useState, useContext } from 'react'
import CartState from '../../Contextos/CartContextInit';
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import TerminarCompra from './TerminarCompra';

const Carting = () => {
    const { getCache, delItemCache, cleanCart } = useContext(CartState);
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
                                <th scope="col">Utilidad</th>
                                </tr>
                            </thead>
                            <tbody>
                            {r.map((s) => (
                               
                                <tr>
                                    <td>{s.id}</td>
                                    <td>
                                        <Link to={`/articulo/${s.id}`} aria-current="page">
                                            {s.name}
                                        </Link>
                                    </td>
                                    <td>{s.cant}</td>
                                    <td>${s.cant * s.precio}</td>
                                    <td><i className="bi-trash" style={{ fontSize: 15, color: 'black' }}  
                                    onClick={
                                        () => {
                                            delItemCache(s.id)
                                        }
                                    }></i></td>
                                </tr>
                            ))}
                                
                            </tbody>
                            </table>
                            <br/>

                            <center>
                                <button className="btn btn-danger" onClick={() => { cleanCart() } }>Vaciar Carrito</button>
                            </center>
                            <br/>
                            
                            <TerminarCompra cart={r} />
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
