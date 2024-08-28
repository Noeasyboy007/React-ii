// import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";

const About = () => {
    return (
        <>

            <div>
                <h1>About page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque repudiandae sit earum vitae adipisci inventore non, nihil tempore culpa.</p>
                {/* <Outlet /> */}
                <Profile />
            </div>

        </>
    )
}

export default About;