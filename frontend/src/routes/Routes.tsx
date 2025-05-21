import Login from "../pages/Login/Login";
import DashBoard from "../pages/DashBoard/DashBoard"
import GerenciamentoDeProfissionalDaSaude from "../pages/GerenciamentoDeProfissionalDaSaude/GerenciamentoDeProfissionalDaSaude";
import GerenciamentoDeRecepcionista from "../pages/GerenciamentoDeRecepcionista/GerenciamentoDeRecepcionista";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/DashBoard" element={<DashBoard/>}></Route>
                <Route path="/GerenciamentoDeProfissionalDaSaude" element={<GerenciamentoDeProfissionalDaSaude/>}></Route>
                <Route path="/GerenciamentoDeRecepcionista" element={<GerenciamentoDeRecepcionista/>}></Route>
            </Routes>
        </Router>
    );
}

export default AppRoutes;