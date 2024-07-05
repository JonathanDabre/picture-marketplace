// CartPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage({ cartItems, removePurchasedPictures }) {
  const navigate = useNavigate();

  const handlePay = () => {
    removePurchasedPictures(cartItems);
    navigate('/');
  };

  // Calculate total price only if cartItems is defined and not empty
  const totalPrice = cartItems && cartItems.length > 0
    ? cartItems.reduce((total, item) => total + item.price, 0)
    : 0;

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-lg font-bold mb-2">Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <p className="font-bold mt-2">Total: ${totalPrice}</p>
          <button
            onClick={handlePay}
            className="bg-green-500 text-white py-1 px-4 mt-2 rounded"
          >
            Pay
          </button>
        </>
      ) : (
        <p>No items in cart.</p>
      )}
    </div>
  );
}

export default CartPage;
