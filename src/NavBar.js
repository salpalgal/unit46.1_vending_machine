import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const NavBar =()=>{
    return(
        <nav>
            <NavLink exact to="/chips">
                Chips
            </NavLink>
            <NavLink exact to="/cola">
                Cola
            </NavLink>
            <NavLink exact to="/cookie">
                Cookie
            </NavLink>
        </nav>
    )
}

export default NavBar;