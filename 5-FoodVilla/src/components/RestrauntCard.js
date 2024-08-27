import { restrauntList, IMG_URL } from "../Constant"

restrauntList

//Restraunt Card 
const RestrauntCard = ({ cloudinaryImageId, name, cuisines, areaName, costForTwo }) => {
    // const {}=restraunt.info
    return (
        <div className="card">
            <img src={IMG_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{areaName}</h4>
            <h4>{ }</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestrauntCard;

