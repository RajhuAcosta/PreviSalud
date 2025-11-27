import React from "react";

const AppointmentCard = ({ nextAppointment, lastCheckup }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold mb-4">Citas Médicas</h3>
    <p className="text-sm">Próxima Cita: {nextAppointment}</p>
    <p className="text-sm">Último Chequeo: {lastCheckup}</p>
  </div>
);

export default AppointmentCard;
