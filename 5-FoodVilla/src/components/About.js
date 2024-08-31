// import { Outlet } from "react-router-dom";
import ProfileClassComponents from "./ProfileClass";
import ProfileFunctionalComponents from './Profile';
import { Component } from "react";


// const About2 = () => {
//     return (
//         <>

//             <div>
//                 <h1>About page</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque repudiandae sit earum vitae adipisci inventore non, nihil tempore culpa.</p>
//                 {/* <Outlet /> */}
//                 <ProfileClassComponents name={"Aritra"} />
//                 <ProfileFunctionalComponents name={"Aritra"} />

//             </div>

//         </>
//     )
// }


class About extends Component {
    constructor(props) {
        super(props);
        //Constructor called frist
        console.log("parent-constructor called");

    }
    async componentDidMount() {
        //Called after render
        const data = await fetch("https://api.github.com/users/Noeasyboy007")
        console.log("parent-ComponentDidMount");

    }
    render() {
        // Second render called
        console.log("parent-render");
        return (
            <div>
                <h1>About page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque repudiandae sit earum vitae adipisci inventore non, nihil tempore culpa.</p>
                {/* <Outlet /> */}
                <ProfileClassComponents name={"Frist Child"} xyz="abc" />
                <ProfileClassComponents name={"Second Child"} yxz="abc" />
                {/* <ProfileFunctionalComponents name={"Aritra"} /> */}

            </div>
        )

    }
}

export default About;