/**
 * ProgressDisplay component displays a progress bar based on the given progress percentage.
 * @param {number} progress - The progress percentage (from 0 to 100).
 * @returns {JSX.Element} The rendered ProgressDisplay component.
 */
const ProgressDisplay = ({ progress }) => {
  return (
    <div className="w-full bg-page rounded-full h-2.5 dark:bg-page">
      {/* Outer container for progress bar */}
      <div
        className="bg-purple-accent h-2.5 rounded-full" // Inner div representing the progress bar itself
        style={{ width: `${progress}%` }} // Dynamic width based on the progress percentage
      ></div>
    </div>
  );
};

export default ProgressDisplay;
