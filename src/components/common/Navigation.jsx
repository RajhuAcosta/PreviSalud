// components/layout/Navigation.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Activity,
  History,
  AlertTriangle,
  Settings,
  X, // Icono para cerrar en móvil
} from "lucide-react";

const Navigation = ({ isOpen, onClose }) => {
  const location = useLocation();
  const navItems = [
    { icon: Home, label: "Inicio", path: "/dashboard" },
    { icon: User, label: "Mi Perfil", path: "/perfil" },
    { icon: Activity, label: "Evaluación de Riesgos", path: "/riesgos" },
    { icon: History, label: "Historial Clínico", path: "/historial" },
    { icon: AlertTriangle, label: "Alertas", path: "/alertas" },
    { icon: Settings, label: "Configuración", path: "/configuracion" },
  ];

  return (
    <>
      {/* Overlay para móvil (fondo semi-transparente) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose} // Cierra al hacer clic fuera
        ></div>
      )}

      {/* Sidebar */}
      <nav
        className={`bg-gray-800 text-white w-64 min-h-screen p-4 fixed md:relative z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } md:block md:translate-x-0`} // Oculta en móvil por defecto, muestra en desktop
      >
        {/* Botón de cerrar en móvil */}
        <button
          className="md:hidden absolute top-4 right-4 text-white hover:text-gray-300"
          onClick={onClose}
          aria-label="Cerrar menú"
        >
          <X className="h-6 w-6" />
        </button>

        <ul className="space-y-4 mt-8 md:mt-0">
          {" "}
          {/* Margen top en móvil para el botón */}
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 p-2 rounded ${
                    isActive ? "bg-blue-600" : "hover:bg-gray-700"
                  }`}
                  aria-label={item.label}
                  onClick={onClose} // Cierra la sidebar al navegar en móvil
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
