import React from "react";

const AlertItem = ({ type, title, message, condition, timestamp }) => (
  <div
    className={`p-4 rounded-lg shadow-md mb-4 ${
      type === "high"
        ? "bg-red-100 border-l-4 border-red-500"
        : "bg-orange-100 border-l-4 border-orange-500"
    }`}
  >
    <h4 className="font-semibold text-gray-800">{title}</h4>
    <p className="text-sm text-gray-600">{message}</p>
    <span className="text-xs text-gray-500">
      {new Date(timestamp).toLocaleString()}
    </span>
  </div>
);

export default AlertItem;
