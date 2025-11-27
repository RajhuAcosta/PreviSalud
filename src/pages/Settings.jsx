import React from "react";
import { usePatient } from "../context/PatientContext";
import Button from "../components/ui/Button";

const Settings = () => {
  const { patientData } = usePatient();

  const handleUpdate = () => {
    // Lógica para actualizar configuración (e.g., notificaciones)
    alert("Configuración actualizada");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Configuración</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="mb-4">
          Usuario: {patientData ? patientData.personalInfo.email : "N/A"}
        </p>
        <label className="block mb-2">
          <input type="checkbox" className="mr-2" /> Recibir notificaciones por
          email
        </label>
        <Button onClick={handleUpdate}>Guardar Cambios</Button>
      </div>
    </div>
  );
};

export default Settings;
