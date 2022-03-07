import React, { useState } from "react";
import { db , auth } from "./configuration/firebase"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { doc, getDoc } from "firebase/firestore";


const Login = () => {

    const [ email , setEmail] = useState("");
    const [ password , setPassword] = useState("");
    const navigate = useNavigate();


    // React.useEffect(() => {
     
    //       navigate("/dashboard");
        
    //   }, []);


    const LoginHandler = async () => {
        signInWithEmailAndPassword(auth, email, password)
        // const docRef = doc(db, "users", "key")
        // const docSnap = await getDoc(docRef)
        .then((userCredential) => {
          // Signed in 
          alert("Logged in Successfully")
      
          console.log(userCredential)

          let data = JSON.parse(localStorage.getItem("user"))

          console.log(data)

          navigate("/dashboard");

        //   if(data){
        //       navigate("/dashboard");
        //   }
        //   else{
        //     navigate("/login");
        //   }

          
        })
        .catch((error) => {
          alert("Invalid Login details");
          console.log(error)

        });

        setEmail("");
        setPassword("");
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
                        onChange={ (e) => setEmail(e.target.value)}
                        />
                        <br />

                        <input 
                        value={password}
                        type="password"
                        placeholder="ENTER YOUR PASSWORD"
                        onChange={ (e) => setPassword(e.target.value)}
                        />
                        <br />

                        <button className="loginBtn" onClick={LoginHandler}>LOGIN</button>

                </div>


               
                
            </div>
        </>
    )
}

export default Login;



