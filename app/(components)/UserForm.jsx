"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.error);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
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
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
    </div>
  );
};

export default UserForm;
