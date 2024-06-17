import TaskForm from "@/app/(components)/TaskForm"; // Importing TaskForm component from the specified path

/**
 * Function to fetch task data from the API by ID.
 * @param {string} id - The ID of the task to fetch.
 * @returns {Promise} Promise that resolves to the fetched task data.
 * @throws {Error} If fetching the task fails.
 */
const getTaskById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tasks/${id}`, {
    cache: "no-store", // Disabling caching for the fetch request
  });

  if (!res.ok) {
    throw new Error("Failed to get Task"); // Throw an error if fetching task fails
  }

  return res.json(); // Return the JSON response parsed as JavaScript object
};

/**
 * TaskPage component for displaying a task form based on whether in edit or create mode.
 * @param {Object} params - Parameters passed to the component.
 * @param {string} params.id - ID of the task to edit, or "new" for creating a new task.
 * @returns {JSX.Element} TaskForm component with task data.
 */
const TaskPage = async ({ params }) => {
  const EDITMODE = params.id === "new" ? false : true; // Determine if in edit mode based on ID
  let updateTaskData = {}; // Initialise variable to hold task data to update

  if (EDITMODE) {
    // If in edit mode, fetch task data by ID
    updateTaskData = await getTaskById(params.id); // Call getTaskById function to fetch task data
    updateTaskData = updateTaskData.foundTask; // Extract foundTask from fetched data
  } else {
    // If in create mode, initialise with a new task object
    updateTaskData = {
      _id: "new", // Set _id to "new" indicating it's a new task
    };
  }

  return <TaskForm task={updateTaskData} />; // Render TaskForm component with fetched or new task data
};

export default TaskPage; // Export TaskPage component as default
