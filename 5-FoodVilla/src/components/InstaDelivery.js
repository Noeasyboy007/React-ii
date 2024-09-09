import { useState } from 'react';

const Section = ({ title, descriptions }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md mb-6">
            <h1 className="text-3xl font-bold text-blue-700 mb-4">{title}</h1>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
                onClick={() => setIsVisible(!isVisible)}
            >
                {isVisible ? 'Hide' : 'Show'}
            </button>
            {isVisible && <h2 className="text-lg text-gray-700 mt-4">{descriptions}</h2>}
        </div>
    );
};

const InstaDelivery = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <Section
                title={"About Insta Delivery"}
                descriptions={
                    "Insta Delivery is a feature or service that typically refers to fast, on-demand delivery of goods or food items. The concept revolves around providing customers with ultra-quick delivery, often within minutes or a very short time frame, compared to standard delivery services. It could be used by restaurants, grocery stores, or other businesses to fulfill orders instantly, catering to users who prioritize speed and convenience. In your context, Insta Delivery might refer to a service or menu option in your application that emphasizes quick delivery of items. You could enhance this section by focusing on the efficiency and speed of the service, highlighting key benefits for users who need their orders fulfilled promptly."
                }
            />
            <Section
                title={"Our Team"}
                descriptions={
                    "Our team at Insta Delivery is a dynamic group of passionate professionals dedicated to revolutionizing the logistics industry. With diverse backgrounds in technology, operations, and customer service, we work together to create seamless delivery experiences. Each member brings a unique set of skills, from strategic leadership and innovative problem-solving to hands-on expertise in the field. Our commitment to excellence drives us to continuously improve our services, ensuring that every package arrives on time and every customer is satisfied. At Insta Delivery, we believe that teamwork is the key to success, and we are proud to be a part of this exciting journey."
                }
            />
            <Section
                title={"Product Details"}
                descriptions={
                    "Our products at Insta Delivery are designed with the highest standards of quality and efficiency in mind. We offer a wide range of solutions tailored to meet the varying needs of our customers, from express delivery services to specialized logistics options. Each product is built on cutting-edge technology, ensuring real-time tracking, reliable delivery times, and a user-friendly interface for easy access and management. With a focus on sustainability, we also prioritize eco-friendly packaging and transportation methods. Whether you're a small business or a large enterprise, our product line is crafted to support your delivery needs with speed, security, and precision."
                }
            />
        </div>
    );
};

export default InstaDelivery;
