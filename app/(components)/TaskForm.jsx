"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TaskForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const startTaskData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "Not Defined",
    category: "Software Products",
  };

  const [formData, setFormData] = useState(startTaskData);

  return (
    <div className="flex justify-center bg-card">
      <form>
        <h3>Create Your Task</h3>
        <label>Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
      </form>
    </div>
  );
};

export default TaskForm;
