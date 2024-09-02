import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react"
import SkelitonUi from '../skeliton/SkelitonUi';
import { Link } from "react-router-dom";
import { filterData } from "../utils/restrauntFilter";
import { FETCH_RESTRAUNT_URL } from "../constant/Constant";

// Body component
const Body = () => {

    const [allRestraunts, setAllRestraunt] = useState([]); // original list
    const [filterRestraunts, setFilterRestraunt] = useState([]); // original list
    const [searchInput, setSearchInput] = useState("");

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

    // Conditional Rendering
    return (

        allRestraunts.length === 0) ? <SkelitonUi /> : (
        <> <div className="body">

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
                {Array.isArray(filterRestraunts) && filterRestraunts.length > 0 && (
                    filterRestraunts.map((restraunt) => (
                        <Link to={"/restraunt/" + restraunt.info.id} key={restraunt.info.id}>
                            <RestrauntCard {...restraunt.info} />
                        </Link>
                    ))
                )}
            </div>

        </div>
        </>
    )
};

export default Body;