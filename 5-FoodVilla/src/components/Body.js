import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import SkelitonUi from '../skeliton/SkelitonUi';
import { Link } from "react-router-dom";
import { filterData } from "../utils/restrauntFilter";
import useBody from "../hooks/useBody";
import useOnline from "../hooks/useOnline";

// Body component
const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const { allRestraunts, filterRestraunts, setFilterRestraunt, loading, error } = useBody();
    
    // Check if the user is online or offline
    const isOnline = useOnline();

    // If offline, show the offline message
    if (!isOnline) {
        return <div className="offline">No internet connection. Please check your internet connection and try again.</div>;
    }

    // If still loading, show the skeleton UI
    if (loading) {
        return <SkelitonUi />;
    }

    // If there was an error, display the error message
    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="body">
            <div className="search-container">
                {/* Search input */}
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                {/* Search Button */}
                <button
                    className="search-btn"
                    onClick={() => {
                        const data = filterData(searchInput, allRestraunts);
                        setFilterRestraunt(data);
                    }}
                >
                    Search
                </button>
            </div>

            {/* Show all restaurant cards */}
            <div className="restraunt-list">
                {filterRestraunts.length > 0 ? (
                    filterRestraunts.map((restraunt) => (
                        <Link to={"/restraunt/" + restraunt.info.id} key={restraunt.info.id}>
                            <RestrauntCard {...restraunt.info} />
                        </Link>
                    ))
                ) : (
                    <div>No restaurants found.</div>
                )}
            </div>
        </div>
    );
};

export default Body;
