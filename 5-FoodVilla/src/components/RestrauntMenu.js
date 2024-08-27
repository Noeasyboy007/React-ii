import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { IMG_URL } from "../Constant.js";

import MenuLoadingShimmer from './MenuLoadingShimmer';

const RestrauntMenu = () => {
    const { resId } = useParams();
    console.log(resId);

    const [restraunt, setRestraunt] = useState([])
    const [menuItems, setMenuItems] = useState([]); // State for storing menu items

    useEffect(() => {
        getRestrauntInfo()
    }, [])

    // Fetch data from API endpoint to RestrauntMenu Item or restraunt Details
    async function getRestrauntInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=10522&catalog_qa=undefined&submitAction=ENTER")

        // Set restaurant details
        const json = await data.json();
        console.log(json);
        setRestraunt(json.data.cards[2].card.card.info)

        // Extract menu items
        const items = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
        setMenuItems(items.map(item => item.card.info)); // Set menu items
    }

    return (
        <div className="menu">
            <div>
                <h1>Restraunt id: {resId}</h1>
                <h2>{restraunt.name}</h2>
                <img src={IMG_URL + restraunt.cloudinaryImageId} alt="" />
                <h3>{restraunt.city}</h3>
                <h3>{restraunt.areaName + ", " + restraunt.locality}</h3>
                <h3>{restraunt.cuisines}</h3>
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
                    <MenuLoadingShimmer />
                )}
            </div>
        </div>
    )
}

export default RestrauntMenu;