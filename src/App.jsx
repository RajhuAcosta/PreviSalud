import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PatientProvider } from "./context/PatientContext";
import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import PatientProfile from "./pages/PatientProfile";
import RiskAssessment from "./pages/RiskAssessment";
import ClinicalHistory from "./pages/ClinicalHistory";
import AlertsPanel from "./pages/AlertsPanel";
import Settings from "./pages/Settings";
import Login from "./pages/Login";

function App() {
  return (
    <PatientProvider>
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Login />} />{" "}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/perfil" element={<PatientProfile />} />
            <Route path="/riesgos" element={<RiskAssessment />} />
            <Route path="/historial" element={<ClinicalHistory />} />
            <Route path="/alertas" element={<AlertsPanel />} />
            <Route path="/configuracion" element={<Settings />} />{" "}
            {/* Ruta agregada */}
          </Routes>
        </AppLayout>
      </Router>
    </PatientProvider>
  );
}

export default App;
