import { useState } from 'react';
import { Link } from 'react-router-dom';

// const LoggedInUser = () => {
//     //API call to authenticated user
//     return false;
// }

export const Title = () => (
    <a href="/">
        <img className="logo" src="https://yt3.googleusercontent.com/ctdf57M4HvvCJDzxNI0P2wLWnuVQdnScOjeR3iqybh3sdrPYLxPyPiua4EgLBtySWwBCxQkK-A=s900-c-k-c0x00ffffff-no-rj" alt="Not found"
        />
        {/* <img className="logo" src="https://blog.indifi.com/wp-content/uploads/2019/12/Cloud-Kitchen-500x292.jpg" alt="Not found"
        /> */}
        {/* <img className="logo" src={logo} alt="Not found"
        /> */}
    </a>
);

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

                    <li>Cart</li>
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