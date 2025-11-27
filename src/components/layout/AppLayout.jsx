import React from "react";
import Header from "../common/Header";
import Navigation from "../common/Navigation";
import Footer from "../common/Footer";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Navigation />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-white">
          {children} {/* Aquí se renderizan las rutas */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
