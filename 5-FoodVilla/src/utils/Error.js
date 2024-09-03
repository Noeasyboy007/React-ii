// import { useRouteError } from "react-router-dom";

// const Error = () => {
//     const error = useRouteError();
//     console.log(error);

//     return (
//         <div class="center-content">
//             <img src="https://t4.ftcdn.net/jpg/07/37/95/47/240_F_737954715_7wek807lTvpbPaiZuD310uTSO5Rs5qme.jpg" alt="Opps Something Went Wrong" />
//             <h1>Something Went Wrong</h1>
//             {/* <h2>{error.status + " : " + error.statusText}</h2> */}
//             <h2>Sorry Restraunt is not available at this moment</h2>
//         </div>

//     )
// }

// export default Error;

import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="grid place-items-center">
            <img src="https://t4.ftcdn.net/jpg/07/37/95/47/240_F_737954715_7wek807lTvpbPaiZuD310uTSO5Rs5qme.jpg" alt="Oops, Something Went Wrong" className="mb-4 p-8 shadow-lg" />
            <h1 className="text-center font-bold text-3xl font-custom text-red-700">Something Went Wrong</h1>
            {/* <h2>{error.status + " : " + error.statusText}</h2> */}
            <h2 className="text-center font-bold font-custom p-8 text-xl text-gray-600 ">Sorry, the restaurant is not available at this moment</h2>
        </div>
    );
}

export default Error;
