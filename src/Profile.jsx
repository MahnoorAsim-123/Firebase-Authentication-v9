import React , {useState , useEffect}from "react";
import Menu from "./Menu";
import {db} from "./configuration/firebase";
import { collection, getDocs } from "firebase/firestore";

const Profile = () => {

    const dbRef = collection(db, "users");
    const userprofile= localStorage.getItem("user");
    const [currentUser, setCurrentuser] = useState({});

    useEffect(async () => {
        const userData = await getDocs(dbRef);
        userData.forEach((data) => {
          if (userprofile === data.data().userUid) {
            setCurrentuser(data.data());
          }
        });
    
      }, []);
    
      console.log(currentUser);

    return(
        <>
        <div className="profile fadeInRight" >
            
        <Menu />

        <h1 className="Profh1">Your Profile</h1>
        
        <div className="flexCont">

        <div >
                <h4 className="Profh4"> Name:</h4>
                <h4 className="Profh4">Email:</h4>
                <h4 className="Profh4">Contact:</h4>
                </div>
            
            <div>
            <h4 className="Profh5 ">{currentUser.name}</h4>
                <h4 className="Profh5">{currentUser.email}</h4>
                <h4 className="Profh5 ">{currentUser.contact}</h4>
            </div>
        </div>
        
        </div>



        </>

    )

}

export default Profile;