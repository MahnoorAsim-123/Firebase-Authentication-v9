import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu";
import '../App.css';



const Home = () => {

  return (
    <>
    <div className="d fadeInRight">

     <Menu />

    </div>
     

 
    </>
  );
}

export default Home;