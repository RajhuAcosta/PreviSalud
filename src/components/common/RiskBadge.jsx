import React from "react";

const RiskBadge = ({ level, probability }) => {
  const colors = {
    Alto: "bg-red-500",
    Moderado: "bg-orange-500",
    Bajo: "bg-green-500",
  };

  return (
    <span className={`px-2 py-1 text-xs text-white rounded ${colors[level]}`}>
      {level} ({probability}%)
    </span>
  );
};

export default RiskBadge;
