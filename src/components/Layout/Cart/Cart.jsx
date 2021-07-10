import React, { useEffect, useState, useContext } from 'react'
import CartState from '../../Contextos/CartContextInit';
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Cart = () => {
    const { cacheSize } = useContext(CartState);
    return (
        <Link to="/cart" >
            <i className="bi-cart" style={{ fontSize: 20, color: 'white' }} > {cacheSize} </i>
        </Link>
    )
}
export default Cart