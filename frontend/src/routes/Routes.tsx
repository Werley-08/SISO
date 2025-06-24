import Login from "../pages/Login/Login";
import DashBoard from "../pages/DashBoard/DashBoard";
import GerenciamentoDeProfissionalDaSaude from "../pages/GerenciamentoDeProfissionalDaSaude/GerenciamentoDeProfissionalDaSaude";
import GerenciamentoDeRecepcionista from "../pages/GerenciamentoDeRecepcionista/GerenciamentoDeRecepcionista";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import GerenciamentoDePaciente from "@/pages/GerenciamentoDePaciente/GerenciamentoDePaciente";
import GerenciamentoDeProcedimento from "@/pages/GerenciamentoDeProcedimentos/GerenciamentoDeProcedimento";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/DashBoard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/GerenciamentoDePaciente"
          element={
            <ProtectedRoute>
              <GerenciamentoDePaciente />
            </ProtectedRoute>
          }
        />
        <Route
          path="/GerenciamentoDeProfissionalDaSaude"
          element={
            <ProtectedRoute>
              <GerenciamentoDeProfissionalDaSaude />
            </ProtectedRoute>
          }
        />
        <Route
          path="/GerenciamentoDeRecepcionista"
          element={
            <ProtectedRoute>
              <GerenciamentoDeRecepcionista />
            </ProtectedRoute>
          }
        />
        <Route
          path="/GerenciamentoDeProcedimento"
          element={
            <ProtectedRoute>
              <GerenciamentoDeProcedimento />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
