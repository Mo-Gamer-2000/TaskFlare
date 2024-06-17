import React from "react";
import TaskCard from "./(components)/TaskCard";

const getTask = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tasks", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Failed to get Tasks", error);
  }
};

const Dashboard = async () => {
  const { tasks } = await getTask();

  const uniqueCategories = [...new Set(tasks?.map(({ category }) => category))];

  return (
    <div className="p-5">
      <div>
        {tasks &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2 className="text-black">{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tasks
                  .filter((task) => task.category === uniqueCategory)
                  .map((filteredTask, _index) => (
                    <TaskCard id={_index} key={_index} task={filteredTask} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
