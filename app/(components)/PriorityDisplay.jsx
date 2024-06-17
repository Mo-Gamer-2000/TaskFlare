import { faFire } from "@fortawesome/free-solid-svg-icons"; // Import the 'fire' icon from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import React from "react"; // Import React

/**
 * Component to display priority using fire icons.
 * @param {Object} props - The component props.
 * @param {number} props.priority - The priority level (1-5).
 * @returns {JSX.Element} The rendered priority display component.
 */
const PriorityDisplay = ({ priority }) => {
  // Array to hold the class names for each fire icon based on priority
  const fireIcons = [1, 2, 3, 4, 5].map((level) => (
    <FontAwesomeIcon
      key={level}
      icon={faFire}
      className={`pr-1 ${priority >= level ? "text-yellow-400" : "text-white"}`}
    />
  ));

  return <div className="flex justify-start align-baseline">{fireIcons}</div>;
};

export default PriorityDisplay;
