import { Route, Routes } from "react-router-dom";


import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/login";
import Create from "./components/create/Create";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/create" element={<Create />}></Route>

        </Routes>
    );
}

export default App
