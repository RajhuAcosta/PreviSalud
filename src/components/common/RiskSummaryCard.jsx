import React from "react";

const RiskSummaryCard = ({ overallRisk, topConditions }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">Resumen de Riesgos</h3>
    <p className="text-sm mb-2">
      Riesgo General: <span className="font-bold">{overallRisk}</span>
    </p>
    <ul>
      {topConditions.map((cond, index) => (
        <li key={index} className="text-sm">
          {cond.name}: {cond.probability}% ({cond.level})
        </li>
      ))}
    </ul>
  </div>
);

export default RiskSummaryCard;
