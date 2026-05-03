\import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div className="landing-page">
      {!showProductList ? (
        <div>
          <h1>Paradise Nursery</h1>
          <p>Welcome to Paradise Nursery Shopping Application</p>

          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
