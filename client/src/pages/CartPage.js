import React from 'react';
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import Create from "../components/Create";
import SingleJuiceBody from "../components/SingleJuiceBody";

const CartPage = ({ cart, setCart, juices, setJuices, total, setTotal, created, setCreated }) => {
    return(
        <div>
            <Navbar
                cart={cart}
                setCart={setCart}
            />
            <Cart
                cart={cart}
                setCart={setCart}
                juices={juices}
                setJuices={setJuices}
                total={total}
                setTotal={setTotal}
                created={created}
                setCreated={setCreated}
            />
        </div>
    )
}
export default CartPage;