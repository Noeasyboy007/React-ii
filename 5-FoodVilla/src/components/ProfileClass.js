import React from "react"

class ProfileClassComponents extends React.Component {
    constructor(props) {
        super(props);
        //create State
        this.state = {
            count: 0,

        };
        //Frist Constructor called
        console.log("child-Constructor" + this.props.name);

    };

    //Thired  componentDidmount
    componentDidMount() {
        //This place we call the API method
        console.log("child-componentDidMount" + this.props.name);

    }
    render() {
        const { count } = this.state;
        //Second Render Called
        console.log("child-Render" + this.props.name);
        return (
            <div>
                <h1>Profile classs Component</h1>
                <h2>Name: {this.props.name}</h2>
                <h2>Count:{count}</h2>
                <button onClick={() => {
                    //We do not muted state directly
                    //never do this.state=something
                    this.setState({ count: count + 1 })
                }}>Click</button>
            </div>
        )
    }
}

export default ProfileClassComponents;