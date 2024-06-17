import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

/**
 * TaskCard component displays a card representing a task.
 * @param {Object} task - The task object containing task details.
 * @returns {JSX.Element} The rendered TaskCard component.
 */
const TaskCard = ({ task }) => {
  /**
   * formatTimestamp function formats the given timestamp into a readable date string.
   * @param {number} timestamp - The timestamp in milliseconds.
   * @returns {string} The formatted date string (e.g., "DD/MM/YYYY HH:mm AM/PM").
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
    const formattedDate = date.toLocaleString("en-GB", options); // Formatting date in UK English locale

    return formattedDate;
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      {/* Task card container with background color, shadow, padding, and margin */}
      <div className="flex mb-3">
        {/* Flex container for priority display and delete button */}
        <PriorityDisplay priority={task.priority} />
        {/* Rendering PriorityDisplay component with priority prop */}
        <div className="ml-auto">
          {/* Margin auto to align delete button to the right */}
          <DeleteBlock id={task._id} />
          {/* Rendering DeleteBlock component with task ID prop */}
        </div>
      </div>
      <Link href={`/TaskPage/${task._id}`} style={{ display: "contents" }}>
        {/* Link to task details page */}
        <h4>{task.title}</h4> {/* Task title */}
        <hr className="h-px border-0 bg-page mb-2" />
        {/* Horizontal rule with styling */}
        <p className="whitespace-pre-wrap">{task.description}</p>
        {/* Task description with preserved whitespace */}
        <div className="flex-grow"></div>
        {/* Flex-grow to push content to bottom */}
        <div className="flex mt-2">
          {/* Flex container for timestamp and progress */}
          <div className="flex flex-col">
            {/* Flex column for timestamp and progress */}
            <p className="text-xs my-1">{formatTimestamp(task.createdAt)}</p>
            {/* Formatted timestamp */}
            <ProgressDisplay progress={task.progress} />
            {/* Rendering ProgressDisplay component with progress prop */}
          </div>
          <div className="ml-auto flex items-end">
            {/* Margin auto and align items at the end for status */}
            <StatusDisplay status={task.status} />
            {/* Rendering StatusDisplay component with status prop */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TaskCard;
