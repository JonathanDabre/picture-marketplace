// Home.jsx

import React from 'react';

function Home({ pictures, setCartItems }) {
  const addToCart = (picture) => {
    setCartItems((prevCartItems) => [...prevCartItems, picture]);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {pictures.map((picture) => (
        <div key={picture.id} className="border p-4">
          <img src={picture.url} alt={picture.title} className="mb-2" />
          <p className="font-bold">{picture.title}</p>
          <p>${picture.price}</p>
          <button
            onClick={() => addToCart(picture)}
            className="bg-blue-500 text-white py-1 px-4 mt-2 rounded"
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
