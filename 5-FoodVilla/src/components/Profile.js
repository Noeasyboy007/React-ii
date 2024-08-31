import { useState } from 'react';

const ProfileFunctionalComponents = (props) => {
    const [count]=useState(0);
    return (
        <div>
            <h2>Profile Functional Component</h2>
            <h3>Name:{props.name}</h3>
            <h3>Count:{count}</h3>
        </div>
    )
}

export default ProfileFunctionalComponents;