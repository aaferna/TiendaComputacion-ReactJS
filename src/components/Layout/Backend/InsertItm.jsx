import React, { useEffect, useState } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import  { getFirestore } from "../../Firebase/core"



const Carting = () => {

    const db = getFirestore()
    const items = db.collection("items")

    const handleSubmit = (e) => {
        e.preventDefault()
        const nItm = {

            nombre: e.target.form[0].value,
            disponible: e.target.form[1].value,
            img: e.target.form[2].value,
            detail: e.target.form[3].value,
            precio: e.target.form[4].value,
            cat: e.target.form[5].value
            
        }
        let r = items.add(nItm)
        console.log(r)
        return r
       

        


    }
   
    return (

        <div>
             <section className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Insertador de Articulos</h1>
              </div>
            </div>
          </section>
          
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row"   >
                        <div className="col-md-12">
                            <form className="row g-3" >
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nom" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Disponible</label>
                                <input type="number" className="form-control" id="dispo" /> 
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Imagen URL</label>
                                <input type="text" className="form-control" id="img"  />
                            </div>
                            <div className="col-12">
                                <label for="inputAddress" className="form-label">Detalle</label>
                                <input type="text" className="form-control" id="detail" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputCity" className="form-label">Precio</label>
                                <input type="text" className="form-control" id="price" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputState" className="form-label">Categoria</label>
                                <select id="selectcat" className="form-select" >
                                <option value="1">Teclados</option>
                                <option value="2">Mouse</option>
                                </select>
                            </div>
                           
                           
                            <div className="col-12">
                                <button type="submit" onClick={ handleSubmit } className="btn btn-primary">Guardar</button>
                            </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </div>
       
        </div>
    )
}


export default Carting
