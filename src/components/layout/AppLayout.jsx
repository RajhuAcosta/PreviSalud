// components/layout/AppLayout.jsx
import React, { useState } from "react";
import Header from "../common/Header";
import Navigation from "../common/Navigation";
import Footer from "../common/Footer";

const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para sidebar (cerrado por defecto en móvil)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
      {/* Navigation con estado responsive */}
      <Navigation isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Contenedor principal */}
      <div className="flex-1 flex flex-col md:ml-0">
        {" "}
        {/* ml-0 en desktop para evitar overlap */}
        {/* Header con botón hamburguesa */}
        <Header onToggleSidebar={toggleSidebar} />
        {/* Main content */}
        <main className="flex-1 p-6 bg-white overflow-auto">
          {children} {/* Aquí se renderizan las rutas */}
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
