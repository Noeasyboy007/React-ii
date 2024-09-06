import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import SkelitonUi from '../skeliton/SkelitonUi';
import { Link } from "react-router-dom";
import { filterData } from "../utils/restrauntFilter";
import useBody from "../hooks/useBody";
import useOnline from "../hooks/useOnline";
import DtataFetchError from "../utils/DataFetchError";

// Body component
const Body = () => {
    const [searchInput, setSearchInput] = useState("");
    const { allRestraunts, filterRestraunts, setFilterRestraunt, loading, error } = useBody();

    // Check if the user is online or offline
    const isOnline = useOnline();

    // If offline, show the offline message
    if (!isOnline) {
        return <DtataFetchError />
    }

    // If still loading, show the skeleton UI
    if (loading) {
        return <SkelitonUi />;
    }

    // If there was an error, display the error message
    // if (error) {
    //     return <div className="error-message">{error}</div>;
    // }

    return (
        <div className="p-4 bg-gray-100 min-h-screen font-custom">
            <div className="search-container flex items-center justify-center mb-6">
                {/* Search input */}
                <input
                    type="text"
                    className="search-input border border-gray-300 rounded-lg p-2 w-full md:w-1/3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                {/* Search Button */}
                <button
                    className="search-btn ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    onClick={() => {
                        const data = filterData(searchInput, allRestraunts);
                        setFilterRestraunt(data);
                    }}
                >
                    Search
                </button>
            </div>

            {/* Show all restaurant cards */}
            <div className="restraunt-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                {filterRestraunts.map((restraunt) => (
                    <Link to={`/restraunt/${restraunt.info.id}`} key={restraunt.info.id}>
                        <RestrauntCard {...restraunt.info} />
                    </Link>
                ))}
            </div>
            {/* If there are no restaurants, display the DataFetchError component outside the map */}
            {filterRestraunts.length === 0 && <DtataFetchError />}
        </div>
    );
};

export default Body;
