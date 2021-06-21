import React from 'react'
import Item from './Item'
import { useParams } from 'react-router-dom'

const ItemList = ({elementos}) => {
    const {id} = useParams();
    return (
        elementos.filter(item => item.cat == id).map( item =>
            (
                <Item item={item}  />
            )
        )
    )
}

export default ItemList
