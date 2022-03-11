import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {auth} from "../configuration/firebase";
import '../App.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import Toast from "../components/Toast";

const UserLogin = () => {

    const getUser = localStorage.getItem("user");
    const [email , setEmail] = useState("");
    const [pass , setPass] = useState("");

    
    // Navigator | Redirector | Routerv6
    const navigate = useNavigate();


    // LoginHandler
    const LoginHandler = () => {
        console.log(email);
        console.log(pass);


        signInWithEmailAndPassword(auth, email, pass)

        .then((res) => {
            console.log(res, "success");
            toast("You Logged in successfully!");
            // alert("success");
            localStorage.setItem("user" , res.user.uid);
            navigate("/dashboard");
        })


        .catch((error) => {
            console.log(error, "err");
            toast("Invalid login details");
        });



        // Clear Form Fields
        setEmail("")
        setPass("")

    }



    // To check user's presence
    useEffect(
        // callback function
        () => {

            if(getUser){
                navigate("/dashboard");
            }
        },

        []
       
    );



    // Redirector | Router v6
    const RegPage = () => {
        navigate("/signup")
    }




    return(
        <>
            <div className="myContainer">
              <div className="myform zoomIn">
                    <h1>LOGIN FORM</h1>
                    <input 
                    type="email"
                    value={email}
                    placeholder="ENTER YOUR EMAIL"
                    onChange={ (name) => setEmail(name.target.value)}
                    />
                    <br />
                    <input 
                    value={pass}
                    type="password"
                    placeholder="ENTER YOUR PASSWORD"
                    onChange={ (pswd) => setPass(pswd.target.value)}
                    />
                    <br />
                    <button className="signupBtn" onClick={LoginHandler}>LOGIN</button>

                    <br />
                    <p className="redirectPage">New Member?&nbsp;&nbsp; 
                    <h4 className="Log" onClick={RegPage}>Signup here</h4></p>
             </div>
             <Toast />
            </div>

        </>
           )
};


export default UserLogin;