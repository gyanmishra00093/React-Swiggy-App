import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Gyan",
                location:"Maharajganj",
                bio:"S/W",
            },
        }
        console.log("child-constructor")
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/gyanmishra00093")
        const json=await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        });
        console.log("child-Componentdidmount")
    }
    render(){
        console.log("child-render")
        return(
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location:{this.state.userInfo.location}</h3>
                <h4>Bio:{this.state.userInfo.bio}</h4>
            </div>
        )

    }
}
export default Profile;