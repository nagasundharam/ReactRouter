import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function About(){

    const [user,setUser] = useState('mario');
    console.log(setUser);
    if (!user){
        return <Navigate to ="/" replace = { true }/>
    }

    return (
    <div>
        <h1>what am i doing</h1>
        <p>Routers use a variety of algorithms to determine the best path for data packets to take. These algorithms take into account factors such as the speed of the different networks, the load on the networks, and the cost of sending data over the networks.
Once a router has determined the best path for a data packet, it forwards the packet to the next network on its journey. This process continues until the packet reaches its final destination.</p>
    <button onClick = {()=> {setUser(null)}}>Logout</button>
    </div>
    )
}