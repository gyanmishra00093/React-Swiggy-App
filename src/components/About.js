import React from "react";
//import {Outlet} from "react-router-dom";
//import ProfileFunctionalComponent from "./profile";
import Profile from "./ProfileClass";
import {Component} from "react";

// const About1=()=>{
//     return (
//         <div className="about">

//             <h1>About Us</h1>
//             <p>
//                 This is the new path finding method
//             </p>
//             <ProfileFunctionalComponent name={"gyan"}/>
//             <Profile nameClass={"gyanmishra"}/>
//         </div>
//     );
// };
//ABove one is functional component 
//Below one classBased Component

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent-constructor")
    }
    componentDidMount(){
        console.log("parent-componentdidmount")
    }
    
    render(){
        console.log("Parent-render")
        return (
            <div className="about">
                <h1>About Us</h1>
                <p>
                    This is the new path finding method
                </p>
                {/* <ProfileFunctionalComponent name={"gyan"}/> */}
                <Profile nameClass={"first child"}/>
            </div>
        );
    };
};

export default About;


