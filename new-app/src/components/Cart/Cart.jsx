import React, { useState } from "react";

export default function Cart({ cartList = [], setCartList }) {
  const [quantities, setQuantities] = useState(
    cartList.reduce((acc, item, index) => {
      acc[index] = 1;
      return acc;
    }, {})
  );


  // Quantity update handler
  const handleQuantityChange = (index, newQty) => {
    if (newQty < 1) return;
    setQuantities((prev) => ({ ...prev, [index]: newQty }));
  };

  // Remove item from cart
  const handleRemove = (index) => {
    setCartList((prev) => prev.filter((_, i) => i !== index));
  };

  // Total price calculation
  const totalPrice = cartList.reduce(
    (sum, item, index) => sum + item.price * (quantities[index] || 1),
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Your Cart</h2>

      {cartList.length === 0 ? (
        <h4 className="text-muted">Your cart is empty</h4>
      ) : (
        <>
          <div className="list-group">
            {cartList.map((item, index) => (
              <div
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                        marginRight: "15px",
                      }}
                    />
                  )}
                  <div>
                    <h5>{item.title}</h5>
                    <p className="mb-1 text-muted">Price: ${item.price}</p>
                    <p className="mb-1">Category: {item.category}</p>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() =>
                      handleQuantityChange(index, (quantities[index] || 1) - 1)
                    }
                  >
                    -
                  </button>
                  <span>{quantities[index] || 1}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary ms-2"
                    onClick={() =>
                      handleQuantityChange(index, (quantities[index] || 1) + 1)
                    }
                  >
                    +
                  </button>

                  <button
                    className="btn btn-sm btn-danger ms-3"
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-4 text-end">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
            <button className="btn btn-success mt-2">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
