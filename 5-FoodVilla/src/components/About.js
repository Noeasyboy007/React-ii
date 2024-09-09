// import { Outlet } from "react-router-dom";
// import ProfileClassComponents from "./ProfileClass";
// import { Component } from "react";


const About = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">About Us</h1>
          <p className="text-gray-700 text-lg mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque
            repudiandae sit earum vitae adipisci inventore non, nihil tempore
            culpa. We are dedicated to providing the best service and making sure
            our customers are satisfied with everything we do.
          </p>
  
          {/* Fun fact or quote section */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-inner mb-6">
            <p className="text-blue-700 font-semibold italic">
              "Delivering happiness, one package at a time!"
            </p>
          </div>
  
          {/* Button for interaction */}
          <button className="bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    );
  };
  
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
