import { restrauntList } from "./config";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react"

//filter functions
function filterData(searchInput, restraunts) {
    return restraunts.filter((restraunt) =>
        restraunt?.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
}

// Body component
const Body = () => {

    const [restraunts, setRestraunt] = useState(restrauntList); // original list
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
        setRestraunt(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    }

    console.log("render");

    return (
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
                        const data = filterData(searchInput, restraunts);
                        //update the state 
                        setRestraunt(data);
                    }}
                >Search</button>
            </div>
            <div className="restraunt-list">
                {Array.isArray(restraunts) && restraunts.length > 0 ? (
                    restraunts.map((restraunt) => (
                        <RestrauntCard {...restraunt.info} key={restraunt.info.id} />
                    ))
                ) : (
                    <p>No restaurants found</p> // Fallback for empty or invalid data
                )}

            </div>
        </>
    )
};

export default Body;