import React from "react"; // Import React

/**
 * Component to display the status with appropriate color coding.
 * @param {Object} props - The component props.
 * @param {string} props.status - The status text to display.
 * @returns {JSX.Element} The rendered status display component.
 */
const StatusDisplay = ({ status }) => {
  /**
   * Function to get the background color based on status.
   * @param {string} status - The status text.
   * @returns {string} The background color class.
   */

  const getColor = (status) => {
    let color;
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-yellow-400";
        return color;

      case "started":
        color = "bg-orange-400";
        return color;

      case "not started":
        color = "bg-red-400";
        return color;
      default:
        color = "bg-white";
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
