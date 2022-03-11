import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./App.css"

const Menu = () => {

    const user = localStorage.getItem("user");
    const [signout , setSignout] = useState(false);
    const navigate = useNavigate();

    // console.log(getUser)

    // Redirect
    useEffect(
        () => {

            if(!user) {
                navigate("/")
            }

        }, [signout]
    )



    // Logout
    const logoutHandlers = () => {
        localStorage.removeItem("user");
        // console.log("getUser",user)
        setSignout(true);
        // alert("hello")
    }

    return(
        <>
            <div className="dash">

            <div className="logo">
                <h2>Dashboard</h2>
            </div>

            <nav>
            <NavLink to="/todos"><li>TODOS</li></NavLink>
            <NavLink  to="/mytodos"><li>MY TODOS</li></NavLink>
            <NavLink  to="/profile"><li>PROFILE</li></NavLink> 
            <button className="logoutBtn" onClick={logoutHandlers}>Logout</button> 
            </nav>


            



            </div>
        
        </>

    )

}

export default Menu;