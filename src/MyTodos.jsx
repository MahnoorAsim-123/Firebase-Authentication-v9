import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./configuration/firebase";
import Todos from "./Todos"

const MyTodos = () => {
    const currentUserUid = localStorage.getItem("user");
    const [todo, setTodo] = useState([]);

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

    return(

        <>
           <div className="mytodo fadeInRight">
           <Menu />
            <h1 className="myTodos">My Todos</h1>

            <div className="fadeInUp">
        <ul>
        {todo.map((val, ind) => {
            console.log(val);

            return val.private ? (
              val.userId === currentUserUid ? (
                <div  key={ind}>
                  <li className="todoLists fadeInUp" > {val.todo} </li>
                </div>
              ) : null
            ) : (
              <div key={ind}>
                <li className="todoLists fadeInUp"> {val.todo} </li>
              </div>
            );
          })}
        </ul>
      </div>

           </div>
        </>

    )

}

export default MyTodos;