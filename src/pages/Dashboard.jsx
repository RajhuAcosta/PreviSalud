import React from "react";
import { usePatient } from "../context/PatientContext";
import WelcomeBanner from "../components/common/WelcomeBanner";
import RiskSummaryCard from "../components/common/RiskSummaryCard";
import VitalSignsWidget from "../components/common/VitalSignsWidget";
import AppointmentCard from "../components/common/AppointmentCard";
import RiskChartSection from "../components/common/RiskChartSection";
import ActionItems from "../components/common/ActionItems";

const Dashboard = () => {
  const { patientData, riskData } = usePatient();

  if (!patientData) return <div>Cargando...</div>; // O redirigir a login

  const { personalInfo, clinicalHistory, vitalSigns, timestamps } = patientData;
  const { predictions } = riskData || {};

  // Lógica para mergedRecommendations (combina recomendaciones de todos los riesgos)
  const mergedRecommendations = predictions
    ? Object.values(predictions).flatMap((p) => p.recommendations)
    : [];

  return (
    <div>
      <WelcomeBanner
        patientName={`${personalInfo.firstName} ${personalInfo.lastName}`}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <RiskSummaryCard
          overallRisk={riskData?.overallRisk || "N/A"}
          topConditions={
            predictions
              ? Object.entries(predictions)
                  .slice(0, 2)
                  .map(([name, data]) => ({
                    name: name.replace("_", " "),
                    probability: data.probability,
                    level: data.level,
                  }))
              : []
          }
        />

        <VitalSignsWidget
          bp={clinicalHistory.bloodPressure}
          heartRate={vitalSigns.heartRate}
          temperature={vitalSigns.temperature}
          oxygenSaturation={vitalSigns.oxygenSaturation}
        />

        <AppointmentCard
          nextAppointment={timestamps.nextAppointment}
          lastCheckup={clinicalHistory.lastCheckup}
        />
      </div>

      <RiskChartSection predictions={predictions} />

      <ActionItems recommendations={mergedRecommendations} />
    </div>
  );
};

export default Dashboard;
