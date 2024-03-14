import React from "react";
import Chips from "./Chips";
import Cola from "./Cola"
import Cookie from "./Cookie";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Link } from "react-router-dom";

const VendingMachine = ()=>{
    return(
        <div>
           <h1><Link to="/chips">chips</Link></h1>
            <h1><Link to="/cola">cola</Link></h1>
            <h1><Link to="/cookie">cookie </Link></h1>
        </div>
    )
}

export default VendingMachine;