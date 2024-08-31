import React from "react"

class ProfileClassComponents extends React.Component {
    render() {
        return (
            <div>
                <h1>Profile classs Component</h1>
                <h2>Name: {this.props.name}</h2>
            </div>
        )
    }
}

export default ProfileClassComponents;