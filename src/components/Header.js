import {useState} from "react";
import logo from "../assets/img/foodvila.png";
import {Link} from "react-router-dom";

const Title = () =>(
    <Link to="/">
    <img 
    className="logo"
    alt="logo"
     src={logo}  />
    </Link>
);
const Header= () => {
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    return (
        <div className="header">
        <Title />
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/card">Card</Link>
                </li>
            </ul>
        </div>
        {
            isLoggedIn?(
            <button onClick={()=>setIsLoggedIn(false)}>Logout</button >
            ):(
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            )
        }
        
        </div>
    );
    
};  
export default Header;
