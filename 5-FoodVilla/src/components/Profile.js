import { useState, useEffect } from 'react';
const ProfileFunctionalComponents = (props) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        //Second API called
        // console.log("useEffect");
    })
    //Frist Render called
    // console.log("Render1");

    return (
        <div>
            <h2>Profile Functional Component</h2>
            <h3>Name:{props.name}</h3>
            <h3>Count:{count}</h3>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default ProfileFunctionalComponents;