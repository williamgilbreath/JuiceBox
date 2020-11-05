import React from 'react'
import Create from "../components/Create";
import Navbar from "../components/Navbar";
import SingleJuiceBody from "../components/SingleJuiceBody";

const CreatePage = ({ cart, setCart, created, setCreated }) => {
    return(
        <div>
            <Navbar
                cart={cart}
                setCart={setCart}
            />
            <Create
                cart={cart}
                setCart={setCart}
                created={created}
                setCreated={setCreated}
            />
        </div>
    )
}
export default CreatePage