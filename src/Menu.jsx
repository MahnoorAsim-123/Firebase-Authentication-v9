import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css"


const Menu = () => {

    return(


        <>
            <div className="dash">

            <div className="logo">
                <h2>Dashboard</h2>
            </div>

            <nav>
            <NavLink activeClassName="active" to="/todos"><li>TODOS</li></NavLink>
            <NavLink activeClassName="active" to="/mytodos"><li>MY TODOS</li></NavLink>
            <NavLink activeClassName="active" to="/profile"><li>PROFILE</li></NavLink> 
            </nav>

            </div>

        <Routes>
            
        </Routes>


        </>



    )

}

export default Menu;