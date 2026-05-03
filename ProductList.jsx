import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

const plantsArray = [
  {
    category: "Indoor Plants",
    plants: [
      { id: 1, name: "Aloe Vera", price: 200, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Snake Plant", price: 300, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Peace Lily", price: 250, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Spider Plant", price: 180, image: "https://via.placeholder.com/150" },
      { id: 5, name: "Rubber Plant", price: 350, image: "https://via.placeholder.com/150" },
      { id: 6, name: "ZZ Plant", price: 400, image: "https://via.placeholder.com/150" }
    ]
  },
  {
    category: "Outdoor Plants",
    plants: [
      { id: 7, name: "Rose", price: 150, image: "https://via.placeholder.com/150" },
      { id: 8, name: "Tulsi", price: 100, image: "https://via.placeholder.com/150" },
      { id: 9, name: "Hibiscus", price: 200, image: "https://via.placeholder.com/150" },
      { id: 10, name: "Marigold", price: 120, image: "https://via.placeholder.com/150" },
      { id: 11, name: "Jasmine", price: 180, image: "https://via.placeholder.com/150" },
      { id: 12, name: "Bougainvillea", price: 220, image: "https://via.placeholder.com/150" }
    ]
  },
  {
    category: "Succulents",
    plants: [
      { id: 13, name: "Cactus", price: 250, image: "https://via.placeholder.com/150" },
      { id: 14, name: "Echeveria", price: 300, image: "https://via.placeholder.com/150" },
      { id: 15, name: "Jade Plant", price: 350, image: "https://via.placeholder.com/150" },
      { id: 16, name: "Haworthia", price: 280, image: "https://via.placeholder.com/150" },
      { id: 17, name: "Sedum", price: 260, image: "https://via.placeholder.com/150" },
      { id: 18, name: "Agave", price: 320, image: "https://via.placeholder.com/150" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Our Plants</h2>

      {plantsArray.map((category, index) => (
        <div key={index}>
          <h3>{category.category}</h3>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {category.plants.map((plant) => (
              <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
                <img src={plant.image} alt={plant.name} width="120" />
                <h4>{plant.name}</h4>
                <p>₹{plant.price}</p>

                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
