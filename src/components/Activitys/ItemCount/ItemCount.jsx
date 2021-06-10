import React, {useState} from 'react'

const ItemCount = (articulo) => {
    const [cant, setCant] = useState(0);
    console.log(articulo)
    return (
        <div>
            <button type="button" onClick={
                () => {
                    if (cant == 0){} else {
                        setCant(cant - 1)
                    }
                }
            }>-</button>
            <input
                readOnly
                type='number'
                name={articulo.productID}
                value={cant}
            ></input>
            <button type="button" onClick={
                () => {
                    if (articulo.cantidad == cant){} else {
                        setCant(cant + 1)
                    }
                }
            }>+</button>
        </div>
    )
}

export default ItemCount


