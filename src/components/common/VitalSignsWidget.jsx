import React from "react";

const VitalSignsWidget = ({ bp, heartRate, temperature, oxygenSaturation }) => {
  const VitalItem = ({ label, value, status }) => (
    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
      <span className="text-sm font-medium">{label}:</span>
      <span
        className={`text-sm ${
          status === "warning" ? "text-red-500" : "text-green-500"
        }`}
      >
        {value}
      </span>
    </div>
  );

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Signos Vitales</h3>
      <div className="grid grid-cols-2 gap-4">
        <VitalItem
          label="Presión Arterial"
          value={`${bp.systolic}/${bp.diastolic} mmHg`}
          status={bp.systolic > 130 ? "warning" : "normal"}
        />
        <VitalItem
          label="Frecuencia Cardíaca"
          value={`${heartRate} lpm`}
          status="normal"
        />
        <VitalItem
          label="Temperatura"
          value={`${temperature}°C`}
          status="normal"
        />
        <VitalItem
          label="Sat. Oxígeno"
          value={`${oxygenSaturation}%`}
          status="normal"
        />
      </div>
    </div>
  );
};

export default VitalSignsWidget;
