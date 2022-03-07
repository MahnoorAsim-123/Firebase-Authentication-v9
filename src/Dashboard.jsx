import React, { useState } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./Login"
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";



function App() {

  let data = JSON.parse(localStorage.getItem("user"))

  let getName = data[0].name;
  let getEmail = data[0].email;
  let getContact = data[0].contact;
  const navigate = useNavigate();
  


  const logout = () => {
    // alert("I'm running")
    // localStorage.removeItem("user");
    navigate("/login");
  }

          // console.log(getName)
  return (
    <>
    <div className="d fadeInRight">

     <Menu />

    </div>
     

      {/* <div className="datas">
        <h1>{getName}</h1>
        <h1>{getEmail}</h1>
        <h1>{getContact}</h1>
      </div> */}


      {/* <button onClick={logout}>Logout</button> */}
    </>
  );
}

export default App;