import React from "react";
import Menu from "./Menu";

const Profile = () => {

    let data = JSON.parse(localStorage.getItem("user"))

    let getName = data[0].name;
    let getEmail = data[0].email;
    let getContact = data[0].contact;
    

    return(

        <>

        <div className="profile">
            
        <Menu />
<br /><br />

        <div className="datass lightSpeedIn">
   
   <div className="main">
                
   <div className="prof">
            <h1>YOUR PROFILE</h1>
            </div>

            <div className="datas">
            <h1>{getName}</h1>
            <br />
            <h1>{getEmail}</h1>
            <br />
            <h1>{getContact}</h1>
            <br />
            </div>
        </div>
   </div>

        </div>


        </>

    )

}

export default Profile;