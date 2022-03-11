import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {db , auth} from "../configuration/firebase";
import { collection, addDoc } from "firebase/firestore"; 
import { toast } from 'react-toastify';
import Toast from "../components/Toast";
import '../App.css';

const RegisterUser = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [contact , setContact] = useState("");
    const [pass , setPass] = useState("");
    const navigate = useNavigate();


    // RegisterHandler
    const RegisterHandler = () => {
        
        const userObj = {
            name,
            email,
            contact,
        }

        createUserWithEmailAndPassword(auth, email, pass)

        .then( async (user) => {
           console.log(user)


        //    Toastify | Popup
        toast("Your account has been created");


        //    Firestore v9
            await addDoc(collection(db, "users"), {
            ...userObj,
            userUid: user.user.uid,
          });


          navigate("/")
        
          
          })


        .catch((err) => {
            console.log(err)
            toast("Invalid Details");
        });
        



        // Clear Form Fields
        setName("")
        setEmail("")
        setContact("")
        setPass("")


        // Redirect to the Login Screen
        // navigate("/")
    }


    // Redirector
    const loginPage = () => {
        navigate("/")
    }



    return(
        <>
            <div className="myContainer">
              <div className="myform zoomIn">
                    <h1>SIGNUP FORM</h1>
                    <input 
                    type="text"
                    value={name}
                    placeholder="ENTER YOUR NAME"
                    onChange={ (name) => setName(name.target.value)}
                    />
                    <br />
                    <input 
                    type="email"
                    value={email}
                    placeholder="ENTER YOUR EMAIL"
                    onChange={ (name) => setEmail(name.target.value)}
                    />
                    <br />
                    <input 
                    value={contact}
                    type="number"
                    placeholder="ENTER YOUR PHONE NUMBER"
                    onChange={ (email) => setContact(email.target.value)}
                    />
                    <br />
                    <input 
                    value={pass}
                    type="password"
                    placeholder="ENTER YOUR PASSWORD"
                    onChange={ (pswd) => setPass(pswd.target.value)}
                    />
                    <br />
                    <button className="signupBtn" onClick={RegisterHandler}>SIGNUP</button>

                    <br />
                    <p className="redirectPage">Already have an account?&nbsp;&nbsp; 
                    <h4 className="Log" onClick={loginPage} >Login here</h4></p>
             </div>
             <Toast />
            </div>
        </>
           )
};


export default RegisterUser;