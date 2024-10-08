import { useState, useEffect } from 'react';
import { FETCH_MENUURL } from '../constant/Constant';

const useRestraunt = (resId) => {
    const [restraunt, setRestraunt] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error handling

    // get data form API
    useEffect(() => {
        getRestrauntInfo();
    }, [resId]);

    // Fetch data from API endpoint to RestrauntMenu Item or restraunt Details
    async function getRestrauntInfo() {
        try {
            const response = await fetch(FETCH_MENUURL + resId);

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

    // Return state variables
    return { restraunt, menuItems, loading, error };
}

export default useRestraunt;