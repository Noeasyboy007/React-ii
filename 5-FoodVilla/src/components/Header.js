import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../constant/Constant';
// Header component
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className="header bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 shadow-lg">
          <div className="flex justify-between items-center max-w-7xl mx-auto">
            <Title />
            <div className="nav-items ">
              <ul className="flex space-x-6 text-lg font-medium font-custom">
                <Link to="/" className="hover:text-teal-200 font-bold ">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="hover:text-teal-200 font-bold">
                  <li>About</li>
                </Link>
                <Link to="/contact" className="hover:text-teal-200 font-bold">
                  <li>Contact</li>
                </Link>
                <Link to="/cart" className="hover:text-teal-200 font-bold">
                  <li>Cart</li>
                </Link>
                <Link to="/instadelivery" className="hover:text-teal-200 font-bold">
                  <li>Insta Delivery</li>
                </Link>
              </ul>
            </div>
            <div className="font-custom">
              {isLoggedIn ? (
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      );
};

//this Called  Deafult Export
export default Header;