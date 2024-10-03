import { useState, useEffect } from "react"
import { FETCH_RESTRAUNT_URL } from "../constant/Constant";



const useBody = () => {
    const [allRestraunts, setAllRestraunt] = useState([]); // original list
    const [filterRestraunts, setFilterRestraunt] = useState([]); // original list
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    

    // Fetch data from API (Function)
    async function getRestaurants() {
        try {
            const data = await fetch(FETCH_RESTRAUNT_URL);
            const json = await data.json();
            setAllRestraunt(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
            setFilterRestraunt(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch restaurants Check your internet connection");
            setLoading(false);
        }

    }

    //Get Data from API call
    useEffect(() => {
        getRestaurants();
    }, [])


    // not reder component (Early return)
    // if (!allRestraunts) return null;

    return { allRestraunts, filterRestraunts, setFilterRestraunt, loading, error }

}

export default useBody;