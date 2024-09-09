import React from 'react';

const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Your Cart</h1>

        {/* Cart Items Placeholder */}
        <div className="space-y-6">
          {/* Cart Item */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/100"
                alt="Product"
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
                <p className="text-gray-600">Product description goes here.</p>
                <p className="text-lg font-semibold text-gray-900">₹Price</p>
              </div>
            </div>
            <button className="text-red-600 font-semibold">Remove</button>
          </div>

          {/* Add more cart items as needed */}
        </div>

        {/* Checkout Button */}
        <div className="mt-8 text-center">
          <button
            className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
