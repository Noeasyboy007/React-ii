import { Outlet } from "react-router-dom";


const About = () => {
    return (
        <>

            <div>
                <h1>About page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque repudiandae sit earum vitae adipisci inventore non, nihil tempore culpa.</p>
                <Outlet />
            </div>

        </>
    )
}

export default About;