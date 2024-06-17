"use client";

import { faX } from "@fortawesome/free-solid-svg-icons"; // Import the 'X' icon from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon component
import { useRouter } from "next/navigation"; // Import useRouter hook from Next.js for navigation

/**
 * Component to handle task deletion.
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the task to be deleted.
 * @returns {JSX.Element} The rendered component.
 */
const DeleteBlock = ({ id }) => {
  const router = useRouter(); // Initialise the useRouter hook for navigation

  /**
   * Deletes a task by its ID.
   */
  const deleteTask = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/Tasks/${id}`, {
        method: "DELETE", // Set the HTTP method to DELETE
      });

      if (res.ok) {
        router.refresh(); // Refresh the page to reflect the changes
      } else {
        console.error("Failed to delete task:", await res.text()); // Log error if the response is not OK
      }
    } catch (error) {
      console.error("Error deleting task:", error); // Log any errors that occur during the fetch
    }
  };

  return (
    <FontAwesomeIcon
      icon={faX} // Set the icon to 'X'
      className="text-white hover:cursor-pointer hover:text-red-400 text-lg" // Set the CSS classes
      onClick={deleteTask} // Set the onClick event to call deleteTask
    />
  );
};

export default DeleteBlock;
