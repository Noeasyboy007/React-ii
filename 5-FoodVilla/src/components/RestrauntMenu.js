import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { IMG_URL } from "../Constant.js";
import MenuLoadingShimmer from './MenuLoadingShimmer';

const RestrauntMenu = () => {
    const { resId } = useParams(); // Extract resId from URL
    console.log("Restaurant ID:", resId);

    const [restraunt, setRestraunt] = useState(null);
    const [menuItems, setMenuItems] = useState([]); // State for storing menu items
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        getRestrauntInfo();
    }, [resId]);

    // Fetch data from API endpoint to RestrauntMenu Item or restraunt Details
    async function getRestrauntInfo() {
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);

            if (!response.ok) {
                throw new Error("Failed to fetch restaurant data");
            }

            const json = await response.json();
            console.log(json);

            const restaurantInfo = json?.data?.cards[2]?.card?.card?.info;
            const items = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(item => item.card.info);

            if (!restaurantInfo || !items) {
                throw new Error("Invalid restaurant ID or data not available");
            }

            setRestraunt(restaurantInfo);
            setMenuItems(items);
        } catch (err) {
            setError(err.message); // Set error message
            console.log(err.message);
            
        } finally {
            setLoading(false); // Always set loading to false when request is complete
        }
    }

    if (loading) {
        return <MenuLoadingShimmer />; // Show loading shimmer while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>; // Show error message if any error occurs
    }

    return (
        <div className="menu">
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
