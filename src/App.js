import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Toast from "./toast";
import Logout from "./Logout";
import MyTodos from "./MyTodos";
import Profile from "./Profile";
import Todos from "./Todos";

function App() {
  return (
    <>
       <Routes>
         <Route path="/" element={ <Signup /> } />
         <Route path="/login" element={ <Login /> } />
         <Route path="/dashboard" element={ <Dashboard /> } />
         <Route  path="/todos" element={<Todos />} />
            <Route path="/mytodos" element={<MyTodos />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
         <Route path="*" element={<h1>ERROR 404, Page not Found</h1>} />
       </Routes>
    </>
  );
}

export default App;
