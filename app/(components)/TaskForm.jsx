"use client"; // Indicates that this script runs on the client side

import { useRouter } from "next/navigation";
import React, { useState } from "react";

/**
 * TaskForm component renders a form for creating or editing a task.
 * @param {Object} task - The task object to edit (optional if creating new task).
 * @returns {JSX.Element} The rendered TaskForm component.
 */
const TaskForm = ({ task }) => {
  const EDITMODE = task._id === "new" ? false : true; // Checking if in edit mode based on task ID
  const router = useRouter(); // useRouter hook for navigation

  // Initial form data for creating a new task
  const startTaskData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Grocery List",
  };

  // If in edit mode, populate form data with task details
  if (EDITMODE) {
    startTaskData["title"] = task.title;
    startTaskData["description"] = task.description;
    startTaskData["priority"] = task.priority;
    startTaskData["progress"] = task.progress;
    startTaskData["status"] = task.status;
    startTaskData["category"] = task.category;
  }

  const [formData, setFormData] = useState(startTaskData); // State hook for form data

  // Function to handle input changes
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // If in edit mode, send PUT request to update task
    if (EDITMODE) {
      const res = await fetch(`/api/Tasks/${task._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to update task");
      }
    } else {
      // Otherwise, send POST request to create new task
      const res = await fetch("/api/Tasks", {
        method: "POST",
        body: JSON.stringify({ formData }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to create task");
      }
    }

    router.push("/"); // Navigate back to the home page after submission
    router.refresh(); // Refresh the page to update task list
  };

  // Created an array of categories
  const categories = [
    "Grocery List",
    "Work Projects",
    "Home Maintenance",
    "Fitness Goals",
    "Personal Development",
    "Family Events",
    "Travel Plans",
    "Social Events",
    "Healthcare",
    "Financial Management",
  ];

  return (
    <div className="flex justify-center bg-card">
      {/* Flex container for centering content with card background */}
      <form
        onSubmit={handleSubmit} // Form submission handler
        className="flex flex-col gap-3 w-1/2" // Flex column with gap and width 50%
        method="post" // HTTP method
      >
        <h3>{EDITMODE ? "Update Your Task" : "Create Your Task"}</h3>
        {/* Conditional heading based on edit mode */}
        <label>Title</label> {/* Form label for title */}
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange} // Input change handler
          required={true} // Required field validation
          value={formData.title} // Controlled input value
        />
        <label>Description</label> {/* Form label for description */}
        <textarea
          id="description"
          name="description"
          onChange={handleChange} // Textarea change handler
          required={true} // Required field validation
          value={formData.description} // Controlled textarea value
          rows="5" // Number of rows
        />
        <label>Category</label> {/* Form label for category dropdown */}
        <select
          name="category"
          value={formData.category} // Controlled dropdown value
          onChange={handleChange} // Dropdown change handler
        >
          {/* Mapping through categories */}
          {categories?.map((category, _index) => (
            <option key={_index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <label>Priority</label> {/* Form label for priority radio buttons */}
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange} // Radio button change handler - Below
            value={1} // Radio button value - Below
            checked={formData.priority == 1}
          />
          <label>1</label>

          <input
            type="radio"
            id="priority-2"
            name="priority"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>

          <input
            type="radio"
            id="priority-3"
            name="priority"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>

          <input
            type="radio"
            id="priority-4"
            name="priority"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>

          <input
            type="radio"
            id="priority-5"
            name="priority"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label> {/* Form label for progress range input */}
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress} // Controlled range input value
          min="0" // Minimum value
          max="100" // Maximum value
          onChange={handleChange} // Range input change handler
        />
        <label>Status</label> {/* Form label for status dropdown */}
        <select
          name="status"
          value={formData.status} // Controlled dropdown value
          onChange={handleChange} // Dropdown change handler
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>
        <input
          type="submit"
          className="btn text-white" // Submit button with styling
          value={EDITMODE ? "Update" : "Create"} // Button text based on edit mode
        />
      </form>
    </div>
  );
};

export default TaskForm;
