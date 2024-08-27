import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react"
import SkelitonUi from './SkelitonUi';
import { Link } from "react-router-dom";

//filter functions
function filterData(searchInput, restraunts) {
    return restraunts.filter((restraunt) =>
        restraunt?.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
}

// Body component
const Body = () => {

    const [allRestraunts, setAllRestraunt] = useState([]); // original list
    const [filterRestraunts, setFilterRestraunt] = useState([]); // original list
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        //Get Data from API call
        getRestaurants();
        // console.log("useEffect Called");

    }, [])


    // Fetch data from API (Function)
    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json);
        setAllRestraunt(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilterRestraunt(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    console.log("render");

    // not reder component (Early return)
    if (!allRestraunts) return null;

    // Conditional Rendering
    return (allRestraunts.length === 0) ? <SkelitonUi /> : (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }}
                />

                <button
                    className="search-btn"
                    onClick={() => {
                        //Filter the data
                        const data = filterData(searchInput, allRestraunts);
                        //update the state 
                        setFilterRestraunt(data);
                    }}
                >Search</button>
            </div>
            <div className="restraunt-list">
                {Array.isArray(filterRestraunts) && filterRestraunts.length > 0 ? (
                    filterRestraunts.map((restraunt) => (
                        <Link to={"/restraunt/" + restraunt.info.id}>
                            <RestrauntCard {...restraunt.info}
                                key={restraunt.info.id} />
                        </Link>
                    ))
                ) : (
                    <p>No restaurants found</p> // Fallback for empty or invalid data
                )}

            </div>
        </>
    )
};

export default Body;