import React from "react";
import ProgressBar from "./ProgressBar"; // Importación agregada
import RiskBadge from "./RiskBadge"; // Importación agregada

const RiskCard = ({
  condition,
  probability,
  level,
  factors,
  recommendations,
}) => (
  <div className={`p-4 rounded-lg shadow-md risk-${level.toLowerCase()}`}>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold capitalize">
        {condition.replace("_", " ")}
      </h3>
      <RiskBadge level={level} probability={probability} /> {/* Uso agregado */}
    </div>

    <div className="mb-4">
      <ProgressBar value={probability} max={100} /> {/* Uso agregado */}
    </div>

    <div className="mb-4">
      <h4 className="text-sm font-medium mb-2">Factores de Riesgo:</h4>
      <ul className="text-xs space-y-1">
        {factors.map((factor, index) => (
          <li key={index}>• {factor}</li>
        ))}
      </ul>
    </div>

    <div>
      <h4 className="text-sm font-medium mb-2">Recomendaciones:</h4>
      <ul className="text-xs space-y-1">
        {recommendations.slice(0, 3).map((rec, index) => (
          <li key={index}>✓ {rec}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default RiskCard;
