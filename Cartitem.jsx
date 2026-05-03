import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const CartItem = () => {
  const { cartItems, products, addToCart, removeFromCart } = useContext(ShopContext);

  // ✅ Single correct function (remove duplicate)
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let productInfo = products.find((product) => product.id === Number(item));
        totalAmount += productInfo.new_price * cartItems[item];
      }
    }

    return totalAmount;
  };

  return (
    <div className="cartitems">
      <h1>Shopping Cart</h1>

      {products.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id} className="cartitem">
              <img src={product.image} alt="" width="80" />
              <p>{product.name}</p>
              <p>₹{product.new_price}</p>

              <div>
                <button onClick={() => removeFromCart(product.id)}>-</button>
                <span>{cartItems[product.id]}</span>
                <button onClick={() => addToCart(product.id)}>+</button>
              </div>

              <p>
                ₹{product.new_price * cartItems[product.id]}
              </p>
            </div>
          );
        }
        return null;
      })}

      {/* ✅ Correct total display */}
      <div className="cart-total">
        <h2>Total: ₹{getTotalCartAmount()}</h2>
      </div>
    </div>
  );
};

export default CartItem;
