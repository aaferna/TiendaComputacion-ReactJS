import React from 'react'
import Item from './Item'

const ItemList = ({elementos}) => {

    return (
        elementos.map( item => 
            (
                <Item item={item}  />
            )
        )
    )
}

export default ItemList
