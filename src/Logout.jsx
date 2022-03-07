import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import Login from "./Login"

const Logout = () => {
  const navigate = useNavigate();

  useEffect(navigate("/Login"),[navigate])


    return(
        <>

        <Menu />
         
        </>

    )

}

export default Logout;