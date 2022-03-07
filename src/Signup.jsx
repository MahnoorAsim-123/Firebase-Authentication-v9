import React, { useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db ,  auth } from "./configuration/firebase"
import { useNavigate } from "react-router-dom";
import Toast from "./toast";

const Signup = () => {

    const [ name , setName] = useState("");
    const [ email , setEmail] = useState("");
    const [ contact , setContact] = useState("");
    const [ password , setPassword] = useState("");
    const navigate = useNavigate();



    const SignUp = async () => {
     // console.log(name , email, contact , password)
     createUserWithEmailAndPassword(auth, email, password)
     // const docRef = await addDoc(collection(db, "users"), {
     //     name,
     //     email,
     //     contact,
     //     password,
     //   })
         .then((res) => {
             // Signed in 
             console.log(res);
             console.log(res.user.uid);
             alert("Registeration Successfull")

             let obj = {
                        name : name,
                        email : email,
                        contact : contact,
                       }

            

            let arr = [obj]

            arr.push(obj)


            localStorage.setItem("user" , JSON.stringify(arr))

            navigate("/login");

             
         })

         .catch((error) => {
             console.log(error);
                
  });

       setName("");
       setEmail("");
       setContact("");
       setPassword("");

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
                        onChange={ (e) => setName(e.target.value)}
                        />

                        <br />
                        <input 
                        type="email"
                        value={email}
                        placeholder="ENTER YOUR EMAIL"
                        onChange={ (e) => setEmail(e.target.value)}
                        />
                        <br />

                        <input 
                        value={contact}
                        type="number"
                        placeholder="ENTER YOUR PHONE NUMBER"
                        onChange={ (e) => setContact(e.target.value)}
                        />

                        <br />
                        <input 
                        value={password}
                        type="password"
                        placeholder="ENTER YOUR PASSWORD"
                        onChange={ (e) => setPassword(e.target.value)}
                        />
                        <br />

                        <button className="signupBtn" onClick={SignUp}>SIGNUP</button>

                </div>
                
            </div>
        </>
    )
}

export default Signup;