import React from "react";
import TaskCard from "./(components)/TaskCard"; // Ensure this path is correct and consistent

/**
 * Asynchronously fetches tasks from the API.
 * @returns {Promise<Array>} The list of tasks or an empty array if an error occurs.
 */
const getTask = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tasks", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    return res.json();
  } catch (error) {
    console.error("Failed to get Tasks", error); // Use console.error for errors
    return []; // Return an empty array to handle failure cases gracefully
  }
};

/**
 * Dashboard component displaying a list of tasks categorised by their categories.
 * @returns {JSX.Element} The rendered dashboard component.
 */
const Dashboard = async () => {
  const { tasks = [] } = await getTask(); // Default to an empty array to avoid undefined errors

  // Use Set to extract unique categories from tasks
  const uniqueCategories = [...new Set(tasks.map(({ category }) => category))];

  return (
    <div className="p-5">
      {tasks.length === 0 ? (
        <p>No tasks available</p> // Handle case where there are no tasks
      ) : (
        uniqueCategories.map((uniqueCategory, categoryIndex) => (
          <div key={categoryIndex} className="mb-4">
            <h2 className="text-black">{uniqueCategory}</h2>
            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
              {tasks
                .filter((task) => task.category === uniqueCategory)
                .map((filteredTask, _index) => (
                  <TaskCard
                    id={filteredTask.id}
                    key={filteredTask.id}
                    task={filteredTask}
                  /> // Use task id for key
                ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Dashboard;
