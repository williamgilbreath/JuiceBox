import React from 'react'
import SingleJuiceBody from "../components/SingleJuiceBody";
import Navbar from "../components/Navbar";
import CartPage from "./CartPage";

const SingleJuicePage = ({ cart, setCart, juices, setJuices, juice, setJuice, selected, setSelected, total, setTotal }) => {
    return(
        <div>
            <Navbar
                cart={cart}
                setCart={setCart}
            />
            <SingleJuiceBody
                cart={cart}
                setCart={setCart}
                juices={juices}
                setJuices={setJuices}
                juice={juice}
                setJuice={setJuice}
                selected={selected}
                setSelected={setSelected}
                total={total}
                setTotal={setTotal}
            />
        </div>
    )
}
export default SingleJuicePage