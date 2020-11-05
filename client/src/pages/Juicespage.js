import React from 'react'
import JuiceBody from "../components/JuiceBody";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import CartPage from "./CartPage";
import SingleJuiceBody from "../components/SingleJuiceBody";

const Juicespage = ({ cart, setCart, juices, setJuices, juice, setJuice, total, setTotal, selected, setSelected }) => {
    return(
        <div>
            <Navbar
                cart={cart}
                setCart={setCart}
            />
            <JuiceBody
                cart={cart}
                setCart={setCart}
                juices={juices}
                setJuices={setJuices}
                juice={juice}
                setJuice={setJuice}
                total={total}
                setTotal={setTotal}
                selected={selected}
                setSelected={setSelected}
            />
        </div>
    )
}
export default Juicespage