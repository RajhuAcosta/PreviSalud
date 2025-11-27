import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePatient } from "../context/PatientContext";

const Login = () => {
  const [formData, setFormData] = useState({ fullName: "", dni: "" });
  const { registerPatient, loading } = usePatient();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await registerPatient(formData); // Pasa fullName y dni
    navigate("/dashboard"); // Redirige tras registro
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-xl font-bold mb-4">Registro/Login</h2>
        <input
          type="text"
          placeholder="Nombre Completo"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          className="w-full p-2 border rounded mb-4"
          required
        />
        <input
          type="number"
          placeholder="DNI"
          value={formData.dni}
          onChange={(e) => setFormData({ ...formData, dni: e.target.value })}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {loading ? "Registrando..." : "Registrar y Entrar"}
        </button>
      </form>
    </div>
  );
};

export default Login;
