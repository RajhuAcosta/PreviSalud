import React from "react";

const WelcomeBanner = ({ patientName }) => (
  <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-6 rounded-lg shadow-md mb-6">
    <h1 className="text-2xl font-bold">¡Bienvenido, {patientName}!</h1>
    <p className="text-sm mt-2">
      Aquí puedes monitorear tu salud y riesgos de ENT en tiempo real.
    </p>
  </div>
);

export default WelcomeBanner;
