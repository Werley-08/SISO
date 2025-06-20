import Login from "../pages/Login/Login";
import DashBoard from "../pages/DashBoard/DashBoard";
import GerenciamentoDePacientes from "../pages/GerenciamentoDePacientes/GerenciamentoDePacientes";
import GerenciamentoDeProfissionalDaSaude from "../pages/GerenciamentoDeProfissionalDaSaude/GerenciamentoDeProfissionalDaSaude";
import GerenciamentoDeRecepcionista from "../pages/GerenciamentoDeRecepcionista/GerenciamentoDeRecepcionista";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

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
          path="/GerenciamentoDePacientes"
          element={
            <ProtectedRoute>
              <GerenciamentoDePacientes />
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
      </Routes>
    </Router>
  );
}

export default AppRoutes;
