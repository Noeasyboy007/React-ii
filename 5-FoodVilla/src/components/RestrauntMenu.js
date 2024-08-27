import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { IMG_URL } from "../Constant.js";
const RestrauntMenu = () => {
    const params = useParams();
    console.log(params);

    const [restraunt, setRestraunt] = useState([])

    useEffect(() => {
        getRestrauntInfo()
    }, [])

    // Fetch data from API endpoint to RestrauntMenu Item or restraunt Details
    async function getRestrauntInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=407661&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json);
        setRestraunt(json.data.cards[2].card.card.info)
    }

    return (
        <div>
            <h1>Restraunt id:007</h1>
            <h2>{restraunt.name}</h2>
            <img src={IMG_URL + restraunt.cloudinaryImageId} alt="" />
            <h3>{restraunt.city}</h3>
            <h3>{restraunt.areaName + ", " + restraunt.locality}</h3>
            <h3>{restraunt.cuisines}</h3>
            <h3>{restraunt.avgRating+"*"}</h3>

        </div>
    )
}

export default RestrauntMenu;