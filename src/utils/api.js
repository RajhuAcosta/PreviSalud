import { ENTPlatform } from './dataGenerator'; // Esto debería funcionar ahora

// Funciones para simular API (puedes reemplazar con fetch/axios para backend real)
export const registerPatientAPI = async (formData) => {
  return await ENTPlatform.registerPatient(formData); // Pasa formData completo
};

export const getPatientDataAPI = async (patientId) => {
  return await ENTPlatform.getPatientData(patientId);
};

export const predictRisksAPI = async (patientId) => {
  return await ENTPlatform.predictRisks(patientId);
};