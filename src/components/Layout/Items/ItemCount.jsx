import React, {useState} from 'react'
import { Link } from "react-router-dom";

const ItemCount = (articulo) => {
    const [cant, setCant] = useState(0);
    const [divShow, divShowSet] = useState('block')
    const [divShowart, divShowartSet] = useState('none')
    const [artSelect, artSelected] = useState(0)
    const onAdd = cant => {
        if (cant > 0){
            divShowSet('none')
            divShowartSet('block')
            artSelected(cant)
            

        } 
    }
    return (
        <div>

            <div>
                <Link to="/cart" style={{display: `${ divShowart }`}} className="btn btn-warning" type="button" aria-current="page">
                    Ir al Carrito
                </Link>
                <br></br>
            </div >
        <div style={{display: `${ divShow }`}}>
            <div className="d-flex justify-content-between align-items-center" >
                <div className="input-group mb-3" key={articulo.productID}>
                <span className="input-group-text btn btn-outline-secondary" onClick={
                    () => {
                        if (cant == 0){} else {
                            setCant(cant - 1)
                        }
                    }
                }
                >-</span>
                <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" 
                name={articulo.productID}
                value={cant} readOnly/>
                <span className="input-group-text btn btn-outline-secondary"
                onClick={
                    () => {
                        if (articulo.cantidad != cant){
                            setCant(cant + 1)
                        }
                    }
                }
                >+</span>
                <button className="btn btn-success"  type="button" id="button-addon2"
                onClick={
                    () => {
                        
                        if (cant > 0){
                            onAdd(cant)
                        } else {
                            alert('Seleccione la cantidad que desee')
                        }
                    }
                }
                >Agregar al Carrito</button>
                </div>
            </div>  
            </div>
        </div>  
    )
}

export default ItemCount


