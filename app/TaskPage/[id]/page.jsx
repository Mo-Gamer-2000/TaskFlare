import TaskForm from "@/app/(components)/TaskForm"; // Ensure this path is correct and consistent

/**
 * Asynchronously fetches a task by its ID from the API.
 * @param {string} id - The ID of the task to fetch.
 * @returns {Promise<Object>} The task data or throws an error if the request fails.
 * @throws Will throw an error if the network request fails.
 */
const getTaskById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tasks/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get Task");
  }

  return res.json();
};

/**
 * TaskPage component for displaying and editing a task.
 * @param {Object} props - The component props.
 * @param {Object} props.params - The route parameters.
 * @returns {JSX.Element} The rendered TaskForm component with task data.
 */
const TaskPage = async ({ params }) => {
  const EDITMODE = params.id !== "new"; // Simplified the condition check for EDITMODE
  let updateTaskData = {};

  if (EDITMODE) {
    try {
      const { foundTask } = await getTaskById(params.id);
      updateTaskData = foundTask;
    } catch (error) {
      console.error("Error fetching task data:", error); // Log the error appropriately
      updateTaskData = null; // Set to null to handle error in TaskForm
    }
  } else {
    updateTaskData = { _id: "new" };
  }

  return <TaskForm task={updateTaskData} editMode={EDITMODE} />;
};

export default TaskPage;
