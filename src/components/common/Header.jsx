// components/layout/Header.jsx
import React from "react";
import { Bell, User, Menu } from "lucide-react"; // Agregué Menu para hamburguesa
import { usePatient } from "../../context/PatientContext"; // Ajusté la ruta si es necesario (tuve "../../context/PatientContext", pero usa la correcta)

const Header = ({ onToggleSidebar }) => {
  const { patient } = usePatient(); // Cambié a 'patient' basado en tu contexto (antes era patientData)
  const notificationsCount = 3; // Simulado; en real, calcula de riskData

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Botón hamburguesa para móvil */}
      <button
        className="md:hidden p-2 hover:bg-gray-100 rounded"
        onClick={onToggleSidebar}
        aria-expanded="false" // Puedes hacer dinámico si quieres
        aria-label="Abrir menú de navegación"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Logo y título */}
      <div className="flex items-center flex-1 md:flex-none">
        <img
          src="/descarga.png"
          alt="Logo Plataforma ENT"
          className="h-10 w-12 mr-2"
        />
        <h1 className="text-lg font-semibold">Plataforma PreviSalud</h1>
      </div>

      {/* Notificaciones y usuario */}
      <div className="flex items-center space-x-4">
        <button className="relative" aria-label="Notificaciones">
          <Bell className="h-6 w-6" />
          {notificationsCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {notificationsCount}
            </span>
          )}
        </button>
        <div className="flex items-center space-x-2">
          <User className="h-6 w-6" />
          <span className="text-sm">
            {patient
              ? `${patient.personalInfo.firstName} ${patient.personalInfo.lastName}`
              : "Usuario"}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
