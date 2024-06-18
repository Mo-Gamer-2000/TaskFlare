import React from "react";
import TaskCard from "./(components)/TaskCard"; // Importing TaskCard component from the specified path

/**
 * Function to fetch all tasks from the API.
 * @returns {Promise} Promise that resolves to fetched tasks data.
 * @throws {Error} If fetching tasks fails.
 */
const getTask = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tasks", {
      cache: "no-store", // Disabling caching for the fetch request
    });

    return res.json(); // Returning JSON response parsed as JavaScript object
  } catch (error) {
    console.log("Failed to get Tasks", error); // Logging error message if fetching tasks fails
  }
};

/**
 * Dashboard component to display tasks categorised by unique categories.
 * @returns {JSX.Element} Rendered Dashboard component.
 */
const Dashboard = async () => {
  const { tasks } = await getTask(); // Fetching tasks data using getTask function

  // Finding unique categories from fetched tasks using Set and spreading into an array
  const uniqueCategories = [...new Set(tasks?.map(({ category }) => category))];

  return (
    <div className="px-4 py-2 text-center">
      <div className="items-center text-center">
        <h1 className="text-purple-accent">
          Welcome to Task<span className="text-yellow-400">Flare</span>
        </h1>
        <hr className="border-2 border-purple-accent my-4" />
        <p className="text-gray-700 text-lg">
          Boost your productivity and ignite your tasks with TaskFlare!
        </p>
        <hr className="border-2 border-purple-accent my-4" />
      </div>

      <div>
        {tasks &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2 className="text-purple-accent">{uniqueCategory}</h2>
              {/* Rendering grid layout for tasks */}
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tasks
                  .filter((task) => task.category === uniqueCategory) // Filtering tasks by unique category
                  .map((filteredTask, _index) => (
                    <TaskCard id={_index} key={_index} task={filteredTask} /> // Rendering TaskCard component for each filtered task
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard; // Exporting Dashboard component as default
