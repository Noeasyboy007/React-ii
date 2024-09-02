import { useState, useEffect } from "react"
import { FETCH_RESTRAUNT_URL } from "../constant/Constant";


const useBody = () => {
    const [allRestraunts, setAllRestraunt] = useState([]); // original list
    const [filterRestraunts, setFilterRestraunt] = useState([]); // original list


    //Get Data from API call
    useEffect(() => {
        getRestaurants();
    }, [])

    // Fetch data from API (Function)
    async function getRestaurants() {
        const data = await fetch(FETCH_RESTRAUNT_URL)
        const json = await data.json();
        console.log(json);
        setAllRestraunt(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestraunt(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
    // not reder component (Early return)
    if (!allRestraunts) return null;

    return { allRestraunts, filterRestraunts, setFilterRestraunt }

}

export default useBody;