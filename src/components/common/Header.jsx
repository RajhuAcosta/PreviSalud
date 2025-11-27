import React from "react";
import { Bell, User } from "lucide-react"; // Iconos de lucide-react
import { usePatient } from "../../context/PatientContext";

const Header = () => {
  const { patientData } = usePatient();
  const notificationsCount = 3; // Simulado; en real, calcula de riskData

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src="/descarga.png"
          alt="Logo Plataforma ENT"
          className="h-10 w-12 mr-2"
        />{" "}
        {/* Reemplaza con tu logo */}
        <h1 className="text-lg font-semibold">Plataforma PreviSalud</h1>
      </div>
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
            {patientData
              ? `${patientData.personalInfo.firstName} ${patientData.personalInfo.lastName}`
              : "Usuario"}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
