import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div class="center-content">
            <img src="https://t4.ftcdn.net/jpg/07/37/95/47/240_F_737954715_7wek807lTvpbPaiZuD310uTSO5Rs5qme.jpg" alt="Opps Something Went Wrong" />
            <h1>Something Went Wrong</h1>
            <h2>{error.status + " : " + error.statusText}</h2>
        </div>

    )
}

export default Error;