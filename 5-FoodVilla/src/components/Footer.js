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
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* About Section */}
                    <div className="footer-section about w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Food Hub</h2>
                        <p className="mb-4">
                            Your go-to app for discovering the best restaurants and cafes near you.
                        </p>
                        <div className="social-icons flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    {/* Quick Links Section */}
                    <div className="footer-section links w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>
                    {/* Contact Section */}
                    <div className="footer-section contact w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p className="mb-2">Email: <a href="mailto:aritrabera@foodhub.com" className="hover:text-gray-400 transition-colors">aritrabera@foodhub.com</a></p>
                        <p className="mb-2">Phone: <a href="tel:+1234567890" className="hover:text-gray-400 transition-colors">+123-456-7890</a></p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bg-gray-700 py-4 text-center">
                <p className="text-sm">&copy; 2024 Aritra Bera (Food Hub). All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
