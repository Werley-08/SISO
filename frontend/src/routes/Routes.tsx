import Login from "../pages/Login/Login";
import GerenciamentoDeUsuarios from "../pages/GerenciamentoDeUsuarios/GerenciamentoDeUsuarios"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/GerenciamentoDeUsuarios" element={<GerenciamentoDeUsuarios/>}></Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;