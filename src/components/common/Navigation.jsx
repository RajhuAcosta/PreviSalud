import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  User,
  Activity,
  History,
  AlertTriangle,
  Settings,
} from "lucide-react"; // Iconos

const Navigation = () => {
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
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <ul className="space-y-4">
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
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
