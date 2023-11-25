import {useState} from "react";
const Profile=(props)=>{
    const[count,setCount]=useState(0);
    return (
        <div>
            <h1>Hello This is Mr Gyan Prakash Mishra</h1>
            <h2>He is Software Developer</h2>
            <h4>Name :{props.name}</h4>
            <h5>count:{count}</h5>
            <button onClick={() => 
                count===0?setCount(1):setCount(0)}
                >count</button>
        </div>
    ) 
}
export default Profile;