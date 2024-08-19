// Title Component
//This called named export
export const Title = () => (
    <a href="/">
        <img className="logo" src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="Not found"
        />
    </a>
);

// Header component
const Header = () => {
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
        </div>
    )
};

//this Called  Deafult Export
export default Header;