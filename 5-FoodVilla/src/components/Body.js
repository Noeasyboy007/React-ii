import { restrauntList } from "./config";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react"

//filter functions
function filterData(searchInput, restraunt) {
    return restraunt.filter((restraunt) =>
        restraunt.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
}

// Body component
const Body = () => {

    const [restraunt, setRestraunt] = useState(restrauntList); // original list
    const [filteredRestaurants, setFilteredRestaurants] = useState(restrauntList); // filtered list
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        console.log("Call this when is dependencies changed");
    }, [])

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
                        const data = filterData(searchInput, restraunt);
                        //update the state 
                        setFilteredRestaurants(data);
                    }}
                >Search</button>
            </div>
            <div className="restraunt-list">
                {
                    filteredRestaurants.map((restraunt) => {
                        return <RestrauntCard {...restraunt.info} key={restraunt.info.id} />
                    })
                }

            </div>
        </>
    )
};

export default Body;