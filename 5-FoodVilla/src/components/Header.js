import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Title } from '../constant/Constant';
// Header component
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <div className="header">
            <Title />
            <div className="nav-items" >
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>

                    <Link to="/about">
                        <li>About</li>
                    </Link>

                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>

                    <Link to="/cart">
                        <li>Cart</li>
                        </Link>

                    <Link to="/instadelivery">
                        <li>
                            Insta Delivery
                        </li>
                    </Link>
                </ul>
            </div>

            {
                isLoggedIn ? (<button onClick={() => setIsLoggedIn(false)}>Login</button>
                ) : (<button onClick={() => setIsLoggedIn(true)}>Logout</button>)
            }

        </div>
    )
};

//this Called  Deafult Export
export default Header;