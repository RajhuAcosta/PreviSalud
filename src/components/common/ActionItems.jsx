import React from "react";

const ActionItems = ({ recommendations }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">Recomendaciones de Acción</h3>
    <ul className="space-y-2">
      {recommendations.slice(0, 5).map((rec, index) => (
        <li key={index} className="flex items-center text-sm">
          <span className="text-green-500 mr-2">✓</span> {rec}
        </li>
      ))}
    </ul>
  </div>
);

export default ActionItems;
