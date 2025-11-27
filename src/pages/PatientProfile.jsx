import React, { useState } from "react";
import { usePatient } from "../context/PatientContext";
import { Tabs, Tab } from "react-tabs"; // Instala react-tabs si no lo tienes
import "react-tabs/style/react-tabs.css"; // Estilos básicos
import VitalSignsWidget from "../components/common/VitalSignsWidget";

const PatientProfile = () => {
  const { patientData } = usePatient();
  if (!patientData) return <div>Cargando...</div>;

  const { personalInfo, clinicalHistory, vitalSigns, labResults } = patientData;

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold">Perfil del Paciente</h2>
        <p>
          ID: {personalInfo.patientId} | Edad: {personalInfo.age} | Tipo Sangre:{" "}
          {personalInfo.bloodType}
        </p>
      </div>

      <Tabs>
        <Tab label="Información Personal">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>
              Nombre: {personalInfo.firstName} {personalInfo.lastName}
            </p>
            <p>Email: {personalInfo.email}</p>
            <p>Dirección: {personalInfo.address}</p>
          </div>
        </Tab>
        <Tab label="Historial Clínico">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>
              Altura: {clinicalHistory.height} cm | Peso:{" "}
              {clinicalHistory.weight} kg | IMC: {clinicalHistory.bmi}
            </p>
            <p>Medicamentos: {clinicalHistory.medications.join(", ")}</p>
          </div>
        </Tab>
        <Tab label="Signos Vitales">
          <VitalSignsWidget
            bp={clinicalHistory.bloodPressure}
            heartRate={vitalSigns.heartRate}
            temperature={vitalSigns.temperature}
            oxygenSaturation={vitalSigns.oxygenSaturation}
          />
        </Tab>
        <Tab label="Resultados de Laboratorio">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p>Creatinina: {labResults.creatinine} mg/dL</p>
            <p>Hemoglobina: {labResults.hemoglobin} g/dL</p>
            {/* Agrega más campos */}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PatientProfile;
