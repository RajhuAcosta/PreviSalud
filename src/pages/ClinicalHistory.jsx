import React from "react";
import { usePatient } from "../context/PatientContext";

const ClinicalHistory = () => {
  const { patientData } = usePatient();
  if (!patientData) return <div>Cargando...</div>;

  const { clinicalHistory } = patientData;

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Historial Clínico</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p>Último Chequeo: {clinicalHistory.lastCheckup}</p>
        <p>
          Historial Familiar: Diabetes (
          {clinicalHistory.familyHistory.diabetes ? "Sí" : "No"})
        </p>
        {/* Agrega más detalles o filtros por fecha */}
      </div>
    </div>
  );
};

export default ClinicalHistory;
