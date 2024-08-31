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
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Noeasyboy007");
        const json = await data.json();
        this.setState({
            userInfo: json
        });

        //This place we call the API method
        console.log("child-componentDidMount" + this.props.name);

    }
    render() {
        console.log("child-Render" + this.props.name);
        const { userInfo } = this.state;
        return (
            <div>
                <h1>Profile Class Component</h1>
                {userInfo && (
                    <>
                        <img src={userInfo.avatar_url} alt="Profile" />
                        <h2>Name: {userInfo.name}</h2>
                        <h2>Location: {userInfo.location}</h2>
                    </>
                )}
            </div>
        );
    }
}

export default ProfileClassComponents;