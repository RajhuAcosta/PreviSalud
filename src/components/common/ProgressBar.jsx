import React from "react";

const ProgressBar = ({ value, max = 100 }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div
      className="bg-blue-500 h-2 rounded-full"
      style={{ width: `${(value / max) * 100}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax={max}
    ></div>
  </div>
);

export default ProgressBar;
