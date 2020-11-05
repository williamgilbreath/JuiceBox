import React, { useState, useEffect } from 'react';
import './App.css';
import { Router } from "@reach/router";
import axios from "axios";
import Homepage from "./pages/Homepage";
import Juicespage from "./pages/Juicespage";
import CartPage from "./pages/CartPage";
import SingleJuicePage from "./pages/SingleJuicePage";
import CreatePage from "./pages/CreatePage";

function App() {
    const [cart, setCart] = useState([]);
    const [juices, setJuices] = useState([]);
    const [juice, setJuice] = useState("");
    const [total, setTotal] = useState([]);
    const [selected, setSelected] = useState("");
    const [created, setCreated] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/juices")
            .then((res) => setJuices(res.data))
            .catch((err) => console.log(err))
    }, [])

  return (
    <div className="App">
        <Router>
          <Homepage
              cart={cart}
              setCart={setCart}
              default
          />
          <Juicespage
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
              path="/juices"
          />
          <SingleJuicePage
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
              path="/juices/:id"
          />
          <CartPage
              cart={cart}
              setCart={setCart}
              juices={juices}
              setJuices={setJuices}
              total={total}
              setTotal={setTotal}
              created={created}
              setCreated={setCreated}
              path="/cart"
          />
          <CreatePage
              cart={cart}
              setCart={setCart}
              created={created}
              setCreated={setCreated}
              path="/create"
          />
        </Router>
    </div>
  );
}

export default App;
