import React from "react";
import { usePatient } from "../context/PatientContext";

const AlertItem = ({ type, title, message, condition, timestamp }) => (
  <div
    className={`p-4 rounded-lg shadow-md mb-4 ${
      type === "high"
        ? "bg-red-100 border-l-4 border-red-500"
        : "bg-orange-100 border-l-4 border-orange-500"
    }`}
  >
    <h4 className="font-semibold text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600">{message}</p>
    <span className="text-xs text-gray-500">
      {new Date(timestamp).toLocaleString()}
    </span>
  </div>
);

const AlertsPanel = () => {
  const { riskData } = usePatient();
  if (!riskData) return <div>Cargando alertas...</div>;

  // Simula alertas basadas en riesgos altos/moderados
  const alerts = Object.entries(riskData.predictions)
    .filter(([_, data]) => data.level !== "Bajo")
    .map(([condition, data]) => ({
      type: data.level === "Alto" ? "high" : "medium",
      title: `Riesgo ${data.level} de ${condition.replace("_", " ")}`,
      message: data.recommendations[0],
      timestamp: riskData.timestamp,
    }));

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Panel de Alertas</h2>
      {alerts.length > 0 ? (
        alerts.map((alert, index) => <AlertItem key={index} {...alert} />)
      ) : (
        <p>No hay alertas activas.</p>
      )}
    </div>
  );
};

export default AlertsPanel;
