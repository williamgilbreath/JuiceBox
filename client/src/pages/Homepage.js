import React from 'react';
import Navbar from "../components/Navbar";
import HomeBody from "../components/HomeBody";

const Homepage = ({ cart, setCart }) => {
    return(
        <>
            <Navbar
                cart={cart}
                setCart={setCart}
            />
            <HomeBody />
        </>
    )
}

export default Homepage;
