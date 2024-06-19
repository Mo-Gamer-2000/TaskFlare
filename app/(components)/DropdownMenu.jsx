// Import Link component from next/link for navigation
import Link from "next/link";

// Define the DropdownMenu component
const DropdownMenu = () => {
  return (
    // Container div with TailwindCSS classes for styling
    <div className="relative inline-block text-left bg-yellow-400 hover:bg-yellow-200 text-purple-accent rounded-md">
      {/* Link to the LoginPage with padding and block display */}
      <Link href="/LoginPage" className="block px-2 py-2">
        Options
      </Link>
    </div>
  );
};

// Export the DropdownMenu component for use in other parts of the application
export default DropdownMenu;
