import React from "react"; // Import React

/**
 * Component to display progress using a progress bar.
 * @param {Object} props - The component props.
 * @param {number} props.progress - The progress percentage (0-100).
 * @returns {JSX.Element} The rendered progress display component.
 */
const ProgressDisplay = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-white">
      {" "}
      {/* Container for the progress bar */}
      <div
        className="bg-blue-600 h-2.5 rounded-full" // Inner div representing the progress
        style={{ width: `${progress}%` }} // Set the width based on the progress prop
      ></div>
    </div>
  );
};

export default ProgressDisplay;
