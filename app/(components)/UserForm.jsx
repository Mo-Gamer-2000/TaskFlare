// Enable client-side rendering
"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

// Define the UserForm component
const UserForm = () => {
  const router = useRouter(); // Initialize router for navigation
  const [formData, setFormData] = useState({}); // State to store form data
  const [errorMessage, setErrorMessage] = useState(""); // State to store error messages

  // Handle changes to form inputs
  const handleChange = (e) => {
    const value = e.target.value; // Get the value of the input
    const name = e.target.name; // Get the name of the input
    // Update the formData state with the new value
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setErrorMessage(""); // Clear any previous error messages

    // Send a POST request to the /api/Users endpoint with formData
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if the response is not ok
    if (!res.ok) {
      const response = await res.json(); // Parse the response
      setErrorMessage(response.error); // Set the error message
    } else {
      router.refresh(); // Refresh the page
      router.push("/"); // Navigate to the home page
    }
  };

  return (
    // Container div with TailwindCSS classes for styling
    <div className="flex flex-col items-center bg-page py-8 px-4 min-h-screen">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center text-purple-accent mb-2">
          Create User
        </h1>
        <label htmlFor="name" className="text-purple-accent text-lg md:text-xl">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          required
          value={formData.name || ""}
          className="bg-page rounded border border-purple-accent focus:outline-none focus:ring-2 focus:ring-yellow-400 p-2"
        />

        <label
          htmlFor="email"
          className="text-purple-accent text-lg md:text-xl"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          required
          value={formData.email || ""}
          className="bg-page rounded border border-purple-accent focus:outline-none focus:ring-2 focus:ring-yellow-400 p-2"
        />

        <label
          htmlFor="password"
          className="text-purple-accent text-lg md:text-xl"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          required
          value={formData.password || ""}
          className="bg-page rounded border border-purple-accent focus:outline-none focus:ring-2 focus:ring-yellow-400 p-2"
        />

        <input
          type="submit"
          value="Create"
          className="bg-yellow-400 text-purple-accent text-lg md:text-xl py-2 rounded hover:bg-yellow-200 transition duration-300"
        />
      </form>
      {/* Display error message if it exists */}
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
    </div>
  );
};

// Export the UserForm component for use in other parts of the application
export default UserForm;
