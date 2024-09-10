import { useState } from 'react';

const Section = ({ title, descriptions, isVisible, onClick }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md mb-6">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">{title}</h1>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
                onClick={onClick}
            >
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <h2 className="text-lg text-gray-700 mt-4">{descriptions}</h2>}
        </div>
    );
};

const InstaDelivery = () => {
    const [visibleSection, setVisibleSection] = useState(""); // Keeps track of the visible section

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <Section
                title={"About Insta Delivery"}
                descriptions={
                    "Insta Delivery is a feature or service that typically refers to fast, on-demand delivery of goods or food items. The concept revolves around providing customers with ultra-quick delivery, often within minutes or a very short time frame, compared to standard delivery services. It could be used by restaurants, grocery stores, or other businesses to fulfill orders instantly, catering to users who prioritize speed and convenience."
                }
                isVisible={visibleSection === 'about'} // Show if the section is 'about'
                onClick={() => setVisibleSection(visibleSection === 'about' ? '' : 'about')} // Toggle visibility
            />
            <Section
                title={"Our Team"}
                descriptions={
                    "Our team at Insta Delivery is a dynamic group of passionate professionals dedicated to revolutionizing the logistics industry. With diverse backgrounds in technology, operations, and customer service, we work together to create seamless delivery experiences."
                }
                isVisible={visibleSection === 'team'} // Show if the section is 'team'
                onClick={() => setVisibleSection(visibleSection === 'team' ? '' : 'team')} // Toggle visibility
            />
            <Section
                title={"Product Details"}
                descriptions={
                    "Our products at Insta Delivery are designed with the highest standards of quality and efficiency in mind. We offer a wide range of solutions tailored to meet the varying needs of our customers, from express delivery services to specialized logistics options."
                }
                isVisible={visibleSection === 'product'} // Show if the section is 'product'
                onClick={() => setVisibleSection(visibleSection === 'product' ? '' : 'product')} // Toggle visibility
            />
        </div>
    );
};

export default InstaDelivery;
