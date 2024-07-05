// Home.jsx

import React from 'react';

function Home({ pictures, cartItems, setCartItems }) {
  const addToCart = (picture) => {
    setCartItems((prevCartItems) => [...prevCartItems, picture]);
  };

  const removeFromCart = (pictureId) => {
    setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== pictureId));
  };

  // Check if a picture is already in cart
  const isInCart = (pictureId) => {
    return cartItems.some(item => item.id === pictureId);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {pictures.map((picture) => (
        <div key={picture.id} className="border p-4">
          <img src={picture.url} alt={picture.title} className="mb-2" />
          <p className="font-bold">{picture.title}</p>
          <p>${picture.price}</p>
          {isInCart(picture.id) ? (
            <button
              onClick={() => removeFromCart(picture.id)}
              className="bg-red-500 text-white py-1 px-4 mt-2 rounded"
            >
              Remove from Cart
            </button>
          ) : (
            <button
              onClick={() => addToCart(picture)}
              className="bg-blue-500 text-white py-1 px-4 mt-2 rounded"
            >
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
