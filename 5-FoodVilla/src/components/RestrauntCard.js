import { IMG_URL } from "../constant/Constant"


//Restraunt Card 
const RestrauntCard = ({ cloudinaryImageId, name, cuisines, areaName, costForTwo }) => {
    // const {}=restraunt.info
    return (
        <div className="card border border-gray-400 rounded-lg shadow-md overflow-hidden bg-white max-w-xs mx-auto hover:shadow-2xl transition-shadow duration-300 ">
            <img
                src={IMG_URL + cloudinaryImageId}
                alt={name}
                className="w-full h-full object-cover "
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-blue-700">{name}</h2>
                <h3 className="text-sm text-gray-700 mb-2">{cuisines.join(", ")}</h3>
                <h4 className="text-sm text-gray-600 mb-1">{areaName}</h4>
                <h4 className="text-sm text-red-600">{costForTwo}</h4>
            </div>
        </div>
    )
}

export default RestrauntCard;

