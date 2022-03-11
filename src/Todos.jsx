import React , { useState , useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./configuration/firebase";
import Menu from "./Menu";

const Todos = () => {
    const currentUserUid = localStorage.getItem("user");
    const [inputValue, setInputValue] = useState("");
    const [todo, setTodo] = useState([]);
    const [isPrivatePost, setIsPrivatePost] = useState(false);

    useEffect(async () => {
        const dbRef = collection(db, "todos");
        const getData = await getDocs(dbRef);
        let getTodo = [];
        getData.forEach((doc) => {
            getTodo.push({
                key: doc.id,
                todo: doc.data().todo,
                userId: doc.data().uId,
                private: doc.data().privatePost,
              });
        });
        setTodo(getTodo);
        console.log("getTodo", getTodo);
      }, [todo]);

      const setPrivateValue = (checkbox) => {
        console.log(checkbox.checked);
        setIsPrivatePost(checkbox.checked);
      };

    //   Addd
    const addTodo = async () => {
      
        const dbRef = collection(db, "todos");

        try {
          const addData = await addDoc(dbRef, {
            todo: inputValue,
            uId: currentUserUid,
            privatePost: isPrivatePost,
          });
    
          console.log(addData);
          setInputValue("");
        } catch (error) {
          console.log(error);
        }
        
    }

    return(
        <>

        <div className="todoss fadeInRight">
        <Menu />
        <div className="todoCont">
        </div>


        <h1 className="todoh1">Todo App</h1>


        <div className="todoList">

        <div className="inputFiel">
            <input 
            type="text"
            placeholder="ENTER TODO"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
        </div>

        <div className="adddBtn">
            <button onClick={addTodo}>ADD</button>
        </div>
        <br />

 


        <br />
        


        

 





        </div>

        <label className="privatePost">
          <input type="checkbox" onChange={(e) => setPrivateValue(e.target)} />
         &nbsp; Private Post
        </label>
       

       
        <div className="fadeInUp">
        <ul>
        {todo.map((val, ind) => {
            console.log(val);

            return val.private ? (
              val.userId === currentUserUid ? (
                <div  key={ind}>
                  <li className="todoLists" > {val.todo} </li>
                </div>
              ) : null
            ) : (
              <div key={ind}>
                <li className="todoLists"> {val.todo} </li>
              </div>
            );
          })}
        </ul>
      </div>


        </div>


        </>

    )

}

export default Todos;
