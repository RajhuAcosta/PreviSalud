import React from "react";
import { usePatient } from "../context/PatientContext";
import RiskCard from "../components/common/RiskCard";
import RiskChartSection from "../components/common/RiskChartSection";

const RiskAssessment = () => {
  const { riskData } = usePatient();
  if (!riskData) return <div>Cargando riesgos...</div>;

  const { predictions, overallRisk, timestamp } = riskData;

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold">Evaluación de Riesgos</h2>
        <p>
          Riesgo General: {overallRisk} | Última Actualización:{" "}
          {new Date(timestamp).toLocaleString()}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {Object.entries(predictions).map(([condition, data]) => (
          <RiskCard
            key={condition}
            condition={condition}
            probability={data.probability}
            level={data.level}
            factors={data.factors}
            recommendations={data.recommendations}
          />
        ))}
      </div>

      <RiskChartSection predictions={predictions} />
    </div>
  );
};

export default RiskAssessment;
