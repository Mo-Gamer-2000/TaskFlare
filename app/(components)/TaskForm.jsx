"use client";

import { useRouter } from "next/navigation"; // Importing useRouter from Next.js for navigation
import React, { useState } from "react"; // Import React and useState hooks

const TaskForm = ({ task }) => {
  const EDITMODE = task._id === "new" ? false : true; // Determine if the form is in edit mode based on task._id
  const router = useRouter(); // useRouter hook for navigation
  const startTaskData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Interview Preparation",
  };

  // Populate startTaskData if in edit mode
  if (EDITMODE) {
    startTaskData["title"] = task.title;
    startTaskData["description"] = task.description;
    startTaskData["priority"] = task.priority;
    startTaskData["progress"] = task.progress;
    startTaskData["status"] = task.status;
    startTaskData["category"] = task.category;
  }

  const [formData, setFormData] = useState(startTaskData); // State to manage form data

  // Handle form input change
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (EDITMODE) {
      const res = await fetch(`/api/Tasks/${task._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to update Tasks");
      }
    } else {
      const res = await fetch("/api/Tasks", {
        method: "POST",
        body: JSON.stringify({ formData }),
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create Tasks");
      }
    }

    router.push("/"); // Redirect to home page after successful form submission
    router.refresh(); // Refresh the router to update the page
  };

  return (
    <div className="flex justify-center bg-card">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-1/2"
        method="post"
      >
        <h3>{EDITMODE ? "Update Your Task" : "Create Your Task"}</h3>

        {/* Input fields for title */}
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />

        {/* Textarea for description */}
        <label>Description</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        {/* Dropdown for category */}
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Interview Preparation">Interview Preparation</option>
          <option value="Team Meeting">Team Meeting</option>
          <option value="Grocery List">Grocery List</option>
          <option value="Course">Course Started</option>
          <option value="Shopping List">Shopping List</option>
        </select>

        {/* Radio buttons for priority */}
        <label>Priority</label>
        <div>
          <input
            type="radio"
            id="priority-1"
            name="priority"
            onChange={handleChange}
            value={1}
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

        {/* Range input for progress */}
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        {/* Dropdown for status */}
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        {/* Submit button */}
        <input
          type="submit"
          className="btn text-white"
          value={EDITMODE ? "Update" : "Create"}
        />
      </form>
    </div>
  );
};

export default TaskForm;
