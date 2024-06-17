/**
 * StatusDisplay component displays a status label with color coding based on the provided status.
 * @param {string} status - The status text (e.g., "done", "started", "not started").
 * @returns {JSX.Element} The rendered StatusDisplay component.
 */
const StatusDisplay = ({ status }) => {
  /**
   * getColor function returns a CSS class based on the status text.
   * @param {string} status - The status text.
   * @returns {string} The CSS class for background color based on status.
   */
  const getColor = (status) => {
    let color;
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-yellow-400"; // Yellow background for "done" status
        return color;

      case "started":
        color = "bg-orange-400"; // Orange background for "started" status
        return color;

      case "not started":
        color = "bg-red-400"; // Red background for "not started" status
        return color;

      default:
        color = "bg-white"; // Default white background for unknown statuses
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`} // Dynamically applying background color based on status using getColor function
    >
      {status} {/* Displaying the status text */}
    </span>
  );
};

export default StatusDisplay;
