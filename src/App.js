import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RegisterUser from "./components/Register";
import UserLogin from "./components/Signin";
import MyTodos from "./MyTodos";
import Profile from "./Profile";
import Todos from "./Todos";

function App() {
  return (
    <>
       <Routes>
         <Route path="/" element={ <UserLogin /> } />
         <Route path="/signup" element={ <RegisterUser /> } />
         <Route path="/dashboard" element={ <Home /> } />
         <Route path="todos" element={ <Todos/> } />
         <Route path="/mytodos" element={ <MyTodos /> } />
         <Route path="/profile" element={ <Profile /> } />
         <Route path="*" element={<h1>ERROR 404, Page not Found</h1>} />
       </Routes>
       
    </>
  );
}

export default App;
