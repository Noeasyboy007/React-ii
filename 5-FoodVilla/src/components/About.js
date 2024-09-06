// import { Outlet } from "react-router-dom";
import ProfileClassComponents from "./ProfileClass";
import { Component } from "react";


const About = () => {
    return (
        <>

            <div>
                <h1>About page</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque repudiandae sit earum vitae adipisci inventore non, nihil tempore culpa.</p>
                {/* <Outlet /> */}
                {/* <ProfileClassComponents name={"Aritra"} /> */}
                

            </div>

        </>
    )
}
export default About;


// class About extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userInfo: {
//                 name: "Dummy Name",
//                 location: "Dummy Location",
                
//             }
//         }

//         //Constructor called frist
//         console.log("parent-constructor called");

//     }
//     componentDidMount() {
//         //Called after render
//         console.log("parent-ComponentDidMount");

//     }
//     render() {
//         // Second render called
//         console.log("parent-render");
//         return (
//             <div>
//                 <h1>About page</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque repudiandae sit earum vitae adipisci inventore non, nihil tempore culpa.</p>
//                 {/* <Outlet /> */}
//                 <ProfileClassComponents name={"Frist Child"} xyz="abc" />
//                 {/* <ProfileClassComponents name={"Second Child"} yxz="abc" /> */}
//                 {/* <ProfileFunctionalComponents name={"Aritra"} /> */}

//             </div>
//         )

//     }
// }
