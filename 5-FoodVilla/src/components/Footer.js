// // Footer component
// const Footer = () => {
//     return (
//       <h4>Footer</h4>
//     )
//   };

//   export default Footer;


import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Food Hub</h2>
                    <p>Your go-to app for discovering the best restaurants and cafes near you.</p>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: aritrabera@foodhub.com</p>
                    <p>Phone: +123-456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 aritra bera (Food Hub). All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
