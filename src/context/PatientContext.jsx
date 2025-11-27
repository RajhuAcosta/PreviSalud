import React, { createContext, useContext, useState } from "react";
import { registerPatientAPI, predictRisksAPI } from "../utils/api"; // Importaciones actualizadas

const PatientContext = createContext();

export const usePatient = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {
  const [patientData, setPatientData] = useState(null);
  const [riskData, setRiskData] = useState(null);
  const [loading, setLoading] = useState(false);

  const registerPatient = async (formData) => {
    // Cambia el parámetro a formData completo
    setLoading(true);
    try {
      const result = await registerPatientAPI(formData); // Pasa formData completo
      setPatientData(result.data);
      // Opcional: Generar riesgos inmediatamente
      const risks = await predictRisksAPI(result.patientId); // Usando predictRisksAPI
      setRiskData(risks);
    } catch (error) {
      console.error("Error registrando paciente:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PatientContext.Provider
      value={{ patientData, riskData, registerPatient, loading }}
    >
      {children}
    </PatientContext.Provider>
  );
};
