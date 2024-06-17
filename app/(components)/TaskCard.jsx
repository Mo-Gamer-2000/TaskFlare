import Link from "next/link"; // Import Link component from Next.js
import DeleteBlock from "./DeleteBlock"; // Import DeleteBlock component
import PriorityDisplay from "./PriorityDisplay"; // Import PriorityDisplay component
import ProgressDisplay from "./ProgressDisplay"; // Import ProgressDisplay component
import StatusDisplay from "./StatusDisplay"; // Import StatusDisplay component

/**
 * Component to display a task card with details.
 * @param {Object} props - The component props.
 * @param {Object} props.task - The task object containing details.
 * @returns {JSX.Element} The rendered task card component.
 */
const TaskCard = ({ task }) => {
  /**
   * Function to format timestamp to a readable date string.
   * @param {string} timestamp - The timestamp string.
   * @returns {string} The formatted date string.
   */
  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-GB", options);

    return formattedDate;
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={task.priority} />{" "}
        {/* Display priority using PriorityDisplay component */}
        <div className="ml-auto">
          <DeleteBlock id={task._id} />{" "}
          {/* Render DeleteBlock component for deleting tasks */}
        </div>
      </div>
      <Link href={`/TaskPage/${task._id}`} style={{ display: "contents" }}>
        {/* Link to individual task page */}
        <h4>{task.title}</h4>
        <hr className="h-px border-0 bg-page mb-2" /> {/* Horizontal rule */}
        <p className="whitespace-pre-wrap">{task.description}</p>{" "}
        {/* Task description */}
        <div className="flex-grow"></div> {/* Spacer to push content below */}
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatTimestamp(task.createdAt)}</p>{" "}
            {/* Format and display creation date */}
            <ProgressDisplay progress={task.progress} />{" "}
            {/* Display progress using ProgressDisplay component */}
          </div>
          <div className="ml-auto flex items-end">
            <StatusDisplay status={task.status} />{" "}
            {/* Display status using StatusDisplay component */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TaskCard;
