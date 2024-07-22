import { Route, Routes } from "react-router-dom";


import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Create from "./components/create/Create";
import Header from "./components/header/Header";
import Games from "./components/games/Games";
import GameDetails from "./components/gameDetails/GameDetails";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/games" element={<Games />}></Route>
                <Route path="/games/:gameId/details" element={<GameDetails />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/create" element={<Create />}></Route>

            </Routes>
        </>
    );
}

export default App
