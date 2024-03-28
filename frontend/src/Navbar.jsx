import React from "react";
import {Link } from 'react-router-dom';
function Navbar(){
    return(
        <div>
            <nav>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/insert">Insert</Link></li>
                <li><Link to="/update">Update</Link></li>
                <li><Link to="/players">Players</Link></li>
                <li><Link to="/view1">View1</Link></li>
                <li><Link to="/login">Login</Link></li>
            </nav>
        </div>
    );
}

export default Navbar