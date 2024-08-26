import { useState } from 'react';

// const LoggedInUser = () => {
//     //API call to authenticated user
//     return false;
// }

export const Title = () => (
    <a href="/">
        {/* <img className="logo" src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="Not found"
        /> */}
        <img className="logo" src="https://blog.indifi.com/wp-content/uploads/2019/12/Cloud-Kitchen-500x292.jpg" alt="Not found"
        />
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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