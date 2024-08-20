import { restrauntList } from "./config";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react"


// Body component
const Body = () => {
    const [searchInput, setSearchInput] = useState()
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
                <button className="search-btn">Search</button>
            </div>
            <div className="restraunt-list">
                {
                    restrauntList.map((restraunt) => {
                        return <RestrauntCard {...restraunt.info} key={restraunt.info.id} />
                    })
                }

            </div>
        </>
    )
};

export default Body;