// import { Outlet } from "react-router-dom";
import ProfileClassComponents from "./ProfileClass";
import ProfileFunctionalComponents from './Profile';

const About = () => {
    return (
        <>

            <div>
                <h1>About page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque repudiandae sit earum vitae adipisci inventore non, nihil tempore culpa.</p>
                {/* <Outlet /> */}
                <ProfileClassComponents name={"Aritra"} />
                <ProfileFunctionalComponents name={"Aritra"} />

            </div>

        </>
    )
}

export default About;