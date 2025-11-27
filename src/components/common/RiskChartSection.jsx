import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RiskChartSection = ({ predictions }) => {
  if (!predictions) return <div>Cargando predicciones...</div>;

  const data = Object.entries(predictions).map(([condition, data]) => ({
    condition: condition.replace("_", " "),
    probability: data.probability,
    level: data.level,
  }));

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Gráfico de Riesgos</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="condition" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="probability" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskChartSection;
