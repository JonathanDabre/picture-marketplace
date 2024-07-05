// Upload.jsx

import React, { useState } from 'react';

function Upload({ addPicture }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPicture = {
      id: Math.random(),
      title,
      url,
      price: parseFloat(price),
    };
    addPicture(newPicture);
    setTitle('');
    setUrl('');
    setPrice('');
  };

  return (
    <div className="max-w-md mx-auto mt-8 h-[100vh]">
      <h2 className="text-lg font-bold mb-2">Upload Picture</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-1 px-4 mt-2 rounded"
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default Upload;
