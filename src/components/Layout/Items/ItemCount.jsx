import React, {useState} from 'react'

const ItemCount = (articulo) => {
    const [cant, setCant] = useState(0);
    const onAdd = cant => {
        if (cant > 0){
            alert('Articulo agregado al Carrito')
        } 
    }
    return (

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
            <button className="btn btn-outline-secondary" type="button" id="button-addon2"
            onClick={
                () => {
                    
                    if (cant > 0){
                        onAdd(cant)
                    } else {
                        alert('Seleccione la cantidad que desee')
                    }
                }
            }
            >Sumar</button>

        </div>
        
    )
}

export default ItemCount


