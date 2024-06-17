"use client"; // Indicates this file is for client-side code

import { faX } from "@fortawesome/free-solid-svg-icons"; // Importing the faX icon from Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Importing FontAwesomeIcon component
import { useRouter } from "next/navigation"; // Importing useRouter hook from Next.js navigation module

// DeleteBlock component definition
const DeleteBlock = ({ id }) => {
  const router = useRouter(); // Initialising useRouter hook for navigation

  // Async function to handle deletion of a task
  const deleteTask = async () => {
    // Sending a DELETE request to the API endpoint for the specified task ID
    const res = await fetch(`http://localhost:3000/api/Tasks/${id}`, {
      method: "DELETE", // Using HTTP DELETE method
    });

    // If the deletion was successful (HTTP status 200-299), refresh the page
    if (res.ok) {
      router.refresh(); // Refreshing the current route using Next.js router
    }
  };

  // Return FontAwesomeIcon component representing a delete icon
  return (
    <FontAwesomeIcon
      icon={faX} // Using the faX icon imported from Font Awesome
      className=" text-white hover:cursor-pointer hover:text-red-400 text-lg" // Styling classes for icon
      onClick={deleteTask} // onClick handler to trigger deleteTask function on icon click
    />
  );
};

export default DeleteBlock; // Exporting DeleteBlock component as default
