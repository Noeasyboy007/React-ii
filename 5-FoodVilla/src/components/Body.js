import RestrauntCard from "./RestrauntCard";
import { useState } from "react"
import SkelitonUi from '../skeliton/SkelitonUi';
import { Link } from "react-router-dom";
import { filterData } from "../utils/restrauntFilter";
import useBody from "../hooks/useBody";


// Body component
const Body = () => {

    const [searchInput, setSearchInput] = useState("");
    const { allRestraunts, filterRestraunts, setFilterRestraunt } = useBody();

    return (
        
        // Conditional Rendering
        allRestraunts.length === 0) ? <SkelitonUi /> : (
        <> <div className="body">
            <div className="search-container">
                {/* For serch input */}
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }}
                />
                {/* For search Button */}
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

            {/* Show all restraunt cards */}
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