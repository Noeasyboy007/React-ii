import { useParams } from "react-router-dom";
import useRestraunt from "../hooks/useRestraunt.js";
import MenuLoadingShimmer from './../skeliton/MenuLoadingShimmer';
import { IMG_URL } from "../constant/Constant.js";


const RestrauntMenu = () => {
    const { resId } = useParams(); // Extract resId from URL
    const { restraunt, menuItems, loading, error } = useRestraunt(resId); // Use the custom hook

    // Conditional Rendaring
    if (loading) {
        return <MenuLoadingShimmer />; // Show loading shimmer while fetching data
    }

    if (error) {
        return <Error message={error} />; // Show Error component if any error occurs
    }

    // Retuning JSX
    return (
        <div className="flex flex-col md:flex-row gap-6 p-4 bg-gray-100 min-h-screen font-custom">
            {/* Restaurant Details */}
            <div className="left-side-main-menu flex-1 bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold mb-2">Restaurant ID: {resId}</h1>
                <h2 className="text-3xl font-semibold mb-2 text-blue-700">{restraunt.name}</h2>
                <img
                    src={IMG_URL + restraunt.cloudinaryImageId}
                    alt={restraunt.name}
                    className="w-full h-70 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-medium mb-1">{restraunt.city}</h3>
                <h3 className="text-lg font-medium mb-1">
                    {restraunt.areaName + ", " + restraunt.locality}
                </h3>
                <h3 className="text-lg font-medium mb-1">{restraunt.cuisines.join(", ")}</h3>
                <h3 className="text-lg font-medium mb-1">{restraunt.avgRating + "*"}</h3>
                <h3 className="text-lg font-medium text-red-600">{restraunt.costForTwoMessage}</h3>
            </div>

            {/* Menu Items */}
            <div className="right-side-list-menu-item flex-1 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Menu</h2>
                {menuItems.length > 0 ? (
                    <ul className="space-y-4">
                        {menuItems.map((item) => (
                            <li key={item.id} className="flex items-start gap-4 border-b border-gray-200 pb-4">
                                <div className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                                    {/* Placeholder for menu item image */}
                                    {/* <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" /> */}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold mb-1 text-blue-500">{item.name}</h3>
                                    <p className="text-lg text-red-600 mb-1">
                                        {item.price ? `₹${item.price / 100}` : "Price not available"}
                                    </p>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-600">No menu items available</p>
                )}
            </div>
        </div>
    );
}

export default RestrauntMenu;
