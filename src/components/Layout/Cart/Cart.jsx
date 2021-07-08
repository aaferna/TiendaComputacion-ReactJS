import React from 'react'
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Cart = () => {
    return (
        <Link to="/cart" >
            <i className="bi-cart" style={{ fontSize: 20, color: 'white' }} ></i>
        </Link>
    )
}
export default Cart