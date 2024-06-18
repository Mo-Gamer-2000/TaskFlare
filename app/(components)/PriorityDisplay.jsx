import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

/**
 * PriorityDisplay component displays fire icons based on priority level.
 * @param {number} priority - The priority level (from 0 to 4).
 * @returns {JSX.Element} The rendered PriorityDisplay component.
 */
const PriorityDisplay = ({ priority }) => {
  // Array to generate fire icons based on priority level
  const fireIcons = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faFire} // Fire icon from Font Awesome
      className={`pr-1 ${priority > index ? "text-yellow-400" : "text-page"}`} // Conditional styling based on priority level
    />
  ));

  return <div className="flex justify-start align-baseline">{fireIcons}</div>;
};

export default PriorityDisplay;
