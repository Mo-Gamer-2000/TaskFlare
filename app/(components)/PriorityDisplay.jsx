import { faFire } from "@fortawesome/free-solid-svg-icons"; // Importing the fire icon from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component from Font Awesome React
import React from "react"; // Importing React library

/**
 * PriorityDisplay component displays fire icons based on priority level.
 * @param {number} priority - The priority level (from 0 to 4).
 * @returns {JSX.Element} The rendered PriorityDisplay component.
 */
const PriorityDisplay = ({ priority }) => {
  return (
    <div className="flex justify-start align-baseline">
      {/* Flex container for fire icons */}
      <FontAwesomeIcon
        icon={faFire} // Fire icon from Font Awesome
        className={`pr-1 ${priority > 0 ? "text-yellow-400" : "text-white"}`} // Conditional styling based on priority level
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 1 ? "text-yellow-400" : "text-white"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 2 ? "text-yellow-400" : "text-white"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 3 ? "text-yellow-400" : "text-white"}`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${priority > 4 ? "text-yellow-400" : "text-white"}`}
      />
    </div>
  );
};

export default PriorityDisplay; // Exporting PriorityDisplay component as default
