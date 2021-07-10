import React, { useState, useContext } from 'react'
import  { getFirestore } from "../../Firebase/core"
import CartState from '../../Contextos/CartContextInit';

const TerminarCompra = () => {

const { cleanCart, getCache } = useContext(CartState);

let artr = getCache()

    const hoy = new Date();
    const today = hoy.toISOString();
    const db = getFirestore()
    const items = db.collection("ventas")
    const [idCompra, idCompraSet] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()

        let total = 0
        artr.map(itm => total = total + itm.cant * itm.precio )
        
        const nItm = {

            buyer : {
                nombre: e.target.form[0].value,
                apellido: e.target.form[1].value, 
                email: e.target.form[2].value, 
                telefono: e.target.form[3].value, 

            }, 
            items: artr, 
            date: today, 
            total: total
            
        }

        items.add(nItm)
        .then(({id}) => { 

            cleanCart() 
            idCompraSet(id)

        })
        .catch( err => console.log(err))

    }


    return (
        <div>
                      
            <div className="album py-5 bg-light" style={{display: `${ artr.length === 0 ? 'none' : 'block' }`}}>
                <div className="container" style={{display: `${ idCompra === 0 ? 'block' : 'none' }`}} >
                <h1 className="fw-light" >Complete sus Datos</h1>
                    <br/>
                    <div className="row">
                        <div className="col-md-12">
                            <form className="row g-3" >
                            <div className="col-md-6">
                                <label for="inputEmail4" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="nom" />
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Apellido</label>
                                <input type="text" className="form-control" id="dispo" /> 
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="dispo" /> 
                            </div>
                            <div className="col-md-6">
                                <label for="inputPassword4" className="form-label">Telefono</label>
                                <input type="number" className="form-control" id="dispo" /> 
                            </div>
                            <div className="col-12">
                                <button type="submit" onClick={ handleSubmit } className="btn btn-primary">Guardar</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="container" style={{display: `${ idCompra !== 0 ? 'block' : 'none' }`}}>
                    <div className="row"  >
                        <h2 className="fw-light">
                           <center>
                           Gracias por su Compra!
                            <br/><br/>
                            Su numero de orden es <br/> <strong>{ idCompra }</strong>
                           </center>
                        </h2>
                    </div>
                </div>
            </div>
            <div style={{display: `${ artr.length === 0 ? 'block' : 'none' }`}}>
                <div className="container" >
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">No hay elementos para terminar su compra</h1>
                    </div>
                    </div>
                </section>
                </div>
            </div>
   
        </div>
    )
}

export default TerminarCompra
