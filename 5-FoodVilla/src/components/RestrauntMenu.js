import { useParams } from "react-router-dom";
import { IMG_URL } from "../Constant.js";
import useRestraunt from "../hooks/useRestraunt.js";
import MenuLoadingShimmer from './../skeliton/MenuLoadingShimmer';


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


    return (
        <div className="menu">

            {/* Restraunt name */}
            <div>
                <h1>Restaurant ID: {resId}</h1>
                <h2>{restraunt.name}</h2>
                <img src={IMG_URL + restraunt.cloudinaryImageId} alt={restraunt.name} />
                <h3>{restraunt.city}</h3>
                <h3>{restraunt.areaName + ", " + restraunt.locality}</h3>
                <h3>{restraunt.cuisines.join(", ")}</h3>
                <h3>{restraunt.avgRating + "*"}</h3>
                <h3>{restraunt.costForTwoMessage}</h3>
            </div>

            {/* Menu Items */}
            <div>
                <h2>Menu</h2>
                {menuItems.length > 0 ? (
                    <ul>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{item.price ? `₹${item.price / 100}` : "Price not available"}</p>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No menu items available</p>
                )}
            </div>
        </div>
    );
}

export default RestrauntMenu;
