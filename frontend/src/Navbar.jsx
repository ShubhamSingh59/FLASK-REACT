import React from "react";
import {Link } from 'react-router-dom';
function Navbar(){
    return(
        <div>
            <nav>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>
            </nav>
        </div>
    );
}

export default Navbar