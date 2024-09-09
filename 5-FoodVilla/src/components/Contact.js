import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolorum. If you have any questions, feel free to reach out to us!
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-left font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-left font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-left font-semibold text-gray-700">Message</label>
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
