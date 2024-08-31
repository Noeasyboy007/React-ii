import React from "react"

class ProfileClassComponents extends React.Component {
    constructor(props) {
        super(props);
        //create State
        this.state = {
            count: 1,
        };
    };
    render() {
        return (
            <div>
                <h1>Profile classs Component</h1>
                <h2>Name: {this.props.name}</h2>
                <h2>Count:{this.state.count}</h2>
            </div>
        )
    }
}

export default ProfileClassComponents;